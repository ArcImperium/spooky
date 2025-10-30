import {useState, useEffect} from 'react'
import './Home.css'

function Home({setPage}) {
    useEffect(() => {
        document.title = 'Home'
    }, [])

    return(
        <>
        <div className="house">
            <div className="room-row">
                <div className="room" onClick={() => {setPage(8)}}><h1 className="room-title">Kitchen</h1></div>
                <div className="room" onClick={() => {setPage(3)}}><h1 className="room-title">Patio</h1></div>
                <div className="room" onClick={() => {setPage(9)}}><h1 className="room-title">Bedroom</h1></div>
            </div>
            <div className="room-row">
                <div className="room" onClick={() => {setPage(7)}}><h1 className="room-title">Dining Room</h1></div>
                <div className="room" onClick={() => {setPage(2)}}><h1 className="room-title">Foyer</h1></div>
                <div className="room" onClick={() => {setPage(6)}}><h1 className="room-title">Parlor</h1></div>
            </div>
            <div className="room-row">
                <div className="room" onClick={() => {setPage(4)}}><h1 className="room-title">Basement</h1></div>
                <div className="room" onClick={() => {setPage(1)}}><h1 className="room-title">Courtyard</h1></div>
                <div className="room" onClick={() => {setPage(5)}}><h1 className="room-title">Attic</h1></div>
            </div>
        </div>
        </>
    )
}

export default Home