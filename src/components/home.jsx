import React from "react";
const Home = () => {
    return (
        <section className="section">
            <div
                className="header slide_in_left"
                style={{ position: "relative" }}
            >
                <h4>I am a Full Stack Developer.<br /> Fascinated by technology and a life-long learner.</h4>
            </div>
            <div className="center slide_in_up">
                <a href="/contact">
                    Contact Me
            <span></span>
                </a>
            </div>
        </section>
    );
}


export default Home;
