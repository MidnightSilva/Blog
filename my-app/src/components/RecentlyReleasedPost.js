import React from 'react'
import { Link } from "react-router-dom";

 const RecentlyReleasedPost = () => {
  return (
    <>
      <h2>Recently Released</h2>
      <div className="RecentlyReleasedPost">
        <div className="image-placeholder"></div>
        <div className="Post_text_container">
          <p className="image-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            interdum aliquam est malesuada duis. Eu viverra odio lacus, lorem
            odio lacus turpis fringilla arcu.
          </p>
          <Link to="/BlogPost">Read More</Link>
        </div>
      </div>
    </>
  );
}
export default RecentlyReleasedPost 