import React from 'react';
import './App.css';
import HelloYou from './essentials/HelloYou'
import HelloYouWithParams from './essentials/HelloYouWithParams';
import HelloYouWithParamsDestructuring from './essentials/HelloYouWithParamsDestructuring';
import Button from './essentials/Button';
import ButtonEnhanced from './essentials/ButtonEnhanced';
import ButtonWithComponentChildAsProp from './essentials/ButtonWithComponentChildAsProp';
import Loader from './essentials/Loader';
import ButtonWithComponentChildren from './essentials/ButtonWithComponentChildren';

function App() {
  return (
    <div className="App">
      <HelloYou />
      <HelloYouWithParams />

      <HelloYouWithParams name="Elayne" />
      <HelloYouWithParams name="Jorge Flores" />

      <HelloYouWithParamsDestructuring />

      <Button text="Enviar" />

      <br />
      <br />

      <ButtonEnhanced
        type="submit"
        id="enhanced"
        text="Submit"
        onClick={ () => alert('Clicked') } />

      <ButtonEnhanced
        type="button"
        id="enhanced"
        text="Cancel"
        onClick={ () => alert('Cancelled') } />

      <br />
      <br />

      <ButtonWithComponentChildAsProp
        id="child-as-prop"
        text="Child as prop"
        loader={ <Loader /> }
        functional={ Loader }
      />

      <br />
      <br />

      <ButtonWithComponentChildren loader={ <Loader /> }>
        <img alt="Button image" src="https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/tick_red.png" height="25px" />
        Submit
      </ButtonWithComponentChildren>

    </div>
  );
}

export default App;
