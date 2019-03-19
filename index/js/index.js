$(function(){
    //vue实例
    
    var index= new Vue({
        el:'#app',
        data:{
            roundImgs:['./imgs/01.jpeg','./imgs/02.jpeg','./imgs/03.jpeg','./imgs/04.jpeg','./imgs/05.jpeg'],
            jijieImgs:[{
                    url:'./imgs/01.jpg',
                    derection:`春季 春天，当然是美的，但每个人眼中的春天也各不一样。有人爱这杨柳菲菲，有人爱这细雨绵绵，也有人爱这清风徐徐。所幸的是生在诗香中国，在诗词佳作迭出的这片土地，我们每个人都能找到自己心中所喜的春。

                    关于“春”的诗句有那么多，我却独爱韩愈的一首《早春呈水部张十八员外》。每每读来，眼前便是一片清晰可见的早春好景。`
                },{
                    url:'./imgs/02.jpg',
                    derection:"夏季 收获前的一个季节，是一个充满生命力与活力的时候。玉米和小麦，黄澄澄亮晶晶就让人感到温馨.."
                },{
                    url:'./imgs/03.jpg',
                    derection:"秋季 秋天一到，果子的芳香扑鼻而来，醉人心脾。且不说黄澄澄的鸭梨压弯了树枝，红红的苹果像小灯笼挂满枝头。单那绿色走廊一样的葡萄架，就够我陶醉的了。"
                },{
                    url:'./imgs/04.jpg',
                    derection:"冬季 天空一碧如洗，灿烂的阳光正从密密的松针的缝隙间射下来，形成一束束粗粗细细的光柱，把飘荡着轻纱般薄雾的林荫照得通"
                }],
            cities:[],
            city_cis:[],
            sights:     [
                {
                "bishe_tour_id":"1",
                "bishe_tour_name":"兵马俑",
                "bishe_tour_provinceName":"陕西省",
                "bishe_tour_cityName":"西安市",
                "bishe_tour_image":"./imgs/sight.jpg",
                "bishe_tour_desc":"兵马俑兵马俑兵马俑兵马俑兵马俑兵马俑兵马俑兵马俑",
                "bishe_tour_time":"2019-11-11",
                "bishe_tour_registerId":"1"
              },
                {
                "bishe_tour_id":"2",
                "bishe_tour_name":"壶口瀑布",
                "bishe_tour_provinceName":"陕西省",
                "bishe_tour_cityName":"延安市",
                "bishe_tour_image":"./imgs/sight.jpg",
                "bishe_tour_desc":"壶口瀑布壶口瀑布壶口瀑布壶口瀑布壶口瀑布壶口瀑布",
                "bishe_tour_time":"2019-11-11",
                "bishe_tour_registerId":"1"
              },
              {
                "bishe_tour_id":"1",
                "bishe_tour_name":"兵马俑",
                "bishe_tour_provinceName":"陕西省",
                "bishe_tour_cityName":"西安市",
                "bishe_tour_image":"./imgs/sight.jpg",
                "bishe_tour_desc":"兵马俑兵马俑兵马俑兵马俑兵马俑兵马俑兵马俑兵马俑",
                "bishe_tour_time":"2019-11-11",
                "bishe_tour_registerId":"1"
              },
                {
                "bishe_tour_id":"2",
                "bishe_tour_name":"壶口瀑布",
                "bishe_tour_provinceName":"陕西省",
                "bishe_tour_cityName":"延安市",
                "bishe_tour_image":"./imgs/sight.jpg",
                "bishe_tour_desc":"壶口瀑布壶口瀑布壶口瀑布壶口瀑布壶口瀑布壶口瀑布",
                "bishe_tour_time":"2019-11-11",
                "bishe_tour_registerId":"1"
              },
              {
                "bishe_tour_id":"1",
                "bishe_tour_name":"兵马俑",
                "bishe_tour_provinceName":"陕西省",
                "bishe_tour_cityName":"西安市",
                "bishe_tour_image":"./imgs/sight.jpg",
                "bishe_tour_desc":"兵马俑兵马俑兵马俑兵马俑兵马俑兵马俑兵马俑兵马俑",
                "bishe_tour_time":"2019-11-11",
                "bishe_tour_registerId":"1"
              },
                {
                "bishe_tour_id":"2",
                "bishe_tour_name":"壶口瀑布",
                "bishe_tour_provinceName":"陕西省",
                "bishe_tour_cityName":"延安市",
                "bishe_tour_image":"./imgs/sight.jpg",
                "bishe_tour_desc":"壶口瀑布壶口瀑布壶口瀑布壶口瀑布壶口瀑布壶口瀑布",
                "bishe_tour_time":"2019-11-11",
                "bishe_tour_registerId":"1"
              },
              {
                "bishe_tour_id":"1",
                "bishe_tour_name":"兵马俑",
                "bishe_tour_provinceName":"陕西省",
                "bishe_tour_cityName":"西安市",
                "bishe_tour_image":"./imgs/sight.jpg",
                "bishe_tour_desc":"兵马俑兵马俑兵马俑兵马俑兵马俑兵马俑兵马俑兵马俑",
                "bishe_tour_time":"2019-11-11",
                "bishe_tour_registerId":"1"
              },
                {
                "bishe_tour_id":"2",
                "bishe_tour_name":"壶口瀑布",
                "bishe_tour_provinceName":"陕西省",
                "bishe_tour_cityName":"延安市",
                "bishe_tour_image":"./imgs/sight.jpg",
                "bishe_tour_desc":"壶口瀑布壶口瀑布壶口瀑布壶口瀑布壶口瀑布壶口瀑布",
                "bishe_tour_time":"2019-11-11",
                "bishe_tour_registerId":"1"
              },
            ],
            collections:[  {
                "bishe_tour_id":"2",
                "bishe_tour_name":"壶口瀑布",
                "bishe_tour_provinceName":"陕西省",
                "bishe_tour_cityName":"延安市",
                "bishe_tour_image":"./imgs/sight.jpg",
                "bishe_tour_desc":"壶口瀑布壶口瀑布壶口瀑布壶口瀑布壶口瀑布壶口瀑布",
                "bishe_tour_time":"2019-11-11",
                "bishe_tour_registerId":"1"
              },
              {
                "bishe_tour_id":"1",
                "bishe_tour_name":"兵马俑",
                "bishe_tour_provinceName":"陕西省",
                "bishe_tour_cityName":"西安市",
                "bishe_tour_image":"./imgs/sight.jpg",
                "bishe_tour_desc":"兵马俑兵马俑兵马俑兵马俑兵马俑兵马俑兵马俑兵马俑",
                "bishe_tour_time":"2019-11-11",
                "bishe_tour_registerId":"1"
              },
                {
                "bishe_tour_id":"2",
                "bishe_tour_name":"壶口瀑布",
                "bishe_tour_provinceName":"陕西省",
                "bishe_tour_cityName":"延安市",
                "bishe_tour_image":"./imgs/sight.jpg",
                "bishe_tour_desc":"壶口瀑布壶口瀑布壶口瀑布壶口瀑布壶口瀑布壶口瀑布",
                "bishe_tour_time":"2019-11-11",
                "bishe_tour_registerId":"1"
              }
            ],
            collected:false,
            IP:'',
            city:'陕西',
            city_ci:'西安',
            weather:{
                mouthDay:'',
                xingqi:'',
                city:'西安',
                wendu:''
            },
            mark:0,
            masg:'',
            timer:null,
            is_login:false,
            is_login_stadus:false,
            isAdmin:true,
            user_touxiang:'./imgs/user_img.png',
            user:{longin_id:'',name:'wang',img:'./imgs/user_img.png',user_type:100},
            //季节和主页面 我的收藏切换
            index_stadus:true,
            jijie_stadus:false,
            my_collection_stadus:false,
            my_cities_stadus:false,
            all_cities_stadus:false,
            //登陆和注册  修改密码 退出登陆的模态框切换
            login_stadus:true,
            regest_stadus:false,

            update_password_view_stadus:false,
            login_out_view_stadus:false,
            update_userInfo_stadus:false,
            login_regest_view_stadus:true,
            //登陆下面的账号密码登陆和微信登陆切换
            zhanghao_login:true,
            weixin_login:false,
            //注册的信息
            registerInfo:{
                "bishe_register_username":'',
                "bishe_register_password":'',
                "bishe_register_repassword":''
            },
            //登录的信息
            loginInfo:{
                "bishe_register_username":'',
                "bishe_register_password":''
            },
            //修改密码信息
            updateUserInfo:{
                "bishe_register_password":'',
                "bishe_register_newpassword":'',
                "bishe_register_renewpassword":''
            },
            //更新个人信息
            updateUsrAllInfo:{
                "bishe_userInfo_nike":'',
                "bishe_userInfo_sex":'男',
                "bishe_userInfo_email":''
            }
        },
        // router:router,
        methods: {
            //首页的轮播效果
            autoPlay () {
              this.mark++;
              if (this.mark === 4) {
                this.mark = -1
              }
            },
            play () {
              this.timer = setInterval(this.autoPlay, 2500)
            },
            change (i) {
              this.mark = i
            },
            stop () {
              clearInterval(this.timer)
            },
            move () {
              this.timer = setInterval(this.autoPlay, 2500)
            },
            //获取轮播图的imgs
            roundImgsGet(){
                // Lambda写法
                this.$http.get('').then((response) => {
                    // 响应成功回调
                    console.log(JSON.parse(response.bodyText));

                }, (response) => {
                    // 响应错误回调
                    console.log(000);
                });
            },
            //获取几个季节的imgs
            jijieImgsGet(){

            },
            //主页季节点击显示季节页面  消灭主页面 收藏
            jijie_view(){
                this.index_stadus=false;
                this.jijie_stadus=true;
                this.my_collection_stadus=false;
                this.all_cities_stadus=false;
            },
            //显示主页面，消灭季节页面和收藏
            index_view(){
                this.index_stadus=true;
                this.jijie_stadus=false;
                this.my_collection_stadus=false;
                this.all_cities_stadus=false;
            },
            //显示收藏页面 消灭季节页面和主页面
            my_collection_view(){
                this.index_stadus=false;
                this.jijie_stadus=false;
                this.my_collection_stadus=true;
                this.all_cities_stadus=false;
            },
            //自动获取ip
            getIp(){
                var that=this;
                $.ajax({
                    url:"http://192.168.1.198:8080/ip/getIp",
                    type:'get',
                    success:function(data){    
                        that.IP=data.response.ip;
                        that.getCityByIp(that.IP);
                    },
                    error:function(data){
                        console.log(data,'12');
                    }
                });
            },
            //ip获取地理位置
            getCityByIp(ip){
                var that=this;
                $.ajax({
                    url:"http://192.168.1.198:8080/address/getAddress/"+ip,
                    type:'get',
                    success:function(data){
                        
                        that.city=data.province;
                        that.city_ci=data.city;
                        that.$http.get("http://192.168.1.198:8080/weather/cityName/"+data.city).then((response) => {
                            // 响应成功回调
                            
                            response=JSON.parse(response.bodyText);
                            
                            that.weather={
                                mouthDay:response.data.forecast[0].date,
                                xingqi:'',
                                city:response.data.city,
                                wendu:response.data.forecast[0].high
                            }
                        }, (response) => {
                            // 响应错误回调
                            
                            console.log(000);
                        });
                    },
                    error:function(data){
                        console.log(data);
                    }
                });
            },
            //获得所有省份的接口
            getAllProvence(){
                var that=this;
                $.ajax({
                    url:"http://192.168.1.198:8080/province/getProvinceList",
                    type:'get',
                    success:function(data){
                        that.cities=data;
                        
                    },
                    error:function(data){
                        console.log(data);
                    }
                });
            },
                 //切换省
            cities_cp(val,id){
                this.city=val;
                var bishe_city_provence_id=id;
                var that=this;
                 //请求市
                $.ajax({
                    url:"http://192.168.1.198:8080/city/getCityList/"+bishe_city_provence_id,
                    type:'get',
                    success:function(data){
                        console.log(data);
                        that.city_cis=data;
                      
                    },
                    error:function(data){
                        console.log(data);
                    }
                });
                
            },
            city_ci_cp(val){
                this.city_ci=val;
                this.all_cities_view();
                var that=this;
                this.$http.get("http://192.168.1.198:8080/weather/cityName/"+val).then((response) => {
                    // 响应成功回调
                   
                    response=JSON.parse(response.bodyText);
                    that.weather={
                        mouthDay:response.data.forecast[0].date,
                        xingqi:'',
                        city:response.data.city,
                        wendu:response.data.forecast[0].high
                    }
                }, (response) => {
                    // 响应错误回调
                    
                    console.log(000);
                });
            },
                //查询城市
            all_cities_view(){
                this.index_stadus=false;
                this.jijie_stadus=false;
                this.my_collection_stadus=false;
                this.all_cities_stadus=true;
            },
            //获取体格城市的天气信息
            cities_weather_Info(){
            },
            //登陆 注册页面
            login_view(){
                this.login_stadus=true;
                this.regest_stadus=false;
            },
            regise_view(){
                this.regest_stadus=true;
                this.login_stadus=false;
            },
            zhanghao_login_view(){
                this.zhanghao_login=true;
                this.weixin_login=false;
            },
            weixin_login_view(){
                this.weixin_login=true;
                this.zhanghao_login=false;
            },

            login_resist_view(){
                this.login_regest_view_stadus=true;
                this.update_password_view_stadus=false;
                this.login_out_view_stadus=false;
                this.update_userInfo_stadus=false;  
                this.is_login_stadus=false;
            },
            update_password_view(){
                this.login_regest_view_stadus=false;
                this.update_password_view_stadus=true;
                this.login_out_view_stadus=false;
                this.update_userInfo_stadus=false;
                this.is_login_stadus=false;
            },
            login_out_view(){
                this.login_regest_view_stadus=false;
                this.update_password_view_stadus=false;
                this.login_out_view_stadus=true;
                this.update_userInfo_stadus=false;
                this.is_login_stadus=false;
            },
            upadete_userinfo_view(){
                this.login_regest_view_stadus=false;
                this.update_password_view_stadus=false;
                this.login_out_view_stadus=false;
                this.update_userInfo_stadus=true;
                this.is_login_stadus=false;
            },
            //城市列表的显示与消失
            my_cities_view(){
                this.my_cities_stadus=true;
            },
            my_cities_hide_view(){
                this.my_cities_stadus=false;
            },
            //注册的接口
            register(){
                var that=this;
                let data={
                    "bishe_register_username":this.registerInfo.bishe_register_username,
                    "bishe_register_password":this.registerInfo.bishe_register_password,
                    "bishe_register_repassword":this.registerInfo.bishe_register_repassword
                }
                data=JSON.stringify(data);
                console.log(data);
                $.ajax({
                    url:'http://192.168.1.198:8080/register/regis',
                    type:'post',
                    data:data,
                    dataType:'json',
                    contentType: 'application/json',
                    success:function(data){
                        console.log(data);
                        alert("登陆成功！返回登陆界面！");
                        that.login_view();
                    },
                    error:function(data){
                        console.log(data);
                    }
                });

            },
            //登录的接口
            login(){
                var that=this;
                let data={
                    "bishe_register_username":this.loginInfo.bishe_register_username,
                    "bishe_register_password":this.loginInfo.bishe_register_password,
                }
                data=JSON.stringify(data);
                $.ajax({
                    url:'http://192.168.1.198:8080/register/login',
                    type:'post',
                    data:data,
                    dataType:'json',
                    contentType: 'application/json',
                    success:function(data){
                        console.log(data);
                        if(data==1){
                            that.masg="账号密码错误！";
                            that.login_regest_view_stadus=false;
                            that.is_login_stadus=true;
                        }else{
                            that.user=data;
                            if(data.code==2){//管理员
                                that.is_login=true;
                                that.isAdmin=true;
                            }
                            if(data.code==3){//普通用户
                                that.is_login=true;
                                that.isAdmin=false;
                            }
                            that.masg="登陆成功";
                            that.login_regest_view_stadus=false;
                            that.is_login_stadus=true;
                            savaLOginUserInfo(data);
                        }
                       
                    },
                    error:function(data){
                        console.log(data,'sssss');
                    }
                });
            },
            //修改密码的接口
            updateUserPassword(){
                var that=this;
                let data={
                    "bishe_register_id":this.user.object.bishe_register_id,
                    "bishe_register_password":this.updateUserInfo.bishe_register_password,
                    "bishe_register_newpassword":this.updateUserInfo.bishe_register_newpassword,
                    "bishe_register_renewpassword":this.updateUserInfo.bishe_register_renewpassword
                }
                //将data的json转换成字符串
                data=JSON.stringify(data);
                $.ajax({
                    url:'http://192.168.1.198:8080/register/updatePassword',
                    type:'post',
                    data:data,
                    dataType:'json',
                    contentType: 'application/json',
                    success:function(data){
                        console.log(data);
                        if(data==1){
                            that.masg="原密码不能为空！";
                            that.update_password_view_stadus=false;
                            that.is_login_stadus=true;
                        }
                        if(data==2){
                            that.masg="新密码不能为空！";
                            that.update_password_view_stadus=false;
                            that.is_login_stadus=true;
                        }
                        if(data==3){
                            that.masg="重复密码不能为空！";
                            that.update_password_view_stadus=false;
                            that.is_login_stadus=true;
                        }
                        if(data==4){
                            that.masg="原密码不正确";
                            that.update_password_view_stadus=false;
                            that.is_login_stadus=true;
                        }
                        if(data==5){
                            that.masg="重复密码不一致！";
                            that.update_password_view_stadus=false;
                            that.is_login_stadus=true;
                        }
                        if(data==6){
                            that.masg="修改密码成功！";
                            that.update_password_view_stadus=false;
                            that.is_login_stadus=true;
                        }
                    },
                    error:function(data){
                        console.log(data);
                    }
                });
                
                
            },
            //退出登录接口
            loginOut(){
                var that=this;
                this.$http.get('192.168.1.198:8080/register/logout').then((response) => {
                    // 响应成功回调
                    
                    that.masg="退出登陆成功！";
                    that.login_out_view_stadus=false;
                    that.is_login_stadus=true;
                    tuichudenglu();

                }, (response) => {
                    // 响应错误回调
                    console.log(000);
                });
                
            },
            //更新个人信息
            update_userInfo(){
                let data={
                    "bishe_userInfo_nike":this.updateUsrAllInfo.bishe_userInfo_nike,
                    "bishe_userInfo_sex":this.updateUsrAllInfo.bishe_userInfo_sex,
                    "bishe_userInfo_email":this.updateUsrAllInfo.bishe_userInfo_email
                }
                data=JSON.stringify(data);
                console.log(data);

                $.ajax({
                    url:'http://localhost:8080/userInfo/updateUserInfo',
                    type:'post',
                    data:data,
                    contentType: 'application/json',
                    success:function(data){

                    },
                    error:function(data){
                          
                    }
                });
            },
            //更新个人信息的照片上传
            update_userInfo_img(){
                let x = document.getElementById('updateUser_touxiang').files[0];
                console.log(x);
                let params = new FormData() ; //创建一个form对象
                params.append('file',x,x.name);  //append 向form表单添加数据
                console.log(params);
                //添加请求头  通过form添加的图片和文件的格式必须是multipart/form-data
                let config = {
                    headers:{'Content-Type':'multipart/form-data'}
                };
                axios.post("http://localhost:8080/userInfo/updateUserInfoImage",params,config)
                    .then(function(res){
                        console.log(res);
                        alert("更新成功！");
                    }.bind(this))
                    .catch(function (error) {
                         console.log(error);
                })
                
                // var formData = new FormData();
                // formData.append('bishe_userInfo_image', $('#updateUser_touxiang')[0].files[0]);
                // $.ajax({
                //     url:'http://localhost:8080/userInfo/updateUserInfoImage',
                //     type:'post',
                //     cache: false,
                //     data:formData,
                //     processData: false,
                //     contentType: false,
                //     ContentType="multipart/form-data",
                //     success:function(data){
                //             alert("更新成功！");
                //     },
                //     error:function(data){
                            
                //     }
                // });
            }

        },
        //实例化vue时创建的函数 与执行
        created(){
            this.getIp();
            this.play();
            this.getAllProvence();
            this.cities_weather_Info();
        }
        
    });  
    function savaLOginUserInfo(data){
        window.localStorage.setItem("userInfo",JSON.stringify(data));
    }
    function updateWangye(){
        index.user=JSON.parse(window.localStorage.getItem("userInfo"));
        console.log(index.user);
        if(index.user.code==2){//管理员
            index.is_login=true;
            index.isAdmin=true;
        }
        if(index.user.code==3){//普通用户
            index.is_login=true;
            index.isAdmin=false;
        }
    }
    updateWangye();
    function tuichudenglu(){
        window.localStorage.setItem("userInfo",{
            "code":100
        });
        window.location.reload();
    }

});
