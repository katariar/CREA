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
        <div onClick = {() => handleClick()}> {category}</div>
        {showCategory && (<div   style={{
            display: 'flex',
            flexDirection: 'column',
            color: 'pink',
            justifyContent: 'center',
            alignItems: 'center'


        }}>{`Show This ${category}`}
        <Link to="/task">Mene tehtävään</Link>
        <Link to="/task">Mene tehtävään</Link>
        <Link to="/task">Mene tehtävään</Link></div>)}
        </>
    )
}

export default CategoryButton