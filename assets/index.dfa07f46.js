import{r as l,u as C,c as e,j as o,f as L,z as R}from"./vendor.e4257099.js";import{u as b,h as B,L as S,I as $,R as E}from"./index.8152c4b7.js";import{l as p,E as i}from"./index.7822d2de.js";const A=()=>{const[h,y]=l.exports.useState([]),[n,g]=l.exports.useState(),[r,I]=l.exports.useState(localStorage.getItem(p)||i.LIST),{state:{currentUser:s,myRegisters:v}}=b(),u=C(),d=l.exports.useCallback(async()=>{if(s!=null&&s.phone){const{courseList:t,totalNum:a}=await B(s==null?void 0:s.phone);y(t),g(a)}},[s==null?void 0:s.phone]);if(l.exports.useEffect(()=>{d()},[d]),!(s!=null&&s.phone))return u("/"),null;const N=t=>{const a=R(v,({courseId:f})=>f===t.courseId),c=a.status,x=`https://room.reactedu.cn?username=${a.name}&userId=${s.phone}&role=${E[c]||"student"}&roomId=${t.roomId}&video=${t.ishd||"480"}p`;window.open(x)},m=r===i.GRID;return e("div",{className:"mycourse-list-wrapper",children:[e("header",{children:[o("div",{className:"title",children:"\u6211\u7684\u8BFE\u7A0B"}),e("div",{className:"totol-register-count",children:["\u5171\u62A5\u540D\u8BFE\u7A0B: ",o("strong",{children:n})]})]}),n===void 0?o(S,{}):e("div",{className:`mycourse-list ${m?"mycourse-list-layout-grid":"mycourse-list-layout-list"}`,children:[o("span",{className:"layout-icon",onClick:()=>{const t=m?i.LIST:i.GRID;I(t),localStorage.setItem(p,t)},children:o($,{symbol:r===i.GRID?"icon-listgrid":"icon-list"})}),L(h,(t,a)=>e("div",{className:"course-item",onClick:()=>u(`/${t.courseId}`),children:[o("img",{className:"course-item-cover",src:t.coverUrl,alt:"cover"}),e("div",{className:"course-item-content",children:[e("div",{children:[o("h3",{children:t.title}),o("div",{className:"summary",children:t.summary})]}),e("div",{className:"room",children:[e("span",{children:[" \u6559\u5BA4\u53F7: ",t.roomId," "]}),o("button",{className:"btn enter-class-btn",onClick:c=>{c.stopPropagation(),N(t)},children:"\u8FDB\u5165\u8BFE\u5802"})]})]})]},t.id+t.courseIndex+t.title+a))]})]})};export{A as default};
