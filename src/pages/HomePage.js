import React, { useContext, useState } from 'react';

import styles from "./HomePage.module.css";

import { data } from '../data';

import Recipe from '../components/Recipe';

const HomePage = () => {
    return (
        <>
                <div className={styles.homePage}>
                    {data.map(item => <Recipe data={item} />)}
                </div>
        </>
    );
};

export default HomePage;