import "./css/navbar.css"
import LogoGithub from "../assets/github.svg"
import LogoButton from "../assets/align-right.svg"
import { useState } from "react"
export default function Navbar() {
    const [NavBtn, SetNavBtn] = useState(false)
    function BtnNav() {
        const nav = document.querySelector('nav')
        if (NavBtn) {
            SetNavBtn(false)
            nav.classList.remove('nav-active');
        } else {
            nav.classList.add('nav-active')
            SetNavBtn(true)
        }
    }
    return (<>
        <nav>
            <div className="name">
                <span>Yohanes</span>
                <span>Oktanio</span>
            </div>
            <div className="nav-link">
                <ul>
                    <a href="#">Home</a>
                </ul>
                <ul>
                    <a href="#">About Us</a>
                </ul>
                <ul>
                    <a href="#">Project</a>
                </ul>
            </div>
            <div className="btn-mobile-navbar" onClick={() => { BtnNav() }}>
                <img src={LogoButton} alt="btn-mobile-navbar" />
            </div>
            <div className="github-logo">
                <img src={LogoGithub} alt="logo github" />
            </div>
        </nav>
    </>)
}