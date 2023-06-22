import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import apiCalls from "../api-calls.js";
import Card from "../Components/UI/Card.jsx";
import styles from "./Generate.module.css"

const Generate = (props) => {
    const [cookies, setCookie] = useCookies(["token"]);
    const [playlists, setPlaylists] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    if (!cookies.token) {
        window.location.replace("/");
    }
    const token = cookies.token;
    useEffect(() => {
        async function fetchData() {
            setPlaylists(await apiCalls.getUserPlaylists(token));
            setUserInfo(await apiCalls.getUserInfo(token));
        }
        fetchData();
    }, [token]);

    const onPlaylistSelect = (id) => {
        window.location.replace("/create/" + id)
    }

    return (
        <div className="container mx-auto">
            <h2>{userInfo.display_name}'s playlists</h2>
            <hr />
            <div className="row">
                {playlists.map((playlist) => {
                    if (playlist.owner.display_name === userInfo.display_name) {
                        return (
                            <div className="col col-xl-3 col-lg-4">
                                <Card
                                    className={styles.safeArea + " mx-auto"}
                                    key={playlist.id}
                                    title={playlist.name}
                                    src={playlist.images[0].url}
                                    onClick={onPlaylistSelect}
                                    id={playlist.id}
                                ></Card>
                            </div>
                        );
                    } else {
                        return <></>
                    }
                })}
            </div>
        </div>
    );
};

export default Generate;
