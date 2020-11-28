import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const ChallegesDone = ({done}) => {
    const [showDone, setShowDone] = useState(false)
    console.log(showDone)

    const handleClick = () => {
        setShowDone (!showDone)
    }
   
    return (
        <>
        <div onClick ={() => handleClick()}>{done}</div>
        {showDone && (<div style={{
        display: 'flex',
        flexDirection: 'column'
        }}>
        <Link to="/feed" style={{ textDecoration: 'none', color: 'black'}}>Go to Project Feed</Link>
      
        </div>)}
        </>
    )
}

export default ChallegesDone
