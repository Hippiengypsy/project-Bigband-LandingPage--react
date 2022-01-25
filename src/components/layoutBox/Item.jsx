import React from 'react';
import Styles from "./LayoutBox.module.scss";

const Item = ({children}) => {
    return <div className={Styles.item}>{children}</div>
};

export default Item;
