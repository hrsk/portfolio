import styled from "styled-components";
import sprite from "../../assets/images/icons/skills/sprite.svg";
import React from "react";

type SkillIconPropsType = {
    viewBox: string
}
const SkillIcon = styled.svg<SkillIconPropsType>`
  width: 160px;
  height: 160px;
`

interface PropsType extends SkillIconPropsType {
    iconId: string
}

export const SkillIconImage = (props: PropsType) => {
    return (
        <SkillIcon viewBox={props.viewBox}>
            <use xlinkHref={`${sprite}#${props.iconId}`}/>
        </SkillIcon>
    )
}