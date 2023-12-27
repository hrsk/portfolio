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
                    <ContactsInfoWrapper>
                        <h3>ADDRESS</h3>
                        <Icon>
                            <svg>
                                <use xlinkHref={`${sprite}#${'location_icon'}`}/>
                            </svg>
                            <span>
                            4th Floor, Plot No.22,
                            <br/>
                            145 Murphy Canyon Rd.
                            <br/>
                            San Diego CA 2028
                            </span>
                        </Icon>
                        <Icon>
                            <svg>
                                <use xlinkHref={`${sprite}#${'call_icon'}`}/>
                            </svg>
                            <span>+00000000000</span>
                        </Icon>
                        <Icon>
                            <svg>
                                <use xlinkHref={`${sprite}#${'message_icon'}`}/>
                            </svg>
                            <span>chat@example.com</span>
                        </Icon>
                    </ContactsInfoWrapper>
                    <Form>
                        <h3>SEND US A NOTE</h3>
                        <Field type={'text'} placeholder={'Name'} style={{gridArea: '2 / 2 / 3 / 2'}}/>
                        <Field type={'email'} placeholder={'Email'} style={{gridArea: '2 / 1 / 3 / 1'}}/>
                        <Field type={'text'} placeholder={'Subject'} style={{gridArea: '3 / 1 / 4 / 3'}} />
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
const ContactsInfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 0.2fr);
    //align-items: center;
    //grid-column-gap: 25px;
    grid-row-gap: 15px;

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

const Icon = styled.p`
  display: flex;
  gap: 25px;
  align-items: center;

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
  padding: 7px 15px;
  //min-width: 540px;
  width: 100%;
  background-color: ${theme.colors.bgColorField};
  text-transform: capitalize;
  border-radius: 8px;
  border: 1px solid ${theme.colors.borderColor};

  &:focus {
    box-shadow: 0 5px 15px rgba(159, 159, 159, .4);
  }

  &::placeholder {
    color: ${theme.colors.fonts.text};
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
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
        height: 80px;
        background-color: #343a40;
        resize: none;
    }

`
