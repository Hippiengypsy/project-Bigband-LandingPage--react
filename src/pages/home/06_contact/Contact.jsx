import ContactLogo from "../../../assets/contact1.gif";

const Contact = () => {
    return (
        <div>
            <img src={ContactLogo} alt="" />
            <div>
                <div>
                    North America Office
                    3010 LBJ Fwy Ste 130 Dallas, Texas 75234 U.S.A
                </div>
                <div>
                    Korea Office
                    서울 금천구 가산디지털1로 128 STX-V타워, 508-2호
                </div>
                <div>
                    China Office
                    503 No.5 17-19 North Section, Digital Road,
                    High-Tech Industrial Zone, Dalian, 116023 China
                </div>
            </div>
            <div>+82-2-6012-8915</div>
            <div>
                음원문의 : jacob@bigbandent.com
                정산문의 : julie@bigbandent.com
                해외유통문의 : gabriel@bigbandent.com
                녹음실예약 : dm8915@bigband.kr
            </div>
            <div>
                +82-2-6008-0708 (fax)
            </div>
        </div>
    )
}

export default Contact;