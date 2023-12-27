import styled from "styled-components";
import React from "react";
import {SocialMediaItem} from "./SocialMediaItem";

export const socialMediaItems: Array<SocialMediaListType> = [
    {id: 1, title: 'facebook', link: 'https://facebook.com/'},
    {id: 2, title: 'github', link: 'https://github.com/hrsk'},
    {id: 3, title: 'linkedin', link: 'https://linkedin.com/'},
    {id: 4, title: 'telegram', link: 'https://t.me/rzhavoevremya'},
    {id: 5, title: 'twitter', link: 'https://twitter.com/'},
]

type SocialMediaListType = {
    id: number
    title: string
    link: string
}

export const SocialMediaList = () => {
    return (
        <SocialMediaListWrapper>
            {socialMediaItems.map((socialItem) => {
                return <SocialMediaItem key={socialItem.id} title={socialItem.title} link={socialItem.link}/>
            })}
        </SocialMediaListWrapper>
    )
}
const SocialMediaListWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    height: 24px;
    column-gap: 25px;
    right: 0;
`