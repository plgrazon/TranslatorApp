import React from 'react';
import TranslatorList from './TranslatorList';

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return(
      <div>
        <h1>Translator</h1>
        <TranslatorList />
      </div>
    )
  }
}

export default App;
