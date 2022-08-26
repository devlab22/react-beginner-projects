import React from 'react'
import { useState } from 'react'
import Task from './Task'

function TaskList({items, OnTaskChecked, typeId, OnDeleteTask, OnAddTask, OnEditTask}) {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [checked, setChecked] = useState(false);

    const OnAdd = () => {

        const date = new Date()

        const task = {
            "id": Math.max(...items.map(o => o.id)) + 1,
            "title": title,
            "text": text,
            "checked": checked,
            "begda": date.toISOString().slice(0,10)
        }

        if (task.title.length === 0 || task.text.length === 0){
            window.alert("titel oder text ist leer")
            return;
        }
        OnAddTask(task);
        clearValues();
       
    }

    const clearValues = () => {

        setTitle('');
        setText('');
        setChecked(false);
    }
    
    return (
        <div>

           {
            items.filter(obj => {

                if (typeId === 0){
                    return obj;
                }
                else if (typeId === 1 && obj.checked === false){
                    return obj;
                }
                else if (typeId === 2 && obj.checked){
                    return obj;
                }

                return null
            }).map((task, index) => <Task key={index} {...task} OnTaskChecked={OnTaskChecked} OnDeleteTask={OnDeleteTask} OnEditTask={OnEditTask}/>)
           }

            <div className="form">
                <div className="form__checkbox">
                    <input className="styled-checkbox" id="add-checkbox" type="checkbox" value="value1" checked={checked} onChange={(e) => setChecked(e.target.checked)}/>
                    <label htmlFor="add-checkbox" />
                </div>
                <div className="form__fields">
                    <input type="text" placeholder="Titel" className="input-title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <input type="text" placeholder="Text..." className="input-text" value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
                <svg onClick={OnAdd} height="32px" viewBox="0 0 512 512" width="32px">
                    <g>
                        <g>
                            <g>
                                <path d="M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7     c-105.1,0-190.7-85.5-190.7-190.7S150.9,65.3,256,65.3S446.7,150.9,446.7,256S361.1,446.7,256,446.7z" />
                            </g>
                        </g>
                        <g>
                            <polygon points="264.1,128 247.3,128 247.3,247.9 128,247.9 128,264.7 247.3,264.7 247.3,384 264.1,384 264.1,264.7 384,264.7     384,247.9 264.1,247.9   " />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default TaskList