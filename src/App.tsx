import './App.css';
import styled from "styled-components";
import {Header} from "./components/header/Header";
import {Skills} from './components/skills/Skills';
import {Footer} from "./components/footer/Footer";
import {About} from "./components/about/About";

export const App = () => {
    return (
        <AppWrapper>
            <Header/>
            <About/>
            {/*<Projects/>*/}
            <Skills/>
            {/*<Contacts/>*/}
            <Footer/>
        </AppWrapper>
    );
}

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`
