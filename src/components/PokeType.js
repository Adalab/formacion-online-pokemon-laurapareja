import React from 'react';

const PokeType = (props) => {
    const { type } = props
    return (
        <div className="pokeTypeItem">
            {type}
        </div>
    )
}

export default PokeType;