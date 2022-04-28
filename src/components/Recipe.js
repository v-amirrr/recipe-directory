import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Recipe.module.css";

const Recipe = ({data}) => {
    return (
        <>
            <div className={styles.recipe}>
                <h1>{data.title}</h1>
                <p className={styles.recipeTime}>{data.cookingTime}</p>
                <div className={styles.ingredients}>
                    {data.ingredients.map(item => <p key={Math.random()}>{item}</p>)}
                </div>
                <p className={styles.recipeMethod}>{data.method.substring(0, 100)}...</p>
                <Link to={`/recipe/${data.id}`}><button>More Details</button></Link>
            </div>
        </>
    );
};

export default Recipe;