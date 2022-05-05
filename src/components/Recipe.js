import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Recipe.module.css";

const Recipe = ({recipeData}) => {
    return (
        <>
            <div className={styles.recipe}>
                <h1>{recipeData.title}</h1>
                <p className={styles.recipeTime}>{recipeData.cookingTime} Minutes</p>
                <div className={styles.ingredients}>
                    {recipeData.ingredients.map(item => <p key={Math.random()}>{item}</p>)}
                </div>
                <p className={styles.recipeMethod}>{recipeData.method.substring(0, 100)}...</p>
                <Link to={`/recipe/${recipeData.id}`}><button>More Details</button></Link>
            </div>
        </>
    );
};

export default Recipe;