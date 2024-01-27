import AboutSection from "./components/AboutSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import ProjectSection from "./components/ProjectSection"
import "./components/css/app.css"
const App = () => {
    return (<>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <Footer />
    </>)
}

export default App