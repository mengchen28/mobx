import store from '../stores/index'
import { observer } from 'mobx-react'
const Button=  (props)=>{  
    const {user} = store
    console.log('button2重新渲染了',props.id)
    const fn = ()=>{
        user.setName('卧槽')
    }

    return (
        //mobx版本大于6 user.greeting不能加()
        <button onClick={fn}>点击{user.address} </button>
    )
}
export default observer(Button)