import Paper from "@mui/material/Paper";
import olej from '../assets/proolej.gif'
import taxi from '../assets/protaxi.gif'
import mech from '../assets/promech.gif'
import przeglad from '../assets/proprzeglad.gif'
import tlumik from '../assets/protlumik.gif'
import '../styles/pages/salePage.scss'

const Sale = () => {
  return (
    <div className="div__sale">
        <div className="div__sale_main">
            <Paper elevation={3}>
                <div className="div__section">
                    <img src={olej} alt="olej"/>
                    <span>
                        Wymiana oleju od 30 zł
                    </span>
                </div>
                <div className="div__section">
                    <img src={taxi} alt="olej"/>
                    <span>
                        Jeśli jesteś kierowcą taksówki, ta oferta skierowana jest właśnie do Ciebie. 
                        W naszym serwisie możesz liczyć na rabat w wysokości od 10%, w zależności od rodzaju wykonywanej usługi.
                    </span>
                </div>
                <div className="div__section">
                    <img src={mech} alt="olej"/>
                    <span>
                        Oferta dla firm. Specjalnie dla Państwa obniżyliśmy koszty stałej obsługi serwisowej aż o 15% 
                        W celu uzyskania dokładnych informacji prosimy o kontakt z działem obsługi klienta.
                    </span>
                </div>
                <div className="div__section">
                    <img src={przeglad} alt="olej"/>
                    <span>
                        Zapraszamy na bezpłatny przegląd zawieszenia i układu wydechowego w Twoim samochodzie. Oferta dotyczy samochodów osobowych. 
                        Z ofery można skorzystać w każdą sobotę w oddziale w Gdańsku.
                    </span>
                </div>
                <div className="div__section">
                    <img src={tlumik} alt="olej"/>
                    <span>
                        Jeśli przed wymianą elementów układu wydechowego zgłosisz się do biura i podasz hasło 
                        „mebus.pl” uzyskasz rabat na części w wysokości 15%
                    </span>
                </div>
            </Paper>
        </div>
    </div>
  )
}

export default Sale
