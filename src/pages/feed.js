import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 90px;
`
const Header = styled.div `
text-align: center;
background-color: #F5B6AB;
border-radius: 30px;
width: 250px;
color:#212B4D;
margin: 20px;
`

const Feed = () => {
    return (
        <div>
           
            <Container>
            <Header><h3>COFFEE HOUSE</h3></Header>
            <Link to="/work" style={{
                 textDecoration: 'none', 
                 color: '#212B4D', 
                 padding: '20px', 
                 margin: '10px', 
                 backgroundColor: '#F5B6AB', 
                 borderRadius: '25px' 

            }}>Placeholder</Link>

<Link to="/work" style={{
                 textDecoration: 'none', 
                 color: '#212B4D', 
                 padding: '20px', 
                 margin: '10px', 
                 backgroundColor: '#F5B6AB', 
                 borderRadius: '25px' 

            }}>Placeholder</Link>

<Link to="/work" style={{
                 textDecoration: 'none', 
                 color: '#212B4D', 
                 padding: '20px', 
                 margin: '10px', 
                 backgroundColor: '#F5B6AB', 
                 borderRadius: '25px' 

            }}>Placeholder</Link>
             
            </Container>
        </div>
    )
}

export default Feed
