import styles from "./Navbar.module.css"

const Navbar = (props) => {
    console.log(styles);
    return <nav className={"navbar navbar-expand-lg " + styles.navBg}>
        <div className="container-fluid">
            <a className={"navbar-brand " + styles.navBrandText} href="/">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarToggler">
                <ul className="navbar-nav ms-auto">
                    <a className={"nav-link " + styles.navLinkText} href="/about">About</a>
                    <a className={"nav-link " + styles.navLinkText} href="/privacy-policy">Privacy Policy</a>
                    <a className={"nav-link " + styles.navLinkText} href="/support-us">Support Us</a>

                </ul>
            </div>
            </div>

    </nav>;
};

export default Navbar;
