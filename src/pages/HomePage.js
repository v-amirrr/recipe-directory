import React, { useContext, useState } from 'react';

import styles from "./HomePage.module.css";

import { data } from '../data';

import Recipe from '../components/Recipe';

const HomePage = () => {
    return (
        <>
                <div className={styles.homePage}>
                    {data.map(item => <Recipe key={item.id} data={item} />)}
                </div>
                {console.log(data)}
        </>
    );
};

export default HomePage;