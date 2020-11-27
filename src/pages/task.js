import React from 'react';
import styled from 'styled-components';
import GoButton from '../components/GoButton/GoButton';

const Buttoni = styled.button `
cursor: pointer:
`
const Container = styled.div `
padding: 20px;
text-align: center;
margin-top: 70px;

`
const Task = () => {
    return (
        <Container>
        <div>
            <h2>Task</h2>

            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? "</p>

           
        <Buttoni>
            Choose This Task
        </Buttoni>


        <GoButton go="Go!" />

       
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