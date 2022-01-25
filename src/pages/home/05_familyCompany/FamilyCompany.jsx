import { Container, Row , Col, Image} from 'react-bootstrap'

import Styles from "./FamilyCompany.module.scss";

import Family from "../../../assets/family_top.png";
import Bigband from "../../../assets/family1.gif";
import Naturally from "../../../assets/family2.gif";
import ContainerBox from '../../../components/layoutBox/ContainerBox';

const FamilyCompany = () => {
    return (
        <ContainerBox>
            <Row>
                <Col>
                    <Image className={Styles.family__logo} src={Family}/>
                </Col>
            </Row>
            <Row>
                <div className={Styles.family__img}>
                    <Col>
                        <Image src={Bigband} />
                        <Image src={Naturally} />
                    </Col>
                </div>
            </Row>
        </ContainerBox>
    )
}

export default FamilyCompany;