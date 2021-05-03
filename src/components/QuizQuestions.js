import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import api from '../communication/api';

export default function QuizQuestions(props) {
    const [score, setScore] = useState("");
    const [buttonToggle, setButton] = useState(false);
    const [quizzes, setQuiz] = useState([]);
    function onAnswer(event){
        setButton(true);
        //Check if the button selected contained the correct answer
        if (props.json[0]["json_agg"][props.question].choices.split(",")[event.target.id] === props.json[0]["json_agg"][props.question].answer) {
            setScore("Correct! "+ props.json[0]["json_agg"][props.question].answer);
            props.onAnswer(true);
        } else {
            setScore("Wrong! The correct answer was '"+ props.json[0]["json_agg"][props.question].answer + "'");
            props.onAnswer(false);
        }
    }
    useEffect(() => {
        if(quizzes.length === 0) {
            api.getQuizzes()
            .then(x => setQuiz(x))
            .catch(e => console.log(e));
        }
    });

    function createQuiz(){
        if (quizzes.length === 0){
            return [];
        }
    return (

        <Card style={{ width: '750px' }}>
        <Card.Header as="h5">Question {props.question + 1}</Card.Header>
        {props.json.length === 0 ? <Card.Body>Loading..</Card.Body> :
        <Card.Body>
            <Row>
                <Col>
                <Card.Img style={{ width: '200px', height:'180px'}} variant="top" alt={props.json[0]["json_agg"][props.question].answer} src={props.json[0]["json_agg"][props.question].flower}/>
                </Col>

                <Col>
                    <Card.Title>Which flower is shown?</Card.Title>
                    <Row>
                    <Button variant="outline-primary" disabled={buttonToggle} id={0} onClick={onAnswer} > {props.json[0]["json_agg"][props.question].choices.split(",")[0]}</Button>
                    </Row>
                    <br></br>
                    <Row>
                    <Button variant="outline-primary" disabled={buttonToggle} id={1} onClick={onAnswer} > {props.json[0]["json_agg"][props.question].choices.split(",")[1]}</Button>
                    </Row>
                    <br></br>
                    <Row>
                    <Button variant="outline-primary" disabled={buttonToggle} id={2} onClick={onAnswer} > {props.json[0]["json_agg"][props.question].choices.split(",")[2]}</Button>
                    </Row>
                    <br></br>
                    <Row>
                    <br></br>{score}   
                    </Row>
                </Col>
            </Row>    
        </Card.Body>}
        </Card>

  );
}
    return (
        <Row>
            <Col>
                {createQuiz()}
            </Col>
        </Row>
    );
}