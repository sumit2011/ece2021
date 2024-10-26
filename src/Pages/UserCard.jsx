import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LaunchIcon from '@mui/icons-material/Launch';
// import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Tilt } from "react-tilt";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    // height: 100vh; // Full viewport height
    width: 80%;
    margin : 0px auto;
    
`;

const CardContainer = styled.div`
    max-width: 330px;
    max-height: 700px;
    background-color: #152515;
    border: 2px solid #00ff00;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 12px 15px;
    margin: 30px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }

    margin-top: 100px;

    
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`


const Name = styled.div`
    padding-left: 10px;
    font-size: 20px;
    font-weight: 600;
    color: white;
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`



const Icons = styled.div`
    display: flex;
    align-items: center;
    color: white;
    padding-left: 10px;
    padding-right: 10px;
    // justify-content: space-between;
    gap: 40px;
    width: 300px;
    border: 2px solid green;
    margin: 10px;
    border-radius: 50px;
    
`


const Icon = styled.a`
    color: white;
    target: _blank;
    cursor: pointer;
    margin-left: 20px;
`

const Title = styled.div``;

const Social = styled.div``;


const Card = (props) => {
  return (
    <Wrapper>
      <Helmet>
        <meta charset="utf-8" />
        <title>{props.name}</title>
        <meta name="description" content={`Check out ${props.name}'s profile!`} />
        <meta property="og:title" content={props.name} />
        <meta property="og:description" content={`Learn more about ${props.name}.`} />
        <meta property="og:image" content="https://linktr.ee/og/image/Sumit2011.jpg" />
        <meta property="og:url" content="https://ece2021nitsgr.netlify.app/user/sumit-kumar" />
      </Helmet>
      <Tilt>
      {/* <div style={{height: "100vh"}}> */}
      
      <CardContainer >
        <Image src={props.image} />
        <Name>{props.name}</Name>

      </CardContainer>
      {/* </div> */}
      </Tilt>
      

      <h1>
      {props.name}
      </h1>
      <h3>Student | Competitive Programmer | Full Stack Developer | Honest | True Lover</h3>
      <p>
        hii 👋, My name is {props.name}. Currently
        i am pursuing btech at NIT Sringar in Electronics and Communication Enginearing.
        connect with me👇.
      </p>

      <Icons>
        <Icon href={props.instagram} >
          <InstagramIcon style={{ height: "40px", width: "40px" }} />
        </Icon>
        <h3>Instagram</h3>
      </Icons>

      <Icons>
        <Icon href={props.facebook}>
          <FacebookIcon style={{ height: "40px", width: "40px" }} />
        </Icon>
        <h3>Facebook</h3>
      </Icons>

      <Icons>

        <Icon href={props.twitter}>
          <XIcon style={{ height: "40px", width: "40px" }} />
        </Icon>
        <h3>Twitter</h3>
      </Icons>

      <Icons>
        <Icon href={props.linkedin}>
          <LinkedInIcon style={{ height: "40px", width: "40px" }} />
        </Icon>
        <h3> Linkedin</h3>
      </Icons>

      <Icons>
      <Icon href={props.link} >
        <LaunchIcon style={{ height: "40px", width: "40px" }} />
      </Icon>
        <h3> Portfolio</h3>
      </Icons>




      
      <Social>
        <div>
          <Icon>

          </Icon>
          <Title>

          </Title>
        </div>
      </Social>
    </Wrapper>
  )
}



export default Card;