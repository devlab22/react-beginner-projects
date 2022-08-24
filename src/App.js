import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({correct, onAgain}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='iamge'/>
      <h2>{`Вы отгадали ${correct} из ${questions.length}`}</h2>
      <button onClick={onAgain}>Попробовать снова</button>
    </div>
  );
}

function Game({clickVariant, step}) {

  const percentage = Math.round((step / questions.length * 100))
  const question = questions[step]
  
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        { 
        question.variants.map((text, index) => 
          (<li key={index} onClick={() => clickVariant(index)}>{text}</li>)
          )
        }
      </ul>
    </>
  );
}

function App() {

  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0)
  
  const OnClickVariant = (result) => {

    if(questions[step].correct === result){
      setCorrect(correct + 1)
    }

    setStep(step + 1)
  }

  const OnAgain = () => {
    setStep(0)
    setCorrect(0)
  }

  return (
    <div className="App">

      { 
      step < questions.length ? (
        <Game clickVariant={OnClickVariant} step={step}/>
      ) : 
      (<Result correct={correct} onAgain={OnAgain}/>)
      }
      
      
    </div>
  );
}

export default App;
