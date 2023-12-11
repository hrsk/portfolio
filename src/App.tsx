import './App.css';
import styled from "styled-components";
import {Header} from "./layout/header/Header";
import {Skills} from './layout/skills/Skills';
import {Footer} from "./layout/footer/Footer";
import {About} from "./layout/about/About";
import {Contacts} from "./layout/contacts/Contacts";
import {Projects} from "./layout/projects/Projects";

export const App = () => {
    return (
        <AppWrapper>
            <Header/>
            <About/>
            <Projects/>
            <Skills/>
            <Contacts/>
            <Footer/>
        </AppWrapper>
    );
}

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`
