import Paper from "@mui/material/Paper";
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import Wave from '../assets/wave.png'
import '../styles/pages/salePage.scss'

const Sale = () => {
  return (
    <div className="div__sale">
        <div className="div__wave">
            <img src={Wave} alt="wave" />
        </div>
        <div className="div__sale_main">
            <Paper elevation={3}>
                <div className="div__section">
                    <OilBarrelIcon sx={{fontSize: '50px'}}/>
                    <span>
                        Wymiana oleju od 30 zł
                    </span>
                </div>
                <div className="div__section">
                    <LocalTaxiIcon sx={{fontSize: '50px'}}/>
                    <span>
                        Jeśli jesteś kierowcą taksówki, ta oferta skierowana jest właśnie do Ciebie. 
                        W naszym serwisie możesz liczyć na rabat w wysokości od 10%, w zależności od rodzaju wykonywanej usługi.
                    </span>
                </div>
                <div className="div__section">
                    <StoreIcon sx={{fontSize: '50px'}}/>
                    <span>
                        Oferta dla firm. Specjalnie dla Państwa obniżyliśmy koszty stałej obsługi serwisowej aż o 15% 
                        W celu uzyskania dokładnych informacji prosimy o kontakt z działem obsługi klienta.
                    </span>
                </div>
                <div className="div__section">
                    <SearchIcon sx={{fontSize: '50px'}}/>
                    <span>
                        Zapraszamy na bezpłatny przegląd zawieszenia i układu wydechowego w Twoim samochodzie. Oferta dotyczy samochodów osobowych. 
                        Z ofery można skorzystać w każdą sobotę w oddziale w Gdańsku.
                    </span>
                </div>
                <div className="div__section">
                    <CarRepairIcon sx={{fontSize: '50px'}}/>
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
