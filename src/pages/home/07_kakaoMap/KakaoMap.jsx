import Map from "../../../components/map/Map";
import "./KakaoMap.module.scss";
import { Row, Col } from 'react-bootstrap/'

const KakaoMap = () => {
    return (
        <Row>
            <Col xs={12}>
                <Row center="xs">
                    <Col xs={6}>
                        <Map />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default KakaoMap;