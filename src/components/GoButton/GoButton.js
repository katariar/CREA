import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Day from '../DayButton/DayButton';

const Tips = styled.div `
background-color: lightgrey;
border-radius: 10px;
padding: 20px;
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

    const handleClick = () => {
        setShowGo (!showGo)
    }


    return (
        <>
        <div onClick = {() => handleClick()}> {go}</div>
        {showGo && (<div>{`Tips to help your creative process`} <Tips
        initial="hidden"
        animate={showGo ? 'visible' : 'hidden'}
        >

        <Day day="Day One" />
        <Day day="Day Two" />
        <Day day="Day Three" />
        <Day day="Day Four" />
        <Day day="Day Five" />
    

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
