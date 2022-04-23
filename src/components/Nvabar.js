import React from 'react';

import styles from "./Nvabar.module.css";

const Nvabar = () => {
    return (
        <>
            <div className={styles.navbar}>
                <h1>Recipe Directory</h1>
                <div className={styles.buttons}>
                    <button>Create New Recipe</button>
                    <button>Add Random Recipe</button>
                </div>
                <div>dark/light</div>
            </div>
        </>
    );
};

export default Nvabar;