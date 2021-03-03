import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';


function Login(){
    const history = useHistory();

    let onLogin = () =>
        history.push('/home');
        
    return (
        <Row><Col>
            <Form onSubmit={onLogin}>
                <Form.Group controlId="email">
                    <Form.Label> Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email"/>
                    <Form.Text className="text-muted">
                        This is private!
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        
        </Col></Row>
    )
}