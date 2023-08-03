import {useEffect} from 'react'





function ScoreBoard(){
    
    useEffect(() => {
        console.log('The ScoreBoard is loaded')
    }, [])

    return(
        <div>
            <h1>ScoreBoard</h1>
        </div>
    )

}






export default ScoreBoard;