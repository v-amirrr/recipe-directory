import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import styles from "./Nvabar.module.css";

import { BsSunFill, BsMoonFill } from "react-icons/bs";

const navbarVariants = {
    initial: {opacity: 0, y: -20},
    animate: {
        opacity: 1,
        y: 0,
        transition: {duration: 1}
    },
}

const Nvabar = () => {

    const [themeMode, setThemeMode] = useState(true);

    if (themeMode) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }

    return (
        <>
            <motion.div className={styles.navbar} variants={navbarVariants} initial="initial" animate="animate">
                <Link to={"/"}><h1>Recipe Directory</h1></Link>
                <div className={styles.icons}>
                    <Link to={"/build-recipe"}><div className={styles.addIcon}>+</div></Link>
                    <div className={styles.switchMode}>
                        <input type="checkbox" className={styles.modeCheckbox} onClick={() => setThemeMode(!themeMode)} />
                        <span className={styles.modeIcons}>
                            <BsMoonFill className={styles.moonIcon} />
                            <BsSunFill className={styles.sunIcon} />
                        </span>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Nvabar;