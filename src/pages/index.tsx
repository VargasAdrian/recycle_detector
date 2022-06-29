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
        <p>Es importante saber cómo reciclar correctamente los distintos materiales.</p>
      </div>
      <CategoryList categories={categories} />

      
    </main>
  )
}

export default IndexPage
