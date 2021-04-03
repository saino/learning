import React, { Component } from 'react'
import Board from "./board";
import './game.css'

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentStep: 0,
            order: true,
            historyBoards: [{
                board: new Array(9).fill(null),
                player: 'X',
                position: '',
            }]
        }
    }
    getLine(currentBoard){
        return this.calculateWinner(currentBoard, true);
    }
    clickSquare = (i) => {
        const { currentStep } = this.state;
        const historyBoards = this.state.historyBoards.slice(0, this.state.currentStep + 1);
        const currentBoard = historyBoards[currentStep].board.slice();
        const currentPlayer = historyBoards[currentStep].player;
        if(this.calculateWinner(currentBoard) || currentBoard[i]){
            return;
        }
        // historyBoards.length = currentStep+1;
        currentBoard[i] = currentPlayer;
        const line = this.getLine(currentBoard);
        const position = Math.floor(i/3)+"行，"+i%3+"列: "+currentPlayer;
        const nextPlayer = currentPlayer === "X" ? "O" : "X";
        this.setState({
            currentStep: currentStep+1,
            historyBoards: historyBoards.concat([{
                board: currentBoard, 
                player: nextPlayer,
                position: position,
                line:line,
            }])
        });
    }
    gameOver(currentBoard){
        return currentBoard.every(square=>{
            return square;
        });
    }
    calculateWinner(currentBoard, needLine){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for(let i=0; i<lines.length; i++){
            const [a, b, c] = lines[i];
            if(currentBoard[a] && currentBoard[a]===currentBoard[b] && currentBoard[a]===currentBoard[c]){
                return needLine ? [a,b,c] : currentBoard[a];
            }
        }
        return null;
    }
    jumpTo(step){
        // console.log("跳转到"+step);
        this.setState({
            currentStep: step
        })
    }
    historyLists(historys){
        let historyBoards = historys;
        const order = this.state.order;
        if(!this.state.order){
            historyBoards = historys.slice(1);
            historyBoards.reverse();
            historyBoards.unshift(historys.slice(0,1).pop())
        }
        // console.log(historyBoards)
        return historyBoards.map((history, index)=>{
            const {board, player, position} = history;
            let step = order ? index : historyBoards.length-index;
            if(index === 0){
                step = 0;
            }
            const historyInfo = step ? 'Move to #'+step : "Start Game";
            return (<div key={step} className="history-item" onClick={()=>this.jumpTo(step)}>
                {historyInfo}&nbsp;&nbsp;&nbsp;&nbsp;
                {position}
            </div>);
        });
    }
    changeOrder(){
        this.setState({
            order: !this.state.order
        });
    }
    render() {
        const { historyBoards, currentStep } = this.state;
        const currentBoard = historyBoards[currentStep].board;
        const player = historyBoards[currentStep].player;
        const line = historyBoards[currentStep].line;
        const winner = this.calculateWinner(currentBoard);
        const isGameOver = this.gameOver(currentBoard);
        let statusInfo = winner ? "Winner: "+winner : "player: "+player;
        if(!winner && isGameOver){
            statusInfo = "平局"
        }
        return (
            <div className="game">
                <div className="status">{statusInfo}</div>
                <Board clickSquare={this.clickSquare} currentBoard={currentBoard} line={line}></Board>
                <div className="order-btn" onClick={()=>this.changeOrder()}>history order</div>
                <div className='history-lists'>
                    {this.historyLists(historyBoards)}
                </div>
            </div>
        )
    }
}
