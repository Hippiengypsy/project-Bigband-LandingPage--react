import React from 'react';
import Styles from "./LayoutBox.module.scss";

const Item3Col = ({children}) => {
    return <div className={Styles.item__3col}>{children}</div>
};

export default Item3Col;
