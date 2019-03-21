$(function(){
    function GetQueryString(name)
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
        if(r!=null)return  unescape(r[2]); return null;
    }

    //vue实例
    var User={
        name:GetQueryString('name'),
        code:GetQueryString('code'),
        bishe_register_id:GetQueryString('bishe_register_id'),
    };
    window.localStorage.setItem("userInfo",JSON.stringify(User));

    var routes = [
        {
            path : '/',
            component : {
                template : `
                <div class="jumbotron">
                <h1>hellow,管理员：{{user.name}}</h1>
                <p>欢迎进入我的管理系统</p>
                </div>`,
                data:function(){
                    var user=JSON.parse(window.localStorage.getItem("userInfo"));
                    return {
                        user
                    }
                }
            },

        },
        {
            path : '/error',
            component : {
                template : `
                <div class="jumbotron">
                <p>错误</p>
                </div>`
            },

        },
        {
            path : '/success',
            component : {
                template : `
                <div class="jumbotron">
                <p>{{$route.query.msg}}</p>
                </div>`
            },

        },
        {
            path : '/usersList',
            component : {
                template : `
                <div class="jumbotron">
                    <p>用户列表管理</p>
                    <table class="table table-striped table-bordered table-hover">
                        <tbody>
                        <tr>
                            <th>编号</th>
                            <th>ID</th>
                            <th>昵称</th>
                            <th>性别</th>
                            <th>Email</th>
                            <th>Image</th>
                            <th>操作</th>
                        </tr>
                        <tr v-for="(userInfo,index) in usersList">
                            <td>{{index+1}}</td>
                            <td>{{userInfo.bishe_userInfo_id}}</td>
                            <td>{{userInfo.bishe_userInfo_nike}}</td>
                            <td>{{userInfo.bishe_userInfo_sex}}</td>
                            <td>{{userInfo.bishe_userInfo_email}}</td>
                            <td>{{userInfo.bishe_userInfo_image}}</td>
                            <td> <router-link  :to="{path:'/usersUpdate',query: {
                                bishe_userInfo_id:userInfo.bishe_userInfo_id,
                                bishe_userInfo_nike:userInfo.bishe_userInfo_nike,
                                bishe_userInfo_sex:userInfo.bishe_userInfo_sex,
                                bishe_userInfo_email:userInfo.bishe_userInfo_email,
                                bishe_userInfo_image:userInfo.bishe_userInfo_image
                            }}">修改</router-link>|
                            <router-link  :to="{path:'/userDelete',query: {
                                bishe_userInfo_id:userInfo.bishe_userInfo_id,
                                bishe_userInfo_nike:userInfo.bishe_userInfo_nike,
                            }}">删除</router-link></td>
                        </tr>
                        </tbody>
                    </table>
                </div>`,
                data:function(){
                    return {
                        usersList:[
                            {
                            "bishe_userInfo_id":"1",
                            "bishe_userInfo_nike":"kuke",
                            "bishe_userInfo_sex":"男",
                            "bishe_userInfo_email":"2791752775@qq.com",
                            "bishe_userInfo_image":"xxx",
                            "bishe_userInfo_registerId":"1"
                            },
                            {
                            "bishe_userInfo_id":"2",
                            "bishe_userInfo_nike":"ssss",
                            "bishe_userInfo_sex":"女",
                            "bishe_userInfo_email":"2791752775@qq.com",
                            "bishe_userInfo_image":"xxx",
                            "bishe_userInfo_registerId":"000"
                            }
                        ]
                    }
                }
            }

        },
        {
            path : '/usersUpdate',
            component : {
                template : `
                <div class="jumbotron" id="usersUpdate">
                    <p>{{$route.query.bishe_userInfo_nike}}信息修改</p>
                    <form class="form-horizontal">
                        <div class="form-group">
                            <label for="inputEmail3" class="col-sm-2 control-label">用户昵称：</label>
                            <div class="col-sm-10">
                            <input type="text" v-model="updateUsrAllInfo.bishe_userInfo_nike"  class="form-control"  placeholder="输入用户昵称">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputPassword3" class="col-sm-2 control-label">性别：</label>
                            <div class="col-sm-10">
                            <select name="" v-model="updateUsrAllInfo.bishe_userInfo_sex" class="form-control" >
                                <option value="男">男</option>
                                <option value="女">女</option>
                            </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputPassword3" class="col-sm-2 control-label">邮箱：</label>
                            <div class="col-sm-10">
                            <input v-model="updateUsrAllInfo.bishe_userInfo_email" type="email" placeholder="输入邮箱" class="form-control" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputPassword3" class="col-sm-2 control-label">头像</label>
                            <div class="col-sm-10">
                                <input type="file" id="updateUser_touxiang" accept="image/gif, image/jpeg,image/png,image/jpg" >
                                <p class="help-block">不传头像会默认头像</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                            <button  type="button" class="btn btn-primary" @click="update_userInfo()">确定修改</button>
                            </div>
                        </div>
                    </form>
                    
                
                </div>`,
                data:function(){
                    return {
                        updateUsrAllInfo:{
                            "bishe_userInfo_id":"",
                            "bishe_userInfo_nike":"",
                            "bishe_userInfo_sex":"男",
                            "bishe_userInfo_email":'',
                            "bishe_userInfo_image":"",
                            "bishe_userInfo_registerId":""
                            }
                        
                    }
                },
                methods:{
                    //获取传参
                    getRouterData(){
                        this.updateUsrAllInfo.bishe_userInfo_id= this.$route.query.bishe_userInfo_id;
                        this.updateUsrAllInfo.bishe_userInfo_nike= this.$route.query.bishe_userInfo_nike;
                        this.updateUsrAllInfo.bishe_userInfo_sex= this.$route.query.bishe_userInfo_sex;
                        this.updateUsrAllInfo.bishe_userInfo_email= this.$route.query.bishe_userInfo_email;
                        this.updateUsrAllInfo.bishe_userInfo_image= this.$route.query.bishe_userInfo_image;
                        this.updateUsrAllInfo.bishe_userInfo_registerId= this.$route.query.bishe_userInfo_registerId;
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
                        
                        
                    }
                },
                created(){
                    this.getRouterData();
                }
                
            },

        },
        {
            path : '/userDelete',
            component : {
                template : `
                <div class="jumbotron">
                <p>确认删除{{$route.query.bishe_userInfo_nike}}的信息？</p>
                <button  type="button" class="btn btn-primary" @click="delete_user()">确定修改</button>
                </div>`,
                methods:{
                    delete_user(){
                        let id=this.$route.query.bishe_userInfo_id;
                        console.log(id);

                        // $.ajax({
                        //     url:'http://localhost:8080/userInfo/updateUserInfo',
                        //     type:'',
                        //     success:function(data){

                        //     },
                        //     error:function(data){
                                
                        //     }
                        // });
                    },
                }
            },

        },
        {
            path : '/usersAdd',
            component : {
                template : `
                <div class="jumbotron">
                    <p>用户添加</p>
                    <form class="form-horizontal">
                        <div class="form-group">
                            <label for="inputEmail3" class="col-sm-2 control-label">用户昵称：</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputEmail3" placeholder="输入用户昵称">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputPassword3" class="col-sm-2 control-label">性别：</label>
                            <div class="col-sm-10">
                            <select name="" id="" class="form-control">
                                <option value="">男</option>
                                <option value="">女</option>
                            </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputEmail3" class="col-sm-2 control-label">邮箱：</label>
                            <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputPassword3" class="col-sm-2 control-label">头像</label>
                            <div class="col-sm-10">
                                <input type="file" id="exampleInputFile">
                                <p class="help-block">不传头像会默认头像</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-primary">添加</button>
                            </div>
                        </div>
                    </form>
                
                </div>`
            }

        },
        {
            path : '/roudImgs',
            component : {
                template : `
                <div class="jumbotron">
                <p>轮播图的更新</p>
                <p><label>上传图片: </label><input  type="file" name="text6" value="" accept="image/gif, image/jpeg,image/png,image/jpg"  multiple="multiple" /></p>
                <p>最多上传六张图片</p>
                <div>
                        <button type="button" class="btn btn-primary">上传</button>
                </div>
                </div>`
            },

        },
        {
            path : '/toursList',
            component : {
                template : `
                <div class="jumbotron">
                    <p>旅游查询</p>
                    <form class="form-horizontal">
                        <div class="form-group">
                            <label for="inputEmail3" class="col-sm-2 control-label">查询景点</label>
                            <div class="col-sm-5">
                            <input type="text" class="form-control" placeholder="...搜索旅游景点" style="color: rgb(255,157,0);">
                            </div>
                            <div class="col-sm-5">
                            <button type="submit" class="btn btn-default " id="bar-btn" style="color: rgb(255,157,0);">查询</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputPassword3" class="col-sm-2 control-label">景点所在的省份</label>
                            <div class="col-sm-3">
                            <select name="" id="" class="form-control">
                                <option value="">陕西</option>
                                <option value="">北京</option>
                            </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputPassword3" class="col-sm-2 control-label">景点所在的市</label>
                            <div class="col-sm-3">
                            <select name="" id="" class="form-control">
                                <option value="">陕西</option>
                                <option value="">北京</option>
                            </select>
                            </div>
                        </div>
                        
                    </form>
                    <div class="jumbotron">
                        <p>旅游列表</p>
                        <table class="table table-striped table-bordered table-hover">
                            <tbody>
                            <tr>
                                <th>编号</th>
                                <th>ID</th>
                                <th>景点名称</th>
                                <th>所在省</th>
                                <th>所在市</th>
                                <th>Image</th>
                                <th>简介</th>
                                <th>上传时间</th>
                                <th>操作</th>
                            </tr>
                            <tr v-for="(tour,index) in tours">
                                <td>{{index+1}}</td>
                                <td>{{tour.bishe_tour_id}}</td>
                                <td>{{tour.bishe_tour_name}}</td>
                                <td>{{tour.bishe_tour_provinceName}}</td>
                                <td>{{tour.bishe_tour_cityName}}</td>
                                <td>{{tour.bishe_tour_image}}</td>
                                <td>{{tour.bishe_tour_desc}}</td>
                                <td>{{tour.bishe_tour_time}}</td>
                                <td><a href="">修改</a>|
                                    <a href="">删除</a></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>`,
                data:function(){
                    return {
                        tours:[
                            {
                                "bishe_tour_id":"1",
                                "bishe_tour_name":"兵马俑",
                                "bishe_tour_provinceName":"陕西省",
                                "bishe_tour_cityName":"西安市",
                                "bishe_tour_image":"xxx",
                                "bishe_tour_desc":"兵马俑兵马俑兵马俑兵马俑兵马俑兵马俑兵马俑兵马俑",
                                "bishe_tour_time":"2019-11-11",
                                "bishe_tour_registerId":"1"
                              },
                                {
                                "bishe_tour_id":"2",
                                "bishe_tour_name":"壶口瀑布",
                                "bishe_tour_provinceName":"陕西省",
                                "bishe_tour_cityName":"延安市",
                                "bishe_tour_image":"xxx",
                                "bishe_tour_desc":"壶口瀑布壶口瀑布壶口瀑布壶口瀑布壶口瀑布壶口瀑布",
                                "bishe_tour_time":"2019-11-11",
                                "bishe_tour_registerId":"1"
                              }
                        ]
                    }
                }
            }

        },
        {
            path : '/tourAdd',
            component : {
                template : `
                <div class="jumbotron">
                <p>旅游景点添加</p>
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="inputEmail3" class="col-sm-2 control-label">景点的名称</label>
                        <div class="col-sm-10">
                        <input v-model="tourInfo.bishe_tour_name" type="text" class="form-control" id="inputEmail3" placeholder="输入景点的名称">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword3" class="col-sm-2 control-label">景点所在的省份</label>
                        <div class="col-sm-10">
                        <select v-model="tourInfo.bishe_tour_provinceid" @change="getAll_cities()" class="form-control">
                             <option v-for="provence in cities" :value="provence.bishe_province_id">{{provence.bishe_province_name}}</option>
                        </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword3" class="col-sm-2 control-label">景点所在的市</label>
                        <div class="col-sm-10">
                        <select v-model="tourInfo.bishe_tour_cityName"  name="" id="" class="form-control">
                            <option v-for="city in cli" :value="city.bishe_city_name">{{city.bishe_city_name}}</option>
                        </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputEmail3" class="col-sm-2 control-label">景点的简介</label>
                        <div class="col-sm-10">
                        <textarea v-model="tourInfo.bishe_tour_desc"  class="form-control" name="" id="" cols="30" rows="10" placeholder="输入景点的简介"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword3" class="col-sm-2 control-label">景点的照片</label>
                        <div class="col-sm-10">
                            <input type="file" id="tourAddImg" accept="image/gif, image/jpeg,image/png,image/jpg" >
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                        <button type="button" class="btn btn-primary" @click="AddTourInfo()">添加</button>
                        </div>
                    </div>
                </form>
                </div>`,
                data:function(){
                    return {
                        tourInfo:{
                            "bishe_tour_name":'',
                            "bishe_tour_provinceid":'',
                            "bishe_tour_cityName":'',
                            "bishe_tour_desc":''
                        },
                        cities:[],
                        cli:[]
                    }
                },
                methods:{
                    getAll_provence(){
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
                    getAll_cities(){
                        var that=this;
                         //请求市
                    $.ajax({
                        url:"http://192.168.1.198:8080/city/getCityList/"+that.tourInfo.bishe_tour_provinceid,
                        type:'get',
                        success:function(data){
                            console.log(data);
                            that.cli=data;
                        
                        },
                        error:function(data){
                            console.log(data);
                        }
                    });
                    },
                    AddTourInfo(){
                        var that=this;
                        var obj=JSON.parse(window.localStorage.getItem("userInfo"));
                        var bishe_register_id=obj.bishe_register_id;
                        var name='';
                        for(var i=0;i<that.cities.length;i++){
                            if(this.tourInfo.bishe_tour_provinceid==that.cities[i].bishe_province_id){
                                name=that.cities[i].bishe_province_name;
                            }
                        }
                        var data={
                            "bishe_register_id":bishe_register_id,
                            "bishe_tour_name":this.tourInfo.bishe_tour_name,
                            "bishe_tour_province_name":name,
                            "bishe_tour_city_name":this.tourInfo.bishe_tour_cityName,
                            "bishe_tour_desc":this.tourInfo.bishe_tour_desc
                        }
                        data=JSON.stringify(data);
                        console.log(data);
                        $.ajax({
                            url:'http://192.168.1.198:8080/tour/addTour',
                            type:'post',
                            data:data,
                            contentType: 'application/json',
                            success:function(data){
                                console.log(data);
                                that.AddTourInfo_img();
                            },
                            error:function(data){
                                
                            }
                        });
                    },
                    AddTourInfo_img(){
                        var that=this;
                        var formData = new FormData();
                        formData.append('file', $('#tourAddImg')[0].files[0]);
                        $.ajax({
                            url:'http://192.168.1.198:8080/tour/addTourImage',
                            type:'post',
                            cache: false,
                            data:formData,
                            processData: false,
                            contentType: false,
                            //enctype="multipart/form-data",
                            success:function(data){
                                    console.log(data);
                                    that.$router.push({
                                        path: '/success',
                                        query: {
                                          "msg":"添加旅游信息成功！"
                                        }
                                      })
                            },
                            error:function(data){
                                    
                            }
                        });
                    }
                },
                created(){
                    this.getAll_provence();
                }


            },

        },
    ];
    var router = new VueRouter({
        routes:routes,
    });
    var index= new Vue({
        el:'#app',
        data:{
            isAdmin:false,
            user:{name:'wang',img:'./imgs/user_img.png'},
        },
        router:router,
        //实例化vue时创建的函数 与执行
        created() {

        }
        
    });  
    function updateWangye(){
        index.user=JSON.parse(window.localStorage.getItem("userInfo"));
        
        console.log(index.user);
        if(index.user.code=="2"){//管理员
            // index.is_login=true;
            // index.isAdmin=true;
        }
        else{
            //普通用户
            
            alert("你不是管理员！！！");
            window.location.href="../index/index.html";
        }
    }
    updateWangye();


});
