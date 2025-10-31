import {useState, useEffect} from 'react'
import './Home.css'

function Home({setPage, discovered1, discovered2, discovered3, discovered4, discovered5, discovered6, discovered7, discovered8, discovered9}) {
    useEffect(() => {
        document.title = 'Home'
    }, [])

    return(
        <>
        <div className="house">
            <div className="room-row">
                <div className={`room ${discovered8 ? "show" : "not"}`} onClick={() => {if (discovered8) {setPage(8)}}}><h1 className="room-title">Kitchen</h1></div>
                <div className={`room ${discovered3 ? "show" : "not"}`} onClick={() => {if (discovered3) {setPage(3)}}}><h1 className="room-title">Patio</h1></div>
                <div className={`room ${discovered9 ? "show" : "not"}`} onClick={() => {if (discovered9) {setPage(9)}}}><h1 className="room-title">Bedroom</h1></div>
            </div>
            <div className="room-row">
                <div className={`room ${discovered7 ? "show" : "not"}`} onClick={() => {if (discovered7) {setPage(7)}}}><h1 className="room-title">Dining Room</h1></div>
                <div className={`room ${discovered2 ? "show" : "not"}`} onClick={() => {if (discovered2) {setPage(2)}}}><h1 className="room-title">Foyer</h1></div>
                <div className={`room ${discovered6 ? "show" : "not"}`} onClick={() => {if (discovered6) {setPage(6)}}}><h1 className="room-title">Parlor</h1></div>
            </div>
            <div className="room-row">
                <div className={`room ${discovered4 ? "show" : "not"}`} onClick={() => {if (discovered4) {setPage(4)}}}><h1 className="room-title">Basement</h1></div>
                <div className={`room ${discovered1 ? "show" : "not"}`} onClick={() => {if (discovered1) {setPage(1)}}}><h1 className="room-title">Courtyard</h1></div>
                <div className={`room ${discovered5 ? "show" : "not"}`} onClick={() => {if (discovered5) {setPage(5)}}}><h1 className="room-title">Attic</h1></div>
            </div>
        </div>
        </>
    )
}

export default Home