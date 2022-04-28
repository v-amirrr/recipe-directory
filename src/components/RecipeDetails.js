import React from 'react';
import { useParams, Link } from 'react-router-dom';

import styles from "./RecipeDetails.module.css";

import { data } from ".././data";

const RecipeDetails = () => {

    const { id } = useParams();
    const recipe = data[id-1]

    return (
        <>
            <div className={styles.recipe}>
                <h1>{recipe.title}</h1>
                <p className={styles.recipeTime}>{recipe.cookingTime}</p>
                <div className={styles.ingredients}>
                    {recipe.ingredients.map(item => <p key={Math.random()}>{item}</p>)}
                </div>
                <p className={styles.recipeMethod}>{recipe.method}</p>
                <div className={styles.btn}>
                    <Link to={"/"}><button>Back To Home</button></Link>
                </div>
            </div>
        </>
    );
};

export default RecipeDetails;