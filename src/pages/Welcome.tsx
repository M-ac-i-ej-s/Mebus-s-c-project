import { useState } from 'react';
import {motion} from 'framer-motion'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import car from '../assets/car.png'
import tire from '../assets/tire.png'
import { useNavigate } from 'react-router-dom';
import '../styles/pages/welcomePage.scss'

const WelcomePage = () => {
    const [position, setPosition] = useState('0px');
    const [radius, setRadius] = useState('0');
    const navigate = useNavigate();

    const animationStart = () => {
        setPosition('-3000px')
        setRadius('900')
        setTimeout(() => {
            navigate('/home')
        },2500)
    }

    return (
            <motion.div exit={{ opacity: 0 }} transition={{duration: 1}}>
                <div className='div__main_box'>
                    <div className='div__title_box'>
                        <span className='span__title'>
                            Mebus S.C.
                        </span>
                        <Button onClick={animationStart} variant="contained" size='large' sx={{borderRadius: 10}} endIcon={<SendIcon />}>Jedziemy!</Button>
                    </div>
                    <div className='div__tires'>
                        <img src={tire} alt="tire" style={{transform: `rotate(${radius}deg)`}} />
                        <img src={tire} alt="tire" style={{transform: `rotate(${radius}deg)`}}/>
                    </div>
                    <div className='div__car'>
                        <img src={car} alt="car" />
                    </div>
                    <div className='div__road' style={{transform: `translateX(${position})`}}>
                        {
                            Array.from(Array(50).keys()).map((_, index) => {
                                return <div key={index} className='div__white_space'></div>
                            })
                        }
                    </div>
                </div>
            </motion.div>
    )
}

export default WelcomePage
