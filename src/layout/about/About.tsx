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
                <FlexWrapper direction={'row'} align={'center'} columnGap={'59px'}>
                    <Image src={ph} alt={'About Picture'}/>
                    <Description>
                        <span>Who am i?</span>
                        <h1>I'm Yahor Hursky, a Frontend Developer</h1>
                        <Text>
                            I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI
                            designs and websites for years, which comply with the latest design trends. I help
                            convert a vision and an idea into meaningful and useful products. Having a sharp eye for
                            product evolution helps me prioritize tasks, iterate fast and deliver faster.
                        </Text>
                        <ContactWrapper>
                            <h4>Name:</h4>
                            <p>Yahor Hursky</p>
                            <h4>Email:</h4>
                            <p><Link as={'a'} href="mailto:gurskygursky@example.com">hrsk.yegor@example.com</Link></p>
                            <h4>Age:</h4>
                            <p>31</p>
                            <h4>From:</h4>
                            <p>Minsk, Belarus</p>
                        </ContactWrapper>
                        <LinksWrapper>
                            <Button as={'a'} href={'/#'}>Download CV</Button>
                        </LinksWrapper>
                    </Description>
                </FlexWrapper>
            </Container>
        </AboutWrapper>
    );
}

const AboutWrapper = styled.section`
  padding: 15px 0 15px 0;
  margin-bottom: 120px;
`
const Text = styled.p`
  border-bottom: 2px solid rgba(255, 255, 255, .08);
  margin-bottom: 0;
  padding-bottom: 36px;
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

`

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 15px;
  padding: 15px 0;
  margin-bottom: 4px;
`

const Image = styled.img`
  object-fit: cover;
  width: 430px;
  height: 450px;
  max-height: 100%;
  max-width: 100%;

  border: 2px solid #0000002D;
  border-radius: 0.25rem;
  padding: 0.25rem;
`

const Button = styled.button.attrs((props) => ({
    type: props.type || 'submit'
}))`
  margin-right: 24px;
  padding: 10px 35px;
  border-radius: 30px;
  background-color: #009e66;
  border: 1px solid #009e66;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
`
const Link = styled.link`
  text-decoration: none;
  color: #009e66;
`
const LinksWrapper = styled.div`
  display: flex;
`
