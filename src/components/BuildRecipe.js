import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

import styles from "./BuildRecipe.module.css";

import { data } from "../data";

const recipeVariants = {
    initial: {opacity: 0},
    animate: {opacity: 1, transition: {duration: 1}},
    exit: {opacity: 0}
}

const BuildRecipe = () => {

    let navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [newIngredient, setNewIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [method, setMethod] = useState("");
    const [time, setTime] = useState();

    const addRecipe = e => {
        if (title && method) {
            data.push({
                id: data[data.length - 1].id + 1,
                title: title,
                ingredients: [...ingredients],
                method: method,
                cookingTime: time
            });
            resetInputs();
            navigate("/");
        } else {
            alert("You Have to Fill the Title and Method")
        }
    }

    const addIngredients = e => {
        const ing = newIngredient.trim();
        setNewIngredient("");

        if (ing && !ingredients.includes(ing)) {
            setIngredients([...ingredients, ing]);
        }
    }

    const resetInputs = e => {
        setTitle("");
        setNewIngredient("");
        setIngredients([]);
        setMethod("");
        setTime("");
    }

    return (
        <>
            <motion.div className={styles.buildRecipe} variants={recipeVariants} initial="initial" animate="animate" exit="exit">
                <h1>Create a New Recipe</h1>

                <div>
                    <div className={styles.formPart}>
                        <label>Recipe Title:</label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
                    </div>

                    <div className={styles.formPartIng}>
                        <div className={styles.formPartIngOne}>
                            <label>Recipe Ingredients:</label>
                            <div>
                                <input type="text" onChange={(e) => setNewIngredient(e.target.value)} value={newIngredient} required />
                                <button onClick={addIngredients}>+</button>
                            </div>
                        </div>
                        <div className={styles.ingredients}>{ingredients.map(item => <p key={Math.random()}>{item}</p>)}</div>
                    </div>

                    <div className={styles.formPart}>
                        <label>Recipe Method:</label>
                        <textarea onChange={(e) => setMethod(e.target.value)} value={method} required />
                    </div>

                    <div className={styles.formPart}>
                        <label>Cooking Time in Miunte:</label>
                        <input type="number" onChange={(e) => setTime(e.target.value)} value={time} required />
                    </div>

                    <div className={styles.buttons}>
                        <button onClick={resetInputs}>Reset</button>
                        <button onClick={addRecipe}>Create The Recipe</button>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default BuildRecipe;