import { useEffect, useState } from 'react';
import './index.scss';
import TaskList from './TaskList';
import Header from './Header';
import EditTask from './EditTask';

function App() {

  const [typeId, setTypeId] = useState(0);
  const [taskTypes, setTaskTypes] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [popup, setPopup] = useState(false);
  const [editTask, setEditTask] = useState({});
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setTaskTypes(['Alle', 'Offen', 'Abgeschlossen'])
    const items = [
      {
        "id": 1,
        "checked": false,
        "title": "React",
        "text": "React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.",
        "begda": "2022-08-10"
      },
      {
        "id": 2,
        "checked": false,
        "title": "JavaScript",
        "text": "JavaScript (JS) ist eine leichtgewichtige, interpretierte oder JIT-übersetzte Sprache mit First-Class-Funktion. Bekannt ist sie hauptsächlich als Skriptsprache für Webseiten geworden, jedoch wird sie auch in vielen Umgebungen außerhalb des Browsers wie zum Beispiel Node.js, Apache CouchDB und Adobe Acrobat eingesetzt. JavaScript ist eine prototypbasierte Sprache, die mehreren Paradigmen folgt, dynamisch ist und sowohl objektorientierte, imperative als auch deklarative Programmierung (z. B. funktionales Programmieren) ermöglicht. Weitere Informationen über JavaScript.",
        "begda": "2022-08-10"
      },
      {
        "id": 3,
        "checked": true,
        "title": "Python",
        "text": "Python ist eine interpretierte, höhere Programmiersprache, die mit dem Ziel einer guten Programmlesbarkeit entworfen und anfangs im Hochschul- und Ausbildungsbereich als Lehrsprache eingesetzt wurde. Python liegt derzeit in der Version 3.4 vor und wird durch die Python Software Foundation getragen.",
        "begda": "2022-08-18"
      }
    ]

    setTasks(items)
  }, [])

  const OnChangeType = (index) => {
    setTypeId(index)
  }

  const OnTaskChecked = (id, checked) => {

    setTasks(prev => prev.map(obj => {

      if (obj.id === id) {
        obj.checked = checked;
      }

      return obj;
    }))
  }

  const OnDeleteTask = (id) => {
    setTasks(prev => prev.filter(obj => obj.id !== id))
  }

  const OnDeleteTasks = () => {
    setTasks([]);
  }

  const OnAddTask = (task) => {
    console.log(task)
    setTasks(prev => [...prev, task])
  }

  const OnEditTask = (task) => {
    
    setEditTask(task);
    setPopup(true);
  }

  const OnSaveTask = (task) => {
    
    setTasks(prev => prev.map(obj => {

      if(obj.id === task.id){
        obj.title = task.title;
        obj.text = task.text;
        obj.checked = task.checked;
      }

      return obj;
    }))
    setPopup(false)
  }

  const OnCancel = () => {
    setPopup(false)
  }

  return (
    <div className="App">


      {
        popup ? (
          <EditTask
            {...editTask}
            OnSave={OnSaveTask}
            OnCancel={OnCancel}
          />
        ) : (
          <div>
            <Header 
              items={taskTypes} 
              OnChange={OnChangeType} 
              typeId={typeId} 
              OnDeleteTasks={OnDeleteTasks} 
              />

            <TaskList
              items={tasks}
              OnTaskChecked={OnTaskChecked}
              typeId={typeId}
              OnDeleteTask={OnDeleteTask}
              OnAddTask={OnAddTask}
              OnEditTask={OnEditTask} />
          </div>
        )
      }



    </div>
  );
}

export default App;
