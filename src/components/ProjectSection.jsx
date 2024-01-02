import "./css/project-section.css"
import Images from "../assets/hanzsoft-websites-preview.jpg"
import Images2 from "../assets/mirror-sc.jpg"
import ImageHansoftApi from "../assets/hanzsoft-api-preview.jpg.png"

const CardProject = ({ image, name, lang }) => {
    return (
        <div className="card">
            <img src={image} alt="" />
            <div className="fov">
                <h1>{name}</h1>
                <div className="lang">
                    {lang}
                </div>
            </div>
        </div>
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
                            <LangTag text="html" />
                            <LangTag text="mongo db" />
                        </>
                    } />
                    <CardProject image={Images2} name={"Mirror - SC"}
                        lang={
                            <>
                                <LangTag text="python3" />
                                <LangTag text="tkinter" />
                                <LangTag text="scrcpy" />
                            </>
                        }
                    />
                    <CardProject image={ImageHansoftApi} name={"Hanzsoft - API"} lang={
                        <>
                            <LangTag text="Express" />
                            <LangTag text="Node JS" />
                            <LangTag text="mongo db" />
                        </>
                    } />
                </div>
            </div>
        </>
    );
};


export default ProjectSection