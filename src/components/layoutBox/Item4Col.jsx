import React from 'react';
import Styles from "./LayoutBox.module.scss";

const Item4Col = ({children}) => {
    return <div className={Styles.item__4col}>{children}</div>
};

export default Item4Col;
