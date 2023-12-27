import "./css/about-section.css"
import Ilustration from "../assets/ilus-comp.svg"
export default function AboutSection() {
    return (<>
        <div className="about-line"></div>
        <div className="about">
            <div className="container">
                <img src={Ilustration} alt="" />
                <div className="field-container">
                    <div className="desc">
                        <h1>About Me.</h1>
                        <p><span>Web Developer</span> adalah peran yang cocok bagi saya, karena saya suka belajar dan mengeksplorasi berbagai aspek dari pengembangan web. Saya memiliki latar belakang pendidikan dan pengalaman yang memberi saya dasar yang kuat dalam pemrograman, algoritma, dan struktur data</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}