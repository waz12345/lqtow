
    /**
     * 获取滚动的头部距离和左边距离
     * scroll().top scroll().left
     * @returns {{top: number, left: number}}
     */
    function scroll() {
        if(window.pageYOffset !== null ){
            return{
                top:window.pageYOffset,
                left:window.pageXOffset
            }

        }else if(document.compatMode === "CSS1Compat"){
           return {
               top:document.documentElement.scrollTop,
               left:document.documentElement.scrollLeft
           }

        }
        return {
            top:document.body.scrollTop,
            left:document.body.scrollLeft
        }
    }

   function $(id) {
       return 'string' === typeof  id ? document.getElementById(id) : null;
   }

    /**
     *获取屏幕的宽度和高度
     * @returns {{width: number, height: number}}
     */
    function client() {
        if(window.innerWidth){ // ie9及其以上的版本
            return{
                width: window.innerWidth,
                height:  window.innerHeight
            }
        }else if(document.compatMode !== 'CSS1Compat'){  // 怪异模式
            return{
                width: document.body.clientWidth,
                height: document.body.clientHeight
            }
        }
        // 标准
        return{
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
    function show(obj) {
        return obj.style.display = 'block';
    }


    function hide(obj) {
        return obj.style.display = 'none';
    }