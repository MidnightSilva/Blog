import React from 'react'
import {  Link } from "react-router-dom";

 const Navigation = () => {
  return (
    <nav>
      <ul>
        <il>
          <Link to="/">home</Link>
        </il>
        <il>
          <Link to="/Categories">categories</Link>
        </il>
        <il>
          {" "}
          <Link to="/BlogPost">post</Link>
        </il>
        <il>
          {" "}
          <Link to="/Login">login</Link>
        </il>
        <il>
          {" "}
          <Link to="/CreatingBlogPost">new post</Link>
        </il>
        <il>
          {" "}
          <Link to="/DraftPost">drafts</Link>
        </il>
      </ul>
    </nav>
  );
}
 export default Navigation;