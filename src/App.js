import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './utils/MessageUtils'
import MainPageContainer from "./MainPageContainer";
class App extends Component{

    constructor(props){
        super(props)
        window.Global = {};
        this.state = {
            hasInit: false,
        };
        window.AeonJSBridge.on(this,'INIT_DATA',(payload)=>{
            window.AeonJSBridge.log('payload111',payload.width)
            window.AeonJSBridge.log('payload22',payload)
            if(payload){
                window.AeonJSBridge.log('payload333')
                window.Global={
                    ...window.Global,
                    ...payload
                }
                // window.AeonJSBridge.log('payload999',window.Global)
                this.setState({
                    hasInit:true
                })
            }else {
                window.AeonJSBridge.log('payload444')
            }

        })
        //刷新dom的元素
        const rootDom = document.getElementById('root');
        const styles = {
            width: window.Global.width ? window.Global.width + 'px' : '100%',
            height: window.Global.height ? window.Global.height + 'px' : '100%',
        };
        // window.AeonJSBridge.log('payload44455',JSON.stringify(styles))
        for (const key in styles) {
            if (styles.hasOwnProperty(key)) {
                rootDom.style[key] = styles[key];
            }
        }
    }

    render(){
        let hasInit = this.state.hasInit;
        if(!hasInit){
            return null
        }
        return (
            <Router>
                <Route path={'/home'} component={MainPageContainer}/>
            </Router>
        );
    }

}

export default App;
