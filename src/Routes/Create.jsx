import { useParams } from "react-router-dom";
import styles from "./Create.module.css";

const Create = props => {
    const { id } = useParams()
    return <div>
        <div className={styles.posterContainer}>
            <h4 className={styles.presentsText}>manayd studio's presents</h4>
            <img className={styles.image} alt="playlist" src={require("./image.png")} />
            <h2 className={styles.playlistName}>WWWWWWWWWWWWWW</h2>
            <p className={styles.starringText}>Starring Kendrick Lamar, Kanye West, Playboi Carti, A$AP Rocky, Bladee</p>
        </div>
    </div>
};

export default Create;