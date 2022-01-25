import React from 'react';
import Styles from "./LayoutBox.module.scss";

const FlexBox = ({children}) => {
    return <div className={Styles.flexbox}>{children}</div>
};

export default FlexBox;
