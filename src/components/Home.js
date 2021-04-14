import flowers from './flowers';
import { Link } from "react-router-dom";
import Figure from 'react-bootstrap/Figure';
import 'bootstrap/dist/css/bootstrap.css';
import {useState, useEffect} from 'react';
import api from "../communication/api";


function Home(props) {
    const [flowers, setFlowers] = useState([]);

    function onImage(event){
        props.onQuiz(event.target.id);
    }
 
    useEffect(() => {
        if(flowers.length === 0) {
            api.getFlowers()
            .then(x => setFlowers(x))
            .catch(e => console.log(e));
        }
    });

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Home Page</h2>
            {createFlowers()}
        </div>
    );

    function createFlowers() {
        let images = [];
        let i = 0;
        for (let element in flowers) {
            images.push(<Link id={i} onClick={onImage} className='link' to="/quiz">
                <Figure id={i}>
                    <Figure.Image id={i} style={{ width: '200px', height:'150px'}}
                        alt={flowers[element].name}
                        src={flowers[element].picture} />
                    <Figure.Caption id={i}>{flowers[element].name}</Figure.Caption>
                </Figure>
            </Link>)
            i++;
        }
        return images;
    }

}

export default Home;