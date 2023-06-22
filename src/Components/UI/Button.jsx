import styles from "./Button.module.css";


const Button = props => {
    let style = "";
    if (props.type === "spotify") {
        style = styles.spotifyButton;
    }

    return <button className={style} onClick={props.onClick}>{props.children}</button>
};

export default Button;