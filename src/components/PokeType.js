import React from 'react';
import '../stylesheets/PokeType.scss'

const PokeType = (props) => {
    const { type } = props
    return (
        <div className="pokeTypeItem">
            {type}
        </div>
    )
}

export default PokeType;