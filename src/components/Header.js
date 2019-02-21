import React from "react";
import { connect } from "react-redux";

import { postsActions } from "../actions/posts";
import { appActions } from "../actions/app";

const Header = ({ app: { region }, setRegion }) => {
  const headerTitle = {
    ING: "Новости Ингушетии",
    DAG: "Новости Дагестана",
    CHE: "Новости Чечни"
  };
  return (
    <div>
      <div className="header d-flex align-items-center justify-content-between p-3 my-3 bg-purple rounded shadow-sm">
        <h5 className="mb-0 text-white lh-100">{headerTitle[region]}</h5>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label
            onChange={setRegion.bind(this, "ING")}
            class={`btn btn-light ${region === "ING" ? "active" : ""}`}
          >
            <input
              type="radio"
              name="options"
              id="option1"
              autocomplete="off"
            />
            Ингушетия
          </label>
          <label
            onChange={setRegion.bind(this, "CHE")}
            class={`btn btn-light ${region === "CHE" ? "active" : ""}`}
          >
            <input
              type="radio"
              name="options"
              id="option2"
              autocomplete="off"
            />{" "}
            Чечня
          </label>
          <label
            onChange={setRegion.bind(this, "DAG")}
            class={`btn btn-light ${region === "DAG" ? "active" : ""}`}
          >
            <input
              type="radio"
              name="options"
              id="option3"
              autocomplete="off"
            />{" "}
            Дагестан
          </label>
        </div>
      </div>
      <div className="my-3 p-3 bg-white rounded shadow-sm">
        <div className="media text-muted pt-3">
          <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong className="d-block text-gray-dark">@username</strong>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default connect(
  state => state,
  { ...appActions, ...postsActions }
)(Header);
