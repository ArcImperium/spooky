import {useEffect, useState} from "react"

function Parlor({setPage, setUnlock6, unlock6, name}) {
    const [mysteriousVoice, setMysteriousVoice] = useState("")
    const [yourVoice, setYourVoice] = useState("Who goes there?")
    const [talkNum, setTalkNum] = useState(0)

    useEffect(() => {
        document.title="Parlor"
    }, [])

    function talk() {
        if (talkNum === 0) {
            setMysteriousVoice(`Hello, ${name}.`)
            setYourVoice("What do you want?")
        }
        else if (talkNum === 1) {
            setMysteriousVoice("What's the rush?")
            setYourVoice("I'm trying to get out of the mansion.")
        }
        else if (talkNum === 2) {
            setMysteriousVoice("In that case, you should just leave.")
            setYourVoice("I can't, I'm trapped")
        }
        else if (talkNum === 3) {
            setMysteriousVoice("Oh, maybe this will help you then.")
            setYourVoice("What is it?")
        }
        else if (talkNum === 4) {
            setMysteriousVoice("It's a key that you may need in another room.")
            setYourVoice("Thanks, I guess.")
        }
        else if (talkNum >= 5) {
            setMysteriousVoice("spooks is the word")
            setYourVoice("")
            setUnlock6(true)
        }
        setTalkNum(prev => prev + 1)
    }

    return(
        <>
        <h1 className="room-name">Parlor</h1>
        <button className="home-button" onClick={() => {setPage(0)}}>HOME</button>
        {unlock6 && (<><div className="delta-room up" onClick={() => {setPage(9)}}>↑</div>
        <div className="delta-room down" onClick={() => {setPage(5)}}>↓</div>
        <div className="delta-room left" onClick={() => {setPage(2)}}>←</div></>)}
        {!unlock6 && (<><div className="delta-room up locked">↑</div>
        <div className="delta-room down locked">↓</div>
        <div className="delta-room left locked">←</div></>)}
        <div className="mysterious-voice">
            <h1 className="mystery">{mysteriousVoice}</h1>
        </div>
        <div className="your-voice">
            {!unlock6 && (<button className="conversation-button" onClick={() => {talk()}}>{yourVoice}</button>)}
        </div>
        </>
    )
}

export default Parlor