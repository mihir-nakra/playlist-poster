import styles from "./Footer.module.css"
import Spacer from "./UI/Spacer";

const Footer = props => {
    return <div>
        <div className={styles.footer}>
        <hr className={styles.hrStyle}/>
            <p>Made by <a href="https://www.linkedin.com/in/mihir-nakra-9a93aa1a6/">Mihir Nakra</a> and <a href="https://www.linkedin.com/in/manaydivatia/">Manay Divatia</a></p>
            <p><a href="/">Home</a> | <a href="/about">About</a> | <a href="/privacy-policy">Privacy Policy</a> | <a href="/support-us">Support Us</a></p>
        </div>
    </div>;
};

export default Footer;