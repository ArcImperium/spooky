import {useState} from "react"
import './Story.css'

function Story({setShowStory, setWin}) {
    const [storyPage, setStoryPage] = useState(0)
    const [getOut, setGetOut] = useState(false)

    function handleNext() {
        setGetOut(true)
        setTimeout(() => {
            setStoryPage(prev => prev + 1)
            setGetOut(false)
            if (storyPage === 3) {
                setShowStory(false)
            }
        }, 2000)
    }

    function findStoryPage() {
        if (storyPage === 0) {
            return(
                <h1 className={`message ${getOut ? "get-out" : "get-in"}`}>
                Welcome to the Spooky Experience.<br/>
                Do you wish to continue your journey,<br/>
                While you can?
                </h1>
            )
        }
        else if (storyPage === 1) {
            return(
                <h1 className={`message ${getOut ? "get-out" : "get-in"}`}>
                    It is the dead of night as you travel to the Spooky Mansion.<br/>
                    There are rumors that the mansion is haunted,<br/>
                    But still you reach the front gate.<br/>
                    Do you still proceed?
                </h1>
            )
        }
        else if (storyPage === 2) {
            return(
                <h1 className={`message ${getOut ? "get-out" : "get-in"}`}>
                    As you enter, the gate shuts behind you.<br/>
                    You realize that you are now trapped in the Spooky Mansion.<br/>
                    Now you have no choice but to continue.<br/>
                </h1>
            )
        }
        else if (storyPage === 3) {
            return(
                <h1 className={`message ${getOut ? "get-out" : "get-in"}`}>
                    You stand at the edge of the Courtyard.<br/>
                    The mansion towers above you, sending chills down your spine.<br/>
                    There is a map on the ground that shows the layout of the mansion.<br/>
                    I recommend searching for and completing puzzles in each room.<br/>
                    I've done enough talking, it's your turn now:
                </h1>
            )
        }
    }

    return(
        <>
        <div className="story-background">
            <div className="story">
                {findStoryPage()}
                <button className="story-button" onClick={() => {handleNext()}}>Next</button>
                {(storyPage < 2) && (<div className="heck-no-container">
                    <button className="heck-no" onClick={() => {setWin(true)}}>No!</button>
                </div>)}
            </div>
        </div>
        </>
    )
}

export default Story