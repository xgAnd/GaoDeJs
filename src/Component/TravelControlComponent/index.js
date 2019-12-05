/**
 *  Class: index
 *  Author: zhangpeng
 *  Date: 2019/10/28.
 *  Description: 都使用箭头函数 funNmae = () =>{}
 *  component: 调用组件 先定义 ref = {name => this.name = name} 使用this.name获取组件发方法和变量
 *  子组件   : 参考demo
 */
import React, {Component} from 'react';


export default class TravelControlComponent extends Component {

    constructor(props) {
        super(props);
        // 初始化
        this.state = {};
        // 返回给父组件的数据
        this.callbackValue = () => {
            // TODO code
        };
        this.onTouchStartHandler = (evt) => {
            console.log('onTouchStartHandler evt.touches[0].screenX',evt.touches[0].screenX)
            this.startX=evt.touches[0].screenX;
           // window.AeonJSBridge.log('onTouchStartHandler evt.touches[0].screenX',evt.touches[0].screenX)
        };

        this.onTouchEnd = (evt) => {
            // this.beginTouchScreenX = evt.touches[0].screenX;
            // console.log('onTouchEnd evt.touches[0].screenX',evt.touches[0].screenX)
            // window.AeonJSBridge.log('onTouchEnd evt.touches[0].screenX',evt.touches[0].screenX)
            // if(){
            //
            // }
            if(this.moveX>this.startX&&this.moveX-this.startX>=150){
                alert('滑动距离可以')
            }else {
                alert('滑动距离不可以')
            }
        };

        this.onTouchMoveHandler = (evt) => {
            this.moveX=evt.touches[0].screenX;
            console.log('onTouchMOve evt.touches[0].screenX',evt.touches[0].screenX)
        };

    }


    componentDidMount() {
    }

    componentWillUnmount() {
    }


    render() {
        let type = this.props.type; //状态 根据不同的状态显示不同的文字 和不同的颜色的样式
        return (
            <div style={{flexDirection:'row',height:55,justifyContent:'center',alignItems:'center',backgroundColor:'red',display:'flex'}}
                 onTouchMove={this.onTouchMoveHandler.bind(this)}  onTouchStart={this.onTouchStartHandler.bind(this)} onTouchEnd={this.onTouchEnd.bind(this)}>
                {'啦啦啦'}
            </div>
        );
    }
}
