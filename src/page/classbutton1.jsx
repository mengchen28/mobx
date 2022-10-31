import store from '../stores/index'
import React from 'react'
const user = store.user

// const Button=  (props)=>{  
//     const {user} = store
//     console.log('重新渲染了',props.id)
//     const fn = ()=>{
//         user.setName('卧槽')
//     }

//     return (
//         //mobx版本大于6 user.greeting不能加()
//         <button onClick={fn}>点击{user.address} </button>
//     )
// }
// @observer
class Button extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            name:'class-button1'
        }
    }
    fn() {
        user.setName('卧槽')
    }
    render() {
        console.log('button1重新渲染了',this.props.id)
        return (
            //mobx版本大于6  user.greeting不能加()
            <button onClick={this.fn}>{this.state.name}点击{user.address} </button>
        )
    }
}
export default Button