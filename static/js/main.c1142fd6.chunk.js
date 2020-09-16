(this["webpackJsonpcommodities-app"]=this["webpackJsonpcommodities-app"]||[]).push([[0],{183:function(e,t,a){e.exports=a(332)},188:function(e,t,a){},332:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(39),l=a.n(o),i=(a(188),a(14)),s=a(15),c=a(17),m=a(16),u=a(9),d=a(351),h=a(347),g=a(33),p=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleItemClick=function(e,t){var a=t.name;localStorage.setItem("activeItem",a)},e.logout=function(){localStorage.removeItem("usertoken"),localStorage.removeItem("role_id"),e.props.history.push("/login")},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{pointing:!0,secondary:!0,size:"massive"},"1"===localStorage.role_id?r.a.createElement(g.b,{to:"/admin"},r.a.createElement(h.a.Item,{as:"h3",name:"admin",active:"admin"===localStorage.activeItem,onClick:this.handleItemClick})):"2"===localStorage.role_id?r.a.createElement(g.b,{to:"/surveyor"},r.a.createElement(h.a.Item,{as:"h3",name:"surveyor",active:"surveyor"===localStorage.activeItem,onClick:this.handleItemClick})):r.a.createElement(g.b,{to:"/home"},r.a.createElement(h.a.Item,{as:"h3",name:"home",active:"home"===localStorage.activeItem,onClick:this.handleItemClick})),r.a.createElement(h.a.Menu,{position:"right"},localStorage.usertoken?r.a.createElement(h.a.Item,{name:"logout",active:"logout"===localStorage.activeItem,onClick:this.logout}):r.a.createElement(g.b,{to:"/login"},r.a.createElement(h.a.Item,{as:"h3",name:"login",active:"login"===localStorage.activeItem,onClick:this.handleItemClick}))))}}]),a}(n.Component),E=a(348),v=a(349),f=a(345),y=a(341),C=a(344),S=a(22),b=a.n(S);b.a.defaults.baseURL="https://caacuk-survey-api.herokuapp.com/";var w={headers:{Authorization:localStorage.usertoken}},k=function(e){var t={name:e.name,price:e.price,status:0,date:e.date};return b.a.post("commodities/",t,w).then((function(e){return e.data})).catch((function(e){return e.response.data}))},I=function(e){var t={name:e.name,price:e.price,status:e.status,date:e.date};return b.a.put("commodities/"+e.id,t,w).then((function(e){return e.data})).catch((function(e){return e.response.data}))},j=function(e){return b.a.delete("commodities/"+e.id,w).then((function(e){return e.data})).catch((function(e){return e.response.data}))},O=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={commodities:[],loading:!0},e}return Object(s.a)(a,[{key:"getCommodityData",value:function(){var e=this;b.a.get("commodities/status/1").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(t){e.setState({commodities:t.data}),e.setState({loading:!1})}))}},{key:"componentDidMount",value:function(){localStorage.setItem("activeItem","home"),this.getCommodityData()}},{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(E.a,{basic:!0},r.a.createElement(v.a,{size:"large"},"Commodities")),r.a.createElement(E.a,null,r.a.createElement(f.a,{active:this.state.loading,inverted:!0},r.a.createElement(y.a,null,"Loading")),r.a.createElement(C.a,{celled:!0},r.a.createElement(C.a.Header,null,r.a.createElement(C.a.Row,null,r.a.createElement(C.a.HeaderCell,{width:"5"},"Commodity Name"),r.a.createElement(C.a.HeaderCell,{width:"5"},"Price"),r.a.createElement(C.a.HeaderCell,{width:"5"},"Date"))),r.a.createElement(C.a.Body,null,this.state.commodities?this.state.commodities.map((function(e,t){return r.a.createElement(C.a.Row,{key:"".concat(e.id,"-").concat(t)},r.a.createElement(C.a.Cell,null,e.name),r.a.createElement(C.a.Cell,null,"Rp."," ",e.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")),r.a.createElement(C.a.Cell,null,e.date))})):"loading"))))}}]),a}(n.Component),H=a(103),M=a.n(H),D=a(160),_=a(333),x=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={commodities:[],loading:!0,loadingButton:!1,openModal:!1},e.handleChangeStatus=function(t){e.setState({loadingButton:!0});var a=t.status;a=1===a?0:1;var n={id:t.id,status:a};I(n).then((function(t){e.getCommodityData(),e.setState({loadingButton:!1})}))},e.handleDeleteComodity=function(t){e.setState({loadingButton:!0});var a={id:t.id};j(a).then((function(t){e.getCommodityData(),e.setState({loadingButton:!1})}))},e}return Object(s.a)(a,[{key:"getCommodityData",value:function(){var e=Object(D.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("commodities/",w).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 3:t=e.sent,this.setState({commodities:t.data}),this.setState({loading:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){if("1"!==localStorage.role_id)return this.props.history.push("/");localStorage.setItem("activeItem","admin"),this.getCommodityData()}},{key:"componentDidUpdate",value:function(){this.state.commodities&&this.getCommodityData()}},{key:"render",value:function(){var e=this;return r.a.createElement(E.a,null,r.a.createElement(E.a,{basic:!0},r.a.createElement(v.a,{size:"large"},"Admin")),r.a.createElement(E.a,null,r.a.createElement(f.a,{active:this.state.loading,inverted:!0},r.a.createElement(y.a,null,"Loading")),r.a.createElement(C.a,{celled:!0},r.a.createElement(C.a.Header,null,r.a.createElement(C.a.Row,null,r.a.createElement(C.a.HeaderCell,{width:"5"},"Name"),r.a.createElement(C.a.HeaderCell,{width:"5"},"Price"),r.a.createElement(C.a.HeaderCell,{width:"5"},"Date"),r.a.createElement(C.a.HeaderCell,{width:"5"},"Status"))),r.a.createElement(C.a.Body,null,this.state.commodities?this.state.commodities.map((function(t,a){return r.a.createElement(C.a.Row,{key:"".concat(t.id,"-").concat(a)},r.a.createElement(C.a.Cell,null,t.name),r.a.createElement(C.a.Cell,null,"Rp."," ",t.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")),r.a.createElement(C.a.Cell,null,t.date),r.a.createElement(C.a.Cell,null,r.a.createElement(_.a,{icon:"checkmark",positive:1===t.status,loading:e.state.loadingButton,key:t.id,onClick:function(){return e.handleChangeStatus(t)}})),r.a.createElement(C.a.Cell,null,r.a.createElement(_.a,{icon:"close",negative:!0,key:t.id,onClick:function(){return e.handleDeleteComodity(t)}})))})):"loading"))))}}]),a}(n.Component),R=a(51),B=a(346),q=a(343),A=a(342),F=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",price:"",date:"",loading:!1,message:!0,messageType:!1,messageHidden:!0,errorMessage:""},e.onChange=function(t){e.setState(Object(R.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){if(""!==e.state.name){e.setState({messageHidden:!0}),e.setState({loading:!0}),e.setState({errorMessage:""});var a={name:e.state.name,price:e.state.price,date:e.state.date};k(a).then((function(t){t.errorMessage?(e.setState({loading:!1}),e.setState({errorMessage:t.errorMessage}),e.setState({messageHidden:!1})):(e.setState({messageHidden:!1}),e.setState({loading:!1}),e.setState({name:""}),e.setState({price:""}),e.setState({date:""}),e.props.history.push("/surveyor"))})).catch((function(t){e.setState({loading:!1}),e.setState({errorMessage:"Unexpected error"}),e.setState({messageHidden:!1})}))}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){"2"!==localStorage.role_id&&this.props.history.push("/"),localStorage.setItem("activeItem","surveyor")}},{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(B.a,{success:!this.state.errorMessage,negative:!!this.state.errorMessage,header:this.state.errorMessage?"Error":"Success",content:this.state.errorMessage?this.state.errorMessage:"Your data has been submited",hidden:this.state.messageHidden}),r.a.createElement(E.a,{basic:!0},r.a.createElement(v.a,{size:"large"},"Surveyor")),r.a.createElement(E.a,null,r.a.createElement(f.a,{active:this.state.loading,inverted:!0},r.a.createElement(y.a,null,"Loading")),r.a.createElement(q.a,null,r.a.createElement(q.a.Field,null,r.a.createElement("label",null,"Commodity Name"),r.a.createElement(A.a,{onChange:this.onChange,value:this.state.name,placeholder:"Commodity Name",name:"name",type:"text",fluid:!0,required:!0})),r.a.createElement(q.a.Field,null,r.a.createElement("label",null,"Price"),r.a.createElement(A.a,{onChange:this.onChange,value:this.state.price,placeholder:"Price",name:"price",type:"text",fluid:!0,required:!0})),r.a.createElement(q.a.Field,null,r.a.createElement("label",null,"Date"),r.a.createElement(A.a,{onChange:this.onChange,value:this.state.date,type:"date",name:"date",fluid:!0,required:!0})),r.a.createElement(_.a,{type:"submit",onClick:this.onSubmit},"Submit"))))}}]),a}(n.Component),L=a(170),U=a.n(L);b.a.defaults.baseURL="https://caacuk-survey-api.herokuapp.com/";var P=function(e){var t={role_id:e.role_id,name:e.name,username:e.username,password:e.password};return b.a.post("users/register",t).then((function(e){return e.data})).catch((function(e){return e.response.data}))},z=function(e){var t={username:e.username,password:e.password};return b.a.post("users/login",t).then((function(e){return localStorage.setItem("usertoken",e.data.data),e.data})).catch((function(e){return e.response.data}))},N=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",loading:!1,messageHidden:!0,message:"",messageError:""},e.onChange=function(t){e.setState(Object(R.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){if(e.setState({loading:!0}),e.setState({messageHidden:!0}),""!==e.state.name){var a={username:e.state.username,password:e.state.password};z(a).then((function(t){if(t.errorMessage)e.setState({loading:!1}),e.setState({messageError:t.errorMessage}),e.setState({messageHidden:!1});else{var a=U()(localStorage.usertoken);localStorage.setItem("role_id",a.role_id),"1"===localStorage.role_id?(localStorage.setItem("activeItem","admin"),e.props.history.push("/admin")):(localStorage.setItem("activeItem","surveyor"),e.props.history.push("/surveyor"))}})).catch((function(t){e.setState({loading:!1}),e.setState({messageError:"Unexpected error"}),e.setState({messageHidden:!1})}))}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){localStorage.setItem("activeItem","login")}},{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(E.a,{basic:!0},r.a.createElement(v.a,{size:"large"},"Login")),r.a.createElement(E.a,null,r.a.createElement(B.a,{negative:!0,header:"Error",content:this.state.messageError,hidden:this.state.messageHidden}),r.a.createElement(f.a,{active:this.state.loading,inverted:!0},r.a.createElement(y.a,null,"Loading")),r.a.createElement(q.a,null,r.a.createElement(q.a.Field,null,r.a.createElement("label",null,"Username"),r.a.createElement(A.a,{onChange:this.onChange,value:this.state.name,placeholder:"Username",name:"username",type:"text",fluid:!0,required:!0})),r.a.createElement(q.a.Field,null,r.a.createElement("label",null,"Password"),r.a.createElement(A.a,{onChange:this.onChange,value:this.state.password,placeholder:"Password",name:"password",type:"password",fluid:!0,required:!0})),r.a.createElement(_.a,{type:"submit",onClick:this.onSubmit},"Login"))))}}]),a}(n.Component),$=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={role_id:1,name:"",username:"",password:"",loading:!1,message:!0},e.onChange=function(t){e.setState(Object(R.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){if(e.setState({loading:!0}),e.setState({message:!0}),""!==e.state.name){var a={role_id:e.state.role_id,name:e.state.name,username:e.state.username,password:e.state.password};P(a).then((function(t){"error"!==t&&(localStorage.setItem("activeItem","login"),e.props.history.push("/login"))})).catch((function(e){console.log(e)}))}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){localStorage.setItem("activeItem","register")}},{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(E.a,{basic:!0},r.a.createElement(v.a,{size:"large"},"Register")),r.a.createElement(E.a,null,r.a.createElement(B.a,{negative:!0,header:"Error",content:"Invalid password or username",hidden:this.state.message}),r.a.createElement(f.a,{active:this.state.loading,inverted:!0},r.a.createElement(y.a,null,"Loading")),r.a.createElement(q.a,null,r.a.createElement(q.a.Field,null,r.a.createElement("label",null,"Role"),r.a.createElement(A.a,{onChange:this.onChange,value:this.state.role_id,placeholder:"Role",name:"role_id",type:"text",fluid:!0,required:!0})),r.a.createElement(q.a.Field,null,r.a.createElement("label",null,"Name"),r.a.createElement(A.a,{onChange:this.onChange,value:this.state.name,placeholder:"Name",name:"name",type:"text",fluid:!0,required:!0})),r.a.createElement(q.a.Field,null,r.a.createElement("label",null,"Username"),r.a.createElement(A.a,{onChange:this.onChange,value:this.state.username,placeholder:"Username",name:"username",type:"text",fluid:!0,required:!0})),r.a.createElement(q.a.Field,null,r.a.createElement("label",null,"Password"),r.a.createElement(A.a,{onChange:this.onChange,value:this.state.password,placeholder:"Password",name:"password",type:"password",fluid:!0,required:!0})),r.a.createElement(_.a,{type:"submit",onClick:this.onSubmit},"Register"))))}}]),a}(n.Component),J=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{columns:3},r.a.createElement(d.a.Row,{stretched:!0},r.a.createElement(d.a.Column,{width:"2"}),r.a.createElement(d.a.Column,{width:"12"},r.a.createElement(u.a,{path:"/*",component:p}),r.a.createElement(u.a,{exact:!0,path:"/",component:O}),r.a.createElement(u.a,{path:"/home",component:O}),r.a.createElement(u.a,{path:"/admin",component:x}),r.a.createElement(u.a,{path:"/surveyor",component:F}),r.a.createElement(u.a,{path:"/login",component:N}),r.a.createElement(u.a,{path:"/register",component:$})),r.a.createElement(d.a.Column,{width:"2"}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(331);l.a.render(r.a.createElement(g.a,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[183,1,2]]]);
//# sourceMappingURL=main.c1142fd6.chunk.js.map