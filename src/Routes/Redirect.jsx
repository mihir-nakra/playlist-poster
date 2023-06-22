import { useCookies } from "react-cookie";

const Redirect = () => {
    const[cookies, setCookie] = useCookies(['token']);
    const token = window.location.hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
    setCookie('token', token, {path: '/'});
    window.location.replace("/generate");
}

export default Redirect;