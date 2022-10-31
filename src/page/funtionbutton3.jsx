import store from '../stores/index'
import { observer } from 'mobx-react'
const Button=  (props)=>{  
    const { user } = store
    console.log("Button3重新渲染了")
    const fn = ()=>{
        user.setName("我set")
    }

    return (
        //mobx版本大于6 user.greeting不能加()
        <button onClick={fn}>点击{user.name}</button>
    )
}
export default observer(Button)