import React from 'react';
import styled from 'styled-components';
import { colors, GlobalStyles, device, heroExternalPadding } from '../styles';
/* import PrimaryButton from '../PrimaryButton/PrimaryButton'; */

const Hero = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <HeroBg>
          <VideoBg autoPlay loop muted src='https://portafoliosvideobackground.s3.amazonaws.com/video.mp4' type='video/mp4' />
        </HeroBg>
        <Grid>
          <TextArea>
            <H1>Hi!, I'm <Magenta>Gabriel Turrillas</Magenta>.
              I'm a Front end web developer.
              Let's work
              <Magenta> together</Magenta>!
            </H1>
          </TextArea>
          <ButtonArea>
          </ButtonArea>
        </Grid>
      </Container>
    </>
  )
}

export default Hero;

const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  position:relative;
  height:100vh;
  padding:0 ${heroExternalPadding.mobileS};
  @media ${device.mobileL}{
    padding:0 ${heroExternalPadding.mobileL};
  }
  @media ${device.tablet}{
    padding:0 ${heroExternalPadding.tablet};
  }
  @media ${device.laptopL}{
    padding:0 ${heroExternalPadding.laptopL};
  }
  @media ${device.desktop}{
    padding:0 ${heroExternalPadding.desktop};
  }
`

const HeroBg = styled.div`
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  width:100%;
  height:100%;
  overflow:hidden;
`

const VideoBg = styled.video`
  width:100%;
  height:100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: ${colors.background};
`

const Grid = styled.div`
  position:absolute;
  display: grid;
  grid-template-areas:'TextArea'
                      'ButtonArea';
  height:100vh;
  color:white;
`

const TextArea = styled.div`
  display:flex;
  grid-area:TextArea;
  align-items:end;
  justify-content:center;
  z-index:999;
`

const H1 = styled.h1`
  font-size:1.4rem;
  text-align:center;
  @media ${device.mobileL}{
    font-size:2rem;
  }
  @media ${device.laptopL}{
    font-size:2.5rem;
  }
`

const Magenta = styled.span`
  color: ${colors.secondary};
`

const ButtonArea = styled.div`
  display:flex;
  grid-area:ButtonArea;
  align-items:center;
  justify-content:center;
  z-index:999;
`


