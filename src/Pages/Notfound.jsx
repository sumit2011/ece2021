import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Container = styled.div`
  // margin-top: 100px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  color: white;

`;
const Gif = styled.div`

`;

const Button = styled.div`
  background: none;
  color: white;
  border: 2px solid green;
  width: 40px;
  cursor: pointer;
  border-radius: 50%;
  padding: 5px;
  margin-top: 20px;
`;

const Notfound = () => {


  return (
    <Container style={{  textAlign: "center", padding: "20px" }}>
      <h1>404 - Page Not Found</h1>
      <Gif>
        <img src='https://media.giphy.com/media/BvNIKrJKQOEnATn76J/giphy.gif?cid=790b76114k3nnnog2brwkszelp63quinlw7cc9kfhq0frc9v&ep=v1_gifs_search&rid=giphy.gif&ct=g' style={{width: "260px"}}/>
      </Gif>
      <Link to="/" style={{ color: "lightblue", textDecoration: "none" }}>
      <Button  >
        <ArrowBackIcon style={{ height: "30px", width: "30px" , color:"#00ff00" }}/>
      </Button>
      </Link>

    </Container>
  );
};

export default Notfound;
