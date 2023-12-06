import React from "react";
import {Header} from "../../common/header/Header";
import styled from "styled-components";

export const Contacts = () => {
    return (
        <ContactsWrapper>
            <Header description={"Feel free to contact me anytimes"}
                    title={"Get in Touch"}
            />
            <ContactsContainerForm>
                <Form>
                    <h4>Message Me</h4>
                    <Field type={'text'} placeholder={'Name'}/>
                    <Field type={'email'} placeholder={'Email'}/>
                    <Field type={'text'} placeholder={'Subject'}/>
                    <textarea placeholder={'Message'}/>
                    <Button>Send Message</Button>
                </Form>
                <ContactsInfoWrapper>
                    <h4>Contact Info</h4>
                    <p>Always available for freelance<br/>
                        work if the right project comes along,<br/>
                        Feel free to contact me!<br/>
                    </p>
                    <List>
                        <li>
                            <h5>Name</h5>
                            <span>Yahor Hurski</span>
                        </li>
                        <li>
                            <h5>Location</h5>
                            <span>Minsk, Belarus</span>
                        </li>
                        <li>
                            <h5>Call Me</h5>
                            <span>
                                        <a href={"tel: +37544 000 0000"}>+37544 000 0000</a>
                                </span>
                        </li>
                        <li>
                            <h5>Email Me</h5>
                            <span>
                                        <a href={"mailto:hrsk.yegor@example.com"}>
                                            hrsk.yegor@example.com
                                        </a>
                                </span>
                        </li>
                    </List>
                </ContactsInfoWrapper>
            </ContactsContainerForm>
        </ContactsWrapper>
    );
}

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: max-content;
`

const ContactsContainerForm = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: start;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  width: auto;

  textarea {
    height: 70px;
    margin-bottom: 25px;
    width: 300px;
    background: #343a40;
  }
`

const Field = styled.input.attrs((props) => ({
    type: props.type,
    placeholder: props.placeholder,
}))`
  height: 30px;
  margin-bottom: 25px;
  width: 300px;
  background: #343a40;
`;

const Button = styled.button`
  width: 150px;
  height: 35px;
  border-radius: 15px;
  background-color: forestgreen;
  color: white;
`

const ContactsInfoWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`
const List = styled.ul`
  list-style: none;
  position: relative;
`
