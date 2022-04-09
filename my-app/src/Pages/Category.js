import React from 'react'
import CategorySection from '../components/Categorysection';

const Category = () => {
  return (
    <>
      <div className="category_page">
        <CategorySection title="Travel" />
        <CategorySection title="Health" />
        <CategorySection title="Work Life Balnce " />
        <CategorySection title="Understanding Self" />
      </div>
    </>
  );
}
export default Category;