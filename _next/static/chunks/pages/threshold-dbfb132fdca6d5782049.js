_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[124],{"67po":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("uKU/"),a=n("xx0A"),i=Object(a.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function o(e){return i(Object(r.a)(),e)}},HO86:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("lEbO");function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},Ifh9:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("aWzz"),a=n.n(r),i=n("ERkP"),o=n.n(i),s=n("O94r"),c=n.n(s),l=n("hsl+"),u=n.n(l),f=n("JmwF"),d=n("rkTo"),h=n("nNND"),p=n("HlJr"),m=n("tZ4l");function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e){var t=e.top,n=void 0===t?0:t,r=e.left,a=void 0===r?0:r,i=e.scale,s=e.width,l=e.stroke,v=void 0===l?"#eaf0f6":l,x=e.strokeWidth,b=void 0===x?1:x,O=e.strokeDasharray,k=e.className,g=e.children,w=e.numTicks,_=void 0===w?10:w,j=e.lineStyle,N=e.offset,T=e.tickValues,E=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["top","left","scale","width","stroke","strokeWidth","strokeDasharray","className","children","numTicks","lineStyle","offset","tickValues"]),M=null!=T?T:Object(h.a)(i,_),S=(null!=N?N:0)+Object(m.a)(i)/2,P=M.map((function(e){var t,n=(null!=(t=Object(p.a)(i(e)))?t:0)+S;return{from:new d.a({x:0,y:n}),to:new d.a({x:s,y:n})}}));return o.a.createElement(f.a,{className:c()("visx-rows",k),top:n,left:a},g?g({lines:P}):P.map((function(e,t){var n=e.from,r=e.to;return o.a.createElement(u.a,y({key:"row-line-"+t,from:n,to:r,stroke:v,strokeWidth:b,strokeDasharray:O,style:j},E))})))}v.propTypes={tickValues:a.a.array,width:a.a.number.isRequired}},KRsa:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("ERkP"),a=n.n(r),i=n("O94r"),o=n.n(i),s=n("5Nbk"),c=n("pn27");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(){return{dx:"-0.25em",dy:"0.25em",fill:"#222",fontFamily:"Arial",fontSize:10,textAnchor:"end"}};function f(e){var t=e.axisClassName,n=e.labelOffset,r=void 0===n?36:n,i=e.tickLabelProps,f=void 0===i?u:i,d=e.tickLength,h=void 0===d?8:d,p=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["axisClassName","labelOffset","tickLabelProps","tickLength"]);return a.a.createElement(s.a,l({axisClassName:o()("visx-axis-left",t),labelOffset:r,orientation:c.a.left,tickLabelProps:f,tickLength:h},p))}},Nc4z:function(e,t,n){"use strict";n.r(t);var r=n("ERkP"),a=n.n(r),i=n("6wy5"),o=n("Sk4R"),s=n("mdYk"),c=a.a.createElement;function l(e){var t=e.width;return c("div",{style:{width:t,fontSize:14,lineHeight:"1.5em"}},"The temperature in New York compared to San Francisco; days when New York was warmer are green, and colder days are violet. Based on Mike Bostock's"," ",c("a",{href:"https://bl.ocks.org/mbostock/3894205",target:"_blank",rel:"noopener noreferrer"},"Difference Chart"),".")}t.default=function(){return c(i.a,{component:o.b,title:"Threshold",description:l,codeSandboxDirectoryName:"visx-threshold",packageJson:s},"import React from 'react';\nimport { Group } from '@visx/group';\nimport { curveBasis } from '@visx/curve';\nimport { LinePath } from '@visx/shape';\nimport { Threshold } from '@visx/threshold';\nimport { scaleTime, scaleLinear } from '@visx/scale';\nimport { AxisLeft, AxisBottom } from '@visx/axis';\nimport { GridRows, GridColumns } from '@visx/grid';\nimport cityTemperature, { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature';\n\nexport const background = '#f3f3f3';\n\n// accessors\nconst date = (d: CityTemperature) => new Date(d.date).valueOf();\nconst ny = (d: CityTemperature) => Number(d['New York']);\nconst sf = (d: CityTemperature) => Number(d['San Francisco']);\n\n// scales\nconst timeScale = scaleTime<number>({\n  domain: [Math.min(...cityTemperature.map(date)), Math.max(...cityTemperature.map(date))],\n});\nconst temperatureScale = scaleLinear<number>({\n  domain: [\n    Math.min(...cityTemperature.map(d => Math.min(ny(d), sf(d)))),\n    Math.max(...cityTemperature.map(d => Math.max(ny(d), sf(d)))),\n  ],\n  nice: true,\n});\n\nconst defaultMargin = { top: 40, right: 30, bottom: 50, left: 40 };\n\nexport type ThresholdProps = {\n  width: number;\n  height: number;\n  margin?: { top: number; right: number; bottom: number; left: number };\n};\n\nexport default function Theshold({ width, height, margin = defaultMargin }: ThresholdProps) {\n  if (width < 10) return null;\n\n  // bounds\n  const xMax = width - margin.left - margin.right;\n  const yMax = height - margin.top - margin.bottom;\n\n  timeScale.range([0, xMax]);\n  temperatureScale.range([yMax, 0]);\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />\n        <Group left={margin.left} top={margin.top}>\n          <GridRows scale={temperatureScale} width={xMax} height={yMax} stroke=\"#e0e0e0\" />\n          <GridColumns scale={timeScale} width={xMax} height={yMax} stroke=\"#e0e0e0\" />\n          <line x1={xMax} x2={xMax} y1={0} y2={yMax} stroke=\"#e0e0e0\" />\n          <AxisBottom top={yMax} scale={timeScale} numTicks={width > 520 ? 10 : 5} />\n          <AxisLeft scale={temperatureScale} />\n          <text x=\"-70\" y=\"15\" transform=\"rotate(-90)\" fontSize={10}>\n            Temperature (\xb0F)\n          </text>\n          <Threshold<CityTemperature>\n            id={`${Math.random()}`}\n            data={cityTemperature}\n            x={d => timeScale(date(d)) ?? 0}\n            y0={d => temperatureScale(ny(d)) ?? 0}\n            y1={d => temperatureScale(sf(d)) ?? 0}\n            clipAboveTo={0}\n            clipBelowTo={yMax}\n            curve={curveBasis}\n            belowAreaProps={{\n              fill: 'violet',\n              fillOpacity: 0.4,\n            }}\n            aboveAreaProps={{\n              fill: 'green',\n              fillOpacity: 0.4,\n            }}\n          />\n          <LinePath\n            data={cityTemperature}\n            curve={curveBasis}\n            x={d => timeScale(date(d)) ?? 0}\n            y={d => temperatureScale(sf(d)) ?? 0}\n            stroke=\"#222\"\n            strokeWidth={1.5}\n            strokeOpacity={0.8}\n            strokeDasharray=\"1,2\"\n          />\n          <LinePath\n            data={cityTemperature}\n            curve={curveBasis}\n            x={d => timeScale(date(d)) ?? 0}\n            y={d => temperatureScale(ny(d)) ?? 0}\n            stroke=\"#222\"\n            strokeWidth={1.5}\n          />\n        </Group>\n      </svg>\n    </div>\n  );\n}\n")}},Sk4R:function(e,t,n){"use strict";n.d(t,"a",(function(){return N})),n.d(t,"b",(function(){return A}));var r=n("fGyu"),a=n("ERkP"),i=n.n(a),o=n("JmwF"),s=n("m+Ft"),c=n("geX1"),l=n("aWzz"),u=n.n(l),f=n("O94r"),d=n.n(f),h=n("wO8m"),p=n("hNR5");function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e){var t=e.className,n=e.curve,r=e.clipAboveTo,a=e.clipBelowTo,o=e.data,s=e.defined,c=e.x,l=e.y0,u=e.y1,f=e.aboveAreaProps,y=e.belowAreaProps,v=e.id,x=void 0===v?"":v;return i.a.createElement("g",{className:d()("visx-threshold",t)},i.a.createElement(h.a,{curve:n,data:o,x:c,y1:u,defined:s},(function(e){var t=e.path,n=null,s=null;return n=t.y0(a)(o),s=t.y0(r)(o),i.a.createElement("g",null,i.a.createElement(p.a,{id:"threshold-clip-below-"+x},i.a.createElement("path",{d:n||""})),i.a.createElement(p.a,{id:"threshold-clip-above-"+x},i.a.createElement("path",{d:s||""})))})),i.a.createElement(h.a,m({curve:n,data:o,defined:s,x:c,y0:l,y1:u,strokeWidth:0,clipPath:"url(#threshold-clip-below-"+x+")"},y)),i.a.createElement(h.a,m({curve:n,data:o,defined:s,x:c,y0:l,y1:u,strokeWidth:0,clipPath:"url(#threshold-clip-above-"+x+")"},f)))}y.propTypes={className:u.a.string,clipAboveTo:u.a.oneOfType([u.a.func,u.a.number]).isRequired,clipBelowTo:u.a.oneOfType([u.a.func,u.a.number]).isRequired,id:u.a.string.isRequired,data:u.a.array.isRequired,defined:u.a.func,x:u.a.oneOfType([u.a.func,u.a.number]).isRequired,y0:u.a.oneOfType([u.a.func,u.a.number]).isRequired,y1:u.a.oneOfType([u.a.func,u.a.number]).isRequired};var v=n("cjvV"),x=n("67po"),b=n("a7GN"),O=n("KRsa"),k=n("Ifh9"),g=n("eMuC"),w=n("s2H9"),_=n.n(w),j=i.a.createElement,N="#f3f3f3",T=function(e){return new Date(e.date).valueOf()},E=function(e){return Number(e["New York"])},M=function(e){return Number(e["San Francisco"])},S=Object(v.a)({domain:[Math.min.apply(Math,Object(r.a)(_.a.map(T))),Math.max.apply(Math,Object(r.a)(_.a.map(T)))]}),P=Object(x.a)({domain:[Math.min.apply(Math,Object(r.a)(_.a.map((function(e){return Math.min(E(e),M(e))})))),Math.max.apply(Math,Object(r.a)(_.a.map((function(e){return Math.max(E(e),M(e))}))))],nice:!0}),R={top:40,right:30,bottom:50,left:40};function A(e){var t=e.width,n=e.height,r=e.margin,a=void 0===r?R:r;if(t<10)return null;var i=t-a.left-a.right,l=n-a.top-a.bottom;return S.range([0,i]),P.range([l,0]),j("div",null,j("svg",{width:t,height:n},j("rect",{x:0,y:0,width:t,height:n,fill:N,rx:14}),j(o.a,{left:a.left,top:a.top},j(k.a,{scale:P,width:i,height:l,stroke:"#e0e0e0"}),j(g.a,{scale:S,width:i,height:l,stroke:"#e0e0e0"}),j("line",{x1:i,x2:i,y1:0,y2:l,stroke:"#e0e0e0"}),j(b.a,{top:l,scale:S,numTicks:t>520?10:5}),j(O.a,{scale:P}),j("text",{x:"-70",y:"15",transform:"rotate(-90)",fontSize:10},"Temperature (\xb0F)"),j(y,{id:"".concat(Math.random()),data:_.a,x:function(e){var t;return null!==(t=S(T(e)))&&void 0!==t?t:0},y0:function(e){var t;return null!==(t=P(E(e)))&&void 0!==t?t:0},y1:function(e){var t;return null!==(t=P(M(e)))&&void 0!==t?t:0},clipAboveTo:0,clipBelowTo:l,curve:s.b,belowAreaProps:{fill:"violet",fillOpacity:.4},aboveAreaProps:{fill:"green",fillOpacity:.4}}),j(c.a,{data:_.a,curve:s.b,x:function(e){var t;return null!==(t=S(T(e)))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=P(M(e)))&&void 0!==t?t:0},stroke:"#222",strokeWidth:1.5,strokeOpacity:.8,strokeDasharray:"1,2"}),j(c.a,{data:_.a,curve:s.b,x:function(e){var t;return null!==(t=S(T(e)))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=P(E(e)))&&void 0!==t?t:0},stroke:"#222",strokeWidth:1.5}))))}try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-threshold/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-threshold/Example.tsx#Example"})}catch(C){}},Zbhd:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("JKOu"),a=n("XAd9"),i=n("Cyas"),o=n("VBI3");function s(e,t,n,s){var c,l=Object(r.c)(e,t,n);switch((s=Object(a.a)(null==s?",f":s)).type){case"s":var u=Math.max(Math.abs(e),Math.abs(t));return null!=s.precision||isNaN(c=function(e,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(t)/3)))-Object(i.a)(Math.abs(e)))}(l,u))||(s.precision=c),Object(o.b)(s,u);case"":case"e":case"g":case"p":case"r":null!=s.precision||isNaN(c=function(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Object(i.a)(t)-Object(i.a)(e))+1}(l,Math.max(Math.abs(e),Math.abs(t))))||(s.precision=c-("e"===s.type));break;case"f":case"%":null!=s.precision||isNaN(c=function(e){return Math.max(0,-Object(i.a)(Math.abs(e)))}(l))||(s.precision=c-2*("%"===s.type))}return Object(o.a)(s)}},a7GN:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("ERkP"),a=n.n(r),i=n("O94r"),o=n.n(i),s=n("5Nbk"),c=n("pn27");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(){return{dy:"0.25em",fill:"#222",fontFamily:"Arial",fontSize:10,textAnchor:"middle"}};function f(e){var t=e.axisClassName,n=e.labelOffset,r=void 0===n?8:n,i=e.tickLabelProps,f=void 0===i?u:i,d=e.tickLength,h=void 0===d?8:d,p=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["axisClassName","labelOffset","tickLabelProps","tickLength"]);return a.a.createElement(s.a,l({axisClassName:o()("visx-axis-bottom",t),labelOffset:r,orientation:c.a.bottom,tickLabelProps:f,tickLength:h},p))}},eMuC:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("aWzz"),a=n.n(r),i=n("ERkP"),o=n.n(i),s=n("O94r"),c=n.n(s),l=n("hsl+"),u=n.n(l),f=n("JmwF"),d=n("rkTo"),h=n("nNND"),p=n("HlJr"),m=n("tZ4l");function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e){var t=e.top,n=void 0===t?0:t,r=e.left,a=void 0===r?0:r,i=e.scale,s=e.height,l=e.stroke,v=void 0===l?"#eaf0f6":l,x=e.strokeWidth,b=void 0===x?1:x,O=e.strokeDasharray,k=e.className,g=e.numTicks,w=void 0===g?10:g,_=e.lineStyle,j=e.offset,N=e.tickValues,T=e.children,E=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["top","left","scale","height","stroke","strokeWidth","strokeDasharray","className","numTicks","lineStyle","offset","tickValues","children"]),M=null!=N?N:Object(h.a)(i,w),S=(null!=j?j:0)+Object(m.a)(i)/2,P=M.map((function(e){var t,n=(null!=(t=Object(p.a)(i(e)))?t:0)+S;return{from:new d.a({x:n,y:0}),to:new d.a({x:n,y:s})}}));return o.a.createElement(f.a,{className:c()("visx-columns",k),top:n,left:a},T?T({lines:P}):P.map((function(e,t){var n=e.from,r=e.to;return o.a.createElement(u.a,y({key:"column-line-"+t,from:n,to:r,stroke:v,strokeWidth:b,strokeDasharray:O,style:_},E))})))}v.propTypes={tickValues:a.a.array,height:a.a.number.isRequired}},fGyu:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("lEbO");var a=n("HO86");function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},geX1:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("ERkP"),a=n.n(r),i=n("O94r"),o=n.n(i),s=n("dGDr");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){var t=e.children,n=e.data,r=void 0===n?[]:n,i=e.x,l=e.y,u=e.fill,f=void 0===u?"transparent":u,d=e.className,h=e.curve,p=e.innerRef,m=e.defined,y=void 0===m?function(){return!0}:m,v=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","data","x","y","fill","className","curve","innerRef","defined"]),x=Object(s.c)({x:i,y:l,defined:y,curve:h});return t?a.a.createElement(a.a.Fragment,null,t({path:x})):a.a.createElement("path",c({ref:p,className:o()("visx-linepath",d),d:x(r)||"",fill:f,strokeLinecap:"round"},v))}},hNR5:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("aWzz"),a=n.n(r),i=n("ERkP"),o=n.n(i);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){var t=e.id,n=e.children,r=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["id","children"]);return o.a.createElement("defs",null,o.a.createElement("clipPath",s({id:t},r),n))}c.propTypes={id:a.a.string.isRequired,children:a.a.node}},"hsl+":function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=e.from,n=void 0===t?{x:0,y:0}:t,i=e.to,s=void 0===i?{x:1,y:1}:i,c=e.fill,l=void 0===c?"transparent":c,u=e.className,f=e.innerRef,d=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["from","to","fill","className","innerRef"]),h=n.x===s.x||n.y===s.y;return r.default.createElement("line",o({ref:f,className:(0,a.default)("visx-line",u),x1:n.x,y1:n.y,x2:s.x,y2:s.y,fill:l,shapeRendering:h?"crispEdges":"auto"},d))};var r=i(n("ERkP")),a=i(n("O94r"));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}},"kh+t":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/threshold",function(){return n("Nc4z")}])},lEbO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"m+Ft":function(e,t,n){"use strict";function r(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function a(e){this._context=e}n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),a.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:r(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:r(this,e,t)}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}},t.b=function(e){return new a(e)}},mdYk:function(e){e.exports=JSON.parse('{"name":"@visx/demo-threshold","description":"Standalone visx threshold demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/axis":"latest","@visx/curve":"latest","@visx/grid":"latest","@visx/group":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","@visx/threshold":"latest","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","threshold"]}')},tZ4l:function(e,t,n){"use strict";function r(e){return"bandwidth"in e?e.bandwidth():0}n.d(t,"a",(function(){return r}))},"uKU/":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c}));var r=n("JKOu"),a=n("2+fR"),i=n("W1cA"),o=n("Zbhd");function s(e){var t=e.domain;return e.ticks=function(e){var n=t();return Object(r.a)(n[0],n[n.length-1],null==e?10:e)},e.tickFormat=function(e,n){var r=t();return Object(o.a)(r[0],r[r.length-1],null==e?10:e,n)},e.nice=function(n){null==n&&(n=10);var a,i,o=t(),s=0,c=o.length-1,l=o[s],u=o[c],f=10;for(u<l&&(i=l,l=u,u=i,i=s,s=c,c=i);f-- >0;){if((i=Object(r.b)(l,u,n))===a)return o[s]=l,o[c]=u,t(o);if(i>0)l=Math.floor(l/i)*i,u=Math.ceil(u/i)*i;else{if(!(i<0))break;l=Math.ceil(l*i)/i,u=Math.floor(u*i)/i}a=i}return e},e}function c(){var e=Object(a.b)();return e.copy=function(){return Object(a.a)(e,c())},i.b.apply(e,arguments),s(e)}},wO8m:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("ERkP"),a=n.n(r),i=n("O94r"),o=n.n(i),s=n("dGDr");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){var t=e.children,n=e.x,r=e.x0,i=e.x1,l=e.y,u=e.y0,f=e.y1,d=e.data,h=void 0===d?[]:d,p=e.defined,m=void 0===p?function(){return!0}:p,y=e.className,v=e.curve,x=e.innerRef,b=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","x","x0","x1","y","y0","y1","data","defined","className","curve","innerRef"]),O=Object(s.b)({x:n,x0:r,x1:i,y:l,y0:u,y1:f,defined:m,curve:v});return t?a.a.createElement(a.a.Fragment,null,t({path:O})):a.a.createElement("path",c({ref:x,className:o()("visx-area",y),d:O(h)||""},b))}}},[["kh+t",0,2,1,3,4,5,6,7,11,12,13,18]]]);