import styles from './About.module.css'
import {Header} from "../../components/Header.tsx";
import userPhoto from './../../assets/photo/photo.jpg'

export const About = () => {
    return (
        <section>
            <div className={styles.container}>
                <Header title={"About Me"}
                        description={"Get to know me"}
                />
                <div className={styles.wrapper}>
                    <img className={styles.photo} src={userPhoto} alt={'About Picture'}/>
                    <div className={styles.description}>
                        <span>Who am i?</span>
                        <h1>I'm Yegor Gursky, a Frontend Developer</h1>
                        <p className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Asperiores aut cum dolores dolorum ea est exercitationem id incidunt laboriosam,
                            maiores minima nam, nemo nobis nostrum quaerat qui quos voluptatem voluptatum?
                        </p>
                        <div className={styles.contactsWrapper}>
                            <h4>Name:</h4>
                            <p>Yegor Gursky</p>
                            <h4>Email:</h4>
                            <p><a className={styles.link} href="mailto:gurskygursky@example.com">hrsk.yegor@example.com</a></p>
                            <h4>Age:</h4>
                            <p>32</p>
                            <h4>From:</h4>
                            <p>Minsk, Belarus</p>
                        </div>
                        <div className={styles.linksWrapper}>
                            <button className={styles.button} type={'submit'} onClick={() => {
                                console.log('click')}}>Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
