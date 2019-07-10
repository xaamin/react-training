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
import ListWithChildren from './conditionals-and-loops/loops/ListWithChildren';
import ListWithChildrenAsFunction from './conditionals-and-loops/loops/ListWithChildrenAsFunction';
import ListItem from './conditionals-and-loops/loops/ListItem';
import ListWithMap from './conditionals-and-loops/loops/ListWithMap';
import UserLoginStatus from './conditionals-and-loops/conditionals/UserLoginStatus';
import OpenClosedPrinciple from './open-closed-principle/OpenClosedPrinciple';

const renderListItem = ({ index }) => (<ListItem key={index} index={index} />)

function App() {
  return (
    <div className="App">

      { /**
        Single responsibility
       */}
      {/* <HelloYou />
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
        <img
          alt="Button image"
          src="https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/tick_red.png"
          height="25px"
        />
        Submit
      </ButtonWithComponentChildren> */}


      { /**
        Loops
       */}
      {/* <ListWithChildren items={ 5 } />

      <br />
      <br />
      <br />

      <ListWithChildrenAsFunction items={ 5 }>
        { ({index}) => (<li key={ index }>Item number { index + 1 }</li>) }
      </ListWithChildrenAsFunction>

      <br />
      <br />
      <br />

      <ListWithChildrenAsFunction items={ 5 }>
        { renderListItem }
      </ListWithChildrenAsFunction>

      <ListWithMap items={ ['Uno', 'Dos', 'Tres'] } /> */}

      { /**
        Conditionals
       */ }
      {/* <UserLoginStatus /> */}

      { /**
        Open closed principle
      */}
      <OpenClosedPrinciple>
      </OpenClosedPrinciple>

    </div>
  );
}

export default App;
