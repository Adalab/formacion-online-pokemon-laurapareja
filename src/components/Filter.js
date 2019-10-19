import React from 'react';
import '../stylesheets/Filter.scss'


const Filter = (props) => {
    const { getFilterName } = props;
    return (
        <div className="filterName">
            <label htmlFor="filterName"></label>
            <input placeholder="Search for Pokemon" type="text" id="filterName" className="filterName" onChange={getFilterName}></input><i className="fas fa-search"></i>
        </div>
    )
}

export default Filter;