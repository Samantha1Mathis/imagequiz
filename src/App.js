import { HashRouter, Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Home from './components/Home';
import Login from './components/Login';
import NavigationBar from "./components/NavigationBar";
import { useState } from 'react';
import Quiz from './components/Quiz';

function App() {
    const [username, setUsername] = useState(localStorage.getItem('username') || '');
    const [quiz, setQuiz] = useState(localStorage.getItem('quizIndex') || 0);

    function onLoggedIn(email){
        localStorage.setItem('username', email);
        setUsername(email);
    }

    function onQuiz(quizIndex){
        localStorage.setItem('quizIndex', quizIndex);
        setQuiz(quizIndex);
    }
    return (
        <HashRouter>
            <Container fluid>
                <NavigationBar username={username} />
                <Switch>
                    <Route exact path="/">
                        <Home onQuiz={onQuiz}/>
                    </Route>
                    <Route path="/login" >
                        <Login onLoggedIn={onLoggedIn} />
                    </Route>
                    <Route path="/quiz" >
                        <Quiz quiz={quiz}/>
                    </Route>
                </Switch>
            </Container>
        </HashRouter>
    );
}

export default App;