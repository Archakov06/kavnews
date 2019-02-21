import React, { Component } from 'react';
import Post from './components/Post';
import axios from 'axios';
import { connect } from 'react-redux';

import { postsActions } from './actions/posts';
import { appActions } from './actions/app';

class App extends Component {
  state = {
    regions: {
      ING: 'Последние новости',
      DAG: 'Дагестан',
      CHE: 'Чечня',
    },
  };

  fetchPosts = () => {
    const { setPosts } = this.props;
    setPosts([]);
    axios.get('http://localhost:3333/posts').then(({ data }) => {
      setPosts(data);
    });
  };

  render() {
    const {
      posts: { items },
      app: { region },
    } = this.props;
    return (
      <div className="container">
        <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">
          <div className="lh-100 header">
            <h5 className="mb-0 text-white lh-100">Последние новости</h5>
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label
                onChange={this.props.setRegion.bind(this, 'ING')}
                class={`btn btn-light ${region === 'ING' ? 'active' : ''}`}>
                <input type="radio" name="options" id="option1" autocomplete="off" />
                Ингушетия
              </label>
              <label
                onChange={this.props.setRegion.bind(this, 'CHE')}
                class={`btn btn-light ${region === 'CHE' ? 'active' : ''}`}>
                <input type="radio" name="options" id="option2" autocomplete="off" /> Чечня
              </label>
              <label
                onChange={this.props.setRegion.bind(this, 'DAG')}
                class={`btn btn-light ${region === 'DAG' ? 'active' : ''}`}>
                <input type="radio" name="options" id="option3" autocomplete="off" /> Дагестан
              </label>
            </div>
          </div>
        </div>
        <div className="my-3 p-3 bg-white rounded shadow-sm">
          <h6 className="border-bottom border-gray pb-2 mb-0">Последние новости</h6>
          <div className="media text-muted pt-3">
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <strong className="d-block text-gray-dark">@username</strong>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
              commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
          </div>
        </div>

        {!items.length ? (
          <span>Loading...</span>
        ) : (
          items.map(({ title, description, image }, key) => (
            <Post key={key} title={title} description={description} image={image} />
          ))
        )}
      </div>
    );
  }
}

export default connect(
  state => state,
  { ...appActions, ...postsActions },
)(App);
