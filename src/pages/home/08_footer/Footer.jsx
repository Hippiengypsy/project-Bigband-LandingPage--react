import Styles from "./Footer.module.scss";


import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import FooterLogo from "../../../assets/botlogo.gif";

const Footer = () => {
    return (
        <div className={Styles.footer__container}>
            <div className={Styles.footer__flexbox}>
                <div className={Styles.footer__item}>
                    <img src={FooterLogo} alt="" />
                </div>
                <div className={Styles.footer__item}>
                    <p>Copyright ⓒ 2014 BIGBAND. All rights reserved. </p>
                </div>
                <div className={Styles.footer__item__right}>
                    <div className={Styles.footer__icons}>
                        <YouTubeIcon fontSize='large'/>
                        <FacebookIcon fontSize='large'/>
                        <TwitterIcon fontSize='large'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;