import React, { useState } from "react";

import ReactDOM from 'react-dom';

// reactstrap components
import { Row, Col, Container } from "reactstrap";

import logo from "../../assets/img/Logo_fundotransparente-03.png"

// core components

const questions = [
  {
    questionText: '55% do oxigénio que respiramos vem do oceano?',
    answerOptions: [
      { answerText: 'Sim', isCorrect: true },
      { answerText: 'Não', isCorrect: false },
    ],
  },
  {
    questionText: 'Quem é o mais velho?',
    answerOptions: [
      { answerText: 'Árvores', isCorrect: false },
      { answerText: 'Cianobactérias', isCorrect: true },
    ],
  },
  {
    questionText: 'Desde quando o oceano produz O2?',
    answerOptions: [
      { answerText: '3 minutos', isCorrect: false },
      { answerText: '3.5 bilhões de anos', isCorrect: true },
    ],
  },
  {
    questionText: 'Haverá relva no mar?',
    answerOptions: [
      { answerText: 'Sim', isCorrect: true },
      { answerText: 'Não', isCorrect: false },
    ],
  },
  {
    questionText: 'Quem produz mais O2?',
    answerOptions: [
      { answerText: 'A bactéria Prochlorococcus ', isCorrect: true },
      { answerText: 'Florestas tropicais', isCorrect: false },
    ],
  },
  {
    questionText: 'Quanto do CO2 que emitimos é absorvido pelo oceano?',
    answerOptions: [
      { answerText: '25%', isCorrect: true },
      { answerText: '2.5%', isCorrect: false },
    ],
  },
  {
    questionText: 'A fotossíntese depende de:',
    answerOptions: [
      { answerText: 'Luz solar', isCorrect: true },
      { answerText: 'Vento', isCorrect: false },
    ],
  },
  {
    questionText: 'O aumento da temperatura do oceano... ',
    answerOptions: [
      { answerText: 'Permite tomar mais banhos', isCorrect: false },
      { answerText: 'Reduz a produção de O2', isCorrect: true },
    ],
  },
  {
    questionText: 'O que são as zonas mortas?',
    answerOptions: [
      { answerText: 'Zonas com quantidades reduzidas de O2', isCorrect: true },
      { answerText: 'Cemitério das baleias', isCorrect: false },
    ],
  },
  {
    questionText: 'O oceano é um aliado capaz de combater as alterações climáticas?',
    answerOptions: [
      { answerText: 'Sim', isCorrect: true },
      { answerText: 'Não', isCorrect: false },
    ],
  },
];

let correct_answer = false;

function LandingPageHeader() {
  let pageHeader = React.createRef();

  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);

  const [showResults, setShowResults] = React.useState(false)

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerButtonClick = (ev, answerOption) => {
    const nextQuestion = currentQuestion + 1;

    if (answerOption) {
      ev.target.classList.add("rightAnswer");
      if (nextQuestion < questions.length) {
        setTimeout(() => {
          ev.target.classList.remove("rightAnswer");
          setCurrentQuestion(nextQuestion);
        }, 2000);
      } 
    }
    else {
      ev.target.classList.add("wrongAnswer");
      if (nextQuestion < questions.length) {
        setTimeout(() => {
          ev.target.classList.remove("wrongAnswer");
          setCurrentQuestion(nextQuestion);
        }, 2000);
      } 
    }



  };


  return (
    <>
      <div
        className="page-header-image"
        style={{
          'text-align': 'center',
          'background-image': 'url(' + require("assets/img/ondasFundo.png").default + ")",
          'background-repeat': 'no-repeat',
          'background-size': 'contain',
          'width': '100%'
        }}
      >
        <img src={logo} width="15%" className="logo" />

        <div className="content-center" style={{ 'height': '90vh' }}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <div className='quiz'>
                  <div className='question-section'>
                    <div className='question-text'>
                      <p className="syne quizQuestion">{questions[currentQuestion].questionText}</p>
                    </div>
                  </div>
                  <div className='answer-section' style={{ 'margin': '15px' }}>
                    <Row>
                      {questions[currentQuestion].answerOptions.map((answerOption) => (
                        <Col md="6">
                          <button className="quizButton" onClick={(ev) => handleAnswerButtonClick(ev, answerOption.isCorrect)}>
                            {answerOption.answerText}
                          </button>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>



    </>
  );
}

export default LandingPageHeader;
