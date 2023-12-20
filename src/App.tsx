import './App.css';
import {Header} from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer";
import {About} from "./layout/about/About";
import {Contact} from "./layout/contact/Contact";
import {Projects} from "./layout/projects/Projects";
import {Slogan} from "./layout/slogan/Slogan";
import {Resume} from "./layout/resume/Resume";

export const App = () => {
    return (
        <>
            <Header/>
            <About/>
            <Projects/>
            <Resume/>
            <Slogan/>
            <Contact/>
            <Footer/>
        </>
    );
}
