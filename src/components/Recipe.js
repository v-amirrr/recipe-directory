import React from 'react';

import styles from "./Recipe.module.css";

const Recipe = ({data}) => {
    return (
        <>
            <div className={styles.recipe}>
                <h1>{data.title}</h1>
                <p className={styles.recipeTime}>{data.cookingTime}</p>
                <div className={styles.ingredients}>
                    {data.ingredients.map(item => <p className={styles.recipe.ingredient} key={Math.random()}>{item}</p>)}
                </div>
                <p className={styles.recipeMethod}>{data.method}...</p>
            </div>
        </>
    );
};

export default Recipe;