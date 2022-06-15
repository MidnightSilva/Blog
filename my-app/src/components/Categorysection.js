import React from 'react'
 import BlogCategoryTile from "../components/blogCategoryImgTitle";
 import { Link } from "react-router-dom";



 const CategorySection = (prop) => {
  return (
    <>
      <div className="cat_container">
        <div className='cat_container_top'>
          
          <h3 className="cat_title">{prop.title}</h3>
          <Link to="/">See more</Link>
        </div>

        <div>
          <p className="cat_des">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            interdum aliquam est malesuada duis. Eu viverra odio lacus, lorem
            odio lacus turpis fringilla arcu.
          </p>
        </div>
        <div className="blog_post">
          <BlogCategoryTile className="blog_cat_page_image_placeholder" />

        </div>
      </div>
    </>
  );
}

export default CategorySection;