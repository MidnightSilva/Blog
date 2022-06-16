import React from 'react'
import Banner from '../components/Banner';
import DescriptiveText from '../components/descriptiveText';
import RecentlyReleasedPost from '../components/RecentlyReleasedPost';
 import BlogCategoryTile from '../components/blogCategoryImgTitle';
 const Home = () => {
  return (
    <div className="home">
      <Banner />
      <DescriptiveText />
      <RecentlyReleasedPost />
      <div className="category_section">
        <h2 className="categoryTitle">Categories</h2>
        <div className="blogCategoryContainer">
          <BlogCategoryTile className="blog_category_title_place_holder" />
          <BlogCategoryTile className="blog_category_title_place_holder" />
          <BlogCategoryTile className="blog_category_title_place_holder" />
        </div>
      </div>
    </div>
  );
}

export default Home ;