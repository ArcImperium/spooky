import {useEffect, useState} from "react"
import Stone from './assets/stone.webp'

function Patio({setPage, setUnlock3, unlock3, stoneOrder, stoneInput, setStoneInput}) {
    const [glowStone0, setGlowStone0] = useState(false)
    const [glowStone1, setGlowStone1] = useState(false)
    const [glowStone2, setGlowStone2] = useState(false)
    const [glowStone3, setGlowStone3] = useState(false)
    const [glowStone4, setGlowStone4] = useState(false)
    const [glowStone5, setGlowStone5] = useState(false)
    const [glowStone6, setGlowStone6] = useState(false)
    const [glowStone7, setGlowStone7] = useState(false)

    useEffect(() => {
        document.title="Patio"
    }, [])

    function checkStones(stoneNum) {
        const newInput = [...stoneInput, stoneNum]

        const stoneLength = stoneInput.length

        const stoneChecker = newInput.every((val, i) => val === stoneOrder[i])
        if (stoneChecker) {
            switch(stoneNum) {
                case 0: setGlowStone0(true); break
                case 1: setGlowStone1(true); break
                case 2: setGlowStone2(true); break
                case 3: setGlowStone3(true); break
                case 4: setGlowStone4(true); break
                case 5: setGlowStone5(true); break
                case 6: setGlowStone6(true); break
                case 7: setGlowStone7(true); break
            }
            if (stoneLength === 7) {
                setTimeout(() => {setUnlock3(true)}, 2000)
            }
        }
        else {
            loseStones()
        }
    }

    function loseStones() {
        setGlowStone0(false)
        setGlowStone1(false)
        setGlowStone2(false)
        setGlowStone3(false)
        setGlowStone4(false)
        setGlowStone5(false)
        setGlowStone6(false)
        setGlowStone7(false)
        setStoneInput([])
    }

    return(
        <>
        <h1 className="room-name">Patio</h1>
        <button className="home-button" onClick={() => {setPage(0)}}>HOME</button>
        {unlock3 && (<><div className="delta-room down" onClick={() => {setPage(2)}}>↓</div>
        <div className="delta-room right" onClick={() => {setPage(9)}}>→</div>
        <div className="delta-room left" onClick={() => {setPage(8)}}>←</div></>)}
        {!unlock3 && (<><div className="delta-room down locked">↓</div>
        <div className="delta-room right locked">→</div>
        <div className="delta-room left locked">←</div></>)}
        {!unlock3 && (<><div className="stone-container a">
            <div className="stone-row">
                <img src={Stone} className="stone" onClick={() => {if (!glowStone0) {setStoneInput(prev => [...prev, 0]); checkStones(0)}}}/>
                <img src={Stone} className="stone" onClick={() => {if (!glowStone1) {setStoneInput(prev => [...prev, 1]); checkStones(1)}}}/>
                <img src={Stone} className="stone" onClick={() => {if (!glowStone2) {setStoneInput(prev => [...prev, 2]); checkStones(2)}}}/>
                <img src={Stone} className="stone" onClick={() => {if (!glowStone3) {setStoneInput(prev => [...prev, 3]); checkStones(3)}}}/>
            </div>
            <div className="stone-row">
                <img src={Stone} className="stone" onClick={() => {if (!glowStone4) {setStoneInput(prev => [...prev, 4]); checkStones(4)}}}/>
                <img src={Stone} className="stone" onClick={() => {if (!glowStone5) {setStoneInput(prev => [...prev, 5]); checkStones(5)}}}/>
                <img src={Stone} className="stone" onClick={() => {if (!glowStone6) {setStoneInput(prev => [...prev, 6]); checkStones(6)}}}/>
                <img src={Stone} className="stone" onClick={() => {if (!glowStone7) {setStoneInput(prev => [...prev, 7]); checkStones(7)}}}/>
            </div>
        </div>
        <div className="stone-container b">
            <div className="stone-row">
                <div className={`stone-glow ${glowStone0 ? "correct" : ""}`}></div>
                <div className={`stone-glow ${glowStone1 ? "correct" : ""}`}></div>
                <div className={`stone-glow ${glowStone2 ? "correct" : ""}`}></div>
                <div className={`stone-glow ${glowStone3 ? "correct" : ""}`}></div>
            </div>
            <div className="stone-row">
                <div className={`stone-glow ${glowStone4 ? "correct" : ""}`}></div>
                <div className={`stone-glow ${glowStone5 ? "correct" : ""}`}></div>
                <div className={`stone-glow ${glowStone6 ? "correct" : ""}`}></div>
                <div className={`stone-glow ${glowStone7 ? "correct" : ""}`}></div>
            </div>
        </div></>)}
        </>
    )
}

export default Patio