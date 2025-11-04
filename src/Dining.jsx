import {useEffect} from "react"

function Dining({setPage, setUnlock7, unlock7, showKeyInput, setShowKeyInput, roomKey, setKey, name}) {
    useEffect(() => {
        document.title="Dining Room"
    }, [])

    function submitKey() {
        if (roomKey === "spooks") {
            setUnlock7(true)
            setShowKeyInput(false)
        }
    }

    return(
        <>
        <h1 className="room-name">Dining Room</h1>
        <button className="home-button" onClick={() => {setPage(0)}}>HOME</button>
        {unlock7 && (<><div className="delta-room up" onClick={()  => {setPage(8)}}>↑</div>
        <div className="delta-room down" onClick={() => {setPage(4)}}>↓</div>
        <div className="delta-room right" onClick={() => {setPage(2)}}>→</div></>)}
        {!unlock7 && (<><div className="delta-room up locked">↑</div>
        <div className="delta-room down locked">↓</div>
        <div className="delta-room right locked">→</div></>)}
        <div className="name-wrap">
            {showKeyInput && (<input className="name-input" type="text" value={roomKey} onChange={(event) => {setKey(event.target.value)}} placeholder="Enter Key"/>)}
            <h1 className="name-preview">Goodbye, {name}</h1>
            {showKeyInput && (<button className="name-submit" onClick={() => {submitKey()}}>Unlock</button>)}
        </div>
        </>
    )
}

export default Dining