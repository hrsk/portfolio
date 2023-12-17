import styled from "styled-components";
import React from "react";

type PropsType = {
    projectName: string
    descriptionText: string
    src: string
}
export const Project = (props: PropsType) => {
    return (
        <ProjectContainer>
            <ImageWrapperContainer>
                <ImageWrapperBox>
                    <Text>{props.descriptionText}</Text>
                    <Button as={'a'} href={`https://github.com/hrsk/classwork-todolist`} type={'button'}>More Info</Button>
                </ImageWrapperBox>
                <Img src={props.src} alt={'todo'}/>
            </ImageWrapperContainer>
            <ProjectName>
                {props.projectName}
            </ProjectName>
        </ProjectContainer>
    )
}

const ProjectContainer = styled.div`
  max-width: 540px;
  width: 100%;
`

const Text = styled.p`
  padding: 25px 15px ;
`
const Button = styled.button.attrs((props) => ({
    type: props.type || 'submit'
}))`
  :hover {
    width: max-content;
    padding: 10px 35px;
    border-radius: 30px;
    background-color: #009e66;
    border: 5px solid #009e66;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 1px;
    color: #fff;
  }
`

const ImageWrapperBox = styled.div`
  background-color: rgba(0, 0, 0, .9);
  bottom: 0;
  position: absolute;
  visibility: hidden;
  max-width: 540px;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${Button} {
    border-bottom: 5px solid #009e66;
  }

`
const ImageWrapperContainer = styled.div`

  position: relative;
  max-width: 540px;
  width: 100%;
  z-index: 0;
  &:hover ${ImageWrapperBox} {
    visibility: visible;
  }
`
const Img = styled.img`
  max-width: 540px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  border-radius: 7px;
`
const ProjectName = styled.h3`
  text-align: center;
  padding-top: 15px;
`
