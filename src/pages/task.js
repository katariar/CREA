import React from 'react';
import styled from 'styled-components';
import GoButton from '../components/GoButton/GoButton';

const Container = styled.div `
padding: 40px;
text-align: center;
margin-top: 70px;
color: #212B4D;
`
const Header = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
background-color: #F5B6AB;
border-radius: 30px;
`
const Brief = styled.p `
font-size: 12px;
`
const Task = () => {
    return (
        <Container>
        <div>
            <Header><h3>COFFEE HOUSE</h3></Header>
            <h4>ONE WEEK PROJECT</h4>
            <Brief>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
            </Brief>
     
        <GoButton go />
     
       
        <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        </Container>
    )
}

export default Task