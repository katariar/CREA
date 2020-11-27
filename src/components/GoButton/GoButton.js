import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Tips = styled.div `
background-color: lightgrey;
border-radius: 10px;
padding: 10px;
`
const Upload = styled.div `
background-color: grey;
margin: 20px;
padding: 20px;
border-radius: 10px;
`

const GoButton = ({go}) => {
    const [showGo, setShowGo] = useState(false)
    console.log(showGo)

    const handeClick = () => {
        setShowGo (!showGo)
    }


    return (
        <>
        <div onClick = {() => handeClick()}> {go}</div>
        {showGo && (<div>{`Tips to help your creative process`} <Tips
        initial="hidden"
        animate={showGo ? 'visible' : 'hidden'}
        >
        <p>Päivä1</p>
        <p>Päivä2</p>
        <p>Päivä3</p>
        <p>Päivä4</p>
        <p>Päivä5</p>
    

        </Tips>

        <Upload>
            Upload your work
        </Upload>
        
        <Link to="/feed">Go to Feed</Link>
        </div>)}
        


        
        </>
    )
}



export default GoButton
