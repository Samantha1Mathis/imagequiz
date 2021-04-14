import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuizQuestions from './QuizQuestions';
import { useState } from 'react';
import api from '../communication/api';

export default function Quiz(props) {
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(1);

    function onRestart(event){
        window.location.reload();
    }
    function onAnswer(answer) {
        setCount(count + 1);
        let lastScore = 0;
        if (answer) {
            setScore(score + 1);
            lastScore = 1;
        }

        if (answer >= 6){
            let result = {score: score+lastScore};
            api.addScores(result)
            .catch(e => console.log(e));
        }
    }

    return (
        <Col>
            <br></br>
            <Row>
                <h2>Score: {score}/6</h2>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <Button onClick={onRestart}>Restart Quiz</Button>
            </Row>
            <br></br>
            <Row>
                <QuizQuestions onAnswer={onAnswer} quiz={props.quiz} question={0} />
            </Row>
            <Row>
                <QuizQuestions onAnswer={onAnswer} quiz={props.quiz} question={1} />
            </Row>
            <Row>
                <QuizQuestions onAnswer={onAnswer} quiz={props.quiz} question={2} />
            </Row>
            <Row>
                <QuizQuestions onAnswer={onAnswer} quiz={props.quiz} question={3} />
            </Row>
            <Row>
                <QuizQuestions onAnswer={onAnswer} quiz={props.quiz} question={4} />
            </Row>
            <Row>
                <QuizQuestions onAnswer={onAnswer} quiz={props.quiz} question={5} />
            </Row>
        </Col>
    );
}