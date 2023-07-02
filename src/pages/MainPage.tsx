import { motion, AnimatePresence } from "framer-motion"
import '../styles/pages/mainPage.scss'

const MainPage = () => {
  return (
        <motion.div exit={{ opacity: 0 }}>
            <div>
            Hello Mebus
            </div>
        </motion.div>
  )
}

export default MainPage