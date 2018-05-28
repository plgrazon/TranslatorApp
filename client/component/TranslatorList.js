import React from 'react';
import WordEntry from './WordEntry';
import axios from 'axios';

class TranslatorList extends React.Component {
  constructor() {
    super();

    this.state = {
      word: '',
      words: []
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleGetTexts = this.handleGetTexts.bind(this);
    // this.forceUpdate();
  }

  componentDidMount() {
    // setInterval(() => this.handleGetTexts(), 1000);
    this.handleGetTexts()
  }

  handleGetTexts() {
    axios.get('api/user')
    .then(({ data }) => {
      console.log('data fetched ', data);
      this.setState({
        words: data.map(item => item.text)
      })
    })
    .catch(err => {
      console.log('error fetching from db');
    });
  }

  handleInput(event) {
    this.setState({
      word: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();

    axios.post('api/user', {
      text: this.state.word,
      fromLang:"en",
      toLang: "tl"
    }).then(function(res) {
      console.log('data POSTED: ', res);
    }).catch(err => {
      console.log('err POSTING');
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
            required
          ></input>
          <button>submit</button>
          <button>clear</button>
        </form>
          <h3>translations:</h3>
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
