import React  from 'react';
import CategoryButton from '../components/CategoryButton/CategoryButton';
import styled from 'styled-components';

/*const Category1 = styled.div `
background: pink;
padding: 20px;
border-radius: 40px;
width: 250px;
margin: 7px;

`
const Category2 = styled.div `
background: pink;
padding: 20px;
border-radius: 40px;
width: 250px;
margin: 7px;
`
const Category3 = styled.div `
background: pink;
padding: 20px;
border-radius: 40px;
width: 250px;
margin: 7px;
`
const Category4 = styled.div `
background: pink;
padding: 20px;
border-radius: 40px;
width: 250px;
margin: 7px;
`
const Category5 = styled.div `
background: pink;
padding: 20px;
border-radius: 40px;
width: 250px;
margin: 7px;
`
const Category6 = styled.div `
background: pink;
padding: 20px;
border-radius: 40px;
width: 250px;
margin: 7px;
`*/

const Home = () => {

    return (
        <div
        style={{
            display: 'flex',
            marginTop: '70px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'


        }}
        >
         
            <h1>Projects</h1>
            <h3 style= {{ margin: '12px'}}>Please choose a theme</h3>
       
            <CategoryButton category="Web Design" />
         <CategoryButton category="Typography" />
            <CategoryButton category="Logo Design" />
            <CategoryButton category="Visual Identity" />
            <CategoryButton category="Illustration" />
         <CategoryButton category="Visual Effects" />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>

    )
}

export default Home
