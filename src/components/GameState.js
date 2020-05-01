import React from 'react';
import { connect } from 'react-redux';

const CORRECT_GUESSES_RECORD_KEY = 'CORRECT_GUESSES_RECORD_KEY';

const checkRecord = correctGuesses => {
    const record = localStorage.getItem(CORRECT_GUESSES_RECORD_KEY);

    if (correctGuesses > record){
        localStorage.setItem(CORRECT_GUESSES_RECORD_KEY, correctGuesses);

        return { record: correctGuesses, isNewRecord: true };
    }

    return { record, isNewRecord: false };
}


const GameState = ({ remaining, correctGuesses }) => {

    const guessText = correctGuesses === 1? 'guess': 'guesses';

    const { record, isNewRecord } = checkRecord(correctGuesses);

    const recordLabel = isNewRecord ? '🎉 New Record': 'Record';
    return (
        <div>
            <h3>{recordLabel} : {record}</h3>
            <p>{remaining} cards remaining.</p>
            <p>{correctGuesses} correct {guessText}.</p>
        </div>
    )
}

export default connect(
    ({
        deck: {remaining},
        gameState: {correctGuesses}
    }) => ({ remaining, correctGuesses })
)(GameState);