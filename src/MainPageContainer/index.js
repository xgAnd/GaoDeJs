/**
 *  Class: index
 *  Author: zhangpeng
 *  Date: 2019/10/25.
 *  Description: 都使用箭头函数 funNmae = () =>{}
 *  component: 调用组件 先定义 ref = {name => this.name = name} 使用this.name获取组件发方法和变量
 *  子组件   : 参考demo
 */
/**
 *  Class: index
 *  Author: zhangpeng
 *  Date: 2019/10/16.
 *  Description: 都使用箭头函数 funNmae = () =>{}
 *  component: 调用组件 先定义 ref = {name => this.name = name} 使用this.name获取组件发方法和变量
 *  子组件   : 参考demo
 */
import React,{Component} from 'react';
// react-native导入
import './style.less'
import CarTypeComonent from "../Component/CarTypeComonent";
import { Picker, List ,Button} from 'antd-mobile';
// 第三发库导入


// 子组件导入

// api导入

// 图片导入(使用例子:import feed from './source/image/zcr/feed_button_yy.png'')

// 变量定义



export default class MainPageContainer extends Component {
    constructor(props) {
        super(props);
        // 初始化
        this.state = {
            data: [],
            asyncValue: [],
        };
        this.dataInfo='' //记录上一次的滑动数据
    }



    getAllTimeInfo=()=>{
        let timeList=[]
        let todayHoursList = this.getTodayHoursList(); //今天的信息
        let tomoInfoList = this.getOtherInfo(); //明天
        let afterInfoList = this.getOtherInfo(); //后天
        timeList.push({value:'today',label:'今天',children:todayHoursList})
        timeList.push({value:'tomorrow',label:'明天',children:tomoInfoList})
        timeList.push({value:'after',label:'后天',children:afterInfoList})
        return timeList
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


    onOkSelect=(val)=>{
        let d=new Date()
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
               let format = this.dateFormat('YYYY-mm-dd HH:MM',d);
               window.AeonJSBridge.log(format)
           }


        this.setState({
            asyncValue:val
        })

    }
    componentDidMount() {

        // window.AeonJSBridge.sendMsg({action:'log',info:'hello from lalala'})
        let allTimeInfo = this.getAllTimeInfo();

        this.setState({
            data:allTimeInfo
        })
        // window.AeonJSBridge.log(todayHoursList)
        // console.log(todayHoursList)
        window.AeonJSBridge.on(this,'lala',(info)=>{
            window.AeonJSBridge.log('infoinfo',info)
            alert(info.name+info.value)
        })
        var map = new AMap.Map('container',{
            zoom:13,//级别
        });
        map.plugin('AMap.Geolocation', function() {
            //eslint-disable-next-line
            var geolocation = new AMap.Geolocation({
                // 是否使用高精度定位，默认：true
                enableHighAccuracy: true,
                // 设置定位超时时间，默认：无穷大
                timeout: 10000,
                // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                //eslint-disable-next-line
                buttonOffset: new AMap.Pixel(10, 20),
                //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                zoomToAccuracy: true,
                //  定位按钮的排放位置,  RB表示右下
                buttonPosition: 'RB'
            })

            geolocation.getCurrentPosition()
            //eslint-disable-next-line
            AMap.event.addListener(geolocation, 'complete', onComplete)
            //eslint-disable-next-line
            AMap.event.addListener(geolocation, 'error', onError)


            function onComplete (data) {

                
                // data是具体的定位信息
                console.log('onComplete',data)
                // window.ReactNativeWebView.postMessage('onComplete');

                let position = data.position;
                if(data&&position){
                    let latitude = position.lat;
                    let lng = position.lng;
                    //eslint-disable-next-line
                    let s=new AMap.LngLat(lng,latitude)
                    //eslint-disable-next-line
                    let marker=new AMap.Marker({
                        position:s//位置
                    })
                    //eslint-disable-next-line

                    map.add(marker);//添加到地图
                    // map.setCenter(s)
                    // map.setZoom(8)
                }


            }

            function onError (data) {
                // 定位出错
                // window.ReactNativeWebView.postMessage('onError');
                console.log('onError',data)
            }
        })
    }


    renderTimePicker=()=>{
        return(

                <Picker
                    data={this.state.data}
                    cols={3}
                    // visible={true}
                    value={this.state.asyncValue}
                    onPickerChange={this.onPickerChange}
                    onOk={(val)=>this.onOkSelect(val)}
                >
                    <List.Item arrow="horizontal" onClick={this.onClick}>预约时间</List.Item>
                </Picker>


        )
    }




    render(){
        return(
            <div style={{width:window.Global.width?window.Global.width:'100%',height:window.Global.height?window.Global.height:'100%',display:'flex',flexDirection:'column'}}>
                <CarTypeComonent/>
                <Button>{'lksklskd'}</Button>
                <div style={{flex:1,flexDirection:'column',backgroundColor:'green',display:'flex'}}>
                    <div  id={'container'} className={'main_page'} style={{flex:1}}/>
                    {this.renderTimePicker()}

                </div>
                </div>

        )
    }
}
