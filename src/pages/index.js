import React , { useState }from 'react';
import styled from 'styled-components';

const ShowMore= styled.button `
cursor: pointer;
margin: 20px;
`

const Home = () => {

    const [showCategory, setShowCategory] = useState(false)
    console.log(showCategory)

    const handeClick = () => {
        setShowCategory (!showCategory)
    }

    
    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20vh'


        }}
        >
            <h1>Kategoriat</h1>

            <ShowMore onClick = {() => handeClick()}> {showCategory ? 'Show This Category' : 'Hide This Category'}

            </ShowMore>

            
        </div>
    )
}

export default Home
