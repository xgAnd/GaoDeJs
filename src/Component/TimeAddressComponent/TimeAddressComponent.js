/**
 *  Class: TimeAddressComponent
 *  Author: zhangpeng
 *  Date: 2019/12/2.
 *  Description: 都使用箭头函数 funNmae = () =>{}
 *  component: 调用组件 先定义 ref = {name => this.name = name} 使用this.name获取组件发方法和变量
 *  子组件   : 参考demo
 */
import React, {Component} from 'react';

import { Picker, List ,Button} from 'antd-mobile';
export default class TimeAddressComponent extends Component {

    constructor(props) {
        super(props);
        // 初始化
        this.state = {
            data: [],
            asyncValue: [],
            pickerVisable:false,
            orderStatus:0, //订单时间的初始状态
            formatTime:'现在出行'
        };
        this.dataInfo='' //记录上一次的滑动数据
        // 返回给父组件的数据
        this.callbackValue = () => {
            // TODO code
        };

    }


    componentDidMount() {
    }

    componentWillUnmount() {
    }

    getTodayHoursList=()=>{
        //获取今天的剩余小时数
        let date=new Date()
        let hours = date.getHours(); //当前的小时数字  0~23 点
        let useHour=hours

        let minutes = date.getMinutes(); //获取分钟数  0~50 分
        let useMinutes=minutes
        if(minutes>=50){
            //小时数应该加1 如果小时数已经达到最大 即 23 则保持不变
            if(hours<23){
                useHour+=1
                useMinutes=0
            }
        }else {
            useMinutes+=10
            let timestr=useMinutes+''
            let useStr = timestr[0]+'0';
            useMinutes = parseInt(useStr,10);
        }
        let AlloutList=[]
        for (let i=useHour;i<=23;i++){
            let outList=[]
            let outInfo={value:i,label:i+'点'}
            if(i!==useHour){
                useMinutes=0
            }
            for (let j=useMinutes;j<=50;j+=10){
                let innerInfo={value:j,label:j+'分'}
                outList.push(innerInfo)
            }
            outInfo.children=outList
            AlloutList.push(outInfo)

        }
        return AlloutList
    }

    getOtherInfo=()=>{
        let AlloutList=[]
        for (let i=0;i<=23;i++){
            let outList=[]
            let outInfo={value:i,label:i+'点'}
            for (let j=0;j<=50;j+=10){
                let innerInfo={value:j,label:j+'分'}
                outList.push(innerInfo)
            }
            outInfo.children=outList
            AlloutList.push(outInfo)

        }
        return AlloutList
    }


    onPickerChange = (val) => {
        if(this.dataInfo){
            if(this.dataInfo!==val[0] &&(val[0]==='toady')){
                let allTimeInfo = this.getAllTimeInfo();
                window.AeonJSBridge.log('allTimeInfo',allTimeInfo)
                this.setState({
                    data:allTimeInfo
                })
            }
        }
        this.dataInfo=val[0]

    };


    onOkSelect=(val)=>{
        let d=new Date()
        let format=''
        if(val&&val.length){
            let day = val[0];
            let hour = val[1];
            let minute = val[2];
            if(day==='today'){
                //今天
                d.setHours(hour)
                d.setMinutes(minute)
            }else if(day==='tomorrow'){
                //明天
                let time = d.getTime();
                let number = time+24*60*60*1000;
                d=new Date(number)
                d.setHours(hour)
                d.setHours(minute)
            }else {
                //后天
                let time = d.getTime();
                let number = time+2*24*60*60*1000;
                d=new Date(number)
                d.setHours(hour)
                d.setHours(minute)
            }
            format= this.dateFormat('YYYY-mm-dd HH:MM',d);
            window.AeonJSBridge.log(format)
        }


        this.setState({
            asyncValue:val,
            pickerVisable:false,
            formatTime:format,
            orderStatus:1
        })

    }

    renderTimePicker=()=>{
        return(

            <Picker
                data={this.state.data}
                cols={3}
                visible={this.state.pickerVisable}
                value={this.state.asyncValue}
                onPickerChange={this.onPickerChange}
                onOk={(val)=>this.onOkSelect(val)}
                onDismiss={()=>this.setState({
                    pickerVisable:false
                })}
            >
                <List.Item arrow="horizontal" onClick={this.onClick}>预约时间</List.Item>
            </Picker>


        )
    }

    dateFormat(fmt, date) {
        let ret;
        let opt = {
            "Y+": date.getFullYear().toString(),        // 年
            "m+": (date.getMonth() + 1).toString(),     // 月
            "d+": date.getDate().toString(),            // 日
            "H+": date.getHours().toString(),           // 时
            "M+": date.getMinutes().toString(),         // 分
            "S+": date.getSeconds().toString()          // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) {
            ret = new RegExp("(" + k + ")").exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
            };
        };
        return fmt;
    }

    orderStatusChange=()=>{
        //订单的状态变化
        let orderStatus = this.state.orderStatus;
        if(orderStatus){
            //有值 即此时已经预约了时间
            this.setState({
                formatTime:'现在出行',
                orderStatus:0
            })

        }else {
            //没值  要去设置预约的时间
            this.setState({
                pickerVisable:true
            })
        }
    }


    render() {
        return (
            <div style={{display:'flex',flexDirection:'column'}}>
                <div style={{display:'flex',paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10}}>
                    <div style={{backgroundColor:'green'}}>{this.state.formatTime}</div>
                    <div style={{backgroundColor:'red'}} onClick={()=>this.orderStatusChange()}>{!orderStatus?'预约':'立即'}</div>
                </div>
                {this.renderTimePicker()}

            </div>
        );
    }
}
