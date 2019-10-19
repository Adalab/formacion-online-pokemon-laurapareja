import React from 'react';


const FooterLink = (props) => {
    const { classIcon, socialLink, linkText } = props;

    return (
        <div>
            <i className={classIcon}></i>
            <a className="footer_link" target="_blank" rel="noopener noreferrer"
                href={socialLink}>{linkText}</a>
        </div>
    )
}

export default FooterLink;
