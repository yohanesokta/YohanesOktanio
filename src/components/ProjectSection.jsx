import "./css/project-section.css"
import Images from "../assets/hanzsoft-websites-preview.jpg"
import Images2 from "../assets/mirror-sc.jpg"
import ImageHansoftApi from "../assets/hanzsoft-api-preview.jpg.png"
import ImageEJC from "../assets/EJC_project-preview.png"
import ImageMathApp from "../assets/mathapp-preview.png"
import ImagePendataan from "../assets/pendataan.png"
import IGE from "../assets/ig.jpg"
const CardProject = ({ image, name, lang, link }) => {
    return (
        <a href={link ?? "#"} target="_blank">
            <div className="card">
                <img src={image} alt="" />
                <div className="fov">
                    <h1>{name}</h1>
                    <div className="lang">
                        {lang}
                    </div>
                </div>
            </div>
        </a>
    )
}

const LangTag = ({ text }) => {
    return (
        <span>{text}</span>
    )
}

const ProjectSection = () => {
    return (
        <>
            <h1 className="tagline-project">Project</h1>
            <div className="container-project">
                <div className="project-section">
                    <CardProject image={Images} name={"Hanzsoft - Websites"} lang={
                        <>
                            <LangTag text="laravel" />
                            <LangTag text="php" />
                            <LangTag text="mongo db" />
                        </>
                    } link="https://github.com/yohanesokta/hanzsoft-websites" />
                    <CardProject image={Images2} name={"Mirror - SC"}
                        lang={
                            <>
                                <LangTag text="python3" />
                                <LangTag text="tkinter" />
                                <LangTag text="scrcpy" />
                            </>
                        }
                        link="https://github.com/yohanesokta/Mirror-SC"
                    />
                    <CardProject image={ImageHansoftApi} name={"Hanzsoft - API"} lang={
                        <>
                            <LangTag text="Express" />
                            <LangTag text="Node JS" />
                            <LangTag text="mongo db" />
                        </>
                    } link="https://github.com/yohanesokta/hanzsoft-data-api" />
                    <CardProject image={ImageEJC} name={"EAST JAVA CULTURE"} lang={
                        <>
                            <LangTag text="React Vite" />
                            <LangTag text="Javascript" />
                            <LangTag text="GCP Login" />
                        </>
                    } link="https://east-java-culture.vercel.app/"
                    />
                    <CardProject image={ImageMathApp} name={"PintarMath APP"} lang={
                        <>
                            <LangTag text="PHP" />
                            <LangTag text="Laravel" />
                            <LangTag text="Mongo DB" />
                        </>
                    } link="https://github.com/yohanesokta/math_app-main"
                    />
                    <CardProject image={ImagePendataan} name={"FORM MABA UTM"} lang={
                        <>
                            <LangTag text="PHP" />
                            <LangTag text="Laravel" />
                            <LangTag text="Cloudinary" />
                        </>
                    } link="https://github.com/yohanesokta/pendataan-maba-dev"
                    />

                    <CardProject image={IGE} name={"Reels Dowloader"} lang={
                        <>
                            <LangTag text="Html/Js" />
                            <LangTag text="APIhut" />
                            <LangTag text="IMPHNEN" />
                        </>
                    } link="https://github.com/yohanesokta/IG-downloader"
                    />
                </div>
            </div>
        </>
    );
};


export default ProjectSection