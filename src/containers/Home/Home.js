import React, { Component } from 'react';
import axios from '@/axios';
import Post from '@Components/Post/Post';
import Loader from '@Components/Loader/Loader';
import FullPost from '@Components/FullPost/FullPost';
import Error from '@Components/Error/Error';

class Home extends Component {
  state = {
    posts: [],
    loaded: false,
    error: false,
    currentFullPost: null,
  };

  componentDidMount() {
    axios
      .get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 5);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Name',
          };
        });
        this.setState({ posts: updatedPosts, loaded: true });
      })
      .catch(err => {
        console.log(err);
        this.setState({ loaded: true, error: true });
      });
  }

  removePostHandler = index => {
    const posts = [...this.state.posts];
    const newPosts = posts.filter(item => item.id !== index);
    this.setState({ ...this.state, posts: newPosts });

    const currentPost = this.state.currentFullPost;

    if (currentPost === index) {
      this.setState({ currentFullPost: null });
    }
  };

  openPostHandler = index => {
    this.setState({ currentFullPost: index });
  };

  render() {
    const isLoadingClass = this.state.loaded ? null : 'home__loading';
    const { loaded, posts } = this.state;
    let allPosts = posts.map(post => (
      <Post
        clicked={() => this.openPostHandler(post.id)}
        title={post.title}
        key={post.id}
        remove={() => this.removePostHandler(post.id)}
      />
    ));

    if (this.state.error) allPosts = <Error />;

    return (
      <div className="home">
        <div className={`home__inner container ${isLoadingClass}`}>
          <FullPost id={this.state.currentFullPost} />
          {loaded ? allPosts : <Loader />}
        </div>
      </div>
    );
  }
}

export default Home;
