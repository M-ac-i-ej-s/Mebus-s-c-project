import { Routes, Route, useLocation } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import MainPage from './pages/MainPage';
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode='wait'>
          <Routes location={location} key={location.key}>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/home" element={<MainPage/>}/>
          </Routes>
       </AnimatePresence>
    </>
  )
}

export default App
