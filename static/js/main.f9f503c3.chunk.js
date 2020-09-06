(this["webpackJsonpcommodities-app"]=this["webpackJsonpcommodities-app"]||[]).push([[0],{181:function(e,t,a){e.exports=a(329)},186:function(e,t,a){},329:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(39),o=a.n(l),i=(a(186),a(14)),c=a(15),s=a(17),m=a(16),u=a(9),d=a(348),h=a(344),g=a(33),p=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleItemClick=function(e,t){var a=t.name;localStorage.setItem("activeItem",a)},e.logout=function(){localStorage.removeItem("usertoken"),localStorage.removeItem("role_id"),e.props.history.push("/login")},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{pointing:!0,secondary:!0,size:"massive"},"1"===localStorage.role_id?r.a.createElement(g.b,{to:"/admin"},r.a.createElement(h.a.Item,{as:"h3",name:"admin",active:"admin"===localStorage.activeItem,onClick:this.handleItemClick})):"2"===localStorage.role_id?r.a.createElement(g.b,{to:"/surveyor"},r.a.createElement(h.a.Item,{as:"h3",name:"surveyor",active:"surveyor"===localStorage.activeItem,onClick:this.handleItemClick})):r.a.createElement(g.b,{to:"/home"},r.a.createElement(h.a.Item,{as:"h3",name:"home",active:"home"===localStorage.activeItem,onClick:this.handleItemClick})),r.a.createElement(h.a.Menu,{position:"right"},localStorage.usertoken?r.a.createElement(h.a.Item,{name:"logout",active:"logout"===localStorage.activeItem,onClick:this.logout}):r.a.createElement(g.b,{to:"/login"},r.a.createElement(h.a.Item,{as:"h3",name:"login",active:"login"===localStorage.activeItem,onClick:this.handleItemClick}))))}}]),a}(n.Component),E=a(345),v=a(346),f=a(342),y=a(338),C=a(341),S=a(22),b=a.n(S);b.a.defaults.baseURL="https://caacuk-survey-api.herokuapp.com/";var w=function(e){return b.a.post("commodities/insert",{name:e.name,price:e.price,status:0,date:e.date},{headers:{Authorization:localStorage.usertoken}}).then((function(e){return e.data})).catch((function(e){return"error"}))},k=function(e){return b.a.post("commodities/update",{id:e.id,name:e.name,price:e.price,status:e.status,date:e.date},{headers:{Authorization:localStorage.usertoken}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},I=function(e){var t=e.id;return b.a.post("commodities/delete/"+t,{},{headers:{Authorization:localStorage.usertoken}}).then((function(e){return e.data})).catch((function(e){return console.log(e),"error"}))},j=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={commodities:[],loading:!0},e}return Object(c.a)(a,[{key:"getCommodityData",value:function(){var e=this;b.a.get("commodities/status/1").then((function(e){return e.data})).catch((function(e){console.log(e)})).then((function(t){e.setState({commodities:t}),e.setState({loading:!1})}))}},{key:"componentDidMount",value:function(){localStorage.setItem("activeItem","home"),this.getCommodityData()}},{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(E.a,{basic:!0},r.a.createElement(v.a,{size:"large"},"Commodities")),r.a.createElement(E.a,null,r.a.createElement(f.a,{active:this.state.loading,inverted:!0},r.a.createElement(y.a,null,"Loading")),r.a.createElement(C.a,{celled:!0},r.a.createElement(C.a.Header,null,r.a.createElement(C.a.Row,null,r.a.createElement(C.a.HeaderCell,{width:"5"},"Commodity Name"),r.a.createElement(C.a.HeaderCell,{width:"5"},"Price"),r.a.createElement(C.a.HeaderCell,{width:"5"},"Date"))),r.a.createElement(C.a.Body,null,this.state.commodities?this.state.commodities.map((function(e,t){return r.a.createElement(C.a.Row,{key:"".concat(e.id,"-").concat(t)},r.a.createElement(C.a.Cell,null,e.name),r.a.createElement(C.a.Cell,null,"Rp."," ",e.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")),r.a.createElement(C.a.Cell,null,e.date))})):"loading"))))}}]),a}(n.Component),O=a(330),D=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={commodities:[],loading:!0,loadingButton:!1,openModal:!1},e.handleChangeStatus=function(t){e.setState({loadingButton:!0});var a=t.status;a=1===a?0:1;var n={id:t.id,status:a};k(n).then((function(t){e.getCommodityData(),e.setState({loadingButton:!1})}))},e.handleDeleteComodity=function(t){e.setState({loadingButton:!0});var a={id:t.id};I(a).then((function(t){e.getCommodityData(),e.setState({loadingButton:!1})}))},e}return Object(c.a)(a,[{key:"getCommodityData",value:function(){var e=this;b.a.get("commodities/",{headers:{Authorization:localStorage.usertoken}}).then((function(e){return e.data})).catch((function(e){console.log(e)})).then((function(t){e.setState({commodities:t}),e.setState({loading:!1})}))}},{key:"componentDidMount",value:function(){if("1"!==localStorage.role_id)return this.props.history.push("/");localStorage.setItem("activeItem","admin"),this.getCommodityData()}},{key:"render",value:function(){var e=this;return r.a.createElement(E.a,null,r.a.createElement(E.a,{basic:!0},r.a.createElement(v.a,{size:"large"},"Admin")),r.a.createElement(E.a,null,r.a.createElement(f.a,{active:this.state.loading,inverted:!0},r.a.createElement(y.a,null,"Loading")),r.a.createElement(C.a,{celled:!0},r.a.createElement(C.a.Header,null,r.a.createElement(C.a.Row,null,r.a.createElement(C.a.HeaderCell,{width:"5"},"Name"),r.a.createElement(C.a.HeaderCell,{width:"5"},"Price"),r.a.createElement(C.a.HeaderCell,{width:"5"},"Date"),r.a.createElement(C.a.HeaderCell,{width:"5"},"Status"))),r.a.createElement(C.a.Body,null,this.state.commodities?this.state.commodities.map((function(t,a){return r.a.createElement(C.a.Row,{key:"".concat(t.id,"-").concat(a)},r.a.createElement(C.a.Cell,null,t.name),r.a.createElement(C.a.Cell,null,"Rp."," ",t.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")),r.a.createElement(C.a.Cell,null,t.date),r.a.createElement(C.a.Cell,null,r.a.createElement(O.a,{icon:"checkmark",positive:1===t.status,loading:e.state.loadingButton,key:t.id,onClick:function(){return e.handleChangeStatus(t)}})),r.a.createElement(C.a.Cell,null,r.a.createElement(O.a,{icon:"close",negative:!0,key:t.id,onClick:function(){return e.handleDeleteComodity(t)}})))})):"loading"))))}}]),a}(n.Component),_=a(51),R=a(343),A=a(340),z=a(339),B=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={name:"",price:"",date:"",loading:!1,message:!0,messageType:!1},e.onChange=function(t){e.setState(Object(_.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){if(""!==e.state.name){e.setState({message:!0}),e.setState({loading:!0}),e.setState({messageError:!1});var a={name:e.state.name,price:e.state.price,date:e.state.date};w(a).then((function(t){"error"===t&&e.setState({messageError:!0}),e.setState({message:!1}),e.setState({loading:!1}),e.setState({name:""}),e.setState({price:""}),e.setState({date:""}),e.props.history.push("/surveyor")})).catch((function(e){console.log(e)}))}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){"2"!==localStorage.role_id&&this.props.history.push("/"),localStorage.setItem("activeItem","surveyor")}},{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(R.a,{success:!this.state.messageError,negative:!!this.state.messageError,header:this.state.messageError?"Error":"Success",content:this.state.messageError?"Failed submit":"Your data has been submited",hidden:this.state.message}),r.a.createElement(E.a,{basic:!0},r.a.createElement(v.a,{size:"large"},"Surveyor")),r.a.createElement(E.a,null,r.a.createElement(f.a,{active:this.state.loading,inverted:!0},r.a.createElement(y.a,null,"Loading")),r.a.createElement(A.a,null,r.a.createElement(A.a.Field,null,r.a.createElement("label",null,"Commodity Name"),r.a.createElement(z.a,{onChange:this.onChange,value:this.state.name,placeholder:"Commodity Name",name:"name",type:"text",fluid:!0,required:!0})),r.a.createElement(A.a.Field,null,r.a.createElement("label",null,"Price"),r.a.createElement(z.a,{onChange:this.onChange,value:this.state.price,placeholder:"Price",name:"price",type:"text",fluid:!0,required:!0})),r.a.createElement(A.a.Field,null,r.a.createElement("label",null,"Date"),r.a.createElement(z.a,{onChange:this.onChange,value:this.state.date,type:"date",name:"date",fluid:!0,required:!0})),r.a.createElement(O.a,{type:"submit",onClick:this.onSubmit},"Submit"))))}}]),a}(n.Component),F=a(168),q=a.n(F);b.a.defaults.baseURL="https://caacuk-survey-api.herokuapp.com/";var H=function(e){return b.a.post("users/register",{role_id:e.role_id,name:e.name,username:e.username,password:e.password}).then((function(e){console.log("Registered")}))},L=function(e){return b.a.post("users/login",{username:e.username,password:e.password}).then((function(e){return localStorage.setItem("usertoken",e.data),e.data})).catch((function(e){return"error"}))},x=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",loading:!1,message:!0},e.onChange=function(t){e.setState(Object(_.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){if(e.setState({loading:!0}),e.setState({message:!0}),""!==e.state.name){var a={username:e.state.username,password:e.state.password};L(a).then((function(t){if("error"!==t){var a=q()(localStorage.usertoken);localStorage.setItem("role_id",a.role_id),"1"===localStorage.role_id?(localStorage.setItem("activeItem","admin"),e.props.history.push("/admin")):(localStorage.setItem("activeItem","surveyor"),e.props.history.push("/surveyor"))}else e.setState({loading:!1}),e.setState({message:!1})})).catch((function(e){console.log(e)}))}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){localStorage.setItem("activeItem","login")}},{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(E.a,{basic:!0},r.a.createElement(v.a,{size:"large"},"Login")),r.a.createElement(E.a,null,r.a.createElement(R.a,{negative:!0,header:"Error",content:"Invalid password or username",hidden:this.state.message}),r.a.createElement(f.a,{active:this.state.loading,inverted:!0},r.a.createElement(y.a,null,"Loading")),r.a.createElement(A.a,null,r.a.createElement(A.a.Field,null,r.a.createElement("label",null,"Username"),r.a.createElement(z.a,{onChange:this.onChange,value:this.state.name,placeholder:"Username",name:"username",type:"text",fluid:!0,required:!0})),r.a.createElement(A.a.Field,null,r.a.createElement("label",null,"Password"),r.a.createElement(z.a,{onChange:this.onChange,value:this.state.password,placeholder:"Password",name:"password",type:"password",fluid:!0,required:!0})),r.a.createElement(O.a,{type:"submit",onClick:this.onSubmit},"Login"))))}}]),a}(n.Component),P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={role_id:1,name:"",username:"",password:"",loading:!1,message:!0},e.onChange=function(t){e.setState(Object(_.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){if(e.setState({loading:!0}),e.setState({message:!0}),""!==e.state.name){var a={role_id:e.state.role_id,name:e.state.name,username:e.state.username,password:e.state.password};H(a).then((function(t){"error"!==t&&(localStorage.setItem("activeItem","login"),e.props.history.push("/login"))})).catch((function(e){console.log(e)}))}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){localStorage.setItem("activeItem","register")}},{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(E.a,{basic:!0},r.a.createElement(v.a,{size:"large"},"Register")),r.a.createElement(E.a,null,r.a.createElement(R.a,{negative:!0,header:"Error",content:"Invalid password or username",hidden:this.state.message}),r.a.createElement(f.a,{active:this.state.loading,inverted:!0},r.a.createElement(y.a,null,"Loading")),r.a.createElement(A.a,null,r.a.createElement(A.a.Field,null,r.a.createElement("label",null,"Role"),r.a.createElement(z.a,{onChange:this.onChange,value:this.state.role_id,placeholder:"Role",name:"role_id",type:"text",fluid:!0,required:!0})),r.a.createElement(A.a.Field,null,r.a.createElement("label",null,"Name"),r.a.createElement(z.a,{onChange:this.onChange,value:this.state.name,placeholder:"Name",name:"name",type:"text",fluid:!0,required:!0})),r.a.createElement(A.a.Field,null,r.a.createElement("label",null,"Username"),r.a.createElement(z.a,{onChange:this.onChange,value:this.state.username,placeholder:"Username",name:"username",type:"text",fluid:!0,required:!0})),r.a.createElement(A.a.Field,null,r.a.createElement("label",null,"Password"),r.a.createElement(z.a,{onChange:this.onChange,value:this.state.password,placeholder:"Password",name:"password",type:"password",fluid:!0,required:!0})),r.a.createElement(O.a,{type:"submit",onClick:this.onSubmit},"Register"))))}}]),a}(n.Component),M=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{columns:3},r.a.createElement(d.a.Row,{stretched:!0},r.a.createElement(d.a.Column,{width:"2"}),r.a.createElement(d.a.Column,{width:"12"},r.a.createElement(u.a,{path:"/*",component:p}),r.a.createElement(u.a,{exact:!0,path:"/",component:j}),r.a.createElement(u.a,{path:"/home",component:j}),r.a.createElement(u.a,{path:"/admin",component:D}),r.a.createElement(u.a,{path:"/surveyor",component:B}),r.a.createElement(u.a,{path:"/login",component:x}),r.a.createElement(u.a,{path:"/register",component:P})),r.a.createElement(d.a.Column,{width:"2"}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(328);o.a.render(r.a.createElement(g.a,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[181,1,2]]]);
//# sourceMappingURL=main.f9f503c3.chunk.js.map