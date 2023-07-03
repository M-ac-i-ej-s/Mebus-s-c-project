import {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import dpf from '../assets/dpf.jpg'
import katalizatory from '../assets/katalizatory.jpg'
import katFirmy from '../assets/katFirmy.png'
import sondy from '../assets/sondalambda.gif'
import sondyFirmy from '../assets/sondyFirmy.png'
import tlumiki from '../assets/tlumik.gif'
import tlumikiFirmy from '../assets/tlumikFirmy.png'
import zlacza from '../assets/zlacze.gif'
import zlaczaFirmy from '../assets/zlaczaFirmy.png'
import '../styles/pages/exhaustSystemsPage.scss'

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

const ExhaustSystems = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='div__exhaust'>
        <div className='div__exhaust_main'>
            <Paper elevation={3}>
                <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    <Tab label="DPF filtr cząstek stałych" {...a11yProps(0)} />
                    <Tab label="Katalizatory" {...a11yProps(1)} />
                    <Tab label="Sondy Lambda" {...a11yProps(2)} />
                    <Tab label="Tłumiki" {...a11yProps(3)} />
                    <Tab label="Złącza elastyczne" {...a11yProps(4)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div className='div__tab'>
                        <img src={dpf} alt="dpf" />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className='div__tab'>
                        <img src={katalizatory} alt="katalizator" />
                        <span>
                            Oferujemy gamę katalizatorów uniwersalnych renomowanych firm do większości pojazdów. Na życzenie klienta sprowadzimy katalizatory oryginalne-fabryczne. 
                            Wszystkie produkty objęte są 12 miesięczną gwarancją.
                        </span>
                        <img src={katFirmy} alt="katalizatorFirmy" />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className='div__tab'>
                        <img src={sondy} alt="sondy" />
                        <span>
                            Proponujemy sondy lambda (czujniki tlenu) renomowanych firm zachodnich. W naszej ofercie znajdują się także uniwersalne czujniki jedno, dwu, 
                            trzy i czteroprzewodowe.
                        </span>
                        <img src={sondyFirmy} alt="sondyFirmy" />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div className='div__tab'>
                        <img src={tlumiki} alt="tlumiki" />
                        <span>
                            Oferujemy szeroką gamę układów wydechowych producentów krajowych i zagranicznych. Dzieki rozbudowanej sieci logistycznej, 
                            jesteśmy w stanie obsłużyć większość pojazdów „na poczekaniu”. Jeśli zajdzie taka potrzeba, nasi specjaliści odwzorują lub dorobią wiekszość 
                            tłumików i rur wydechowych. Proponujemy profesjonalną wymianę elementów układow wydechowych. Udzielamy 18 lub 24 miesięcznej gwarancji 
                            na wszystkie podzespoły. Proponujemy Państwu darmowe przeglądy układów wydechowych. Zapraszamy do naszych oddziałów.
                        </span>
                        <img src={tlumikiFirmy} alt="tlumikiFirmy" />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <div className='div__tab'>
                        <img src={zlacza} alt="zlacza" />
                        <span>
                            Oferujemy złącza elastyczne produkcji krajowej oraz zagranicznej o wymiarach od 20 do 105 fi dla odbiorców hurtowych i detalicznych. 
                            Proponujemy fachowy montaż w naszych zakładach. Udzielamy gwarancji
                        </span>
                        <img src={zlaczaFirmy} alt="zlaczaFirmy" />
                    </div>
                </TabPanel>
                </Box>
            </Paper>
        </div>
    </div>
  );
}

export default ExhaustSystems
