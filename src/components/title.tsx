import firework from "./firework.gif"

function Title() {
    return (
        <div className={"title"}>
            <img className="firework" src={firework} alt="Firework"/>
            <div className="title-text">
                <h2>Exception: nombre_equipo is not defined. presenta:</h2>
                <h1>PLANNER LICC DELUXE</h1>
            </div>
            <img className="firework firework--right" src={firework} alt="Firework"/>
        </div>
    )
}

export default Title
