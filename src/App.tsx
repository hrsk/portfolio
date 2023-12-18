import './App.css';
import {Header} from "./layout/header/Header";
import {Skills} from './layout/skills/Skills';
import {Footer} from "./layout/footer/Footer";
import {About} from "./layout/about/About";
import {Contact} from "./layout/contact/Contact";
import {Projects} from "./layout/projects/Projects";
import {Slogan} from "./layout/slogan/Slogan";

export const App = () => {
    return (
        <>
            <Header/>
            <About/>
            <Projects/>
            <Skills/>
            <Slogan/>
            <Contact/>
            <Footer/>
        </>
    );
}
