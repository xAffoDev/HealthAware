
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  RotateCcw,
  XCircle,
} from "lucide-react";
import { quizQuestions } from "../data/quizQuestions";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = quizQuestions[currentQuestion];
  const selectedAnswer = selectedAnswers[question.id];
  const isCorrect = selectedAnswer === question.answer;
  const score = quizQuestions.filter(
    (item) => selectedAnswers[item.id] === item.answer
  ).length;

  function handleAnswer(option) {
    if (showFeedback) return;

    setSelectedAnswers((previous) => ({
      ...previous,
      [question.id]: option,
    }));
    setShowFeedback(true);
  }

  function handleNext() {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
      setShowFeedback(false);
    } else {
      setQuizFinished(true);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowFeedback(false);
    setQuizFinished(false);
  }

  if (quizFinished) {
    const percentage = Math.round(
      (score / quizQuestions.length) * 100
    );

    let resultMessage = "Keep learning and building your awareness.";

    if (percentage >= 80) {
      resultMessage = "Excellent work! You have a strong understanding of these topics.";
    } else if (percentage >= 50) {
      resultMessage = "Good effort! Review the explanations to strengthen your knowledge.";
    }

    return (
      <section className="quiz-page">
        <div className="quiz-container">
          <div className="quiz-result-card">
            <div className="quiz-result-icon">
              <CheckCircle2 size={38} />
            </div>

            <span className="section-eyebrow">Quiz Completed</span>
            <h1>Your health awareness result</h1>

            <div className="quiz-score">
              <strong>{score}</strong>
              <span>out of {quizQuestions.length}</span>
            </div>

            <div className="quiz-result-progress">
              <div style={{ width: `${percentage}%` }} />
            </div>

            <p className="quiz-percentage">{percentage}% score</p>
            <p className="quiz-result-message">{resultMessage}</p>

            <div className="quiz-result-actions">
              <button
                type="button"
                className="quiz-primary-button"
                onClick={restartQuiz}
              >
                <RotateCcw size={17} />
                Try Again
              </button>

              <Link to="/topics" className="quiz-secondary-button">
                Explore Health Topics
                <ArrowRight size={17} />
              </Link>
            </div>

            <p className="quiz-disclaimer">
              This quiz is for educational awareness only. It is not
              a medical assessment or diagnosis.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <section className="quiz-page">
      <div className="quiz-container">
        <Link to="/" className="quiz-back-link">
          <ArrowLeft size={17} />
          Back to Home
        </Link>

        <div className="quiz-header">
          <span className="section-eyebrow">Test Your Knowledge</span>
          <h1>Health Awareness Quiz</h1>
          <p>
            Answer these questions to check your understanding
            of everyday health and preventive care.
          </p>
        </div>

        <div className="quiz-card">
          <div className="quiz-card-top">
            <span>
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span>{Math.round(progress)}% completed</span>
          </div>

          <div className="quiz-progress-track">
            <div style={{ width: `${progress}%` }} />
          </div>

          <h2>{question.question}</h2>

          <div className="quiz-options">
            {question.options.map((option) => {
              const isSelected = selectedAnswer === option;
              const isAnswer = question.answer === option;

              let optionClass = "quiz-option";

              if (showFeedback && isAnswer) {
                optionClass += " correct";
              } else if (showFeedback && isSelected && !isAnswer) {
                optionClass += " incorrect";
              } else if (isSelected) {
                optionClass += " selected";
              }

              return (
                <button
                  type="button"
                  key={option}
                  className={optionClass}
                  onClick={() => handleAnswer(option)}
                  disabled={showFeedback}
                >
                  <span className="quiz-option-letter">
                    {String.fromCharCode(
                      65 + question.options.indexOf(option)
                    )}
                  </span>

                  <span>{option}</span>

                  {showFeedback && isAnswer && (
                    <CheckCircle2 size={19} />
                  )}

                  {showFeedback && isSelected && !isAnswer && (
                    <XCircle size={19} />
                  )}
                </button>
              );
            })}
          </div>

          {showFeedback && (
            <div
              className={`quiz-feedback ${isCorrect ? "feedback-correct" : "feedback-incorrect"}`}
            >
              <strong>
                {isCorrect ? "Correct answer!" : "Not quite. Learn from this:"}
              </strong>
              <p>{question.explanation}</p>
            </div>
          )}

          <div className="quiz-card-footer">
            <span className="quiz-score-preview">
              Correct answers: {score}/{quizQuestions.length}
            </span>

            <button
              type="button"
              className="quiz-primary-button"
              onClick={handleNext}
              disabled={!showFeedback}
            >
              {currentQuestion === quizQuestions.length - 1
                ? "View Results"
                : "Next Question"}
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        <p className="quiz-disclaimer">
          This quiz provides general health education only and does
          not replace advice from a qualified healthcare professional.
        </p>
      </div>
    </section>
  );
}

export default Quiz;
