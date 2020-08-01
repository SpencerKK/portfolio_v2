import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-wrapper">
            <h1>Contact Me Anytime</h1>
            <div className="contact-div">
                <a href="mailto:kenealy@me.com"><i className="far fa-envelope"></i></a>
                <a href="https://github.com/SpencerKK"><i className="fab fa-github"></i></a>
            </div>
        </div>
    )
}

export default Contact;