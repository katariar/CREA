import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Day from '../DayButton/DayButton';

const Tips = styled.div `
border-radius: 20px;
margin: 20px;
padding: 20px;
`
const Upload = styled.div `
background-color: pink;
margin: 20px;
padding: 20px;
border-radius: 20px;
box-shadow: 5px 5px 5px lightgrey;

`
/*const Day1 = styled.div `
padding: 7px;
background: pink;
margin-bottom: 5px;
`
const Day2 = styled.div `
padding: 7px;
background: pink;
margin-bottom: 5px;
`
const Day3 = styled.div `
padding: 7px;
`
const Day4 = styled.div `
padding: 7px;
`
const Day5 = styled.div `
padding: 7px;
`*/

const GoButton = ({go}) => {
    const [showGo, setShowGo] = useState(false)
    console.log(showGo)

    const handleClick = () => {
        setShowGo (!showGo)
    }


    return (
        <>
        <div style={{ 
        backgroundColor: 'pink',
        margin: '20px',
        padding: '10px',
        borderRadius: '20px'    
        }} 
onClick = {() => handleClick()}> {go}</div>
        {showGo && (<div style={{ margin: '10px' }}>{`Tips to help your creative process`} <Tips
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
        
        <Link to="/feed" style={{
             textDecoration: 'none',
             color: 'black', 
             backgroundColor: 'pink',
             margin: '40px',
             padding: '10px',
             borderRadius: '20px'
             }} >Go to Feed</Link>
        </div>)}
        


        
        </>
    )
}



export default GoButton
