import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';
import '../styles/pages/mainPage.scss'

const MainPage = () => {
  return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
  )
}

export default MainPage