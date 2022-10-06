import "./../App.css";
import React from "react";

export default class RecipeSearch extends React.Component{
    state = { 
        recipes: ["Apple Pie", "Cherry Pie", "Pizza pie", "Hamburger", "Ham steak", "Banana", "Chocolate Mousse", "Chocolate Ice Cream"],
        searchTerm: ""
    };
    
    render(){

        //pull matching recipes for each search, making the user's input uppercase to then match the state array which also was made uppercase because case sensitivity is annoying and dumb
        let matchedRecipes = this.state.recipes.filter((recipe) => {
            return recipe.toLocaleUpperCase().includes(this.state.searchTerm.toLocaleUpperCase());
        });

        //grabs the array of recipes, and databinds the return to each place in the array
        let recipesList = matchedRecipes.map((recipe) => {
            return <li>{recipe}</li>
        });

        //return includes the data that recipeslist gives us back
        return(
            <div className="recipes">
                <h2>Recipes</h2>
                <input 
                value={this.state.searchTerm} onChange={ 
                    (event) => {this.updateSearch(event);}
                    } />
                <ul>{recipesList}</ul>
            </div>

        );
    }

    updateSearch(event){
        this.setState({searchTerm: event.target.value});
    }

}