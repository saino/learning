import React, { Component } from 'react'
import Square from './square';
export default class Board extends Component {
    renderSquare(){
        let squares = [];
        const { currentBoard, clickSquare, line } = this.props;
        console.log(this.props)
        for(let i=0; i<9;i++){
            let isStrong = line&&line.includes(i) ? true : false;
            squares.push(
                <Square isStrong={isStrong} onClick={()=>clickSquare(i)} value={currentBoard[i]} key={i}></Square>
            );
        }
        return squares;
    }
    render() {
        const { currentBoard} = this.props;

        return (
            <div className="board">
                {this.renderSquare(currentBoard)}
            </div>
        )
    }
}
