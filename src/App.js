import React from 'react';

const INITIAL_STATE = {
  charge: 2,
  totalSouvenirs: 20,
  coinsForChange: {
    one: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    two: [2, 2, 2, 2, 2],
    five: []
  },
  coin: null,
  totalCoins: null
};

class App extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  render() {
    console.log(this.state);
    return (
      <>
        <h1>Commemorative coin only PLN 2</h1>
        <p>The machine accepts coins with a nominal value: PLN 1,2 or 5</p>
        <input />
      </>
    );
  }
}

export default App;
