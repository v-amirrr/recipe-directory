import React, { useState } from 'react';

import styles from "./RecipeDetails.module.css";

import { data } from "../data";

const BuildRecipe = () => {

    const [title, setTitle] = useState("");
    const [newIngredient, setNewIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [method, setMethod] = useState("");
    const [time, setTime] = useState();

    const addRecipe = e => {
        e.preventDefault();
        data.push({
            id: data[data.length - 1].id + 1,
            title: title,
            ingredients: [],
            method: method,
            cookingTime: time
        });
    }

    const addIngredients = e => {
        e.preventDefault();
        const ing = newIngredient.trim();

        if (ing && !ingredients.includes(ing)) {
            setIngredients([...ingredients, ing]);
        }
    }

    return (
        <>
            <div className={styles.buildRecipe}>
                <h1>Create a New Recipe</h1>

                <form onSubmit={addRecipe}>
                    <label>Recipe Title:</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
                    <hr />
                    <label>Recipe Ingredients:</label>
                    <input type="text" onChange={(e) => setNewIngredient(e.target.value)} value={newIngredient} required />
                    <button onClick ={addIngredients}>Add</button>
                    <div>{ingredients.map(item => <p key={Math.random()}>{item}</p>)}</div>
                    <hr />
                    <label>Recipe Method:</label>
                    <textarea onChange={(e) => setMethod(e.target.value)} value={method} required />
                    <hr />
                    <label>Cooking Time in Miunte:</label>
                    <input type="number" onChange={(e) => setTime(e.target.value)} value={time} required />
                    <hr />
                    <button>Create The Recipe</button>
                </form>
            </div>
        </>
    );
};

export default BuildRecipe;