(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{198:function(e,t,a){},202:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(73),i=a.n(o),r=(a(89),a(74)),s=a(75),c=a(76),u=a(82),h=a(77),m=a(83),d=a(46),C=(a(198),a(10)),b=a(16),g=a(17);C.b.add(g.a,g.b,g.c,g.d);var p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.value,l=t.name;a.setState(Object(r.a)({},l,n))},a.handleSubmit=function(e){e.preventDefault();var t=document.querySelector("#pixel_canvas");t.innerHTML="",a.setState({background:"#fff"});for(var n=0;n<a.state.height;n++){var l=document.createElement("tr");t.appendChild(l);for(var o=0;o<a.state.width;o++){var i=document.createElement("td");l.appendChild(i)}}},a.handleCellColor=function(e){a.setState({cellColor:e.hex})},a.handleCellColorOnClick=function(e){1==a.state.brushSize&&(e.target.style.backgroundColor=a.state.cellColor),2==a.state.brushSize&&(e.target.style.backgroundColor=a.state.cellColor,e.target.nextSibling&&(e.target.nextSibling.style.backgroundColor=a.state.cellColor)),a.setState({mouseDown:!0})},a.handleMouseState=function(){a.setState({mouseDown:!1})},a.handleBackgroundColor=function(e){a.setState({background:e.hex})},a.handleColorRemove=function(e){e.target.style.backgroundColor=""},a.mobileMenu=function(){a.setState(function(e){return{menuVisible:!e.menuVisible}})},a.state={height:15,width:15,background:"#fff",cellColor:"#f44336",mouseDown:!1,menuVisible:!0,brushSize:1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"Pixel Art Maker")),l.a.createElement("div",{className:"App-Content"},this.state.menuVisible?l.a.createElement("div",{className:"App-Settings"},l.a.createElement("h2",null,"Canvas Settings"),l.a.createElement("form",{id:"sizePicker"},l.a.createElement("label",null,l.a.createElement(b.a,{icon:"arrows-alt-v"})," Grid Height:",l.a.createElement("input",{type:"number",id:"input_height",name:"height",min:"1",value:this.state.height,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement(b.a,{icon:"arrows-alt-h"})," Grid Width:",l.a.createElement("input",{type:"number",id:"input_width",name:"width",min:"1",value:this.state.width,onChange:this.handleChange})),l.a.createElement("p",null,l.a.createElement("input",{type:"submit",id:"input_submit",value:"Create grid",onClick:this.handleSubmit}))),l.a.createElement("hr",{className:"Separator"}),l.a.createElement("h3",null,"Pick A Background Color"),l.a.createElement(d.a,{onChangeComplete:this.handleBackgroundColor,color:this.state.background}),l.a.createElement("hr",{className:"Separator"}),l.a.createElement("h3",null,"Pick A Color"),l.a.createElement(d.a,{onChangeComplete:this.handleCellColor,color:this.state.cellColor}),l.a.createElement("p",null,"Hint: Double click to remove a color")):null,l.a.createElement("div",{className:this.state.menuVisible?"mobile-menu menu-open":"mobile-menu menu-closed"},l.a.createElement("button",{className:"show-settings",onClick:this.mobileMenu},this.state.menuVisible?l.a.createElement(b.a,{icon:"angle-left",size:"lg"}):l.a.createElement(b.a,{icon:"angle-right",size:"lg"}))),l.a.createElement("div",{className:this.state.menuVisible?"Canvas":"Canvas full-width"},l.a.createElement("h2",null,"Design Canvas"),l.a.createElement("table",{id:"pixel_canvas",style:{backgroundColor:this.state.background},onMouseDown:this.handleCellColorOnClick,onMouseMove:this.state.mouseDown?this.handleCellColorOnClick:null,onMouseUp:this.handleMouseState,onMouseLeave:this.handleMouseState,onTouchStart:this.handleCellColorOnClick,onTouchMove:this.state.mouseDown?this.handleCellColorOnClick:null,onTouchEnd:this.handleMouseState,onDoubleClick:this.handleColorRemove}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},84:function(e,t,a){e.exports=a(202)},89:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.a5f8fd3f.chunk.js.map