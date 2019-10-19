import React from 'react';
import Filter from './Filter';
import '../stylesheets/Header.scss'

const Header = (props) => {
    const { getFilterName } = props
    return (
        <header className="header">
            <div className="body">
                <img src="./images/pokedex.png" alt="logo Pokedex" className="logoPokedex"></img>
                <img src="./images/pikachubackground.png" alt="logo Pokedex" className="logoPikachu"></img>
                <Filter getFilterName={getFilterName} />

            </div>
        </header>
    )
}

export default Header;