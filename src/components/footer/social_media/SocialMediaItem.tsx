import styled from "styled-components";
import sprite from "../../../assets/images/icons/social_media/sprite.svg";
import React from "react";
import {theme} from "../../../styles/global/Theme";

export const SocialMediaItem = (props: { link: string, title: string }) => {
    return (
        <SocialMediaItemContainer>
            <SocialMediaItemLink href={props.link}>
                <SocialMediaItemIcon width={'24px'} height={'24px'} viewBox={'0 0 24 24'} fill={'#9f9f9f'}>
                    <use xlinkHref={`${sprite}#${props.title}`}/>
                </SocialMediaItemIcon>
            </SocialMediaItemLink>
        </SocialMediaItemContainer>
    )
}
const SocialMediaItemContainer = styled.li`

`
const SocialMediaItemIcon = styled.svg<{
    viewBox: string, width: string, height: string
}>`

`
const SocialMediaItemLink = styled.a`
    ${SocialMediaItemIcon}:hover {
        fill: ${theme.colors.primaryColor};
        transform: scale(1.5);
    }
`