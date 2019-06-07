import React, { Component } from 'react';
import INITIAL_STATE from '../initialState';
import { isSome, getRest } from '../helpers/getRest';

console.log(INITIAL_STATE);

export default class SouvenirsMachineContainer extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, INITIAL_STATE);

    this.acceptCoins = this.acceptCoins.bind(this);
    this.inputCoinsHandler = this.inputCoinsHandler.bind(this);
    this.onTakeBackRest = this.onTakeBackRest.bind(this);
    this.onTakeSouvenirHandler = this.onTakeSouvenirHandler.bind(this);
  }

  returnRest() {
    const { pocket, restPocket } = getRest(
      this.state.coinsForChange,
      this.state.totalCoins
    );
    this.setState({
      coinsForChange: pocket,
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

  isRest() {
    const { charge, totalCoins, coinsForChange } = this.state;
    let rest = totalCoins - charge;
    const isRest = getRest(coinsForChange, rest);

    if (isRest) {
      this.setState(
        {
          rest: isRest.restPocket,
          coinsForChange: isRest.pocket
        },
        () => this.makeSouvenir()
      );
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
    if (isSome(coin, this.state.acceptedCoins)) {
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
