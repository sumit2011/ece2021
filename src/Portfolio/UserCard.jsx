import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LaunchIcon from '@mui/icons-material/Launch';
import { Helmet } from 'react-helmet';
import { Tilt } from "react-tilt";
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    // height: 100vh; // Full viewport height
    width: 80%;
    margin : 0px auto;
    text-align: center;
    
`;

const Title = styled.div`
font-weight: 700;
  font-size: 50px;
  color: white;
  line-height: 68px;
  font-weight: bold;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 35px;
    line-height: 48px;
    margin-bottom: 8px;
  }
    
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
    
    margin-top: 70px;

    
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);

    filter: grayscale();
    transition: filter 0.4s ease-in-out;

    &:hover {
      filter: none;
    }
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



const Icons = styled.a`
    display: flex;
    align-items: center;
    color: white;
    padding-left: 5px;
    padding-right: 10px;
    // justify-content: space-between;
    width: 88%;
    gap: 40px;
    max-width: 300px;
    border: 2px solid green;
    margin: 10px;
    border-radius: 50px;
    height:50px;
    user-select: none;
    text-decoration: none;
    
    
`


const Icon = styled.a`
    color: white;
    target: _blank;
    cursor: pointer;
    margin-left: 20px;
`



const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: white;
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: #00ff00;
`;

const Social = styled.div`
margin-bottom: 50px;
`;

const Button = styled.div`
  position: fixed;
  z-index: 1000;
  top: 12px;
  left: 12px;
  background: none;
  color: white;
  border: 2px solid green;

  cursor: pointer;
  border-radius: 50%;
`;

const Card = (props) => {

  const skill = ["Student", "Programmer", "Full Stack Developer", "Honest"];

  const goback = useNavigate();

  const handleGoback = () => {
    goback(-1);
  };

  return (
    <>
    {/* <Navbar /> */}
    
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

      <Button onClick={handleGoback} >
        <KeyboardArrowLeftIcon style={{ height: "30px", width: "30px" , color:"#00ff00" }}/>
      </Button>

      <div >
      <Tilt >
      <CardContainer >
        <Image  src={props.image} />
        <Name>{props.name}</Name>

      </CardContainer>
      </Tilt>
      </div>
      

      <Title style={{fontWeight:"bold"}}>
      Hi👋, I am <br/> {props.name}.
      </Title>

      <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: skill,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
      </TextLoop>
      

      <h3 >Student | Competitive Programmer | Full Stack Developer | Honest</h3>
      <p >
        hii 👋, My name is {props.name}. Currently
        i am pursuing btech at NIT Sringar in Electronics and Communication Enginearing.
        you can connect with me on👇.
      </p>
    <h1>Social Links</h1>
    <hr
    style={{
      backgroundColor: "#00ff00",  
      height: "2px",              
      width: "200px", 
      border: "none",              
      marginTop: "-10px",
      marginBottom: "20px",
    }}
    />
      <Icons  href={props.instagram} target="_blank"> 
        <Icon href={props.instagram} >
          <InstagramIcon style={{ height: "30px", width: "30px" }} />
        </Icon>
        <h3>Instagram</h3>
      </Icons>

      <Icons  href={props.facebook} target="_blank">
        <Icon href={props.facebook}>
          <FacebookIcon style={{ height: "30px", width: "30px" }} />
        </Icon>
        <h3>Facebook</h3>
      </Icons>

      <Icons href={props.twitter} target="_blank">

        <Icon href={props.twitter}>
          <XIcon style={{ height: "30px", width: "30px" }} />
        </Icon>
        <h3>Twitter</h3>
      </Icons>

      <Icons href={props.linkedin} target="_blank">
        <Icon href={props.linkedin}>
          <LinkedInIcon style={{ height: "30px", width: "30px" }} />
        </Icon>
        <h3> Linkedin</h3>
      </Icons>

      <Icons href={props.link} target=" _blank">
        <Icon href={props.link} >
          <LaunchIcon style={{ height: "30px", width: "30px" }} />
        </Icon>
        <h3> Portfolio</h3>
      </Icons>

      <Social></Social>

    </Wrapper>
    </>
  )
}



export default Card;