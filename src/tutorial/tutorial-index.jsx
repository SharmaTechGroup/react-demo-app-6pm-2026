import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { TutorialHome } from "./tutorial-home";
import { JavaTutorial } from "./java-tutorial";
import { ReactTutorial } from "./react-tutorial";
import { WeatherApp } from "../components/weather-app/weather-app";

export function TutorialIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header>
                    <h2 className="text-center">Tutorial Index</h2>
                    <nav>
                        <span><Link to="/">Home</Link></span>
                        <span className="mx-5"><Link to="/java">Java Tutorial</Link></span>
                        <span className="me-5"><Link to="/react/hooks/state-hooks/4hrs">React Tutorial</Link></span>
                        <span><Link to="/weather">Weather</Link></span>
                    </nav>
                </header>
                <hr />
                <section>
                    <Routes>
                        <Route path="/" element={<TutorialHome />} />
                        <Route path="java" element={<JavaTutorial />} />
                        <Route path="react/:topic/:subtopic/:duration" element={<ReactTutorial />} />
                        <Route path="weather" element={<WeatherApp />} />
                        <Route path="*" element={<div className="text-warning"><h3>Not Found</h3><p>Page you requested not found.</p></div>} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}