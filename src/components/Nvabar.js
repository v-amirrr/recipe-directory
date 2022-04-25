import React, { useState } from 'react';

import styles from "./Nvabar.module.css";

import { BsSunFill, BsMoonFill } from "react-icons/bs";

const Nvabar = () => {

    const [themeMode, setThemeMode] = useState(true);

    if (themeMode) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }

    return (
        <>
            <div className={styles.navbar}>
                <h1>Recipe Directory</h1>
                <div className={styles.icons}>
                    <div className={styles.addIcon}>+</div>
                    <div className={styles.switchMode}>
                        <input type="checkbox" className={styles.modeCheckbox} onClick={() => setThemeMode(!themeMode)} />
                        <span className={styles.modeIcons}>
                            <BsMoonFill className={styles.moonIcon} />
                            <BsSunFill className={styles.sunIcon} />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nvabar;