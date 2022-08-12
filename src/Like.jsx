import React, { Component } from "react";

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bIsLiked: this.props.isLiked
    };
  }

  handleClick = () => {
    this.setState(state => {
      let { bIsLiked } = this.state;
      bIsLiked = !bIsLiked;
      return { bIsLiked };
    });

    this.props.onLike(this.props.id);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          <i
            className={this.state.bIsLiked ? "fa fa-heart" : "fa fa-heart-o"}
            aria-hidden="true"
          ></i>
        </button>
      </div>
    );
  }
}

export default Like;
