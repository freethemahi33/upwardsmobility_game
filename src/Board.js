import React, {Component} from 'react'
import dice from './GameDieBigpng.png'
import playerList from './PlayerListBackground.png'
import gamelogo from './Upward_Mobility_big.png'
import { moveDist } from "./Game";
import { eventsArray} from "./eventsfile";

// console.log("Events array: " + eventsArray)

export function UpwardMobilityBoard ({ctx, G, moves, events}){

    // console.log("This is the current phase: " + ctx.phase)
    // console.log("Current player : " + ctx.currentPlayer + " at position " + G.players[ctx.currentPlayer].position)

    // console.log("This is the current event from G: " + G.currentEvent)
    // console.log("This is the current event from currentEvent: " + currentEvent)

    const { moveDist } = G;

    let eventScreenContents = "";

    switch (ctx.phase) {
        case "rollScreen":
            eventScreenContents = (
                <div>
                    <button onClick = {() => moves.rollDice()}  className="DiceButton" id="DiceButton"></button>
                    <img  onClick = {() => moves.rollDice()} className="DiceImage" id="NoPath_-_Copy_8" src="NoPath_-_Copy_8.png" srcSet="NoPath_-_Copy_8.png 1x, NoPath_-_Copy_8@2x.png 2x"/>
                    <div id="A_pair_of_strange_dice_lay_bef">
                        A pair of strange dice lay before you...
                    </div>
                </div>
            )
            if (G.players[ctx.currentPlayer].position === 25) {
                ctx.phase = "winningGameScreen";
                G.winningPlayer = ctx.currentPlayer;
            }
            break;
        case "eventOrItemScreen":
            eventScreenContents = (
                <div>
                    <span id="rollVal" className="inGameText"> Player {ctx.currentPlayer + 1} rolls a {moveDist} landing on cell {G.players[ctx.currentPlayer].position}</span>
                    <button onClick={() => events.setPhase("eventScreen")} className="inGameButton" id="showEventButton">Show Event</button>
                    <button onClick={() => events.setPhase("useItemScreen")} className="inGameButton" id="use-item-button">Use Item</button>
                </div>
        )
            break;
        case "eventScreen":
            // console.log("This is current event state description: " + currentEvent.description)
            let randInt = Math.floor(Math.random() * eventsArray.length);
            let currentEvent = eventsArray[randInt];
            moves.setCurrentEvent(currentEvent);

            eventScreenContents = (
                <div>
                    <div>
                        <span className="inGameText">{currentEvent.description}</span>
                    </div>
                    <div className="event-button-container">
                        {currentEvent.options.map((option, index) => (
                            <button key={index} onClick={() => {
                                if (index === currentEvent.correctAnswer) {
                                    moves.addCurrency(2);
                                    events.setPhase("pickUpItemScreen");
                                    // {console.log("Current event: " + G.currentEvent)}
                                } else {
                                    moves.moveBackward(3);
                                    events.setPhase("wrongAnswerScreen");
                                }
                            }} className="answerButton">{option}</button>
                        ))}
                    </div>
                </div>
            )
            break;

        case "useItemScreen":
            eventScreenContents = (
                <div>
                    {currentEvent}
                </div>
            )
            break;
        case "correctAnswerScreen":
            console.log("Current event from correct answer screen: " + currentEvent.description);
            eventScreenContents = (
                <div>
                    <span className="inGameText">Correct Answer Screen{currentEvent && currentEvent.onCorrect}</span>
                    <div className="event-button-container">
                        <button onClick={() => events.setPhase("pickUpItemScreen")} className="answerButton">Pick Up Item</button>
                    </div>
                </div>
            )
            break;

        case "pickUpItemScreen":
            console.log("Current event from pick up item screen: " + currentEvent.onCorrect);

            eventScreenContents = (
                <div>
                    <span className="inGameText">pick up item screen {currentEvent.onCorrect}</span>
                    <div className="event-button-container">
                        <button onClick={() => { events.setPhase("endTurnScreen") }} className="answerButton">Proceed</button>
                    </div>
                </div>
            )
            break;

        case "wrongAnswerScreen":
            eventScreenContents = (
                <div>
                    <span className="inGameText">wrong answer screen</span>
                    <div className="event-button-container">
                        <button onClick={() => events.setPhase("endTurnScreen")} className="answerButton">End Turn</button>
                    </div>
                </div>
            )
            break;

            case "winningGameScreen":
            eventScreenContents = (
                <div>
                    <span className="winningGameText">Player {ctx.currentPlayer} has won the game.</span>
                </div>
            )
            break;
        case "endTurnScreen":
            eventScreenContents = (
                <div>
                    <span className="inGameText">Your turn is over!</span>
                    <div className="event-button-container">
                        <button onClick={() => { events.endTurn(); events.setPhase("rollScreen"); }} className="answerButton">End Turn</button>

                    </div>

                </div>
            )
            break;


    }

    return(
        <div className="GamePage">
            <div className="Rectangle_42" id = "eventScreen">
                {eventScreenContents}
            </div>

            <svg className="GameProgression">
                <rect id="GameProgressionMenu" rx="0" ry="0" x="0" y="0">
                </rect>
            </svg>

            <img id="ProgresionImage" src="src/Templates/assets/StartFinishScale.png" srcSet="NoPath_-_Copy_6.png 1x, NoPath_-_Copy_6@2x.png 2x"/>


            {/*Player List*/}
            <svg className="GamePlayerBackground">
            </svg>
            <img id="NoPath_-_Copy_10" src="NoPath_-_Copy_10.png" srcSet="NoPath_-_Copy_10.png 1x, NoPath_-_Copy_10@2x.png 2x"/>

            <svg className="GamePlayer_1">
                <ellipse id="GamePlayer_1" rx="53" ry="53" cx="53" cy="53">
                </ellipse>
            </svg>
            <svg className="GamePlayer_2">
                <ellipse id="GamePlayer_2" rx="53" ry="53" cx="53" cy="53">
                </ellipse>
            </svg>
            <svg className="GamePlayer_3">
                <ellipse id="GamePlayer_3" rx="53" ry="53" cx="53" cy="53">
                </ellipse>
            </svg>
            <svg className="GamePlayer_4">
                <ellipse id="GamePlayer_4" rx="53" ry="53" cx="53" cy="53">
                </ellipse>
            </svg>
            <svg className="GamePlayer_5">
                <ellipse id="GamePlayer_5" rx="53" ry="53" cx="53" cy="53">
                </ellipse>
            </svg>
            <svg className="GamePlayer_6">
                <ellipse id="GamePlayer_6" rx="53" ry="53" cx="53" cy="53">
                </ellipse>
            </svg>
            {/*Player List*/}


            {/*Inventory List*/}
            <div className="Inventory">
                <rect id="Inventory" rx="0" ry="0" x="0" y="0">
                </rect>
            </div>
            <svg className="InventoryLabel">
                <rect id="InventoryLabel" rx="0" ry="0" x="0" y="0">
                </rect>
            </svg>

            <div id="Inventory_Label_Word">
                Inventory
            </div>
            {/*Inventory List*/}


            {/*Chat List*/}
            <div className="ChatAndLogo">
                <rect id="ChatAndLogo" rx="0" ry="0" x="0" y="0"></rect>
                <div id="chatSection"></div>
            </div>
            <input className="chatBox" type="text" placeholder="Type here to chat" id="chatBox" rx="7" ry="7" x="0" y="0" />

            <div id="Type_here_to_chat">
                <span>Type here to chat...</span>
            </div>
            {/*Chat List*/}


            {/*Player Stat List*/}
            <svg className="PlayerStatsBackground">
                <rect id="PlayerStatsBackground" rx="0" ry="0" x="0" y="0">
                </rect>

            </svg>
            <div className="PlayerName" id="PlayerName">
                TempName
            </div>
            <div className="PlayerJobTitle" id="PlayerJobTitle">
                TempJobTitle
            </div>
            <img className="PlayerBuffsIcon" id="PlayerBuffsIcon" src="BuffIcon.png" srcSet="BuffIcon.png 1x, BuffIcon.png.png 2x"/>
            <img className="PlayerDebuffsIcon" id="PlayerDebuffsIcon" src="DebuffIcon.png" srcSet="DebuffIcon.png 1x, DebuffIcon.png.png 2x"/>
            <div className="PlayerCurrency" id="PlayerCurrency">
                $12345
            </div>
            <div className="PlayerIncome" id="PlayerIncome">
                +$2000 in 2 turns
            </div>
            {/*Player Stat List*/}
        </div>
    )
}