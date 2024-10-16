import React from 'react'
import { useState, useEffect } from 'react'
import './../index-2.css'
import axios from 'axios'

function MealAPI() {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then(res => {
            console.log(res.data)
            setItems(res.data.meals)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    const itemsList = items.map(({strMeal, strMealThumb, idMeal}) => {
        return(
            <section className="cards">
                <img src={strMealThumb} />
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        )
    })

return <div className="items-container">{itemsList}</div>

}

export default MealAPI
