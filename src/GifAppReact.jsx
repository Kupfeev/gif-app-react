import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifAppReact = () => {
  const [categories, setCategories] = useState([]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      alert('Esa categoría ya está visible en tu lista de Gifs');
      return;
    }
    setCategories([newCategory, ...categories])
  };

  return (
    <>
    <h1>GifAppReact</h1>
    <AddCategory onNewCategory={onAddCategory}/>
    {categories.map(category => <GifGrid key={category} category={category}/>)}
    </>
  )
}