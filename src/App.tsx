import { Routes, Route, useLocation } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Main from './pages/Main';
import Home from './pages/Home';
import About from './pages/About';
import Mechanic from './pages/Mechanic';
import ExhaustSystems from './pages/ExhaustSystems';
import Sale from './pages/Sale';
import Contact from './pages/Contact';
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode='wait'>
          <Routes location={location} key={location.key}>
              {/* <Route path="/" element={<Welcome />} /> */}
              <Route path="/" element={<Main/>}>
                <Route index element={<Home/>}></Route>
                <Route path='about' element={<About/>}></Route>
                <Route path='exhaustsystems' element={<ExhaustSystems/>}></Route>
                <Route path='mechanic' element={<Mechanic/>}></Route>
                <Route path='sale' element={<Sale/>}></Route>
                <Route path='contact' element={<Contact/>}></Route>
              </Route>  
          </Routes>
       </AnimatePresence>
    </>
  )
}

export default App
