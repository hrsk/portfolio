import React from "react";
import {Header} from "../../components/header/Header";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {theme} from "../../styles/global/Theme";
import sprite from "../../assets/contact/sprite.svg";

export const Contact = () => {
    return (
        <ContactWrapper>
            <Container>
                <Header description={"Feel free to contact me anytimes"}
                        title={"Get in Touch"}
                />
                <ContactContainer>
                    <ContactInfoContainer>
                        <h3>ADDRESS</h3>
                        <Icon>
                            <svg viewBox={'0 0 24 24'}>
                                <use xlinkHref={`${sprite}#${'me_icon'}`}/>
                            </svg>
                            <ContactInfo>
                                <span>Name</span>
                                <p>Yahor Hurski</p>
                            </ContactInfo>
                        </Icon>

                        <Icon>
                            <svg>
                                <use xlinkHref={`${sprite}#${'location_icon'}`}/>
                            </svg>
                            <ContactInfo>
                                <span>Location</span>
                                <p>
                                    Minsk, Belarus
                                </p>
                            </ContactInfo>
                        </Icon>

                        <Icon>
                            <svg>
                                <use xlinkHref={`${sprite}#${'call_icon'}`}/>
                            </svg>
                            <ContactInfo>
                                <span>Call Me</span>
                                <p>+00000000000</p>
                            </ContactInfo>
                        </Icon>

                        <Icon>
                            <svg>
                                <use xlinkHref={`${sprite}#${'message_icon'}`}/>
                            </svg>
                            <ContactInfo>
                                <span>Email Me</span>
                                <p>chat@example.com</p>
                            </ContactInfo>
                        </Icon>

                    </ContactInfoContainer>
                    <Form>
                        <h3>SEND US A NOTE</h3>
                        <Field type={'text'} placeholder={'Name'} style={{gridArea: '2 / 2 / 3 / 2'}}/>
                        <Field type={'email'} placeholder={'Email'} style={{gridArea: '2 / 1 / 3 / 1'}}/>
                        <Field type={'text'} placeholder={'Subject'} style={{gridArea: '3 / 1 / 4 / 3'}}/>
                        <Field as={'textarea'} placeholder={'Message'}/>
                        <Button>Send Message</Button>
                    </Form>
                </ContactContainer>
            </Container>
        </ContactWrapper>
    );
}

const ContactWrapper = styled.section`
`
const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
`
const ContactInfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    h3 {
        font-weight: 600;
        text-align: center;
    }
`

const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
const Icon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;

    svg {
        height: 30px;
        width: 30px;
        fill: ${theme.colors.primaryColor};
    }
`

const Field = styled.input.attrs((props) => ({
    type: props.type,
    placeholder: props.placeholder,
}))`
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.1em;
    color: ${theme.colors.fonts.font};
    padding: 4px 8px;
    width: 100%;
    background-color: #161616;
    text-transform: capitalize;
    border: none;

    &:focus {
        border-bottom: 2px solid ${theme.colors.primaryColor};
    }

    &::placeholder {
        color: ${theme.colors.fonts.text};
    }

    &:focus-visible {
        outline: none;
    }
`;

const Button = styled.button.attrs((props) => ({
    type: props.type || 'submit'
}))`
    width: max-content;
    cursor: pointer;
    border-radius: 30px;
    background-color: ${theme.colors.primaryColor};
    border: 1px solid ${theme.colors.primaryColor};
    grid-area: 5 / 1 / 6 / 3;
    padding: 10px 35px;
`

const Form = styled.form`

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 0.4fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    min-width: 570px;

    h3 {
        grid-area: 1 / 1 / 2 / 3;
        font-weight: 600;
        text-align: center;
    }

    textarea {
        grid-area: 4 / 1 / 5 / 3;
        width: 100%;
        height: 125px;
        background-color: #161616;
        resize: none;
    }

`
