/**
 *  Class: index
 *  Author: zhangpeng
 *  Date: 2019/11/9.
 *  Description: 都使用箭头函数 funNmae = () =>{}
 *  component: 调用组件 先定义 ref = {name => this.name = name} 使用this.name获取组件发方法和变量
 *  子组件   : 参考demo
 */
import React, {Component} from 'react';


export default class CarTypeComonent extends Component {

    constructor(props) {
        super(props);
        // 初始化
        this.state = {
            showTypeList:[
                {name:'出租车',type:3},{name:'快车',isSelect:true,type:1},{name:'专车',type:2}
            ]
        };
        // 返回给父组件的数据
        this.callbackValue = () => {
            // TODO code
        };

    }


    componentDidMount() {
    }

    componentWillUnmount() {
    }

    clickThings=(index)=>{
        let showTypeList = this.state.showTypeList;
       let showTypeItem = showTypeList[index];
       if(showTypeItem.isSelect){
           return
       }
        showTypeList.map((item=>{
            return item.isSelect=false
        }))
        showTypeItem.isSelect=true
        this.setState({
            showTypeList
        })
}


    render() {
        return (
            <div style={{display:'flex',height:50}}>
                {this.state.showTypeList.length>0?this.state.showTypeList.map((item,index)=>{
                    return(
                        <div style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}}>
                            <div style={{display:'flex',borderWidth:item.isSelect?1:0,borderStyle:'solid',borderColor:'gray',color:item.isSelect?'green':'#999999',padding:4,
                                borderRadius:10
                            }} onClick={()=>this.clickThings(index)}>
                                {item.name}
                            </div>
                        </div>
                    )
                }):null}
            </div>
        );
    }
}
