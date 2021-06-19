import React, { Component } from 'react';
import FullPost from '@Components/FullPost/FullPost';

class OpenPost extends Component {
  goBackHandler = () => {
    this.props.history.replace('/');
  };

  render() {
    return (
      <div className="open-post">
        <FullPost path={this.props.match.params.id} />
        <button className="open-post__button" onClick={this.goBackHandler}>
          Back
        </button>
      </div>
    );
  }
}

export default OpenPost;
