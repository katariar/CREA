import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const CategoryButton = ({category}) => {
    const [showCategory, setShowCategory] = useState(false)
    console.log(showCategory)

    const handleClick = () => {
        setShowCategory (!showCategory)
    }

    return (
        <>
        <div style={{ 
        backgroundColor: 'pink',
        margin: '10px',
        padding: '10px',
        borderRadius: '20px'    
        }} onClick = {() => handleClick()}> {category}</div>
        {showCategory && (<div   style={{
            display: 'flex',
            flexDirection: 'column',
            color: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px'


        }}>{`One hour Project`}
        <div style ={{
            display: 'flex',
            flexDirection: 'column',
            color: 'black',
            justifyContent: 'center',
            alignItems: 'center'


        }}><Link to="/task" style={{ 
        textDecoration: 'none',
        color: 'black',
        padding: '10px', 
        margin: '10px', 
        backgroundColor: 'pink', 
        borderRadius: '20px'}}>Project 1</Link>{`One Day Project`}
        <Link to="/task" style={{ 
        textDecoration: 'none', 
        color: 'black', 
        padding: '10px', 
        margin: '10px', 
        backgroundColor: 'pink', 
        borderRadius: '20px' }}>Porject 2</Link>{`One Week Project `}
        <Link to="/task" style={{ 
        textDecoration: 'none', 
        color: 'black', 
        padding: '10px', 
        margin: '10px', 
        backgroundColor: 'pink', 
        borderRadius: '20px' }}>Project 3</Link></div></div>)}
        </>
    )
}

export default CategoryButton