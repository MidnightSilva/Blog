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
      <div className='blogCategoryContainer'>
        <BlogCategoryTile />
        <BlogCategoryTile />
        <BlogCategoryTile />
        <BlogCategoryTile />
        <BlogCategoryTile />
        <BlogCategoryTile />
      </div>
    </div>
  );
}

export default Home ;