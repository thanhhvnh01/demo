import React ,{useEffect,useState} from "react";
import Recipes from "./Recipes";


const Api = () => {
    const APP_ID = 'f4b29e5c';
    const APP_KEY = 'b49c5fde98f76b7321dc52ef1fef6c2b';

    const [search, setSearch] = useState('');
    const [recipes,setRecipes] = useState([]);
    const [input, setInput] = useState('');

    useEffect(()=>{
        callAPI();        
    },[input]);
    
    
    const searchBarHandler = (e) =>{
        setSearch(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setInput(search);
    }

   
    const callAPI = async () =>{
        const respone = await fetch(`https://api.edamam.com/search?q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await respone.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }
    return(
        <>
        <h1>Bạn Thích Nấu Ăn Với Gì ?</h1>        
        <div  className="search-form">
            <input onChange={searchBarHandler} type="text" className="search-bar" value={search}/>
            <button onClick={submitHandler} type="submit">submit</button> 
                      
        </div>
        <div className="grid">
        {recipes.map(recipe => (
                <Recipes 
                key = {recipe.recipe.label}
                ingre ={recipe.recipe.ingredients}
                 title = {recipe.recipe.label} calo = {recipe.recipe.calories} img = {recipe.recipe.image}/>
            ))}        
        </div>
        </>
    )
}
export default Api;