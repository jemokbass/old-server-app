import React, { PureComponent } from 'react';
import axios from '@/axios';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import { Link } from 'react-router-dom';
import FullPostInner from './FullPostInner/FullPostInner';
class FullPost extends PureComponent {
  state = { fullPost: null, error: false };

  componentDidMount() {
    if (this.props.path) {
      this.loadData(this.props.path);
    }
  }

  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.fullPost ||
        (this.state.fullPost && this.state.fullPost.id !== this.props.id)
      ) {
        this.loadData(this.props.id);
      }
    }
  }

  loadData(id) {
    axios
      .get('/posts/' + id)
      .then(response => {
        return this.setState({ fullPost: response.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: true });
      });
  }

  render() {
    let post = <p className="full-post__paragraph">Please, select post</p>;
    if (this.props.id && !this.state.error) {
      post = (
        <div className="full-post__paragraph">
          <Loader />
        </div>
      );
    }

    if (this.state.error) post = <Error />;

    if (this.state.fullPost) {
      const { id, title, author, body } = this.state.fullPost;
      post = (
        <Link className="full-post" to={'/post/' + id}>
          <FullPostInner id={id} title={title} author={author} body={body} />
        </Link>
      );

      if (this.props.path) {
        post = (
          <div className="full-post">
            <FullPostInner id={id} title={title} author={author} body={body} />
          </div>
        );
      }
    }

    return post;
  }
}

export default FullPost;
