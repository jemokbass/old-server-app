import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Textarea from '../UI/Textarea/Textarea';
import Select from '../UI/Select/Select';
import axios from '@/axios';
import Error from '../Error/Error';
import { Redirect } from 'react-router';

export class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Ya',
    error: false,
    submitted: null,
  };

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
    };

    axios
      .post('/posts', data)
      .then(result => {
        console.log(result);
        this.setState({ submitted: true });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: true });
      });
  };

  render() {
    let redirect = null;
    if (this.state.error) return <Error />;
    if (this.state.submitted) redirect = <Redirect to="/" />;

    return (
      <div className="new-post">
        {redirect}
        <div className="new-post__inner">
          <h2 className="new-post__title">Add a new post</h2>
          <Input
            label="Title"
            value={this.state.title}
            onChange={event => this.setState({ title: event.target.value })}
          />
          <Textarea
            label="Content"
            value={this.state.content}
            onChange={event => this.setState({ content: event.target.value })}
          />
          <Select
            label="Author"
            selectValue={this.state.author}
            onChange={event => this.setState({ author: event.target.value })}
          />
          <div className="new-post__button">
            <Button onClick={this.postDataHandler}>Add post</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPost;
