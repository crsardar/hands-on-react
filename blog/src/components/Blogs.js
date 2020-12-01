import { useEffect } from "react";
import { connect } from "react-redux";

import { createGetBlogsAction } from "../actions";
import UserHeader from "./UserHeader";

const Blogs = ({ getBlogs, blogs }) => {
  useEffect(() => getBlogs(), [getBlogs]);

  const blogsJSX = blogs.map((blog) => {
    return (
      <div key={blog.id} className="item">
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </div>
          <UserHeader userId={blog.userId} />
        </div>
      </div>
    );
  });

  return <div className="ui relaxed divided list">{blogsJSX}</div>;
};

const mapStateToProps = (state) => {
  return { blogs: state.blogs };
};

export default connect(mapStateToProps, { getBlogs: createGetBlogsAction })(
  Blogs
);
