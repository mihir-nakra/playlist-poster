import config from "./config";


const spotifyUserAuth = () => {
    const scopes = ['playlist-read-collaborative', 'playlist-read-private', 'user-read-private', 'user-read-email'];
    const url = 'https://accounts.spotify.com/authorize?client_id=' + config.client_id + 
            '&redirect_uri=' + encodeURIComponent(config.redirect_uri) + 
            '&scope=' + encodeURIComponent(scopes.join(' ')) +
            '&response_type=token';
    window.location.replace(url);
}

const getUserPlaylists = async (token) => {
    const playlists = await makeRequest('https://api.spotify.com/v1/me/playlists?limit=50', token);
    return playlists.items;
}

const getUserInfo = async (token) => {
    const userInfo = await makeRequest('https://api.spotify.com/v1/me', token);
    console.log(userInfo);
    return {
        display_name: userInfo.display_name,
        id: userInfo.id,
        image: userInfo.images[0].url
    }
}

const makeRequest = async (url, token) => {
    const result = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
    return await result.json();
}

const exportObj = {
    spotifyUserAuth,
    getUserPlaylists,
    getUserInfo
}

export default exportObj