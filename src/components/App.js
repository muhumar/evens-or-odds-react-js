import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import fetchStates from '../reducers/fetchStates';
import Instructions from './instructions';
import DrawCard from './DrawCard';


class App extends Component {

    startGame = () => {
        this.props.startGame();
        this.props.fetchNewDeck();  
    }

    render(){
        console.log('this', this);

        if (this.props.fetchState == fetchStates.error){
            return (
                <div>
                    <p>Please try again. An error occured while running the Application.</p>
                    <p>{this.props.message}</p>
                </div>
            )
        }
        return(
            <div>
               <h2>♠️ ♦️ Evens or Odds ♣️ ️♥</h2>
                {
               this.props.gameStarted ? (
                <div>
                    <h3>Game is on</h3>
                    <br/>
                    <DrawCard />
                    <hr/>
                    <button onClick={this.props.cancelGame}>Cancel game</button>
                </div>
               ) : (
                   <div>
                       <h3>A new game awaits</h3>
                       <br/>
                       <button onClick={this.startGame}>Start game</button>
                       <hr/>
                       <Instructions />
                   </div>

               )
            }
            </div>
        );
    }
}

const mapStateToProps = state =>{

    const { gameStarted } = state.settings;
    const { fetchState, message } = state.deck;

    return {
        gameStarted,
        fetchState,
        message
    };
}

// const mapDispatchToProps = dispatch =>{
//     return {
//         startGame: () => dispatch(startGame()),
//         cancelGame: () => dispatch(cancelGame()),
//         fetchNewDeck: () => fetchNewDeck(dispatch)
//     };
// }


// const componentConnector = connect(mapStateToProps, mapDispatchToProps);

const componentConnector = connect(mapStateToProps, 
    { startGame, cancelGame, fetchNewDeck });

export default componentConnector(App);