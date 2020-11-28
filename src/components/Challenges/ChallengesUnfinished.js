import React, { useState }from 'react';
import {Link} from 'react-router-dom';


const ChallengesUnfinished = ({unfinished}) => {
    const[showUnfinished, setShowUnfinished] = useState(false)
    console.log(showUnfinished)

    const handleClick = () => {
        setShowUnfinished (!showUnfinished)
    }
    return (
        <>
        <div onClick = {() => handleClick()}> {unfinished}</div>
        {showUnfinished && (<div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Link to="/task" style={{ textDecoration: 'none', color: 'black'}}>Go to Project</Link>
        </div>)}
    </>
    )
}

export default ChallengesUnfinished
