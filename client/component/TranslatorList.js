import React from 'react';
import WordEntry from './WordEntry';
import axios from 'axios';

class TranslatorList extends React.Component {
  constructor() {
    super();

    this.state = {
      word: '',
      words: ['test', 'sample']
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInput(event) {
    this.setState({
      word: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();

    axios.post('/api/user', {
      words: this.state.word
    }).then(function(res) {
      console.log('data POSTED: ', res);
    }).catch(err => {
      console.log('err POSTING');
    });

    this.setState({
      words: [...this.state.words, this.state.word]
    });

  }
  
  handleDelete(idx) {
    console.log('clicked');
    const temp = this.state.words.slice();
    temp.splice(idx, 1);

    this.setState({
      words: temp
    });
  }

  render() {
    return(
      <div>
        <form
          onSubmit={event => this.handleSubmit(event)}
        >
          <input
            onChange={event => this.handleInput(event)}
          ></input>
          <button>translate</button>
        </form>
          <h3>My Words</h3>
          <div>
            {
              this.state.words.map((word, idx) => (
                <WordEntry
                  word={word}
                  idx={idx}
                  key={idx}
                  handleDelete={this.handleDelete}
                />
              ))
            }
          </div>
      </div>
    )
  }
}

export default TranslatorList;
