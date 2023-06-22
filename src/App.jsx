import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Redirect from "./Routes/Redirect";
import Generate from "./Routes/Generate";
import { CookiesProvider } from "react-cookie";
import Navbar from "./Components/UI/Navbar";
import styles from "./App.module.css"
import Footer from "./Components/Footer";
import Container from "./Components/UI/Container";
import Create from "./Routes/Create";

function App() {
    return (
        <CookiesProvider>
            <BrowserRouter>
                <div className={styles.defaultFont}>
                    <Navbar />
                    <Container>
                        <Routes>
                            <Route index element={<Home />}></Route>
                            <Route path="redirect" element={<Redirect />}></Route>
                            <Route path="generate" element={<Generate />}></Route>
                            <Route path="create/:id" element ={<Create />}></Route>
                        </Routes>
                    </Container>
                    
                    <Footer />
                </div>
            </BrowserRouter>
        </CookiesProvider>
    );
}

export default App;
