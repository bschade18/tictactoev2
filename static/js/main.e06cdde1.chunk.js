(this.webpackJsonptictactoev2=this.webpackJsonptictactoev2||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(2),i=r.n(s),u=(r(14),r(15),r(6)),o=r(3),c=r(4),l=r(7),h=r(5),d=r(8);var m=function(e){return n.a.createElement("td",{className:"square",id:e.id,onClick:e.onClick},e.value)},v=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={squares:Array(9).fill(null),xIsNext:!0,turn:0},r}return Object(d.a)(t,e),Object(c.a)(t,[{key:"resetGame",value:function(){this.setState({squares:Array(9).fill(null),xIsNext:!this.state.xIsNext,turn:0})}},{key:"handleClick",value:function(e){var t=this.state.squares;f(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext,turn:this.state.turn+1}))}},{key:"renderSquare",value:function(e,t){var r=this;return n.a.createElement(m,{id:t,value:this.state.squares[e],onClick:function(){return r.handleClick(e)}})}},{key:"render",value:function(){var e,t=this,r=(this.state.xIsNext,f(this.state.squares)),a=this.state.turn;return r?(e=r+" wins!",setTimeout((function(){return t.resetGame()}),1500)):9===a?(e=(this.state.xIsNext?"X":"O")+"'s turn!",setTimeout((function(){return t.resetGame()}),1500)):e=(this.state.xIsNext?"X":"O")+"'s turn!",n.a.createElement("div",{className:"board"},n.a.createElement("div",{className:"status"},e),n.a.createElement("div",{className:"board-row"},this.renderSquare(0,"zero"),this.renderSquare(1,"one"),this.renderSquare(2,"two")),n.a.createElement("div",{className:"board-row"},this.renderSquare(3,"three"),this.renderSquare(4,"four"),this.renderSquare(5,"five")),n.a.createElement("div",{className:"board-row"},this.renderSquare(6,"six"),this.renderSquare(7,"seven"),this.renderSquare(8,"eight")),n.a.createElement("h1",null,"Tic-Tac-Toe"))}}]),t}(n.a.Component);function f(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(u.a)(t[r],3),n=a[0],s=a[1],i=a[2];if(e[n]&&e[n]===e[s]&&e[n]===e[i])return e[n]}return null}var x=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,r){e.exports=r(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.e06cdde1.chunk.js.map