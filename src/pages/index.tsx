import * as React from "react";
import '../styles/styles.css';
import categories from '../content/recycle-categories.json';
import Menu from '../components/menu';
import CategoryList from '../components/categories_list';

const IndexPage = () => {
  return (
    <main>
      <title>Recycle detector</title>
      <Menu />
      <div>
        <p>¿Qué quieres reciclar?</p>
      </div>
      <CategoryList 
        categories={categories} 
        onItemSelected={(category:string) => {
          console.log(category);
        }}/>

      
    </main>
  )
}

export default IndexPage
