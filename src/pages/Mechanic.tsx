import {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import Amortyzator from '../assets/amortyzatory.gif'
import AmortyzatorFirmy from '../assets/amortyzatoryFirmy.png'
import Glowica from '../assets/glowica.gif'
import GlowicaFirmy from '../assets/głowiceFirmy.png'
import Hamulce from '../assets/hamulce.gif'
import HamulceFirmy from '../assets/hamulceFirmy.png'
import Lozyska from '../assets/lozyska.gif'
import LozyskaFirmy from '../assets/lozyskaFirmy.png'
import Oleje from '../assets/wymiana_oleju.gif'
import Rozrzad from '../assets/rozrzad.gif'
import RozrzadFirmy from '../assets/rozrzadFirmy.png'
import Sprezyny from '../assets/sprezyny.gif'
import SprezynyFirmy from '../assets/sprezynyFirmy.png'
import Sprzegla from '../assets/sprzeglo.gif'
import SprzeglaFirmy from '../assets/sprzeglaFirmy.png'
import Wycieraczki from '../assets/wycieraczki.gif'
import WycieraczkiFirmy from '../assets/wycieraczkiFirmy.png'
import '../styles/pages/mechanicPage.scss'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Mechanic = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='div__mechanic'>
        <div className='div__mechanic_main'>
            <Paper elevation={3}>
                <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    <Tab label="Amortyzatory" {...a11yProps(0)} />
                    <Tab label="Głowice" {...a11yProps(1)} />
                    <Tab label="Hamulce" {...a11yProps(2)} />
                    <Tab label="Łożyska" {...a11yProps(3)} />
                    <Tab label="Oleje i filtry" {...a11yProps(4)} />
                    <Tab label="Rozrządy" {...a11yProps(5)} />
                    <Tab label="Sprężyny" {...a11yProps(6)} />
                    <Tab label="Sprzęgła" {...a11yProps(7)} />
                    <Tab label="Wycieraczki" {...a11yProps(8)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div className='div__tab'>
                        <img src={Amortyzator} alt="amortyzator" />
                        <span>
                            <p>Polecamy:</p>
                            szeroki asortyment amortyzatorów do wszystkich samochodów europejskich i amerykańskich.
                        </span>
                        <img src={AmortyzatorFirmy} alt="amortyzatorFirmy" />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className='div__tab'>
                        <img src={Glowica} alt="glowica" />
                        <span>
                            Wykonujemy usługi w zakresie:
                            <ul>
                                <li>naprawy głowic</li>
                                <li>docieranie zaworów</li>
                                <li>wymiana popychaczy</li>
                                <li>wymiany uszczelek pod głowicą</li>
                                <li>wymiany uszczelek pokrywy zaworowej</li>
                            </ul>
                        </span>
                        <img src={GlowicaFirmy} alt="glowicaFirmy" />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className='div__tab'>
                        <img src={Hamulce} alt="hamulce" />
                        <span>
                            W serwisie wykonujemy:
                            <ul>
                                <li>wymiany klocków, szczęk</li>
                                <li>wymiany cylinderków hamulcowych</li>
                                <li>wymiany przewodów hamulcowych</li>
                                <li>wymianę płynów hamulcowych</li>
                                <li>naprawę zacisków (regeneracja)</li>
                                <li>naprawę pomp (regeneracja)</li>
                                <li>wymianę tarcz i bębnów hamulcowych</li>
                            </ul>
                        </span>
                        <img src={HamulceFirmy} alt="hamulceFirmy" />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div className='div__tab'>
                        <img src={Lozyska} alt="lozyska" />
                        <span>
                            Zakres świadczonych usług:
                            <ul>
                                <li>wymiana piast</li>
                                <li>wymiana łożysk</li>
                                <li>wymiana łożysk kół</li>
                                <li>wymiana łożysk amortyzatorów</li>
                            </ul>
                        </span>
                        <img src={LozyskaFirmy} alt="lozyskaFirmy" />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <div className='div__tab'>
                        <img src={Oleje} alt="olej" />
                        <span>
                            Zakres świadczonych usług:
                            <ul>
                                <li>Wymiana olejów silnikowych, przekładniowych, hydraulicznych</li>
                                <li>Wymiana filtrów olejowych, powietrza, paliwa i kabinowych</li>
                                <li>Wymiana płynów w układach chłodzenia</li>
                            </ul>
                        </span>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <div className='div__tab'>
                        <img src={Rozrzad} alt="rozrzad" />
                        <span>
                            Zakres świadczonych usług:
                            <ul>
                                <li>wymiany pasków rozrządu</li>
                                <li>wymiany pasków klinowych</li>
                                <li>wymiany napinaczy i rolek</li>
                            </ul>
                        </span>
                        <img src={RozrzadFirmy} alt="rozrzadFirmy" />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <div className='div__tab'>
                        <img src={Sprezyny} alt="sprężyny" />
                        <span>
                            Oferujemy:
                            <ul>
                                <li>sprężyny standardowe</li>
                                <li>sprężyny wzmacniane</li>
                                <li>sprężyny obniżane (tuning)</li>
                                <li>wymiana sprężyn zawieszenia pojazdu</li>
                            </ul>
                        </span>
                        <img src={SprezynyFirmy} alt="sprężynyFirmy" />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={7}>
                    <div className='div__tab'>
                        <img src={Sprzegla} alt="sprzęgłą" />
                        <span>
                            Zakres świadczonych usług:
                            <ul>
                                <li>wymiana tarcz</li>
                                <li>wymiana docisków</li>
                                <li>wymiana łożysk oporowych</li>
                                <li>wymiana linki sprzęgła</li>
                                <li>naprawa sprzęgła (regliacja)</li>
                                <li>naprawa i regeneracja siłowników</li>
                            </ul>
                        </span>
                        <img src={SprzeglaFirmy} alt="sprzęgłąFirmy" />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={8}>
                    <div className='div__tab'>
                        <img src={Wycieraczki} alt="wycieraczki" />
                        <span>
                            <p>Zakres świadczonych usług:</p>
                            Wymiana wycieraczek szyb przednich i tylnich do każdego rodzaju samochodu, również do nietypowych modeli.
                        </span>
                        <img src={WycieraczkiFirmy} alt="wycieraczkiFirmy" />
                    </div>
                </TabPanel>
                </Box>
            </Paper>
        </div>
    </div>
  );
}


export default Mechanic
