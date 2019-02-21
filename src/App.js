import React, { Component } from "react";
import Post from "./components/Post";
import axios from "axios";
import { connect } from "react-redux";

import { postsActions } from "./actions/posts";
import { appActions } from "./actions/app";

import { Header } from "./components";

class App extends Component {
  state = {
    regions: {
      ING: "Последние новости",
      DAG: "Дагестан",
      CHE: "Чечня"
    }
  };

  fetchPosts = () => {
    const { setPosts } = this.props;
    setPosts([]);
    axios.get("http://localhost:3333/posts").then(({ data }) => {
      setPosts(data);
    });
  };

  render() {
    const {
      posts: { items }
    } = this.props;
    return (
      <div className="container">
        <Header />
        {!items.length ? (
          <span>Loading...</span>
        ) : (
          items.map(({ title, description, image }, key) => (
            <Post
              key={key}
              title={title}
              description={description}
              image={image}
            />
          ))
        )}
      </div>
    );
  }
}

export default connect(
  state => state,
  { ...appActions, ...postsActions }
)(App);
