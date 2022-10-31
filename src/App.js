import logo from './logo.svg';
import './App.css';
// 下面两效果一样，只不过一个class,一个function
import Button1 from './page/classbutton1'
import Button2 from './page/funtionbutton2'

import Button3 from './page/funtionbutton3'
// import Test from './page/test'
import { Provider } from 'mobx-react'
import store from './stores/index'

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

        {true && <Provider user={store.user}>  
          <Button1 id="1"></Button1>
          <Button2 id="2"></Button2> 
          <Button3 id="3"></Button3> 
        </Provider>}
      </header>
    </div>
  );
}

export default App;
