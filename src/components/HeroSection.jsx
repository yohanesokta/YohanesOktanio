import "./css/hero-section.css"
import ImageGithub from "../assets/faGithub.svg"
import Image from "../assets/new_profile.png"
import { useEffect } from "react"

export default function HeroSection() {
    useEffect(() => {
        let i = 0
        const stac = document.querySelector("#stac")
        const stacText = stac.innerHTML
        stac.innerHTML = ""
        const typeWriter = () => {
            if (i < stacText.length) {
                stac.innerHTML += stacText.charAt(i)
                i++
                setTimeout(typeWriter, 50)
            }
        }
        typeWriter()
    })
    return (<>
        <div className="hero">
            <div className="container">
                <div className="image">
                    <img src={Image} alt="ff" />
                </div>
                <div className="hero-gap"></div>
                <div className="tagline">
                    <div className="container-field">
                        <div className="field">
                            <h1>HI , My name is </h1>
                            <h1>Yohanes Oktanio</h1>
                            <div className="text"><span>I’m an</span> <span id="stac">Web  Developer | Full Stack Developer</span></div>
                            <button onClick={() => { window.location.href = "https://github.com/yohanesokta" }}>
                                <span>Visit Github</span>
                                <a className="logo">
                                    <img src={ImageGithub} alt="Github" />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}