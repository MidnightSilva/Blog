import React from 'react'
 import { Link } from "react-router-dom";

export const blogCategoryImgTitle = (prop) => {
  return (
    <>
      {" "}
      <div className={prop.className}></div>{" "}
      <div>
        {" "}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
          interdum aliquam est malesuada duis.
        </p>
        {/* <Link path="/BlogPost">See more</Link> */}
      </div>
    </>
  );
}
export default blogCategoryImgTitle