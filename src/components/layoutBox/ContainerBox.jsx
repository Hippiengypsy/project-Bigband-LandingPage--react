import React from 'react';
import Styles from "./LayoutBox.module.scss";

const ContainerBox = ({children}) => {
    return <div className={Styles.containerBox}>{children}</div>
};

export default ContainerBox;
