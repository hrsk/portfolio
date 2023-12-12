import React from "react";
import {Header} from "../../components/header/Header";
import styled from "styled-components";

export const Contact = () => {
    return (
        <ContactWrapper>
            <Header description={"Feel free to contact me anytimes"}
                    title={"Get in Touch"}
            />
            <ContactContainer>
                <ContactsInfoWrapper>
                    <h2>ADDRESS</h2>
                    {/*<p>Always available for freelance<br/>*/}
                    {/*    work if the right project comes along,<br/>*/}
                    {/*    Feel free to contact me!<br/>*/}
                    {/*</p>*/}
                    <p>
                        4th Floor, Plot No.22,
                        <br/>
                        145 Murphy Canyon Rd.
                        <br/>
                        San Diego CA 2028
                    </p>
                    <p><span>icon</span>+00000000000</p>
                    <p><span>icon</span>+00000000000</p>
                    <p><span>icon</span>chat@example.com</p>
                </ContactsInfoWrapper>
                <Form>
                    <h2>SEND US A NOTE</h2>
                    <Field type={'text'} placeholder={'Name'}/>
                    <Field type={'email'} placeholder={'Email'}/>
                    <textarea placeholder={'Message'}/>
                    <Button>Send Message</Button>
                </Form>
            </ContactContainer>
        </ContactWrapper>
    );
}

const ContactWrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-flow: column;
  padding: 15px 0 15px 0;
`

const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  min-width: 540px;

  h2 {
    padding-bottom: 15px;
  }
  
  textarea {
    width: 100%;
    height: 120px;
    float: left;
    background-color: #343a40;
    margin-bottom: 25px;
  }
`

const Field = styled.input.attrs((props) => ({
    type: props.type,
    placeholder: props.placeholder,
}))`
  height: 30px;
  margin-bottom: 25px;
  min-width: 540px;
  width: 100%;
  background-color: #343a40;
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

  h2 {
    padding-bottom: 15px;
  }

`
