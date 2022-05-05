import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import styles from "./Recipe.module.css";

const recipeVariants = {
    initial: {scale: 0.8, opacity: 0},
    animate: {scale: 1, opacity: 1, transition: {duration: 1}},
    exit: {scale: 0, opacity: 0, transition: {duration: 1}}
}

const Recipe = ({recipeData}) => {
    return (
        <>
            <motion.div className={styles.recipe} variants={recipeVariants} initial="initial" animate="animate" exit="exit">
                <h1>{recipeData.title}</h1>
                <p className={styles.recipeTime}>{recipeData.cookingTime} Minutes</p>
                <div className={styles.ingredients}>
                    {recipeData.ingredients.map(item => <p key={Math.random()}>{item}</p>)}
                </div>
                <p className={styles.recipeMethod}>{recipeData.method.substring(0, 100)}...</p>
                <Link to={`/recipe/${recipeData.id}`}><button>More Details</button></Link>
            </motion.div>
        </>
    );
};

export default Recipe;