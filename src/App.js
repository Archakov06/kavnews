import React, { Component } from 'react';
import Post from './components/Post';
import axios from 'axios';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  fetchPosts() {
    const { setPosts } = this.props;
    setPosts([]);
    axios
      .get('http://59e3a8a10573cf0012f4d1ce.mockapi.io/posts')
      .then(({ data }) => {
        setPosts(data);
      });
  }

  render() {
    const { posts } = this.props;
    const { items } = posts;
    return (
      <div>
        <div>
          <button onClick={this.fetchPosts.bind(this)}>Получить записи</button>
          <h3>Регион: {this.props.regions.region}</h3>
          <ul>
            <li>
              <button onClick={() => this.props.changeRegion('ING')}>
                Ингушетия
              </button>
            </li>
            <li>
              <button onClick={() => this.props.changeRegion('CHE')}>
                Чечня
              </button>
            </li>
            <li>
              <button onClick={() => this.props.changeRegion('DAG')}>
                Дагестан
              </button>
            </li>
          </ul>
        </div>
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

const state = props => {
  return {
    ...props,
  };
};

const actions = dispatch => ({
  setPosts: data =>
    dispatch({
      type: 'SET_POSTS',
      payload: data,
    }),
  changeRegion: name =>
    dispatch({
      type: 'CHANGE_REGION',
      payload: name,
    }),
});

export default connect(state, actions)(App);
