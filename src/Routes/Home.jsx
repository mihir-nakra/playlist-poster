import apiCalls from "../api-calls";
import { useCookies } from "react-cookie";
import Container from "../Components/UI/Container";
import styles from "./Home.module.css"
import Button from "../Components/UI/Button";

const Home = () => {
    const [cookies, setCookie] = useCookies(["token"]);
    const spotifyConnect = () => {
        apiCalls.spotifyUserAuth();
    };

    return (
        <Container>
            <div>
                <h1 className={styles.titleText}>Make your Playlist Poster</h1>
                <h4>create a custom movie poster for all your playlists</h4>
                <Button type="spotify" onClick={spotifyConnect}>Login with Spotify</Button>
            </div>
        </Container>
    );
};

export default Home;
