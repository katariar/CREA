import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 100px;
`
const UploadBox = styled.div `
background: lightgrey;
height: 300px;
border-radius: 30px;
margin: 20px;
padding: 40px;
`
const Pictures = styled.div `
background: white;
margin: 10px;
padding: 10px;
border-radius: 20px;
text-align: center;
`

const Upload = () => {
    return (
        <>
        <Container>
                <h3>UPLOAD YOUR WORK</h3>
            <UploadBox>
            <Pictures>Upload Pictures + </Pictures>
            <form>
                <label>
                 Description:
                 <br/>
                 <br/>
                <input type="text" name="name" style={{ padding: '20px', borderRadius: '20px', border: 'solid 1px grey'}} />
                </label>
                <br/>
                <br/>
                <input type="submit" value="Submit" style={{ padding: '10px', borderRadius: '20px', border: 'solid 1px grey'}}  />
            </form>
            </UploadBox>
       
             <Link to="/feed">Go to Feed</Link>
        </Container>
        </>
    )
}

export default Upload
