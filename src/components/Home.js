import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import flowers from './data';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container'

function Home(){
    return (
        <Row>
            <Col>
                <br></br>
               <b>My Home Page</b>
                <br></br>
                <br></br>
                <Container fluid="md">
                {addFlowers()}
                </Container>
            </Col>
        </Row>
    );
}

function addFlowers() {
    let images = [];
    for (let element in flowers) {
        images.push(<Figure width="160px" height="120px">
            <Figure.Image class="img-fluid" width="150px" height="100px"
                alt={flowers[element].name}
                src={flowers[element].picture} />
            <Figure.Caption>{flowers[element].name}</Figure.Caption>
        </Figure>)
    }
    return images;
}

export default Home;