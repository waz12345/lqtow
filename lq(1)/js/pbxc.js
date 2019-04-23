
    pubu("big","box");
    var span = document.getElementsByTagName('span')[0];
    var x,beginner,end = 0, timer = null, timer1 = null;

    //动态加载图片
    window.onscroll = function () {
        x=beginner = scroll().top;
        x >0 ? show(span):hide(span);
        span.onclick = function () {
            clearInterval(timer);
            timer = setInterval(function () {
                beginner = beginner + (end - beginner)* 0.05;
                  window.scrollTo(0,beginner);

                  if(parseInt(beginner) === end){
                      clearInterval(timer);
                  }
            },20);
        };

        if(check()){
          //2.造数据
            var dateArr = [
                {"src": "s1.jpg"},
                {"src": "s2.jpg"},
                {"src": "s3.jpg"},
                {"src": "s4.jpg"},
                {"src": "s5.jpg"},
                {"src": "s6.jpg"},
                {"src": "s7.jpg"},
                {"src": "s8.jpg"},
                {"src": "s9.jpg"},
                {"src": "s10.jpg"},
                {"src": "s11.jpg"},
                {"src": "s12.jpg"},
                {"src": "s13.jpg"},
                {"src": "s14.jpg"},
                {"src": "s15.jpg"},
                {"src": "s16.jpg"},
                {"src": "s17.jpg"},
                {"src": "s18.jpg"},
                {"src": "s19.jpg"},
                {"src": "s20.jpg"},
                {"src": "s21.jpg"},
                {"src": "s22.jpg"},
                {"src": "s23.jpg"},
                {"src": "s24.jpg"},
                {"src": "s25.jpg"},
                {"src": "s26.jpg"},
                {"src": "s27.jpg"},
                {"src": "s28.jpg"},
                {"src": "s29.jpg"},
                {"src": "s30.jpg"},
                {"src": "s31.jpg"},
                {"src": "s32.jpg"},
                {"src": "s33.jpg"},
                {"src": "s34.jpg"},
                {"src": "s35.jpg"},
                {"src": "s36.jpg"},
                {"src": "s37.jpg"},
                {"src": "s38.jpg"},
                {"src": "s39.jpg"},
                {"src": "s40.jpg"},
                {"src": "s41.jpg"},
                {"src": "s42.jpg"}
            ];

            //2.2 创建元素
            for(var i=0;i < dateArr.length;i++){
                var newbox = document.createElement("div");
                newbox.className = 'box';
                $("big").appendChild(newbox);
                var newsbox = document.createElement("div");
                newsbox.className = 'sbox';
                newbox.appendChild(newsbox);
                var newimg = document.createElement("img");
                newimg.src = "iyou/"+ dateArr[i].src ;
                newimg.alt = '没有图片了！！';
                newsbox.appendChild(newimg);
            }
            alert("照片滚完了！以下是重复！等待我的更新呦");
            pubu("big","box");
        }
        };

        //响应式改变

    window.onresize = function () {
        clearInterval(timer1);
        //节流

            timer1 = setInterval(function () {
                console.log(1);
                pubu("big","box");
                clearInterval(timer1);
            },200)

    };


/**
 * 瀑布流的实现
 * @param par
 * @param son
 */
function pubu(par, son) {
    var bw = client().width;
    var w = document.getElementsByClassName('box')[0].offsetWidth;
    var cole = parseInt(bw / w);
   var allbox = $(par).children;
    $(par).style.width = cole *  w + 'px';
     $(par).style.margin = '100px auto';

     var hArr = [], boxh, minboxh, minboxindex = 0 ;
    for( var i = 0 ; i < allbox.length ;i++){
        //求出子盒子高度
        boxh = allbox[i].offsetHeight;
        if(i < cole){
            hArr.push(boxh);
            allbox[i].style = '';
        }else{
            minboxh = Math.min.apply(this, hArr);
           minboxindex = getMinBoxIndex(hArr, minboxh);
           allbox[i].style.position = "absolute";
           allbox[i].style.left = minboxindex * w + 'px';
            allbox[i].style.top = minboxh + 'px';
            //更新数组的最小高度
            hArr[minboxindex] += boxh;

        }


    }
}

/**
 * 获取数组中最矮盒子的索引
 * @param arr
 * @param val
 * @returns {number}
 */
function getMinBoxIndex(arr, val) {
    for(var i = 0;i<arr.length;i++){
        if(arr[i] === val){
            return i;
        }
    }
}

/**
 * 判断图片加载规则
 * @returns {boolean}
 */
function check() {
    //获取最后一个盒子
    var all = document.getElementsByClassName("box");
    var lastbox = all[all.length - 1];

    //2.求出最后一个盒子的一半 + 头部偏移的高度

    var lastbh = lastbox.offsetHeight * 0.5 + lastbox.offsetTop;

    //3.求出屏幕的高度
    var screew = client().height;

    //4.页面滚动高度

    var scrollTop = scroll().top;
    return lastbh <= screew + scrollTop;
}