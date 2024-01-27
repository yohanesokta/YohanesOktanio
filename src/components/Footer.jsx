import "./css/footer.css"
import Github from "../assets/icons/faGithub.svg"
import Facebook from "../assets/icons/faFacebook.svg"
import Youtube from "../assets/icons/faYoutube.svg"
const Footer = () => {
    return (<>
        <footer>
            <div className="fo-container">
                <h1>Contact <span>Me</span></h1>
                <div className="flex-container">
                    <div className="social">
                        <a href="https://github.com/yohanesokta">
                            <img src={Github} alt="" />
                        </a>
                        <a href="https://www.youtube.com/channel/UC5u1pgJJfv-Z3EZQtx-4IyA">
                            <img src={Youtube} alt="" />
                        </a>
                        <a href="https://www.facebook.com/yohanesoktanio">
                            <img src={Facebook} alt="" />
                        </a>
                    </div>
                </div>
                <h5>💌 yohanesoktayt72@gmail.com</h5>
                <p>Copyright © Yohanes Oktanio | YhanzC Production 2024 All Right Reserved </p>
            </div>
        </footer>
    </>)
}
export default Footer