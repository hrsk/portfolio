import styles from './Header.module.css'

type Props = {
    description: string
    title: string
}

export const Header = ({description, title}: Props) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.description}>
                {description}
                <span className={styles.animatedBar}></span>
            </span>
            <h2 className={styles.title}>{title}</h2>
        </div>

    );
}


