import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import styles from "./RecipeDetails.module.css";

import { data } from ".././data";

const recipeVariants = {
    initial: {opacity: 0},
    animate: {opacity: 1, transition: {duration: 1}},
    exit: {opacity: 0}
}

const RecipeDetails = () => {
    const { id } = useParams();
    const recipe = data[id-1];

    return (
        <>
            <motion.div className={styles.recipe} variants={recipeVariants} initial="initial" animate="animate" exit="exit">
                <h1>{recipe.title}</h1>
                <p className={styles.recipeTime}>{recipe.cookingTime} Minutes</p>
                <div className={styles.ingredients}>
                    {recipe.ingredients.map(item => <p key={Math.random()}>{item}</p>)}
                </div>
                <p className={styles.recipeMethod}>{recipe.method}</p>
                <div className={styles.btn}>
                    <Link to={"/"}><button>Back To Home</button></Link>
                </div>
            </motion.div>
        </>
    );
};

export default RecipeDetails;