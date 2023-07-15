import Paper from "@mui/material/Paper";
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import '../styles/components/navbar.scss'

const Navbar = () => {

  return (
    <div className="div__nav_main">
        <Paper elevation={3}>
            <div className="div__category_box">
                <span className="span__category main">
                    <Link className='Link__link' to='/'>Mebus</Link>
                </span>
                <span className="span__category">
                    <Link className='Link__link' to='/about'>O firmie</Link>
                </span>
                <span className="span__category">
                    <Link className='Link__link' to='/exhaustsystems'>Układy wydechowe</Link>
                </span>
                <span className="span__category">
                    <Link className='Link__link' to='/mechanic'>Mechanika Pojazdowa</Link>
                </span>
                <span className="span__category">
                    <Link className='Link__link' to='/sale'>Promocje</Link>
                </span>
                <span className="span__category">
                    <Link className='Link__link' to='/contact'>Kontakt</Link>
                </span>
                <span className="span__category">
                    <Link className='Link__link' to='https://www.facebook.com/profile.php?id=100054519188060'>
                        <FacebookIcon fontSize="large"></FacebookIcon>
                    </Link>
                </span>
            </div>
        </Paper>
    </div>
  )
}

export default Navbar
