(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{262:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(84),i=n.n(o),r=(n(96),n(85)),c=n(86),s=n(87),u=n(89),h=n(88),m=n(90),d=n(47),C=(n(262),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.value,l=t.name;n.setState(Object(r.a)({},l,a))},n.handleSubmit=function(e){e.preventDefault();var t=document.querySelector("#pixel_canvas");t.innerHTML="",n.setState({background:"#fff"});for(var a=0;a<n.state.height;a++){var l=document.createElement("tr");t.appendChild(l);for(var o=0;o<n.state.width;o++){var i=document.createElement("td");l.appendChild(i)}}},n.handleCellColor=function(e){n.setState({cellColor:e.hex})},n.handleCellColorOnClick=function(e){e.target.style.backgroundColor=n.state.cellColor,n.setState({mouseDown:!0})},n.handleMouseState=function(){n.setState({mouseDown:!1})},n.handleBackgroundColor=function(e){n.setState({background:e.hex})},n.handleColorRemove=function(e){e.target.style.backgroundColor=""},n.mobileMenu=function(){n.setState(function(e){return{menuVisible:!e.menuVisible}})},n.state={height:15,width:15,background:"#fff",cellColor:"#000",mouseDown:!1,menuVisible:!0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"Pixel Art Maker")),l.a.createElement("div",{className:"mobile-menu"},l.a.createElement("button",{className:"show-settings",onClick:this.mobileMenu},this.state.menuVisible?"X":l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{class:"line"}),l.a.createElement("span",{class:"line"}),l.a.createElement("span",{class:"line"})))),l.a.createElement("div",{className:"App-Content"},this.state.menuVisible?l.a.createElement("div",{className:"App-Settings"},l.a.createElement("h2",null,"Canvas Settings"),l.a.createElement("form",{id:"sizePicker"},l.a.createElement("label",null,"Grid Height:",l.a.createElement("input",{type:"number",id:"input_height",name:"height",min:"1",value:this.state.height,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Grid Width:",l.a.createElement("input",{type:"number",id:"input_width",name:"width",min:"1",value:this.state.width,onChange:this.handleChange})),l.a.createElement("p",null,l.a.createElement("input",{type:"submit",id:"input_submit",value:"Create grid",onClick:this.handleSubmit}))),l.a.createElement("hr",{className:"Separator"}),l.a.createElement("h3",null,"Pick A Background Color"),l.a.createElement(d.CirclePicker,{onChangeComplete:this.handleBackgroundColor,color:this.state.background}),l.a.createElement("hr",{className:"Separator"}),l.a.createElement("h3",null,"Pick A Color"),l.a.createElement(d.CirclePicker,{onChangeComplete:this.handleCellColor,color:this.state.cellColor}),l.a.createElement("p",null,"Hint: Double click to remove a color")):null,l.a.createElement("div",{className:"Canvas"},l.a.createElement("h2",null,"Design Canvas"),l.a.createElement("table",{id:"pixel_canvas",style:{backgroundColor:this.state.background},onMouseDown:this.handleCellColorOnClick,onMouseMove:this.state.mouseDown?this.handleCellColorOnClick:null,onMouseUp:this.handleMouseState,onTouchStart:this.handleCellColorOnClick,onTouchMove:this.state.mouseDown?this.handleCellColorOnClick:null,onTouchEnd:this.handleMouseState,onDoubleClick:this.handleColorRemove}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},91:function(e,t,n){e.exports=n(264)},96:function(e,t,n){}},[[91,2,1]]]);
//# sourceMappingURL=main.374e6226.chunk.js.map