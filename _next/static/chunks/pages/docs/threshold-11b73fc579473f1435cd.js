_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[92],{"67po":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("uKU/"),a=n("xx0A"),i=Object(a.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function o(e){return i(Object(r.a)(),e)}},Ifh9:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("aWzz"),a=n.n(r),i=n("ERkP"),o=n.n(i),l=n("O94r"),s=n.n(l),c=n("hsl+"),u=n.n(c),d=n("JmwF"),f=n("rkTo"),p=n("nNND"),h=n("HlJr"),m=n("tZ4l");function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e){var t=e.top,n=void 0===t?0:t,r=e.left,a=void 0===r?0:r,i=e.scale,l=e.width,c=e.stroke,v=void 0===c?"#eaf0f6":c,b=e.strokeWidth,x=void 0===b?1:b,O=e.strokeDasharray,g=e.className,w=e.children,k=e.numTicks,j=void 0===k?10:k,_=e.lineStyle,E=e.offset,P=e.tickValues,N=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["top","left","scale","width","stroke","strokeWidth","strokeDasharray","className","children","numTicks","lineStyle","offset","tickValues"]),T=null!=P?P:Object(p.a)(i,j),R=(null!=E?E:0)+Object(m.a)(i)/2,A=T.map((function(e){var t,n=(null!=(t=Object(h.a)(i(e)))?t:0)+R;return{from:new f.a({x:0,y:n}),to:new f.a({x:l,y:n})}}));return o.a.createElement(d.a,{className:s()("visx-rows",g),top:n,left:a},w?w({lines:A}):A.map((function(e,t){var n=e.from,r=e.to;return o.a.createElement(u.a,y({key:"row-line-"+t,from:n,to:r,stroke:v,strokeWidth:x,strokeDasharray:O,style:_},N))})))}v.propTypes={tickValues:a.a.array,width:a.a.number.isRequired}},JjBE:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("ERkP"),a=n.n(r),i=n("Sk4R"),o=n("i9k6"),l=n("mdYk");n.d(t,"packageJson",(function(){return l}));var s=a.a.createElement,c={background:i.a},u={color:"#111"},d={margin:{top:40,left:40,right:20,bottom:30}};function f(){return s(o.a,{title:"Area difference chart",description:"<Threshold />",exampleProps:d,exampleRenderer:i.b,exampleUrl:"/threshold",tileStyles:c,detailsStyles:u})}},KRsa:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("ERkP"),a=n.n(r),i=n("O94r"),o=n.n(i),l=n("5Nbk"),s=n("pn27");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(){return{dx:"-0.25em",dy:"0.25em",fill:"#222",fontFamily:"Arial",fontSize:10,textAnchor:"end"}};function d(e){var t=e.axisClassName,n=e.labelOffset,r=void 0===n?36:n,i=e.tickLabelProps,d=void 0===i?u:i,f=e.tickLength,p=void 0===f?8:f,h=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["axisClassName","labelOffset","tickLabelProps","tickLength"]);return a.a.createElement(l.a,c({axisClassName:o()("visx-axis-left",t),labelOffset:r,orientation:s.a.left,tickLabelProps:d,tickLength:p},h))}},RauZ:function(e,t,n){"use strict";n.r(t);var r=n("ERkP"),a=n.n(r),i=n("cxan"),o=n("O94r"),l=n.n(o),s=n("wO8m"),c=n("hNR5"),u=a.a.createElement;function d(e){var t=e.className,n=e.curve,r=e.clipAboveTo,a=e.clipBelowTo,o=e.data,d=e.defined,f=e.x,p=e.y0,h=e.y1,m=e.aboveAreaProps,y=e.belowAreaProps,v=e.id,b=void 0===v?"":v;return u("g",{className:l()("visx-threshold",t)},u(s.a,{curve:n,data:o,x:f,y1:h,defined:d},(function(e){var t=e.path,n=null,i=null;return n=t.y0(a)(o),i=t.y0(r)(o),u("g",null,u(c.a,{id:"threshold-clip-below-".concat(b)},u("path",{d:n||""})),u(c.a,{id:"threshold-clip-above-".concat(b)},u("path",{d:i||""})))})),u(s.a,Object(i.a)({curve:n,data:o,defined:d,x:f,y0:p,y1:h,strokeWidth:0,clipPath:"url(#threshold-clip-below-".concat(b,")")},y)),u(s.a,Object(i.a)({curve:n,data:o,defined:d,x:f,y0:p,y1:h,strokeWidth:0,clipPath:"url(#threshold-clip-above-".concat(b,")")},m)))}try{d.displayName="Threshold",d.__docgenInfo={description:"",displayName:"Threshold",props:{className:{defaultValue:null,description:"className applied to container g element.",name:"className",required:!1,type:{name:"string | undefined"}},curve:{defaultValue:null,description:"Sets the curve factory (from @visx/curve or d3-curve) for the area generator. Defaults to curveLinear.",name:"curve",required:!1,type:{name:"CurveFactory | undefined"}},clipAboveTo:{defaultValue:null,description:"Specifies a constant value, or an accessor called per datum, above which the *upper area* is clipped.",name:"clipAboveTo",required:!0,type:{name:"number | NumberAccessor<Datum>"}},clipBelowTo:{defaultValue:null,description:"Specifies a constant value, or an accessor called per datum, below which the *lower area* is clipped.",name:"clipBelowTo",required:!0,type:{name:"number | NumberAccessor<Datum>"}},id:{defaultValue:{value:""},description:"id for this threshold. If not set, multiple Threshold's on a page may conflict and interfere with each other.",name:"id",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data for which to generate a threshold area shape.",name:"data",required:!0,type:{name:"Datum[]"}},defined:{defaultValue:null,description:"The defined accessor for the shape. The final area shape includes all points for which this\nfunction returns true. By default all points are defined.",name:"defined",required:!1,type:{name:"((datum: Datum, index: number, data: Datum[]) => boolean) | undefined"}},x:{defaultValue:null,description:"For the Area shape, specifies the x accessor function for a datum, which defaults to `d => d[0]`.\nAlternatively this may be a constant x value.",name:"x",required:!0,type:{name:"number | NumberAccessor<Datum>"}},y0:{defaultValue:null,description:'For the Area shape, specifies the accessor function (or constant value) which generates\nthe "lower" area bound to which "belowAreaProps" and "clipBelow" props apply. Defaults to `d => 0`.',name:"y0",required:!0,type:{name:"number | NumberAccessor<Datum>"}},y1:{defaultValue:null,description:'For the Area shape, specifies the accessor function (or constant value) which generates\nthe "upper" area bound to which "aboveAreaProps" and "clipAbove" props apply. Defaults to `d => d[1]`.',name:"y1",required:!0,type:{name:"number | NumberAccessor<Datum>"}},aboveAreaProps:{defaultValue:null,description:'Additional props passed to the "above" Area shape.',name:"aboveAreaProps",required:!1,type:{name:"AreaProps<Datum> | undefined"}},belowAreaProps:{defaultValue:null,description:'Additional props passed to the "below" Area shape.',name:"belowAreaProps",required:!1,type:{name:"AreaProps<Datum> | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-threshold/src/Threshold.tsx#Threshold"]={docgenInfo:d.__docgenInfo,name:"Threshold",path:"../visx-threshold/src/Threshold.tsx#Threshold"})}catch(v){}var f=n("QnPE"),p=n("JjBE"),h=a.a.createElement,m=[d],y=[p.default];t.default=function(){return h(f.a,{components:m,examples:y,readme:'# @visx/threshold\n\n<a title="@visx/threshold npm downloads" href="https://www.npmjs.com/package/@visx/threshold">\n  <img src="https://img.shields.io/npm/dm/@visx/threshold.svg?style=flat-square" />\n</a>\n\n`@visx/threshold` allows for creation of Difference Charts in `react`, which highlight the delta\nbetween two line series.\n\n## Installation\n\n```\nnpm install --save @visx/threshold\n```\n',visxPackage:"threshold"})}},Sk4R:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return M}));var r=n("fGyu"),a=n("ERkP"),i=n.n(a),o=n("JmwF"),l=n("m+Ft"),s=n("geX1"),c=n("aWzz"),u=n.n(c),d=n("O94r"),f=n.n(d),p=n("wO8m"),h=n("hNR5");function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e){var t=e.className,n=e.curve,r=e.clipAboveTo,a=e.clipBelowTo,o=e.data,l=e.defined,s=e.x,c=e.y0,u=e.y1,d=e.aboveAreaProps,y=e.belowAreaProps,v=e.id,b=void 0===v?"":v;return i.a.createElement("g",{className:f()("visx-threshold",t)},i.a.createElement(p.a,{curve:n,data:o,x:s,y1:u,defined:l},(function(e){var t=e.path,n=null,l=null;return n=t.y0(a)(o),l=t.y0(r)(o),i.a.createElement("g",null,i.a.createElement(h.a,{id:"threshold-clip-below-"+b},i.a.createElement("path",{d:n||""})),i.a.createElement(h.a,{id:"threshold-clip-above-"+b},i.a.createElement("path",{d:l||""})))})),i.a.createElement(p.a,m({curve:n,data:o,defined:l,x:s,y0:c,y1:u,strokeWidth:0,clipPath:"url(#threshold-clip-below-"+b+")"},y)),i.a.createElement(p.a,m({curve:n,data:o,defined:l,x:s,y0:c,y1:u,strokeWidth:0,clipPath:"url(#threshold-clip-above-"+b+")"},d)))}y.propTypes={className:u.a.string,clipAboveTo:u.a.oneOfType([u.a.func,u.a.number]).isRequired,clipBelowTo:u.a.oneOfType([u.a.func,u.a.number]).isRequired,id:u.a.string.isRequired,data:u.a.array.isRequired,defined:u.a.func,x:u.a.oneOfType([u.a.func,u.a.number]).isRequired,y0:u.a.oneOfType([u.a.func,u.a.number]).isRequired,y1:u.a.oneOfType([u.a.func,u.a.number]).isRequired};var v=n("cjvV"),b=n("67po"),x=n("a7GN"),O=n("KRsa"),g=n("Ifh9"),w=n("eMuC"),k=n("s2H9"),j=n.n(k),_=i.a.createElement,E="#f3f3f3",P=function(e){return new Date(e.date).valueOf()},N=function(e){return Number(e["New York"])},T=function(e){return Number(e["San Francisco"])},R=Object(v.a)({domain:[Math.min.apply(Math,Object(r.a)(j.a.map(P))),Math.max.apply(Math,Object(r.a)(j.a.map(P)))]}),A=Object(b.a)({domain:[Math.min.apply(Math,Object(r.a)(j.a.map((function(e){return Math.min(N(e),T(e))})))),Math.max.apply(Math,Object(r.a)(j.a.map((function(e){return Math.max(N(e),T(e))}))))],nice:!0}),S={top:40,right:30,bottom:50,left:40};function M(e){var t=e.width,n=e.height,r=e.margin,a=void 0===r?S:r;if(t<10)return null;var i=t-a.left-a.right,c=n-a.top-a.bottom;return R.range([0,i]),A.range([c,0]),_("div",null,_("svg",{width:t,height:n},_("rect",{x:0,y:0,width:t,height:n,fill:E,rx:14}),_(o.a,{left:a.left,top:a.top},_(g.a,{scale:A,width:i,height:c,stroke:"#e0e0e0"}),_(w.a,{scale:R,width:i,height:c,stroke:"#e0e0e0"}),_("line",{x1:i,x2:i,y1:0,y2:c,stroke:"#e0e0e0"}),_(x.a,{top:c,scale:R,numTicks:t>520?10:5}),_(O.a,{scale:A}),_("text",{x:"-70",y:"15",transform:"rotate(-90)",fontSize:10},"Temperature (\xb0F)"),_(y,{id:"".concat(Math.random()),data:j.a,x:function(e){var t;return null!==(t=R(P(e)))&&void 0!==t?t:0},y0:function(e){var t;return null!==(t=A(N(e)))&&void 0!==t?t:0},y1:function(e){var t;return null!==(t=A(T(e)))&&void 0!==t?t:0},clipAboveTo:0,clipBelowTo:c,curve:l.b,belowAreaProps:{fill:"violet",fillOpacity:.4},aboveAreaProps:{fill:"green",fillOpacity:.4}}),_(s.a,{data:j.a,curve:l.b,x:function(e){var t;return null!==(t=R(P(e)))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=A(T(e)))&&void 0!==t?t:0},stroke:"#222",strokeWidth:1.5,strokeOpacity:.8,strokeDasharray:"1,2"}),_(s.a,{data:j.a,curve:l.b,x:function(e){var t;return null!==(t=R(P(e)))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=A(N(e)))&&void 0!==t?t:0},stroke:"#222",strokeWidth:1.5}))))}try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-threshold/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-threshold/Example.tsx#Example"})}catch(D){}},Zbhd:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("JKOu"),a=n("XAd9"),i=n("Cyas"),o=n("VBI3");function l(e,t,n,l){var s,c=Object(r.c)(e,t,n);switch((l=Object(a.a)(null==l?",f":l)).type){case"s":var u=Math.max(Math.abs(e),Math.abs(t));return null!=l.precision||isNaN(s=function(e,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(t)/3)))-Object(i.a)(Math.abs(e)))}(c,u))||(l.precision=s),Object(o.b)(l,u);case"":case"e":case"g":case"p":case"r":null!=l.precision||isNaN(s=function(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Object(i.a)(t)-Object(i.a)(e))+1}(c,Math.max(Math.abs(e),Math.abs(t))))||(l.precision=s-("e"===l.type));break;case"f":case"%":null!=l.precision||isNaN(s=function(e){return Math.max(0,-Object(i.a)(Math.abs(e)))}(c))||(l.precision=s-2*("%"===l.type))}return Object(o.a)(l)}},a7GN:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("ERkP"),a=n.n(r),i=n("O94r"),o=n.n(i),l=n("5Nbk"),s=n("pn27");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(){return{dy:"0.25em",fill:"#222",fontFamily:"Arial",fontSize:10,textAnchor:"middle"}};function d(e){var t=e.axisClassName,n=e.labelOffset,r=void 0===n?8:n,i=e.tickLabelProps,d=void 0===i?u:i,f=e.tickLength,p=void 0===f?8:f,h=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["axisClassName","labelOffset","tickLabelProps","tickLength"]);return a.a.createElement(l.a,c({axisClassName:o()("visx-axis-bottom",t),labelOffset:r,orientation:s.a.bottom,tickLabelProps:d,tickLength:p},h))}},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},eMuC:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("aWzz"),a=n.n(r),i=n("ERkP"),o=n.n(i),l=n("O94r"),s=n.n(l),c=n("hsl+"),u=n.n(c),d=n("JmwF"),f=n("rkTo"),p=n("nNND"),h=n("HlJr"),m=n("tZ4l");function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e){var t=e.top,n=void 0===t?0:t,r=e.left,a=void 0===r?0:r,i=e.scale,l=e.height,c=e.stroke,v=void 0===c?"#eaf0f6":c,b=e.strokeWidth,x=void 0===b?1:b,O=e.strokeDasharray,g=e.className,w=e.numTicks,k=void 0===w?10:w,j=e.lineStyle,_=e.offset,E=e.tickValues,P=e.children,N=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["top","left","scale","height","stroke","strokeWidth","strokeDasharray","className","numTicks","lineStyle","offset","tickValues","children"]),T=null!=E?E:Object(p.a)(i,k),R=(null!=_?_:0)+Object(m.a)(i)/2,A=T.map((function(e){var t,n=(null!=(t=Object(h.a)(i(e)))?t:0)+R;return{from:new f.a({x:n,y:0}),to:new f.a({x:n,y:l})}}));return o.a.createElement(d.a,{className:s()("visx-columns",g),top:n,left:a},P?P({lines:A}):A.map((function(e,t){var n=e.from,r=e.to;return o.a.createElement(u.a,y({key:"column-line-"+t,from:n,to:r,stroke:v,strokeWidth:x,strokeDasharray:O,style:j},N))})))}v.propTypes={tickValues:a.a.array,height:a.a.number.isRequired}},geX1:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("ERkP"),a=n.n(r),i=n("O94r"),o=n.n(i),l=n("dGDr");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){var t=e.children,n=e.data,r=void 0===n?[]:n,i=e.x,c=e.y,u=e.fill,d=void 0===u?"transparent":u,f=e.className,p=e.curve,h=e.innerRef,m=e.defined,y=void 0===m?function(){return!0}:m,v=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","data","x","y","fill","className","curve","innerRef","defined"]),b=Object(l.c)({x:i,y:c,defined:y,curve:p});return t?a.a.createElement(a.a.Fragment,null,t({path:b})):a.a.createElement("path",s({ref:h,className:o()("visx-linepath",f),d:b(r)||"",fill:d,strokeLinecap:"round"},v))}},hNR5:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("aWzz"),a=n.n(r),i=n("ERkP"),o=n.n(i);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){var t=e.id,n=e.children,r=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["id","children"]);return o.a.createElement("defs",null,o.a.createElement("clipPath",l({id:t},r),n))}s.propTypes={id:a.a.string.isRequired,children:a.a.node}},"hsl+":function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=e.from,n=void 0===t?{x:0,y:0}:t,i=e.to,l=void 0===i?{x:1,y:1}:i,s=e.fill,c=void 0===s?"transparent":s,u=e.className,d=e.innerRef,f=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["from","to","fill","className","innerRef"]),p=n.x===l.x||n.y===l.y;return r.default.createElement("line",o({ref:d,className:(0,a.default)("visx-line",u),x1:n.x,y1:n.y,x2:l.x,y2:l.y,fill:c,shapeRendering:p?"crispEdges":"auto"},f))};var r=i(n("ERkP")),a=i(n("O94r"));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}},i6Tx:function(e,t,n){"use strict";t.__esModule=!0,t.default=u;var r=s(n("aWzz")),a=s(n("RNvQ")),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("ERkP")),o=s(n("LaGA"));function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){var t=e.className,n=e.children,r=e.debounceTime,l=void 0===r?300:r,s=e.ignoreDimensions,u=void 0===s?[]:s,d=e.parentSizeStyles,f=void 0===d?{width:"100%",height:"100%"}:d,p=e.enableDebounceLeadingCall,h=void 0===p||p,m=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"]),y=(0,i.useRef)(null),v=(0,i.useRef)(0),b=(0,i.useState)({width:0,height:0,top:0,left:0}),x=b[0],O=b[1],g=(0,i.useMemo)((function(){var e=Array.isArray(u)?u:[u];return(0,a.default)((function(t){O((function(n){return Object.keys(n).filter((function(e){return n[e]!==t[e]})).every((function(t){return e.includes(t)}))?n:t}))}),l,{leading:h})}),[l,h,u]);return(0,i.useEffect)((function(){var e=new o.default((function(e){void 0===e&&(e=[]),e.forEach((function(e){var t=e.contentRect,n=t.left,r=t.top,a=t.width,i=t.height;v.current=window.requestAnimationFrame((function(){g({width:a,height:i,top:r,left:n})}))}))}));return y.current&&e.observe(y.current),function(){window.cancelAnimationFrame(v.current),e.disconnect(),g&&g.cancel&&g.cancel()}}),[g]),i.default.createElement("div",c({style:f,ref:y,className:t},m),n(c({},x,{ref:y.current,resize:g})))}u.propTypes={className:r.default.string,debounceTime:r.default.number,enableDebounceLeadingCall:r.default.bool,ignoreDimensions:r.default.oneOfType([r.default.any,r.default.arrayOf(r.default.any)]),children:r.default.func.isRequired}},i9k6:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("zjfJ"),a=n("yFcC"),i=n.n(a),o=n("ERkP"),l=n.n(o),s=n("jvFD"),c=n.n(s),u=n("i6Tx"),d=n.n(u),f=l.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){var t,n,a=e.description,o=e.detailsHeight,s=void 0===o?76:o,u=e.detailsStyles,h=e.exampleProps,m=e.exampleRenderer,y=e.exampleUrl,v=e.tileStyles,b=e.title;return f(l.a.Fragment,null,(t=y,n=f("div",{style:v,className:"jsx-713312509 gallery-tile"},f("div",{className:"jsx-713312509 image"},f(d.a,null,(function(e){var t=e.width,n=e.height;return l.a.createElement(m,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:t,height:n+(b||a?s:0)},h))}))),(b||a)&&f("div",{style:u,className:"jsx-713312509 details"},b&&f("div",{className:"jsx-713312509 title"},b),a&&f("div",{className:"jsx-713312509 description"},f("pre",{className:"jsx-713312509"},a)))),t?f(c.a,{href:t},n):n),f(i.a,{id:"713312509"},["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]))}try{h.displayName="GalleryTile",h.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:h.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(m){}},"m+Ft":function(e,t,n){"use strict";function r(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function a(e){this._context=e}n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),a.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:r(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:r(this,e,t)}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}},t.b=function(e){return new a(e)}},mdYk:function(e){e.exports=JSON.parse('{"name":"@visx/demo-threshold","description":"Standalone visx threshold demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/axis":"latest","@visx/curve":"latest","@visx/grid":"latest","@visx/group":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","@visx/threshold":"latest","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","threshold"]}')},tZ4l:function(e,t,n){"use strict";function r(e){return"bandwidth"in e?e.bandwidth():0}n.d(t,"a",(function(){return r}))},"uKU/":function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return s}));var r=n("JKOu"),a=n("2+fR"),i=n("W1cA"),o=n("Zbhd");function l(e){var t=e.domain;return e.ticks=function(e){var n=t();return Object(r.a)(n[0],n[n.length-1],null==e?10:e)},e.tickFormat=function(e,n){var r=t();return Object(o.a)(r[0],r[r.length-1],null==e?10:e,n)},e.nice=function(n){null==n&&(n=10);var a,i,o=t(),l=0,s=o.length-1,c=o[l],u=o[s],d=10;for(u<c&&(i=c,c=u,u=i,i=l,l=s,s=i);d-- >0;){if((i=Object(r.b)(c,u,n))===a)return o[l]=c,o[s]=u,t(o);if(i>0)c=Math.floor(c/i)*i,u=Math.ceil(u/i)*i;else{if(!(i<0))break;c=Math.ceil(c*i)/i,u=Math.floor(u*i)/i}a=i}return e},e}function s(){var e=Object(a.b)();return e.copy=function(){return Object(a.a)(e,s())},i.b.apply(e,arguments),l(e)}},uUzn:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/threshold",function(){return n("RauZ")}])},wO8m:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("ERkP"),a=n.n(r),i=n("O94r"),o=n.n(i),l=n("dGDr");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){var t=e.children,n=e.x,r=e.x0,i=e.x1,c=e.y,u=e.y0,d=e.y1,f=e.data,p=void 0===f?[]:f,h=e.defined,m=void 0===h?function(){return!0}:h,y=e.className,v=e.curve,b=e.innerRef,x=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","x","x0","x1","y","y0","y1","data","defined","className","curve","innerRef"]),O=Object(l.b)({x:n,x0:r,x1:i,y:c,y0:u,y1:d,defined:m,curve:v});return t?a.a.createElement(a.a.Fragment,null,t({path:O})):a.a.createElement("path",s({ref:b,className:o()("visx-area",y),d:O(p)||""},x))}},zjfJ:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["uUzn",0,2,1,3,4,5,7,9,8,10,11,12,13,18]]]);