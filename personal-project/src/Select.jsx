import React from 'react'
import "./Select.css"

const Select = () => {
    return (
    <>
    <div className='br'>
    <input type="text" placeholder="Type in Game" className="input"/>
    
        <select className="select">
            <option value="">All Genres</option>
            <option value="Action">Action</option>
            <option value="Sports">Sports</option>
            <option value="Adventure">Adventure</option>
        </select>

        <select className="select">
            <option value="">All Platforms</option>
            <option value="Xbox">Xbox</option>
            <option value="Pc">Pc</option>
            <option  value="PlayStation">PlayStation</option>
        </select>
        
    
    </div>
    </>
    )
}

export default Select