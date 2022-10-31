
import {action, computed, observable,makeObservable} from 'mobx'

class User {
    //用不用public都一样
    @observable  name= "world"
    @observable public address= "天银大厦"

    //mobox版本大于6就要这个
    constructor() {
        makeObservable(this);
    }
    
    //mobx版本大于6 没有get会报错
    @computed get greeting() {
        return `hello ${this.name}`
    }
 
    @action.bound  
    setName(name){
        this.name = name
    }
    


}
export default User