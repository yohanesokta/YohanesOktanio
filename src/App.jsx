import AboutSection from "./components/AboutSection"
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
    </>)
}

export default App