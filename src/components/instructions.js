import React, {Component} from 'react';
import {connect} from 'react-redux';
import {expandInstructions, collapseInstructions} from '../actions/settings';


const Instructions = props =>{
    const {instructionsExpanded, expandInstructions, collapseInstructions} = props;

    if (instructionsExpanded) {
        return (
            <div>
                <h3>Instructions</h3>
                <p>Welcome to Evens or Odds. The game works like this...</p>
                <p>The deck is shuffled. Then choose: if the next card will be even or odd?</p>
                <p>Make a choice on every draw and see how many you get right!</p>
                <p>Face cards don't count.</p>
                <br/>
                <button onClick={collapseInstructions}>Show less.</button>
            </div>
        )
    }
    return (
        <div>
            <h3>Instructions</h3>
            <p>Welcome to Evens or Odds. The game works like this...</p>
            <button onClick={expandInstructions}>Read more</button>
        </div>
    )

}

const mapStateToProps = props =>{
    return {instructionsExpanded: props.settings.instructionsExpanded}; 
}

const mapDispatchToProps = dispatch =>{
    return {
        expandInstructions: () => dispatch(expandInstructions()),
        collapseInstructions: () => dispatch(collapseInstructions())
    };
}

const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(Instructions);