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
                    <p>{props.descriptionText}</p>
                    <ClickedLink href={`https://github.com/hrsk/classwork-todolist}`}>More Info</ClickedLink>

                </ImageWrapperBox>
                <Img src={props.src} alt={'todo'}/>
            </ImageWrapperContainer>
            <ProjectName>
                {props.projectName}
            </ProjectName>
        </ProjectContainer>
    )
}
// const Description = styled.div`
//   padding: 5px 20px;
//   text-align: center;
//
//   p {
//     font-size: 14px;
//     font-weight: 400;
//     line-height: 1.7;
//     color: #ffffff;
//   }
//
//   a {
//     text-decoration: none;
//   }
// `
// const LinkBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   gap: 20px;
// `
const ClickedLink = styled.a`
  color: #009e66;
  font-weight: 600;
  font-size: 18px;

  &:visited {
    color: #009e66;
    text-decoration: none;
  }

  &:hover {
    color: #009e66;
    text-decoration: none;
  }

  &:active {
    color: #009e66;
    text-decoration: none;
  }
`

const ProjectContainer = styled.article`
  //display: flex;
  //flex-direction: column;
  //overflow: hidden;
  //position: relative;
  max-width: 540px;
  width: 100%;
`
const ImageWrapperBox = styled.div`
  background-color: rgba(0, 0, 0, .9);
  bottom: 0;
  position: absolute;
  //transition: all .15s ease-in-out;
  visibility: hidden;
  max-width: 540px;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  //align-items: center;
  justify-content: center;
  text-align: center;
`
const ImageWrapperContainer = styled.div`
  //display: flex;
  //padding: 15px;
  position: relative;
  max-width: 540px;
  width: 100%;
  height: 420px;
  z-index: 0;
  //padding: 10px;
  &:hover ${ImageWrapperBox} {
    visibility: visible;
  }
`
const Img = styled.img`
  max-width: 540px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  //position: absolute;
  top: 0;
  left: 0;
  border-radius: 7px;
`
const ProjectName = styled.h3`
  //color: #ffffff;
  text-align: center;
  //display: flex;
  //flex-direction: row;
  //justify-content: center;
  padding-top: 15px;
  margin: 0 0 15px;
`
