import Paper from "@mui/material/Paper";
import '../styles/pages/homePage.scss'

const HomePage = () => {
  return (
    <div className="div__main">
      <div className="div__box one">
        <div className="div__title">
            <span className="span__title">Serwis samochodowy</span>
            <span className="span__title">Mebus Gdańsk Gdynia</span>
        </div>
        <div className="div__blob">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg" transform="rotate(9)" style={{'opacity': 1}} filter="blur(0px)">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{'stopColor': 'rgb(165, 187, 238)'}}></stop>                            
                        <stop offset="100%" style={{'stopColor': 'rgb(97, 178, 239)'}}></stop>                        
                    </linearGradient>                        
                </defs>                                            
            <path id="blob" fill="url(#gradient)" style={{'opacity': 1}}>
            <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M420.7122,331.4339Q380.09423,412.86779,301.16508,392.29219Q222.23594,371.7166,157.11322,349.24982Q91.99051,326.78305,53.64135,232.38203Q15.29219,137.98101,118.09898,129.47187Q220.90577,120.96273,294.67458,111.25967Q368.44339,101.55661,414.88678,175.77831Q461.33017,250,420.7122,331.4339Z;M390.7302,319.10952Q360.37524,388.21905,284.62068,409.39959Q208.86612,430.58014,161.11156,373.20082Q113.35701,315.8215,88.46857,238.04463Q63.58014,160.26776,136.76776,117.04463Q209.95537,73.8215,303.79007,69.52027Q397.62476,65.21905,409.35497,157.60952Q421.08517,250,390.7302,319.10952Z;M388.67097,319.27849Q360.55699,388.55699,291.23441,379.72688Q221.91183,370.89678,145.00645,354.28387Q68.10108,337.67097,71.32903,251.33548Q74.55699,165,142.39247,119.95591Q210.22796,74.91183,286.12043,91.61398Q362.0129,108.31613,389.39892,179.15806Q416.78495,250,388.67097,319.27849Z;M384.02639,318.52969Q359.04619,387.05939,278.02474,435.01815Q197.0033,482.97691,137.94391,408.01485Q78.88453,333.05279,75.91422,249.0132Q72.94391,164.97361,138.46041,107.43731Q203.97691,49.90102,276.0132,88.41917Q348.04949,126.93731,378.52804,188.46866Q409.0066,250,384.02639,318.52969Z;M420.7122,331.4339Q380.09423,412.86779,301.16508,392.29219Q222.23594,371.7166,157.11322,349.24982Q91.99051,326.78305,53.64135,232.38203Q15.29219,137.98101,118.09898,129.47187Q220.90577,120.96273,294.67458,111.25967Q368.44339,101.55661,414.88678,175.77831Q461.33017,250,420.7122,331.4339Z"></animate></path></svg>
        </div>
      </div>
      <Paper elevation={3} style={{'margin': '20px 0 20px 0'}}>
            <div className="div__text">
                <h2>Miło nam, że odwiedziłeś nasz serwis internetowy.</h2>
                Firma Mebus prowadząca serwis samochodowy w Gdańsku i Gdyni to prawie 60 letnia,rodzinna tradycja i doświadczenie. 
                Flagową działalnością firmy jest diagnostyka, mechanika pojazdowa, serwis i naprawa lub wymiana elementów układów wydechowych takich jak: tłumiki, katalizatory, 
                sondy Lambda, strumienice i rury kolektorowe. Ponadto w naszej ofercie znajdą Państwo szeroki asortyment końcówek ozdobnych. Obsługujemy auta osobowe i ciężarowe 
                wszystkich marek, jak również motocykle i skutery. Dzięki rozbudowanej bazie magazynowej jesteśmy w stanie naprawić większość samochodów w przeciągu godziny. 
                Na miejscu, znajdują się również stanowiska mechaniki pojazdowej, gdzie zdiagnozujemy i pomożemy usprawnić Twoje auto.
            </div>
        </Paper>
        <Paper elevation={3} style={{'margin': '20px 0 20px 0'}}>
            <div className="div__text">
                <h2>Do Państwa dyspozycji mamy sześć stanowisk w Gdańsku i dwa stanowiska w Gdynii.</h2>
                Jakość świadczonych usług, rzetelność i satysfakcja klienta jest dla nas 
                najwyższym priorytetem. Wystarczy przyjechać do nas raz, aby zmienić swój serwis obsługi na dobre. Zapraszamy.
            </div>
        </Paper>
        <Paper elevation={3} style={{'margin': '20px 0 20px 0'}}>
            <div className="div__text">
                <h2>Szukasz dobrego serwisu samochodowego? Dobrze trafiłeś!</h2>
                Mebus to profesjonalny i godny zaufania warsztat samochodowy. Gdańsk pełen jest serwisów, warsztatów i punktów diagnostyki pojazdów, w których naprawy i modernizacje wykonywane są niechlujnie, a polityka wielu tego typu punktów godzi w interes klienta. My stawiamy Twoje dobro na pierwszym miejscu.
                Dlaczego warto skorzystać z naszych usług? Nasza mechanika pojazdowa stoi na najwyższym miejscu. Szeroki asortyment nowoczesnego sprzętu, fachowa i przeszkolona kadra, a przede wszystkim rzeczowe i miłe podejście do klienta – te cechy wyróżniają nasz warsztat samochodowy. Gdańsk nie zna równie przyjaznego klientom miejsca.
                Stawiając na nasze usługi, zyskujesz:
                <ul>
                    <li>Czas – realizujemy naprawy i modernizacje najszybciej, jak tylko umiemy!</li>
                    <li>Pieniądze – nasze usługi dostępne są w atrakcyjnych cenach, dobrze wiesz, za co płacisz.</li>
                    <li>Fachowe doradztwo – przeszkoleni pracownicy posiadają szeroką wiedzę, którą chętnie się dzielą.</li>
                    <li>Profesjonalne usługi – albo profesjonalnie, albo wcale. Przyjedź i przekonaj się.</li>
                </ul>
            </div>
        </Paper>
        <Paper elevation={3} style={{'margin': '20px 0 20px 0'}}>
            <div className="div__text">
                <h2>Szukasz miejsca, w którym możliwa będzie sprawna naprawa samochodów?</h2>
                Gdańsk i okolice pełne są punktów napraw, jednak czy chcesz oddać auto pod skrzydła niesprawdzonych firm? Współpraca z nami jest jasna i korzystna dla obydwu stron. Nie ukrywamy dodatkowych kosztów i nie wodzimy klientów za nos, nasza mechanika pojazdowa jest klarowna.
                Dlaczego warto wybrać firmę Mebus? Posiadamy ponad 60-letnie doświadczenie przekazywane z pokolenia na pokolenie. Dzięki temu doskonale wiemy, jak powinna wyglądać naprawa samochodów. Gdańsk, Gdynia oraz okolice Trójmiasta to miejsca, w których dokonujemy napraw, serwisujemy pojazdy i modernizujemy je.
                Nasza oferta jest kompleksowa i komplementarna. Dokonujemy napraw i modernizacji samochodów osobowych, samochodów ciężarowych oraz jednośladów. Naprawa w ciągu godziny? Niemożliwe? A jednak. Dzięki dużej ilości zmagazynowanych części do wielu pojazdów jesteśmy w stanie wykonać większość podstawowych napraw w tak krótkim czasie. Nie wierzysz? Przyjedź i przekonaj się.
            </div>
        </Paper>
    </div>
  )
}

export default HomePage