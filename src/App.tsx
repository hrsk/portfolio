import './App.css';
import {Header} from "./layout/header/Header";
import {Skills} from './layout/skills/Skills';
import {Footer} from "./layout/footer/Footer";
import {About} from "./layout/about/About";
import {Contact} from "./layout/contacts/Contact";
import {Projects} from "./layout/projects/Projects";

export const App = () => {
    return (
        <>
            <Header/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Footer/>
        </>
    );
}
