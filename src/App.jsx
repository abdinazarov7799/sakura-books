import Header from "./sections/Header.jsx";
import Banner from "./sections/Banner.jsx";
import AboutUs from "./sections/AboutUs.jsx";
import Features from "./sections/Features.jsx";
import MyBooks from "./sections/Books.jsx";
import Examples from "./sections/Examples.jsx";
import News from "./sections/News.jsx";
import Feedbacks from "./sections/Feedbacks.jsx";
import Newsletter from "./sections/Newsletter.jsx";
import Contact from "./sections/Contact.jsx";
import MapSection from "./sections/MapSection.jsx";
import Footer from "./sections/Footer.jsx";
import {useRef, useState} from "react";

function App() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const booksRef = useRef(null);
    const newsRef = useRef(null);
    const contactRef = useRef(null);
    const refs = {homeRef,aboutRef, booksRef, newsRef, contactRef}
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <div>
            <Header ref={homeRef} refs={refs} onSearch={handleSearch} />
            <Banner/>
            <AboutUs ref={aboutRef}/>
            <MyBooks ref={booksRef} searchQuery={searchQuery}/>
            <Features/>
            <Examples/>
            <News ref={newsRef}/>
            <Feedbacks/>
            <Newsletter/>
            <Contact ref={contactRef}/>
            <MapSection/>
            <Footer refs={refs}/>
        </div>
    )
}

export default App
