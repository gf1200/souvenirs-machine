import React from 'react';
import SouvenirsMachineContainer from './containers/SouvenirsMachineContainer';

import DisplayMessageContainer from './containers/DisplayMessageContainer';
import Display from './components/Display';
import MainPanel from './components/MainPanel';
import SouvenirsOutput from './components/SouvenirsOutput';
import GlobalStyle from './components/globalStyle';
import AppWrapper from './components/AppWraper';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <SouvenirsMachineContainer
          render={props => (
            <>
              <DisplayMessageContainer
                {...props.state}
                render={message => <Display message={message} />}
              />
              <MainPanel
                isInputDisable={props.isInputDisable}
                acceptedCoins={props.state.acceptedCoins}
                inputCoin={props.state.inputCoin}
                inputCoinsHandler={props.inputCoinsHandler}
                acceptCoins={props.acceptCoins}
                rest={props.state.rest}
              />
              <SouvenirsOutput
                isMade={props.state.isMade}
                takeSouvenir={props.onTakeSouvenirHandler}
                takeBackRest={props.onTakeBackRest}
                rest={props.state.rest}
              />
            </>
          )}
        />
      </AppWrapper>
    </>
  );
};

export default App;
