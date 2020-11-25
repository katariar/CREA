import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const CategoryButton = ({category}) => {
    const [showCategory, setShowCategory] = useState(false)
    console.log(showCategory)

    const handeClick = () => {
        setShowCategory (!showCategory)
    }

    return (
        <>
        <div onClick = {() => handeClick()}> {category}</div>
        {showCategory && (<div>{`Show This ${category}`}
        <Link to="/task">Mene tehtävään</Link></div>)}
        </>
    )
}

export default CategoryButton