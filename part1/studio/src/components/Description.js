import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink= "https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/"
    let authorPhoto= "https://joyfoodsunshine.com/wp-content/uploads/2022/12/family-photo-square-32.jpg"
    let authorName= "Laura"
  return (
    <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "Author's Family" className={styles.imageUpdates} />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>The Best Chocolate Chip Cookie Recipe Ever</a> 
      </div>
   </div>
  )
}


function RecipeDescription() {
  return (
    <div> 
      <div>
         <h1>The Best Chocolate Chip Cookie Recipe Ever</h1>
         <p>This is the best chocolate chip cookies recipe ever! No funny ingredients, no chilling time, etc. Just a simple, straightforward, amazingly delicious, doughy yet still fully cooked, chocolate chip cookie that turns out perfectly every single time! 

</p>
      </div>
      <RecipeAuthor />
   </div>
  )
}

export default RecipeDescription