import React, { Component } from "react";

export default class CatList extends Component {
  displayCats = () => {
    return this.props.cats.map(c => {
      return <img src={c.url} />;
    });
  };
  render() {
    return <div>{this.displayCats()}</div>;
  }
}
