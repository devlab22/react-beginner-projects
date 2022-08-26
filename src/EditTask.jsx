import React from 'react'
import { useState } from 'react'

export default function EditTask({ id, title, text, checked, OnSave, OnCancel }) {

    const [myChecked, setMyChecked] = useState(checked)
    const [myTitle, setMyTitle] = useState(title);
    const [myText, setMyText] = useState(text);

    const OnSaveTask = () => {

        const task = {
                "id": id, 
                "checked": myChecked, 
                "title": myTitle, 
                "text": myText
            }

        OnSave(task);
    }

    return (
        <div className="item popup">
            <input className="styled-checkbox" id="popup" type="checkbox" value="value1" checked={myChecked} onChange={(e) => setMyChecked(e.target.checked)} />
            <label htmlFor='popup'/>
            <div className='item__content'>
           
                <input type="text" placeholder="Title" className="item__content__title" value={myTitle} onChange={(e) => setMyTitle(e.target.value)} />
                <br />
                <textarea rows="10" className='item__content__text' placeholder="Text..." value={myText} onChange={(e) => setMyText(e.target.value)} />
                       
            <div className="item__bottom">
                <ul>
                    <li>
                        <button className='button accept' onClick={() => OnSaveTask()}>Speichern</button>
                    </li>
                    <li>
                        <button className='button reject' onClick={OnCancel}>Abbrechen</button>
                    </li>
                </ul>
            </div>
            </div>
        </div>

    )
}
