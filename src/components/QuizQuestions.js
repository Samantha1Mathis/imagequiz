import quizzes from './data';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

export default function QuizQuestions(props) {
    const [score, setScore] = useState("");
    const [buttonToggle, setButton] = useState(false);

    function onAnswer(event){
        setButton(true);
        //Check if the button selected contained the correct answer
        if (quizzes[props.quiz][props.question].choices[event.target.id] === quizzes[props.quiz][props.question].answer) {
            setScore("Correct! "+ quizzes[props.quiz][props.question].answer);
            props.onAnswer(true);
        } else {
            setScore("Wrong! The correct answer was '"+ quizzes[props.quiz][props.question].answer + "'");
            props.onAnswer(false);
        }
    }

    return (
        <Row>
            <Col>
                <Card style={{ width: '750px' }}>
                <Card.Header as="h5">Question {props.question + 1}</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                        <Card.Img style={{ width: '200px', height:'180px'}} variant="top" alt={quizzes[props.quiz][props.question].answer} src={quizzes[props.quiz][props.question].picture}/>
                        </Col>

                        <Col>
                            <Card.Title>Which flower shown above?</Card.Title>
                            <Row>
                            <Button variant="outline-primary" disabled={buttonToggle} id={0} onClick={onAnswer} > {quizzes[props.quiz][props.question].choices[0]}</Button>
                            </Row>
                            <br></br>
                            <Row>
                            <Button variant="outline-primary" disabled={buttonToggle} id={1} onClick={onAnswer} > {quizzes[props.quiz][props.question].choices[1]}</Button>
                            </Row>
                            <br></br>
                            <Row>
                            <Button variant="outline-primary" disabled={buttonToggle} id={2} onClick={onAnswer} > {quizzes[props.quiz][props.question].choices[2]}</Button>
                            </Row>
                            <br></br>
                            <Row>
                            <br></br>{score}   
                            </Row>
                        </Col>
                    </Row>    
                </Card.Body>
                </Card>
            </Col>
        </Row>
  );
}
