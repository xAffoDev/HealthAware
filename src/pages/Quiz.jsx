
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  RotateCcw,
  Trophy,
  XCircle,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { quizQuestions } from "../data/quizQuestions";

const QUESTIONS_PER_QUIZ = 10;

function shuffleArray(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function createQuiz() {
  const selectedQuestions = shuffleArray(quizQuestions).slice(
    0,
    Math.min(QUESTIONS_PER_QUIZ, quizQuestions.length)
  );

  return selectedQuestions.map((question) => ({
    ...question,
    options: shuffleArray(question.options),
  }));
}

function Quiz() {
  const [questions, setQuestions] = useState(() => createQuiz());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const progress = totalQuestions
    ? ((currentIndex + (answered ? 1 : 0)) / totalQuestions) * 100
    : 0;

  function handleAnswer(option) {
    if (answered) return;

    setSelectedOption(option);
    setAnswered(true);

    if (option === currentQuestion.answer) {
      setScore((previousScore) => previousScore + 1);
    }
  }

  function handleNext() {
    if (!answered) return;

    if (currentIndex === totalQuestions - 1) {
      setFinished(true);
      return;
    }

    setCurrentIndex((previousIndex) => previousIndex + 1);
    setSelectedOption(null);
    setAnswered(false);
  }

  function restartQuiz() {
    setQuestions(createQuiz());
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
  }

  if (!totalQuestions) {
    return (
      <section className="quiz-page">
        <div className="quiz-container">
          <h1>No quiz questions available</h1>
          <p>Please add questions to the question bank first.</p>
          <Link to="/topics" className="quiz-button">
            Explore health topics
          </Link>
        </div>
      </section>
    );
  }

  if (finished) {
    const percentage = Math.round((score / totalQuestions) * 100);

    let resultTitle = "Keep learning!";
    let resultMessage =
      "Every attempt is a chance to build your health awareness.";

    if (percentage === 100) {
      resultTitle = "Perfect score!";
      resultMessage =
        "Excellent work! You answered every question correctly.";
    } else if (percentage >= 70) {
      resultTitle = "Great job!";
      resultMessage =
        "You have a good understanding of these health awareness topics.";
    } else if (percentage >= 40) {
      resultTitle = "Good effort!";
      resultMessage =
        "You're making progress. Review the health topics and try again.";
    }

    return (
      <section className="quiz-page">
        <div className="quiz-container quiz-result">
          <div className="quiz-result-icon">
            <Trophy size={38} />
          </div>

          <span className="section-eyebrow">Quiz completed</span>
          <h1>{resultTitle}</h1>
          <p className="quiz-result-message">{resultMessage}</p>

          <div className="quiz-score-circle">
            <strong>{percentage}%</strong>
            <span>Your score</span>
          </div>

          <div className="quiz-result-stats">
            <div>
              <CheckCircle2 size={21} />
              <strong>{score}</strong>
              <span>Correct</span>
            </div>
            <div>
              <BookOpen size={21} />
              <strong>{totalQuestions}</strong>
              <span>Questions</span>
            </div>
            <div>
              <Sparkles size={21} />
              <strong>{totalQuestions - score}</strong>
              <span>To review</span>
            </div>
          </div>

          <div className="quiz-result-actions">
            <button
              type="button"
              className="quiz-button"
              onClick={restartQuiz}
            >
              <RotateCcw size={17} />
              Try a new quiz
            </button>

            <Link to="/topics" className="quiz-button secondary">
              Explore topics
              <ArrowRight size={17} />
            </Link>
          </div>

          <p className="quiz-disclaimer">
            This quiz is for educational purposes only and is not a
            substitute for professional medical advice.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="quiz-page">
      <div className="quiz-container">
        <Link to="/" className="quiz-back-link">
          <ArrowLeft size={17} />
          Back to Home
        </Link>

        <header className="quiz-header">
          <span className="section-eyebrow">Test your knowledge</span>
          <h1>Health Awareness Quiz</h1>
          <p>
            Answer 10 randomly selected questions and discover how much
            you know about everyday health.
          </p>
        </header>

        <div className="quiz-card">
          <div className="quiz-progress-header">
            <span>
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <span>{score} correct so far</span>
          </div>

          <div
            className="quiz-progress-track"
            role="progressbar"
            aria-label="Quiz progress"
            aria-valuemin={0}
            aria-valuemax={totalQuestions}
            aria-valuenow={currentIndex + (answered ? 1 : 0)}
          >
            <div
              className="quiz-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="quiz-question-meta">
            <span className="quiz-topic-badge">
              {currentQuestion.topic}
            </span>
            <span className="quiz-question-number">
              Question {currentIndex + 1}
            </span>
          </div>

          <h2 className="quiz-question">
            {currentQuestion.question}
          </h2>

          <div className="quiz-options">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedOption === option;
              const isCorrect = option === currentQuestion.answer;

              let optionClass = "quiz-option";

              if (answered && isCorrect) {
                optionClass += " correct";
              } else if (answered && isSelected && !isCorrect) {
                optionClass += " incorrect";
              } else if (isSelected) {
                optionClass += " selected";
              }

              return (
                <button
                  type="button"
                  key={`${currentQuestion.id}-${option}`}
                  className={optionClass}
                  onClick={() => handleAnswer(option)}
                  disabled={answered}
                  aria-pressed={isSelected}
                >
                  <span className="quiz-option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="quiz-option-text">{option}</span>

                  {answered && isCorrect && (
                    <CheckCircle2 className="quiz-option-status" size={20} />
                  )}

                  {answered && isSelected && !isCorrect && (
                    <XCircle className="quiz-option-status" size={20} />
                  )}
                </button>
              );
            })}
          </div>

          {answered && (
            <div
              className={`quiz-feedback ${
                selectedOption === currentQuestion.answer
                  ? "success"
                  : "error"
              }`}
              role="status"
              aria-live="polite"
            >
              <div className="quiz-feedback-title">
                {selectedOption === currentQuestion.answer ? (
                  <>
                    <CheckCircle2 size={21} />
                    Correct answer!
                  </>
                ) : (
                  <>
                    <XCircle size={21} />
                    Not quite. Learn from this one!
                  </>
                )}
              </div>

              <p>{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="quiz-card-footer">
            <span className="quiz-footer-hint">
              {answered
                ? "Ready for the next question?"
                : "Choose one answer to continue."}
            </span>

            <button
              type="button"
              className="quiz-button"
              onClick={handleNext}
              disabled={!answered}
            >
              {currentIndex === totalQuestions - 1
                ? "See my results"
                : "Next question"}
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        <p className="quiz-disclaimer">
          Educational quiz only. Health information here does not replace
          advice from a qualified healthcare professional.
        </p>
      </div>
    </section>
  );
}

export default Quiz;
