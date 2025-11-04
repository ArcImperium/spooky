import {useEffect} from "react"

function Courtyard({setPage, setUnlock1, unlock1, name, setName, setShowNameInput, showNameInput, win, setWin}) {
    useEffect(() => {
        document.title="Courtyard"
    }, [])

    function submitName() {
        setShowNameInput(false)
        setUnlock1(true)
    }

    return(
        <>
        <h1 className="room-name">Courtyard</h1>
        <button className="home-button" onClick={() => {if (unlock1) {setPage(0)}}}>HOME</button>
        {unlock1 && (<div className="delta-room up" onClick={() => {setPage(2)}}>↑</div>)}
        {!unlock1 && (<div className="delta-room up locked">↑</div>)}
        <div className="name-wrap">
            {showNameInput && (<input className="name-input" type="text" value={name} onChange={(event) => {setName(event.target.value)}} placeholder="Enter Name"/>)}
            <h1 className="name-preview">Greetings, {name}</h1>
            {showNameInput && (<button className="name-submit" onClick={() => {if (name.length > 0) {submitName()}}}>YES?</button>)}
        </div>
        {!win && (<button className="exit yes" onClick={() => {setWin(true)}}>EXIT</button>)}
        {win && (<button className="exit no">EXIT</button>)}
        </>
    )
}

export default Courtyard