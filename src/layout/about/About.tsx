import React from "react";
import {Header} from "../../components/header/Header";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import ph from "../../assets/images/photo/photo.jpg";

export const About = () => {
    return (
        <AboutWrapper>
            <Container>
                <Header title={"About Me"}
                        description={"Get to know me"}
                />
                <FlexWrapper direction={'row'} align={'center'} columnGap={'59px'} >
                    {/*<ImageWrapper >*/}
                        <Image src={ph} alt={'About Picture'}/>
                    {/*</ImageWrapper>*/}
                    <DescriptionWrapper>
                        <Description>
                            <span>Who am i?</span>
                            <h1>I'm Yahor Hursky, a Frontend Developer</h1>
                            <p>
                                I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.
                            </p>
                        </Description>
                        <ContactWrapper>
                            <h4>Name:</h4>
                            <p>Yahor Hursky</p>
                            <h4>Email:</h4>
                            <p><a href="mailto:gurskygursky@example.com">hrsk.yegor@example.com</a></p>
                            <h4>Age:</h4>
                            <p>31</p>
                            <h4>From:</h4>
                            <p>Minsk, Belarus</p>
                        </ContactWrapper>
                    </DescriptionWrapper>
                </FlexWrapper>
            </Container>
        </AboutWrapper>
    );
}

const AboutWrapper = styled.section`
  padding: 15px 0 15px 0;
`

const Description = styled.div`
  
  span {
    color: #009e66;
    padding-bottom: 15px;
  }

  h1 {
    line-height: 1.6;
    margin-bottom: 16px;
  }
  p {
    border-bottom: 2px solid rgba(255,255,255,.08);
    margin-bottom: 0;
    padding-bottom: 36px;
  }
`

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 15px;
  padding: 32px 0;
`

const Image = styled.img`
  object-fit: cover;
  width: 430px;
  max-height: 100%;
  max-width: 100%;

  border: 2px solid #0000002D;
  border-radius: 0.25rem;
  padding: 0.25rem;
`



const DescriptionWrapper = styled.div`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`