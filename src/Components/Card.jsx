import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';



const CardContainer = styled.div`
    width: 330px;
    // height: 490px;
  background-color: #152515;
  border: 2px solid #00ff00;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }

`

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
    justify-content: space-between;
`


const Icon = styled.a`
    color: white;
    target: _blank;
    cursor: pointer;
`

const Card = (props) => {
    return (
        <CardContainer >
          <Image src={props.image}/>
            <Name>{props.name}</Name>
            <Icons>
              <Icon href={props.instagram} >
                <InstagramIcon style={{height: "40px" , width: "40px"}} />
              </Icon>

              <Icon href={props.whatsapp}>
                <WhatsAppIcon style={{height: "40px" , width: "40px"}}/>
              </Icon>
              
              <Icon href={props.facebook}>
                <FacebookIcon style={{height: "40px" , width: "40px"}}/>
              </Icon>

              <Icon href={props.twitter}>
                <XIcon style={{height: "40px" , width: "40px"}}/>
              </Icon>
                
              <Icon href={props.github} >
                <GitHubIcon style={{height: "40px" , width: "40px"}}/>
              </Icon>
                
                
            </Icons>
        </CardContainer>
    )
}


export default Card;