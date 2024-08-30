import { Container ,Row, Col} from "reactstrap";
import './Pending.css';

function Pending () {
    return (
        <>
        <div className="pending">
            <Container>
                <Row>
                    <Col xs="12">
                        <h5 className="text-center mt-5">Pending</h5>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Pending;