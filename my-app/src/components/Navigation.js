import React from 'react'
import {  Link } from "react-router-dom";

 const Navigation = () => {
  return (
    <nav>
      <ul>
        <il>
          {" "}
          <Link to="/" className="link">
            home
          </Link>
        </il>
        <il>
          {" "}
          <Link to="/Categories" className="link">
            categories
          </Link>
        </il>
        <il>
          {" "}
          <Link to="/BlogPost" className="link">
            post
          </Link>
        </il>
        <il>
          {" "}
          <Link to="/Login" className="link">
            login
          </Link>
        </il>
        <il>
          {" "}
          <Link to="/CreatingBlogPost" className="link">
            new post
          </Link>
        </il>
        <il>
          {" "}
          <Link to="/DraftPost" className="link">
            drafts
          </Link>
        </il>
      </ul>
    </nav>
  );
}
 export default Navigation;