import React from 'react'

function Header({ items, OnChange, typeId, OnDeleteTasks, OnChangeSearchValue, searchValue }) {
    return (
        <div className="top">
            <ul className="tabs">

                {
                    items.map((value, index) => <li key={index} className={typeId === index ? 'active' : ''} onClick={() => OnChange(index)}>{value}</li>)
                }

                <li>
                    <div className="search">
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                        </svg>
                        <input value={searchValue} onChange={(e) => OnChangeSearchValue(e.target.value)} type="text" placeholder="Suche..." />
                    </div>
                </li>

            </ul>


            <svg onClick={OnDeleteTasks} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z" />
            </svg>
        </div>
    )
}

export default Header