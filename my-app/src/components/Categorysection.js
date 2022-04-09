import React from 'react'
 import BlogCategoryTile from "../components/blogCategoryImgTitle";



 const CategorySection = (prop) => {
  return (
    <>
      <div className="cat_container">
        <h3 className="cat_title">{prop.title}</h3>
        <div>
          <p className="cat_des">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            interdum aliquam est malesuada duis. Eu viverra odio lacus, lorem
            odio lacus turpis fringilla arcu.
          </p>
        </div>
        <div className='blog_post'>
          <BlogCategoryTile />
          <BlogCategoryTile />
          <BlogCategoryTile />
        </div>

      </div>
    </>
  );
}

export default CategorySection;