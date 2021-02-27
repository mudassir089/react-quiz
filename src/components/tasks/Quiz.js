import React, { useState, useEffect } from "react";
import "../../quiz.css";
import quizService from "../quizService";
import QuestionBox from "./QuestionBox";
import Result from "./Result";
function Quiz({ match }) {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [responses, setResponse] = useState(0);

  const getQuestion = () => {
    quizService().then((ques) => {
      setQuestions(ques);
    });
  };

  const checkAnswer = (answer, correctAns) => {
    if (answer === correctAns) {
      setScore(score + 1);
    }
    setResponse(responses < 5 ? responses + 1 : 5);
  };

  const playAgain = () => {
    getQuestion();
    setScore(0);
    setResponse(0);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <>
      <div className="containers">
        <div className="title">{match.params.name}</div>

        {questions.length > 0 &&
          responses < 5 &&
          questions.map(({ question, answers, questionId, correct }) => (
            <QuestionBox
              question={question}
              options={answers}
              key={questionId}
              selected={(answer) => checkAnswer(answer, correct)}
            />
          ))}
        {responses === 5 ? (
          <Result score={score} playAgain={playAgain} />
        ) : null}
      </div>
      <div class="card" style={{ width: 300, display: "flex" }}>
        <div class="card-header">
          <div>SCORE</div>
          <div>Mudassir</div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
