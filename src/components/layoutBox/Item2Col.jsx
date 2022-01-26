import React from 'react';
import Styles from "./LayoutBox.module.scss";

const Item2Col = ({children}) => {
    return <div className={Styles.item__2col}>{children}</div>
};

export default Item2Col;
