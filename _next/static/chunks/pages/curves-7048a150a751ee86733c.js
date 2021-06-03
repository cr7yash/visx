_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[61],{"67po":function(r,e,n){"use strict";n.d(e,"a",(function(){return o}));var t=n("uKU/"),a=n("xx0A"),i=Object(a.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function o(r){return i(Object(t.a)(),r)}},"91Pn":function(r,e,n){"use strict";e.a=Math.random},C0ks:function(r,e,n){"use strict";n.r(e);var t=n("ERkP"),a=n.n(t),i=n("6wy5"),o=n("eiPp"),u=n("yeGK"),c=a.a.createElement;e.default=function(){return c(i.a,{component:o.a,title:"Curves",codeSandboxDirectoryName:"visx-curve",packageJson:u},'import React, { useState } from \'react\';\nimport { extent, max } from \'d3-array\';\nimport * as allCurves from \'@visx/curve\';\nimport { Group } from \'@visx/group\';\nimport { LinePath } from \'@visx/shape\';\nimport { scaleTime, scaleLinear } from \'@visx/scale\';\nimport { MarkerArrow, MarkerCross, MarkerX, MarkerCircle, MarkerLine } from \'@visx/marker\';\nimport generateDateValue, { DateValue } from \'@visx/mock-data/lib/generators/genDateValue\';\n\ntype CurveType = keyof typeof allCurves;\n\nconst curveTypes = Object.keys(allCurves);\nconst lineCount = 5;\nconst series = new Array(lineCount).fill(null).map((_, i) =>\n  // vary each series value deterministically\n  generateDateValue(25, /* seed= */ i / 72).sort(\n    (a: DateValue, b: DateValue) => a.date.getTime() - b.date.getTime(),\n  ),\n);\nconst allData = series.reduce((rec, d) => rec.concat(d), []);\n\n// data accessors\nconst getX = (d: DateValue) => d.date;\nconst getY = (d: DateValue) => d.value;\n\n// scales\nconst xScale = scaleTime<number>({\n  domain: extent(allData, getX) as [Date, Date],\n});\nconst yScale = scaleLinear<number>({\n  domain: [0, max(allData, getY) as number],\n});\n\nexport type CurveProps = {\n  width: number;\n  height: number;\n  showControls?: boolean;\n};\n\nexport default function Example({ width, height, showControls = true }: CurveProps) {\n  const [curveType, setCurveType] = useState<CurveType>(\'curveNatural\');\n  const [showPoints, setShowPoints] = useState<boolean>(true);\n  const svgHeight = showControls ? height - 40 : height;\n  const lineHeight = svgHeight / lineCount;\n\n  // update scale output ranges\n  xScale.range([0, width - 50]);\n  yScale.range([lineHeight - 2, 0]);\n\n  return (\n    <div className="visx-curves-demo">\n      {showControls && (\n        <>\n          <label>\n            Curve type &nbsp;\n            <select onChange={e => setCurveType(e.target.value as CurveType)} value={curveType}>\n              {curveTypes.map(curve => (\n                <option key={curve} value={curve}>\n                  {curve}\n                </option>\n              ))}\n            </select>\n          </label>\n          &nbsp;\n          <label>\n            Show points&nbsp;\n            <input\n              type="checkbox"\n              checked={showPoints}\n              onChange={() => setShowPoints(!showPoints)}\n            />\n          </label>\n          <br />\n        </>\n      )}\n      <svg width={width} height={svgHeight}>\n        <MarkerX\n          id="marker-x"\n          stroke="#333"\n          size={22}\n          strokeWidth={4}\n          markerUnits="userSpaceOnUse"\n        />\n        <MarkerCross\n          id="marker-cross"\n          stroke="#333"\n          size={22}\n          strokeWidth={4}\n          strokeOpacity={0.6}\n          markerUnits="userSpaceOnUse"\n        />\n        <MarkerCircle id="marker-circle" fill="#333" size={2} refX={2} />\n        <MarkerArrow id="marker-arrow-odd" stroke="#333" size={8} strokeWidth={1} />\n        <MarkerLine id="marker-line" fill="#333" size={16} strokeWidth={1} />\n        <MarkerArrow id="marker-arrow" fill="#333" refX={2} size={6} />\n        <rect width={width} height={svgHeight} fill="#efefef" rx={14} ry={14} />\n        {width > 8 &&\n          series.map((lineData, i) => {\n            const even = i % 2 === 0;\n            let markerStart = even ? \'url(#marker-cross)\' : \'url(#marker-x)\';\n            if (i === 1) markerStart = \'url(#marker-line)\';\n            const markerEnd = even ? \'url(#marker-arrow)\' : \'url(#marker-arrow-odd)\';\n            return (\n              <Group key={`lines-${i}`} top={i * lineHeight} left={13}>\n                {showPoints &&\n                  lineData.map((d, j) => (\n                    <circle\n                      key={i + j}\n                      r={3}\n                      cx={xScale(getX(d))}\n                      cy={yScale(getY(d))}\n                      stroke="rgba(33,33,33,0.5)"\n                      fill="transparent"\n                    />\n                  ))}\n                <LinePath<DateValue>\n                  curve={allCurves[curveType]}\n                  data={lineData}\n                  x={d => xScale(getX(d)) ?? 0}\n                  y={d => yScale(getY(d)) ?? 0}\n                  stroke="#333"\n                  strokeWidth={even ? 2 : 1}\n                  strokeOpacity={even ? 0.6 : 1}\n                  shapeRendering="geometricPrecision"\n                  markerMid="url(#marker-circle)"\n                  markerStart={markerStart}\n                  markerEnd={markerEnd}\n                />\n              </Group>\n            );\n          })}\n      </svg>\n      <style jsx>{`\n        .visx-curves-demo label {\n          font-size: 12px;\n        }\n      `}</style>\n    </div>\n  );\n}\n')}},"G/4L":function(r,e,n){"use strict";n.r(e),n.d(e,"randomUniform",(function(){return a})),n.d(e,"randomInt",(function(){return i})),n.d(e,"randomNormal",(function(){return o.a})),n.d(e,"randomLogNormal",(function(){return u})),n.d(e,"randomBates",(function(){return s})),n.d(e,"randomIrwinHall",(function(){return c})),n.d(e,"randomExponential",(function(){return l})),n.d(e,"randomPareto",(function(){return f})),n.d(e,"randomBernoulli",(function(){return d})),n.d(e,"randomGeometric",(function(){return v})),n.d(e,"randomBinomial",(function(){return p})),n.d(e,"randomGamma",(function(){return h})),n.d(e,"randomBeta",(function(){return m})),n.d(e,"randomWeibull",(function(){return k})),n.d(e,"randomCauchy",(function(){return g})),n.d(e,"randomLogistic",(function(){return y})),n.d(e,"randomPoisson",(function(){return b})),n.d(e,"randomLcg",(function(){return x.a}));var t=n("91Pn"),a=function r(e){function n(r,n){return r=null==r?0:+r,n=null==n?1:+n,1===arguments.length?(n=r,r=0):n-=r,function(){return e()*n+r}}return n.source=r,n}(t.a),i=function r(e){function n(r,n){return arguments.length<2&&(n=r,r=0),r=Math.floor(r),n=Math.floor(n)-r,function(){return Math.floor(e()*n+r)}}return n.source=r,n}(t.a),o=n("VEyW"),u=function r(e){var n=o.a.source(e);function t(){var r=n.apply(this,arguments);return function(){return Math.exp(r())}}return t.source=r,t}(t.a),c=function r(e){function n(r){return(r=+r)<=0?()=>0:function(){for(var n=0,t=r;t>1;--t)n+=e();return n+t*e()}}return n.source=r,n}(t.a),s=function r(e){var n=c.source(e);function t(r){if(0===(r=+r))return e;var t=n(r);return function(){return t()/r}}return t.source=r,t}(t.a),l=function r(e){function n(r){return function(){return-Math.log1p(-e())/r}}return n.source=r,n}(t.a),f=function r(e){function n(r){if((r=+r)<0)throw new RangeError("invalid alpha");return r=1/-r,function(){return Math.pow(1-e(),r)}}return n.source=r,n}(t.a),d=function r(e){function n(r){if((r=+r)<0||r>1)throw new RangeError("invalid p");return function(){return Math.floor(e()+r)}}return n.source=r,n}(t.a),v=function r(e){function n(r){if((r=+r)<0||r>1)throw new RangeError("invalid p");return 0===r?()=>1/0:1===r?()=>1:(r=Math.log1p(-r),function(){return 1+Math.floor(Math.log1p(-e())/r)})}return n.source=r,n}(t.a),h=function r(e){var n=o.a.source(e)();function t(r,t){if((r=+r)<0)throw new RangeError("invalid k");if(0===r)return()=>0;if(t=null==t?1:+t,1===r)return()=>-Math.log1p(-e())*t;var a=(r<1?r+1:r)-1/3,i=1/(3*Math.sqrt(a)),o=r<1?()=>Math.pow(e(),1/r):()=>1;return function(){do{do{var r=n(),u=1+i*r}while(u<=0);u*=u*u;var c=1-e()}while(c>=1-.0331*r*r*r*r&&Math.log(c)>=.5*r*r+a*(1-u+Math.log(u)));return a*u*o()*t}}return t.source=r,t}(t.a),m=function r(e){var n=h.source(e);function t(r,e){var t=n(r),a=n(e);return function(){var r=t();return 0===r?0:r/(r+a())}}return t.source=r,t}(t.a),p=function r(e){var n=v.source(e),t=m.source(e);function a(r,e){return r=+r,(e=+e)>=1?()=>r:e<=0?()=>0:function(){for(var a=0,i=r,o=e;i*o>16&&i*(1-o)>16;){var u=Math.floor((i+1)*o),c=t(u,i-u+1)();c<=o?(a+=u,i-=u,o=(o-c)/(1-c)):(i=u-1,o/=c)}for(var s=o<.5,l=n(s?o:1-o),f=l(),d=0;f<=i;++d)f+=l();return a+(s?d:i-d)}}return a.source=r,a}(t.a),k=function r(e){function n(r,n,t){var a;return 0===(r=+r)?a=r=>-Math.log(r):(r=1/r,a=e=>Math.pow(e,r)),n=null==n?0:+n,t=null==t?1:+t,function(){return n+t*a(-Math.log1p(-e()))}}return n.source=r,n}(t.a),g=function r(e){function n(r,n){return r=null==r?0:+r,n=null==n?1:+n,function(){return r+n*Math.tan(Math.PI*e())}}return n.source=r,n}(t.a),y=function r(e){function n(r,n){return r=null==r?0:+r,n=null==n?1:+n,function(){var t=e();return r+n*Math.log(t/(1-t))}}return n.source=r,n}(t.a),b=function r(e){var n=h.source(e),t=p.source(e);function a(r){return function(){for(var a=0,i=r;i>16;){var o=Math.floor(.875*i),u=n(o)();if(u>i)return a+t(o-1,i/u)();a+=o,i-=u}for(var c=-Math.log1p(-e()),s=0;c<=i;++s)c-=Math.log1p(-e());return a+s}}return a.source=r,a}(t.a),x=n("J4UP")},Hoty:function(r,e,n){"use strict";n.r(e);var t=n("m+Ft");n.d(e,"curveBasis",(function(){return t.b}));var a=n("Q97m");n.d(e,"curveBasisClosed",(function(){return a.a}));var i=n("t4/P");n.d(e,"curveBasisOpen",(function(){return i.a}));var o=n("vHTF");n.d(e,"curveStep",(function(){return o.a})),n.d(e,"curveStepAfter",(function(){return o.b})),n.d(e,"curveStepBefore",(function(){return o.c}));var u=n("KDFE");n.d(e,"curveBundle",(function(){return u.a}));var c=n("mGPF");n.d(e,"curveLinear",(function(){return c.a}));var s=n("8iLE");n.d(e,"curveLinearClosed",(function(){return s.a}));var l=n("JkM6");n.d(e,"curveCardinal",(function(){return l.b}));var f=n("/kCm");n.d(e,"curveCardinalClosed",(function(){return f.b}));var d=n("BEsX");n.d(e,"curveCardinalOpen",(function(){return d.b}));var v=n("/Vk/");n.d(e,"curveCatmullRom",(function(){return v.a}));var h=n("S4k1");n.d(e,"curveCatmullRomClosed",(function(){return h.a}));var m=n("KrvH");n.d(e,"curveCatmullRomOpen",(function(){return m.a}));var p=n("EbDF");n.d(e,"curveMonotoneX",(function(){return p.a})),n.d(e,"curveMonotoneY",(function(){return p.b}));var k=n("w5BF");n.d(e,"curveNatural",(function(){return k.a}))},J4UP:function(r,e,n){"use strict";n.d(e,"a",(function(){return a}));const t=1/4294967296;function a(r=Math.random()){let e=0|(0<=r&&r<1?r/t:Math.abs(r));return()=>(e=1664525*e+1013904223|0,t*(e>>>0))}},JmwF:function(r,e,n){"use strict";n.d(e,"a",(function(){return l}));var t=n("aWzz"),a=n.n(t),i=n("ERkP"),o=n.n(i),u=n("O94r"),c=n.n(u);function s(){return(s=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}function l(r){var e=r.top,n=void 0===e?0:e,t=r.left,a=void 0===t?0:t,i=r.transform,u=r.className,l=r.children,f=r.innerRef,d=function(r,e){if(null==r)return{};var n,t,a={},i=Object.keys(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(a[n]=r[n]);return a}(r,["top","left","transform","className","children","innerRef"]);return o.a.createElement("g",s({ref:f,className:c()("visx-group",u),transform:i||"translate("+a+", "+n+")"},d),l)}l.propTypes={top:a.a.number,left:a.a.number,transform:a.a.string,className:a.a.string,children:a.a.node,innerRef:a.a.oneOfType([a.a.string,a.a.func,a.a.object])}},U8e0:function(r,e,n){"use strict";e.__esModule=!0,e.default=function(r){return(0,t.randomLcg)(r)};var t=n("G/4L")},VEyW:function(r,e,n){"use strict";var t=n("91Pn");e.a=function r(e){function n(r,n){var t,a;return r=null==r?0:+r,n=null==n?1:+n,function(){var i;if(null!=t)i=t,t=null;else do{t=2*e()-1,i=2*e()-1,a=t*t+i*i}while(!a||a>1);return r+n*i*Math.sqrt(-2*Math.log(a)/a)}}return n.source=r,n}(t.a)},Zbhd:function(r,e,n){"use strict";n.d(e,"a",(function(){return u}));var t=n("JKOu"),a=n("XAd9"),i=n("Cyas"),o=n("VBI3");function u(r,e,n,u){var c,s=Object(t.c)(r,e,n);switch((u=Object(a.a)(null==u?",f":u)).type){case"s":var l=Math.max(Math.abs(r),Math.abs(e));return null!=u.precision||isNaN(c=function(r,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(e)/3)))-Object(i.a)(Math.abs(r)))}(s,l))||(u.precision=c),Object(o.b)(u,l);case"":case"e":case"g":case"p":case"r":null!=u.precision||isNaN(c=function(r,e){return r=Math.abs(r),e=Math.abs(e)-r,Math.max(0,Object(i.a)(e)-Object(i.a)(r))+1}(s,Math.max(Math.abs(r),Math.abs(e))))||(u.precision=c-("e"===u.type));break;case"f":case"%":null!=u.precision||isNaN(c=function(r){return Math.max(0,-Object(i.a)(Math.abs(r)))}(s))||(u.precision=c-2*("%"===u.type))}return Object(o.a)(u)}},eiPp:function(r,e,n){"use strict";n.d(e,"a",(function(){return U}));var t=n("yFcC"),a=n.n(t),i=n("ERkP"),o=n.n(i),u=n("ue4z"),c=n("Hoty"),s=n("JmwF"),l=n("geX1"),f=n("cjvV"),d=n("67po"),v=n("aWzz"),h=n.n(v);function m(){return(m=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}function p(r){var e=r.id,n=r.markerWidth,t=void 0===n?3:n,a=r.markerHeight,i=void 0===a?3:a,u=r.markerUnits,c=void 0===u?"userSpaceOnUse":u,s=r.children,l=function(r,e){if(null==r)return{};var n,t,a={},i=Object.keys(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(a[n]=r[n]);return a}(r,["id","markerWidth","markerHeight","markerUnits","children"]);return o.a.createElement("defs",null,o.a.createElement("marker",m({id:e,markerWidth:t,markerHeight:i,markerUnits:c},l),s))}function k(){return(k=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}function g(r){var e=r.id,n=r.size,t=void 0===n?9:n,a=r.strokeWidth,i=void 0===a?1:a,u=function(r,e){if(null==r)return{};var n,t,a={},i=Object.keys(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(a[n]=r[n]);return a}(r,["id","size","strokeWidth"]),c=t+i,s=t/2,l="0 "+s+", "+s+" "+s+", "+s+" 0, "+s+" "+t+", "+s+" "+s+", "+t+" "+s;return o.a.createElement(p,k({id:e,markerWidth:c,markerHeight:c,refX:s,refY:s,orient:"auto",markerUnits:"strokeWidth",fill:"none",strokeWidth:i},u),o.a.createElement("polyline",{points:l}))}function y(){return(y=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}function b(r){return o.a.createElement(g,y({orient:45},r))}function x(){return(x=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}function O(r){var e=r.id,n=r.size,t=void 0===n?9:n,a=r.strokeWidth,i=void 0===a?1:a,u=function(r,e){if(null==r)return{};var n,t,a={},i=Object.keys(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(a[n]=r[n]);return a}(r,["id","size","strokeWidth"]),c=2*t+i,s=c/2;return o.a.createElement(p,x({id:e,markerWidth:c,markerHeight:c,refX:0,refY:s,orient:"auto-start-reverse",markerUnits:"strokeWidth",strokeWidth:i},u),o.a.createElement("circle",{r:t,cx:s,cy:s}))}function w(){return(w=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}function M(r){var e=r.id,n=r.size,t=void 0===n?9:n,a=r.strokeWidth,i=void 0===a?1:a,u=function(r,e){if(null==r)return{};var n,t,a={},i=Object.keys(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(a[n]=r[n]);return a}(r,["id","size","strokeWidth"]),c=t+2*i,s=t,l=c/2,f="0 0, "+t+" "+t/2+", 0 "+t;return o.a.createElement(p,w({id:e,markerWidth:c,markerHeight:c,refX:s,refY:l,orient:"auto",markerUnits:"strokeWidth",fill:"none",strokeWidth:i},u),o.a.createElement("g",{transform:"translate("+i+", "+i+")"},o.a.createElement("polyline",{points:f})))}function j(){return(j=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}function C(r){var e=r.id,n=r.size,t=void 0===n?9:n,a=r.fill,i=r.stroke,u=r.strokeWidth,c=void 0===u?1:u,s=function(r,e){if(null==r)return{};var n,t,a={},i=Object.keys(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(a[n]=r[n]);return a}(r,["id","size","fill","stroke","strokeWidth"]),l=Math.max(t,2*c),f=l/2,d=t/2;return o.a.createElement(p,j({id:e,markerWidth:l,markerHeight:t,refX:f,refY:d,orient:"auto",markerUnits:"strokeWidth",fill:a||i,stroke:"none"},s),o.a.createElement("rect",{width:c,height:t,x:f}))}p.propTypes={id:h.a.string.isRequired,size:h.a.number,markerWidth:h.a.oneOfType([h.a.string,h.a.number]),markerHeight:h.a.oneOfType([h.a.string,h.a.number]),markerUnits:h.a.string,refX:h.a.oneOfType([h.a.string,h.a.number]),refY:h.a.oneOfType([h.a.string,h.a.number]),strokeWidth:h.a.number,children:h.a.node.isRequired};var E=n("jCJf"),S=n.n(E),N=o.a.createElement,W=Object.keys(c),P=new Array(5).fill(null).map((function(r,e){return S()(25,e/72).sort((function(r,e){return r.date.getTime()-e.date.getTime()}))})),z=P.reduce((function(r,e){return r.concat(e)}),[]),T=function(r){return r.date},_=function(r){return r.value},D=Object(f.a)({domain:Object(u.b)(z,T)}),R=Object(d.a)({domain:[0,Object(u.c)(z,_)]});function U(r){var e=r.width,n=r.height,t=r.showControls,u=void 0===t||t,f=Object(i.useState)("curveNatural"),d=f[0],v=f[1],h=Object(i.useState)(!0),m=h[0],p=h[1],k=u?n-40:n,y=k/5;return D.range([0,e-50]),R.range([y-2,0]),N("div",{className:"jsx-1571817224 visx-curves-demo"},u&&N(o.a.Fragment,null,N("label",{className:"jsx-1571817224"},"Curve type \xa0",N("select",{onChange:function(r){return v(r.target.value)},value:d,className:"jsx-1571817224"},W.map((function(r){return N("option",{key:r,value:r,className:"jsx-1571817224"},r)})))),"\xa0",N("label",{className:"jsx-1571817224"},"Show points\xa0",N("input",{type:"checkbox",checked:m,onChange:function(){return p(!m)},className:"jsx-1571817224"})),N("br",{className:"jsx-1571817224"})),N("svg",{width:e,height:k,className:"jsx-1571817224"},N(b,{id:"marker-x",stroke:"#333",size:22,strokeWidth:4,markerUnits:"userSpaceOnUse"}),N(g,{id:"marker-cross",stroke:"#333",size:22,strokeWidth:4,strokeOpacity:.6,markerUnits:"userSpaceOnUse"}),N(O,{id:"marker-circle",fill:"#333",size:2,refX:2}),N(M,{id:"marker-arrow-odd",stroke:"#333",size:8,strokeWidth:1}),N(C,{id:"marker-line",fill:"#333",size:16,strokeWidth:1}),N(M,{id:"marker-arrow",fill:"#333",refX:2,size:6}),N("rect",{width:e,height:k,fill:"#efefef",rx:14,ry:14,className:"jsx-1571817224"}),e>8&&P.map((function(r,e){var n=e%2===0,t=n?"url(#marker-cross)":"url(#marker-x)";1===e&&(t="url(#marker-line)");var a=n?"url(#marker-arrow)":"url(#marker-arrow-odd)";return N(s.a,{key:"lines-".concat(e),top:e*y,left:13},m&&r.map((function(r,n){return N("circle",{key:e+n,r:3,cx:D(T(r)),cy:R(_(r)),stroke:"rgba(33,33,33,0.5)",fill:"transparent",className:"jsx-1571817224"})})),N(l.a,{curve:c[d],data:r,x:function(r){var e;return null!==(e=D(T(r)))&&void 0!==e?e:0},y:function(r){var e;return null!==(e=R(_(r)))&&void 0!==e?e:0},stroke:"#333",strokeWidth:n?2:1,strokeOpacity:n?.6:1,shapeRendering:"geometricPrecision",markerMid:"url(#marker-circle)",markerStart:t,markerEnd:a}))}))),N(a.a,{id:"1571817224"},[".visx-curves-demo.jsx-1571817224 label.jsx-1571817224{font-size:12px;}"]))}try{U.displayName="Example",U.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},showControls:{defaultValue:{value:!0},description:"",name:"showControls",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-curve/Example.tsx#Example"]={docgenInfo:U.__docgenInfo,name:"Example",path:"src/sandboxes/visx-curve/Example.tsx#Example"})}catch(X){}},geX1:function(r,e,n){"use strict";n.d(e,"a",(function(){return s}));var t=n("ERkP"),a=n.n(t),i=n("O94r"),o=n.n(i),u=n("dGDr");function c(){return(c=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}function s(r){var e=r.children,n=r.data,t=void 0===n?[]:n,i=r.x,s=r.y,l=r.fill,f=void 0===l?"transparent":l,d=r.className,v=r.curve,h=r.innerRef,m=r.defined,p=void 0===m?function(){return!0}:m,k=function(r,e){if(null==r)return{};var n,t,a={},i=Object.keys(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(a[n]=r[n]);return a}(r,["children","data","x","y","fill","className","curve","innerRef","defined"]),g=Object(u.c)({x:i,y:s,defined:p,curve:v});return e?a.a.createElement(a.a.Fragment,null,e({path:g})):a.a.createElement("path",c({ref:h,className:o()("visx-linepath",d),d:g(t)||"",fill:f,strokeLinecap:"round"},k))}},jCJf:function(r,e,n){"use strict";e.__esModule=!0,e.default=function(r,e,n){var t=null==e?Math.random:(0,a.default)(e),i=null==n?Date.now():new Date(n).valueOf();return new Array(r).fill(1).map((function(r,e){return{date:new Date(i-36e5*e),value:3e3*t()|0}}))};var t,a=(t=n("U8e0"))&&t.__esModule?t:{default:t}},kBDt:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/curves",function(){return n("C0ks")}])},"uKU/":function(r,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return c}));var t=n("JKOu"),a=n("2+fR"),i=n("W1cA"),o=n("Zbhd");function u(r){var e=r.domain;return r.ticks=function(r){var n=e();return Object(t.a)(n[0],n[n.length-1],null==r?10:r)},r.tickFormat=function(r,n){var t=e();return Object(o.a)(t[0],t[t.length-1],null==r?10:r,n)},r.nice=function(n){null==n&&(n=10);var a,i,o=e(),u=0,c=o.length-1,s=o[u],l=o[c],f=10;for(l<s&&(i=s,s=l,l=i,i=u,u=c,c=i);f-- >0;){if((i=Object(t.b)(s,l,n))===a)return o[u]=s,o[c]=l,e(o);if(i>0)s=Math.floor(s/i)*i,l=Math.ceil(l/i)*i;else{if(!(i<0))break;s=Math.ceil(s*i)/i,l=Math.floor(l*i)/i}a=i}return r},r}function c(){var r=Object(a.b)();return r.copy=function(){return Object(a.a)(r,c())},i.b.apply(r,arguments),u(r)}},ue4z:function(r,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return f}));var t=function(r,e){return r<e?-1:r>e?1:r>=e?0:NaN},a=function(r){var e;return 1===r.length&&(e=r,r=function(r,n){return t(e(r),n)}),{left:function(e,n,t,a){for(null==t&&(t=0),null==a&&(a=e.length);t<a;){var i=t+a>>>1;r(e[i],n)<0?t=i+1:a=i}return t},right:function(e,n,t,a){for(null==t&&(t=0),null==a&&(a=e.length);t<a;){var i=t+a>>>1;r(e[i],n)>0?a=i:t=i+1}return t}}};var i=a(t);i.right,i.left;var o=function(r,e){var n,t,a,i=r.length,o=-1;if(null==e){for(;++o<i;)if(null!=(n=r[o])&&n>=n)for(t=a=n;++o<i;)null!=(n=r[o])&&(t>n&&(t=n),a<n&&(a=n))}else for(;++o<i;)if(null!=(n=e(r[o],o,r))&&n>=n)for(t=a=n;++o<i;)null!=(n=e(r[o],o,r))&&(t>n&&(t=n),a<n&&(a=n));return[t,a]},u=Array.prototype,c=(u.slice,u.map,function(r,e,n){r=+r,e=+e,n=(a=arguments.length)<2?(e=r,r=0,1):a<3?1:+n;for(var t=-1,a=0|Math.max(0,Math.ceil((e-r)/n)),i=new Array(a);++t<a;)i[t]=r+t*n;return i});Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var s=function(r,e){var n,t,a=r.length,i=-1;if(null==e){for(;++i<a;)if(null!=(n=r[i])&&n>=n)for(t=n;++i<a;)null!=(n=r[i])&&n>t&&(t=n)}else for(;++i<a;)if(null!=(n=e(r[i],i,r))&&n>=n)for(t=n;++i<a;)null!=(n=e(r[i],i,r))&&n>t&&(t=n);return t},l=function(r){for(var e,n,t,a=r.length,i=-1,o=0;++i<a;)o+=r[i].length;for(n=new Array(o);--a>=0;)for(e=(t=r[a]).length;--e>=0;)n[--o]=t[e];return n},f=function(r){if(!(a=r.length))return[];for(var e=-1,n=function(r,e){var n,t,a=r.length,i=-1;if(null==e){for(;++i<a;)if(null!=(n=r[i])&&n>=n)for(t=n;++i<a;)null!=(n=r[i])&&t>n&&(t=n)}else for(;++i<a;)if(null!=(n=e(r[i],i,r))&&n>=n)for(t=n;++i<a;)null!=(n=e(r[i],i,r))&&t>n&&(t=n);return t}(r,d),t=new Array(n);++e<n;)for(var a,i=-1,o=t[e]=new Array(a);++i<a;)o[i]=r[i][e];return t};function d(r){return r.length}},yeGK:function(r){r.exports=JSON.parse('{"name":"@visx/demo-curve","description":"Standalone visx curve demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/curve":"latest","@visx/gradient":"latest","@visx/group":"latest","@visx/marker":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","d3-array":"^2.4.0","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","curve","interpolate"]}')}},[["kBDt",0,2,1,3,4,5,6,7,11,15]]]);