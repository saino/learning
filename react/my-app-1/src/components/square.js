// import React, { Component } from 'react'

// export default class Square extends Component {
//     render() {
//         return (
//             <div className="square" onClick={this.props.onClick}>
//                 我是格子{this.props.value}
//             </div>
//         )
//     }
// }
import classnames from 'classnames'
export default function Square(props){
    // console.log(props.value, isStrong)
    return (
        <div className={classnames('square',{'active':props.isStrong})} onClick={props.onClick}>{props.value}</div>
    )
}
// export default Square;
