(this.webpackJsonptictactoev2=this.webpackJsonptictactoev2||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(7),i=a.n(s),u=(a(14),a(8)),l=a(1),o=a(2),c=a(4),h=a(3),d=a(5);a(15);var m=function(e){return n.a.createElement("td",{className:"square",id:e.id,onClick:e.onClick},e.value)},f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).renderSquare=function(e,t){return n.a.createElement(m,{id:t,value:a.props.squares[e],onClick:function(){return a.props.handleClick(e)}})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"board"},n.a.createElement("div",{className:"board-row"},this.renderSquare(0,"zero"),this.renderSquare(1,"one"),this.renderSquare(2,"two")),n.a.createElement("div",{className:"board-row"},this.renderSquare(3,"three"),this.renderSquare(4,"four"),this.renderSquare(5,"five")),n.a.createElement("div",{className:"board-row"},this.renderSquare(6,"six"),this.renderSquare(7,"seven"),this.renderSquare(8,"eight")),n.a.createElement("h1",null,"Tic-Tac-Toe"))}}]),t}(r.Component);var v=function(e){return n.a.createElement("div",{className:"gameplay"},n.a.createElement("p",null,"How would you like to play?"),n.a.createElement("button",{className:"gameplay-btn",onClick:e.setSingleMode},"One Player"),n.a.createElement("button",{className:"gameplay-btn",onClick:e.setDoubleMode},"Two Player"))},y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).resetGame=function(){a.setState({squares:Array(9).fill(null),turn:0})},a.handleClick=function(e){var t=a.state.squares;p(t)||t[e]||!1===a.state.isPlayerTurn||(t[e]=a.state.xIsNext?"X":"O",a.setState({squares:t,xIsNext:!a.state.xIsNext,turn:a.state.turn+1}),a.state.isOnePLayer&&(a.setState({isPlayerTurn:!1}),setTimeout((function(){return a.cpuPlay()}),1500)))},a.cpuPlay=function(){var e=a.emptySquares(),t=a.state.squares.slice();t[e[Math.floor(Math.random()*e.length)]]=a.state.xIsNext?"X":"O",a.setState({squares:t,xIsNext:!a.state.xIsNext,turn:a.state.turn+1,isPlayerTurn:!0})},a.setSingleMode=function(){a.setState({isOnePLayer:!0})},a.setDoubleMode=function(){a.setState({isOnePLayer:!1})},a.state={squares:Array(9).fill(null),xIsNext:!0,isOnePLayer:null,isPlayerTurn:null,turn:0},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"emptySquares",value:function(){for(var e=this.state.squares.slice(),t=[],a=0;a<e.length;a++)null===e[a]&&t.push(a);return t}},{key:"render",value:function(){var e,t=this,a=(this.state.xIsNext,p(this.state.squares)),r=this.state.turn;return a?(e=a+" wins!",setTimeout((function(){return t.resetGame()}),1500)):9===r?(e="DRAW!",setTimeout((function(){return t.resetGame()}),1500)):e=(this.state.xIsNext?"X":"O")+"'s turn!",n.a.createElement("div",{className:"App"},null===this.state.isOnePLayer?n.a.createElement(v,{setSingleMode:this.setSingleMode,setDoubleMode:this.setDoubleMode}):n.a.createElement("div",null,n.a.createElement("div",{className:"status"},e),n.a.createElement(f,{xIsNext:this.state.xIsNext,squares:this.state.squares,turn:this.state.turn,resetGame:this.resetGame,renderSquare:this.renderSquare,handleClick:function(e){return t.handleClick(e)}})))}}]),t}(r.Component);function p(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(u.a)(t[a],3),n=r[0],s=r[1],i=r[2];if(e[n]&&e[n]===e[s]&&e[n]===e[i])return e[n]}return null}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.a17edae8.chunk.js.map