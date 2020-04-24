import React, { useState } from 'react'

function Header() {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <div className='header container'>
            <form className='search-form'>
                <input className='search-form__input' type='text' placeholder='Seacrh' value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                />
                <button className="search-form__button" type='button' onClick={() => setSearchTerm('')}>x</button>
            </form>

        </div>
    )
}

export default Header
