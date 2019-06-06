import React, { Component } from 'react';

const INITIAL_STATE = {
  charge: 2,
  availableSouvenirs: 2,
  acceptedCoins: [1, 2, 5, 10],
  coinsForChange: [1, 2],
  totalCoins: 0,
  inputCoin: '',
  rest: null,
  error: null,
  isMade: false
};

export default class SouvenirsMachineContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    };
    this.acceptCoins = this.acceptCoins.bind(this);
    this.inputCoinsHandler = this.inputCoinsHandler.bind(this);
    this.onTakeBackRest = this.onTakeBackRest.bind(this);
    this.onTakeSouvenirHandler = this.onTakeSouvenirHandler.bind(this);
  }

  returnRest() {
    const { totalCoins, coinsForChange } = this.state;
    const { availableCoins, restPocket } = this.getRest(
      coinsForChange,
      totalCoins
    );
    this.setState({
      coinsForChange: availableCoins,
      rest: restPocket,
      error: 'Sorry no more coin for change 😔'
    });
  }

  makeSouvenir() {
    this.setState(({ availableSouvenirs, isMade }) => ({
      totalCoins: 0,
      availableSouvenirs: availableSouvenirs - 1,
      isMade: !isMade
    }));
  }

  getRest(availableCoins = [], rest) {
    let coinForRest = rest,
      restPocket = [],
      sumRestPocket = () => restPocket.reduce((acc, next) => acc + next, 0);

    for (coinForRest; coinForRest > 0; coinForRest--) {
      while (availableCoins.some(coin => coinForRest === coin)) {
        const indexCoin = availableCoins.indexOf(coinForRest);
        availableCoins = [
          ...availableCoins.slice(0, indexCoin),
          ...availableCoins.slice(indexCoin + 1)
        ];
        restPocket.push(coinForRest);
        coinForRest = rest - sumRestPocket();
      }
    }
    return {
      availableCoins,
      restPocket,
      restPocketSum: sumRestPocket()
    };
  }

  isRest() {
    const { charge, totalCoins, coinsForChange } = this.state;
    let rest = totalCoins - charge;

    const { availableCoins, restPocket, restPocketSum } = this.getRest(
      coinsForChange,
      rest
    );

    if (restPocketSum === rest) {
      this.setState(({ rest, coinsForChange }) => ({
        rest: restPocket,
        coinsForChange: availableCoins
      }));
      this.makeSouvenir();
    } else return this.returnRest();
  }

  isCharge() {
    const { totalCoins, charge } = this.state;
    if (totalCoins === charge) return this.makeSouvenir();
    if (totalCoins > charge) return this.isRest();
  }

  acceptCoins() {
    const loaded = this.state.inputCoin;
    let coin = parseFloat(loaded);

    if (this.state.acceptedCoins.some(acceptedCoin => acceptedCoin === coin)) {
      this.setState(
        ({ totalCoins, coinsForChange }) => ({
          totalCoins: totalCoins + coin,
          coinsForChange: [...coinsForChange, coin],
          inputCoin: '',
          error: null
        }),
        () => this.isCharge()
      );
    } else {
      this.setState({
        error: `⚠️ Sorry ${loaded} is not accept. Please put in correct value`
      });
    }
  }

  inputCoinsHandler(e) {
    this.setState({ inputCoin: e.target.value });
  }

  onTakeBackRest() {
    this.setState({ totalCoins: 0, error: null, rest: null });
  }

  onTakeSouvenirHandler() {
    this.setState({ isMade: false });
  }

  render() {
    const {
      state,
      inputCoinsHandler,
      acceptCoins,
      onTakeBackRest,
      onTakeSouvenirHandler
    } = this;

    const { availableSouvenirs, isMade, rest } = state;
    let isInputDisable = !availableSouvenirs || isMade || rest ? true : false;

    return this.props.render({
      state,
      isInputDisable,
      inputCoinsHandler,
      acceptCoins,
      onTakeBackRest,
      onTakeSouvenirHandler
    });
  }
}
