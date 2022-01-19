import { Container, Row , Col, Image} from 'react-bootstrap'

import Styles from "./FamilyCompany.module.scss";

import Family from "../../../assets/family_top.gif";
import Bigband from "../../../assets/family1.gif";
import Naturally from "../../../assets/family2.gif";

const FamilyCompany = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Image className={Styles.family__img} src={Family}/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Image className={Styles.family__img} src={Bigband} />
                </Col>
                <Col>
                <Image className={Styles.family__img} src={Naturally} />
                </Col>
            </Row>
        </Container>
    )
}

export default FamilyCompany;