import React from 'react';

import styles from "./SearchResult.module.css";

const searchResult = (props) => {
    return (
        <div className={styles.SearchResult}>
            <p>{props.name}</p>
        </div>
    )
};

export default searchResult;