import QUESTIONS from '../questions.js';
import quizcompletimg from '../assets/quiz-complete.jpg';

export default function Summary({ userAnswers }) {
    const skippedAnswers = userAnswers.filter((answer) => answer === null);
    const correctAnswers = userAnswers.filter(
        (answer, index) => answer === QUESTIONS[index].answers[0]
    );
    const skippedAnswerShare = Math.round(
        (skippedAnswers.length / userAnswers.length) * 100
    );

    const correctAnswersShare = Math.round(
        (correctAnswers.length / userAnswers.length) * 100
    );

    const wrongAnswersShare = 100 - skippedAnswerShare - correctAnswersShare;

    return (
        <div id="summary">
            <h2>Quiz Completed</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswerShare}%</span>
                    <span className="text"> skipped </span>
                </p>
                <p>
                    <span className="number">{correctAnswersShare}%</span>
                    <span className="text"> answered correctly </span>
                </p>
                <p>
                    <span className="number">{wrongAnswersShare}%</span>
                    <span className="text"> answered incorrectly </span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer';

                    if (answer === null) {
                        cssClass += ' skipped';
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += ' correct';
                    } else {
                        cssClass += ' wrong';
                    }

                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={cssClass}>Your Answer: {answer ?? 'skipped'}</p>
                            {answer !== null && (
                                <p className="correct-answer">
                                    Correct Answer: {QUESTIONS[index].answers[0]}
                                </p>
                            )}
                        </li>
                    );
                })}
            </ol>
            <img src={quizcompletimg} alt="trophy image" />
        </div>
    );
}
