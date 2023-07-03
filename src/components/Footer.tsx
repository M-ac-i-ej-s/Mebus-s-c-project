import Paper from "@mui/material/Paper";
import '../styles/components/footer.scss'
import mebus from '../assets/mebus.png'

const Footer = () => {
  return (
    <div className="div__footer">
      <Paper elevation={3} sx={{'backgroundColor': '#72bfe6'}}>
        <div className="div__footer_main">
            <div className="div__section">
                <h1>Mebus w Gdańsku</h1>
                <span>ul. Wincentego Pola 10</span>
                <span>80-267 Gdańsk</span> 
                <span>tel: [058] 344 22 44</span>
                <span>mail: darek@mebus.pl</span>
            </div>
            <div className="div__section">
                <h1>Mebus w Gdyni</h1>
                <span>ul. Żwirowa 2B</span>
                <span>81-007 Gdynia</span> 
                <span>tel: [058] 623 63 36</span>
                <span>mail: mebuss@wp.pl</span>
            </div>
            <div className="div__section">
                <img src={mebus} alt="mebus" />
            </div>
        </div>
      </Paper>
    </div>
  )
}

export default Footer
