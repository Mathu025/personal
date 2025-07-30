import React from 'react'

const Select = () => {
  return (
    <>
    <input type="text" placeholder="Type in Game"/>
    <div>
        <select>
            <option value="">All Genres</option>
            <option value="Action">Action</option>
            <option value="Sports">Sports</option>
            <option value="Adventure">Adventure</option>
        </select>

        <select>
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