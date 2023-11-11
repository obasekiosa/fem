import "./Attribution.css";


export function Attribution({name, authorUrl}) {

    return (
        <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
            Coded by <a href={authorUrl || "#"}>{name || "Your name here"}</a>.
        </div>
    )
}