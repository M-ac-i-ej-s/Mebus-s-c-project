import Paper from "@mui/material/Paper";
import '../styles/pages/contactPage.scss'

const Contact = () => {
  return (
    <div className="div__contact">
        <div className="div__contact_main">
            <div>
                <Paper elevation={3}>
                    <div className="div__section hour">
                        <h1>Godziny otwarcia:</h1>
                        <span>pon - wt : 8:00 - 17:00</span>
                        <span>sobota : 8:00 - 13:30</span>
                    </div>
                </Paper>
            </div>
            <Paper elevation={3}>
                <div className="div__section">
                    <h1>Mebus Gdańsk:</h1>
                    <span>adres: Wincentego Pola 10 80-267 Gdańsk</span>
                    <span>tel: [058] 344 22 44</span>
                    <span>mail: darek@mebus.pl</span>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.3653807991636!2d18.59345031527632!3d54.38586098021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd74c24daebd2d%3A0xebb6d0fadea85439!2sMebus+s.c.!5e0!3m2!1spl!2spl!4v1457206419948" width="400" height="300" frameBorder="0" style={{'border':0}}>
                    </iframe>
                </div>
            </Paper>
            <Paper elevation={3}>
                <div className="div__section">
                    <h1>Mebus Gdynia:</h1>
                    <span>adres: ul. Żwirowa 2B 81-007 Gdynia</span>
                    <span>tel: [058] 623 63 36</span>
                    <span>mail: mebuss@wp.pl</span>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.2134758799934!2d18.45443251528489!3d54.547362180248236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda4249f2cd109%3A0x1386535cb4c83c47!2sMebus+s.c.+Piaskowski%2C+Sobieralski!5e0!3m2!1spl!2spl!4v1457206588890" width="400" height="300" frameBorder="0" style={{'border':0}}>
                    </iframe>
                </div>
            </Paper>
        </div>
    </div>
  )
}

export default Contact
