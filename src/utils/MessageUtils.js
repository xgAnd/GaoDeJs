(function () {
    let a={}

    function handleMsg(event) {
        // window.AeonJSBridge.log('eventevent',event.detail)
                let parse = event.detail;
        // window.AeonJSBridge.log('eventevent22',parse)
                if(parse&&parse.action){
                    let list = a[parse.action];
                    // window.AeonJSBridge.log('eventevent',parse.action,list)
                    for(let i=0;i<list.length;i++){
                        let infos = list[i];
                        let observer = infos.observer;
                        let callback = infos.callback;
                        callback.call(observer,parse.paylod)
                    }
                }



    }

    const info={
        on:function (observer,action,callback) {
            let list = a[action]||[];
            list.push({
                observer,action,callback
            })
            a[action]=list
        },


        off:function (observer,action) {
            let list = a[action];
           list.filter((data)=>data.observer!==observer)
        },

        sendMsg:function (data) {
            if(typeof data!=='string'){
                data=JSON.stringify(data)
            }
            if( window.ReactNativeWebView){
                window.ReactNativeWebView.postMessage(data);
            }

        },


        log:function (...data) {
            let length = data.length;
            let s = ''
            let stringify=''
            for (let i = 0; i < length; i++) {
              let value = data[i]
                // s+=value+''
                if(typeof value==='string'||typeof value==='number'){
                    let n={action:'log',info:value}
                    window.ReactNativeWebView.postMessage(JSON.stringify(n));
                }else {
                  if(value){
                      // alert(value)
                      stringify = JSON.stringify(value);
                      let n={action:'log',info:stringify}
                      window.ReactNativeWebView.postMessage(JSON.stringify(n));
                  }

                }
            }
            // let n={action:'log',info:s}
            //  stringify = JSON.stringify(n);
            // window.ReactNativeWebView.postMessage(stringify);

        }

    }
    window.document.addEventListener('message_from_app',handleMsg)
    window.AeonJSBridge=info

    return info

})()