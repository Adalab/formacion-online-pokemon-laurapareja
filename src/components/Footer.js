import React from 'react';
import FooterLink from './FooterLink';
import '../stylesheets/Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <p className="copy">Licencia || &copy; 2019</p>
            <img src="./images/laurapareja.png" alt="logoLaura" className="logoLauraPareja"></img>
            <div>
                <FooterLink
                    classIcon="fab fa-linkedin"
                    socialLink="https://www.linkedin.com/in/laurapareja/"
                    linkText="/in/laurapareja" />
                <FooterLink
                    classIcon="fab fa-github"
                    socialLink="https://github.com/laurapareja"
                    linkText="/laurapareja" />
                <FooterLink
                    classIcon="fab fa-twitter-square"
                    socialLink="https://twitter.com/_laurapareja_"
                    linkText="@_laurapareja_" />
            </div>
        </footer>
    )
}

export default Footer;