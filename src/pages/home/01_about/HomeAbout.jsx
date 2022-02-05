import ContainerBox from '../../../components/layoutBox/ContainerBox';
import FlexBox from '../../../components/layoutBox/FlexBox';
import Item2Col from '../../../components/layoutBox/Item2Col';

import Styles from "./HomeAbout.module.scss";

import About01 from "../../../assets/about01.png";
import About02 from "../../../assets/about02.png";
import About03 from "../../../assets/about03.png";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
// ..
AOS.init();

const HomeAbout = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);
    
    return (
        <ContainerBox>
            <FlexBox>
                <div data-aos="fade-up" ease-out className={Styles.about__img}>
                    <img  src={About01} alt=''/>
                </div>
                <div data-aos="fade-up" className={Styles.about__img}>
                    <img  src={About02} alt=''/>
                </div>
                <div data-aos="fade-up" className={Styles.about__img}>
                    <img  src={About03} alt=''/>
                </div>
            </FlexBox>
            <FlexBox>
                <Item2Col>
                    <div data-aos="fade-right">
                        빅밴드는 디지털 음반 유통 전문회사입니다.뮤지션과 빅밴드가 함께 일을 한다는
                        것은 완전히 새로운 경험일 것입니다.
                        왜냐하면 뮤지션들이 어떠한 음악을 하던지 간에 빅밴드의 “Fun & Creative” 한
                        유통 서비스가 아름다운 세상을 만드는데 큰 도움이 될 것이기 때문입니다. 또한
                        빅밴드만의 음악 유통 서비스를 통해 유저들은 아름다운 세상과 소통하게 될 것
                        입니다.이를 비즈니스 라고 할 수 있고, 소명이라고할 수도 있을 것 입니다.

                        그러나 빅밴드에서는 “정말 재미있는 일”이라고 합니다.
                        빅밴드와 함께 “정말 재미있는 일”을 같이 하시지 않으시겠습니까?
                    </div>
                </Item2Col>
                <Item2Col>
                    <div data-aos="fade-left">
                        BIGBAND is a digital music distribution company. Starting a relationship
                        with BIGBAND will be a brand new and exciting experience for your
                        company. No matter what musicians create, BIGBAND's "fun and
                        creative" distribution service motto will help to make your world a
                        beautiful one. Additionally, through our music distribution service will be
                        able to communicate and interact with the beautiful world around
                        them. BIGBAND is more than just a company that is following its calling.

                        BIGBAND promotes the idea of "Real Fun". Would you like to be a
                        partner with "Real Fun"?
                    </div>
                </Item2Col>
            </FlexBox>
            <FlexBox>
                <Item2Col>
                    <div data-aos="fade-right">
                        ビッグバンドはデジタルアルバム流通専門会社です。ミュージシャンとビッグバンドが一緒になり、
                        完全に新しい経験になると思います。
                        ミュージシャンたちがどのような音楽にしてもビッグバンドの"Fun&Creative"的な流通サービスで
                        美しい世の中を作ることに役立つことが 出来ると思います。
                        また、ビッグバンドだけの音楽流通サービスを通じてユーザーたちも美しく世の中と疎通できることが
                        出来ると思います。

                        ビッグバンドと共に"本当に面白いビジネス"を一緒にしていただけませんか?"
                    </div>
                </Item2Col>
                <Item2Col>
                    <div data-aos="fade-left">
                        “BIGBAND”是一家数字唱片流通专业公司.音乐家与“BIGBAND”共事将会
                        是一次崭新的体验.因为无论音乐家们创作出作品的种类如何，“BIG-
                        BAND”“Fun & Creative”的流通服务在创造美丽世界中都会起到非常大
                        的作用.并且用户可以通过“BIGBAND”的流通服务与美丽的世界进行沟通
                        交流.可以称之为商业或使命.但在“BIGBAND”我们称其为”非常有趣的事
                        情”.

                        不想与“BIGBAND”共同做这一项”非常有趣的事情”吗？
                    </div>
                </Item2Col>
            </FlexBox>
        </ContainerBox>
    )
}

export default HomeAbout;