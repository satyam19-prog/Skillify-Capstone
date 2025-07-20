'use client';

import React, { useEffect, useState } from 'react';
import './Trivia.css';

export default function Aptitude() {
  const [qs, setQs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('https://the-trivia-api.com/v2/questions?limit=10&tags=general_knowledge')
      .then((r) => r.json())
      .then((data) => {
        setQs(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  const handleOpt = (opt) => {
    if (selected !== null) return;
    setSelected(opt);
    if (opt === qs[current].correctAnswer) setScore(score + 1);
  };

  const handleNext = () => {
    setSelected(null);
    setCurrent(current + 1);
  };

  if (loading) return <div className="centered">Loading aptitude questions...</div>;
  if (!qs.length) return <div className="centered">No questions found.</div>;

  const quizDone = current >= qs.length;

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Trivia Quiz</h1>

      {!quizDone ? (
        <div className="question-card fade-in">
          <p className="progress">Question {current + 1} of {qs.length}</p>
          <p className="question-text">{qs[current].question.text}</p>
          <div className="options-grid">
            {[qs[current].correctAnswer, ...qs[current].incorrectAnswers]
              .sort()
              .map((opt, idx) => {
                const correct = opt === qs[current].correctAnswer;
                const isPicked = opt === selected;
                let className = 'option-button';
                if (selected !== null) {
                  if (correct) className += ' correct';
                  else if (isPicked) className += ' wrong';
                  else className += ' disabled';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOpt(opt)}
                    disabled={selected !== null}
                    className={className}
                  >
                    {opt}
                  </button>
                );
              })}
          </div>

          {selected !== null && (
            <div className="footer">
              <span className="feedback">
                {selected === qs[current].correctAnswer
                  ? '✅ Correct!'
                  : `❌ Correct: ${qs[current].correctAnswer}`}
              </span>
              <button className="next-button" onClick={handleNext}>
                {current < qs.length - 1 ? 'Next →' : 'Finish'}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="centered fade-in">
          <h2 className="quiz-complete">Trivia Completed 🎉</h2>
          <p className="score">Your Score: {score} / {qs.length}</p>
          <p className="encouragement">
            {score === qs.length
              ? "🌟 Outstanding! You're a genius!"
              : score > qs.length * 0.7
              ? "💪 Great job!"
              : score > qs.length * 0.4
              ? "✨ Keep practicing!"
              : "📘 Don’t give up — try again!"}
          </p>
          <br/>
          <a href="/trivia" className="restart-button">RESTART</a>
        </div>
      )}
    </div>
  );
}