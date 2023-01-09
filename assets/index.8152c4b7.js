import{r as i,j as o,S as P,i as O,s as z,a as k,R as G,b as H,c as u,F as v,M as U,D as q,d as b,I as E,B as M,m as j,e as V,L as $,u as S,f as A,g as W,h as Y,k as J,O as K,l as Z,n as Q,o as X}from"./vendor.e4257099.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();var f=(e=>(e.STUDENT="1",e.TEACHER="2",e.VISITOR="3",e.TUTOR="4",e.ADMIN="5",e.PARENT="6",e))(f||{});const ee="https://ssl.cdn.maodouketang.com/Fn2y9zZHL6Cp7tLDsUq5b1kF7S88",y=btoa("rcore-user-info"),Ae={[f.STUDENT]:"student",[f.TEACHER]:"teacher",[f.TUTOR]:"ta",[f.ADMIN]:"admin",[f.VISITOR]:"visitor",[f.PARENT]:"parent"},te=(e,t)=>{switch(t.type){case"LOGIN":return{...e,currentUser:t.payload};case"LOGOUT":return{...e,currentUser:void 0};case"UPDATE_MY_COURSES":return{...e,myRegisters:t.payload};case"UPDATE_LOGIN_DIALOG_VISIBLE":return{...e,loginDialogVisible:t.payload};default:throw new Error(`[count-context] Unhandled action type: ${t.type}`)}},w={currentUser:{phone:localStorage.getItem(y)},myRegisters:[],loginDialogVisible:!1},oe=()=>w,L=i.exports.createContext({state:w,dispatch:oe});function se(e){const[t,r]=i.exports.useReducer(te,w);return o(L.Provider,{value:{state:t,dispatch:r},...e})}const R=()=>{const e=i.exports.useContext(L);if(e===void 0)throw new Error("useCount must be used with a CountProvider");return e};const re=e=>o("div",{className:"loading-container",children:o(P,{tip:"\u6570\u636E\u52A0\u8F7D\u4E2D...",size:"small",...e})}),ne="modulepreload",ae=function(e){return"/course/"+e},N={},x=function(t,r,a){return!r||r.length===0?t():Promise.all(r.map(s=>{if(s=ae(s),s in N)return;N[s]=!0;const n=s.endsWith(".css"),d=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${d}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":ne,n||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),n)return new Promise((h,c)=>{l.addEventListener("load",h),l.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};const ie=(e,t)=>{if(O(t[0]))return z(t,r=>{const[a,s]=k(r);return e>=a&&e<=s});{const[r,a]=k(t);return e>=r&&e<=a}},ce=(e,t,r)=>{let a=~~(Math.random()*(e-t+1)+t);if(r)for(;ie(a,r);)a=~~(Math.random()*(e-t+1)+t);return a},g=(e,t,r,a)=>{let s=[];for(let n=0;n<r;n++)s=s.concat(ce(e,t,a));return s},C=4,le=e=>{const[t,r,a]=e;return`rgb(${t}, ${r}, ${a})`},B=()=>({nums:g(122,48,C,[[58,64],[91,96]]),rotate:g(50,-50,C),fontSize:g(12,20,C),color:[g(100,255,3),g(100,255,3),g(100,255,3),g(100,255,3)]}),ue=i.exports.forwardRef((e,t)=>{const[r,a]=i.exports.useState(B());return i.exports.useImperativeHandle(t,()=>({getCodes:()=>r.nums,getCodesAsString:s=>{const n=r.nums.map(d=>String.fromCharCode(d)).join("");return s?n.toLowerCase():n}}),[r]),o("div",{className:"verification-code-box",onClick:()=>a(B()),children:r.nums.map((s,n)=>o("span",{style:{color:le(r.color[n]),fontSize:r.fontSize[n],transform:`rotate(${r.rotate[n]}deg)`},children:String.fromCharCode(s)},n))})}),I=G.forwardRef((e,t)=>{const{children:r,symbol:a,className:s="",...n}=e;return o("svg",{...n,className:`icon ${s}`,"aria-hidden":"true",ref:t,children:o("use",{xlinkHref:`#${a}`})})}),de="https://admin.maodouketang.com:8443",m=H.create({baseURL:de});m.interceptors.response.use(function(e){return e.data},function(e){return Promise.reject(e)});m.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)});const p=478,T=2e3;async function Ne(){return(await m("/seller/api/homepages",{params:{"clientId.equals":p}}))[0]}async function Be(e){const t=e?`/seller/api/coursesget/getAllCoursesByConditionsWithTotal?page=0&size=18&clientId=${p}&tag=hot&isDelete=1&sort=courseIndex,asc`:`/seller/api/coursesget/getAllCoursesByConditionsWithTotal?page=0&size=100&isDelete=1&clientId=${p}&sort=courseIndex,asc`;return await m(t)}async function Se(e,t=0){return await m("/seller/api/students/getAllCourseByStudentWithTotal",{params:{page:t,phone:e,size:20,sort:"id,desc"}})}async function Le(e){return(await m("/seller/api/courses",{params:{"clientId.equals":p,"courseId.equals":e}}))[0]}async function Te(){return await m(`/seller/api/teachers/getAllTeachersByConditionsWithTotal?page=0&size=6&clientId=${p}`)}async function _e(e){return await m("/seller/api/students",{params:{"clientId.equals":p,"courseId.equals":e,size:T}})}async function De(e){return await m("/seller/api/course-classes",{params:{"clientId.equals":p,"courseId.equals":e,size:T,sort:"startAt,desc"}})}async function Pe(e){return await m("/seller/api/students",{method:"POST",data:e})}async function me(e){return await m("/seller/api/students",{params:{"clientId.equals":p,"phone.equals":e}})}async function Oe(e){const{roomId:t,startTime:r,endTime:a}=e;return await m("/analysis/api/room-actions/getRoomActionsWithTotalNumByConditionsTime",{params:{roomId:t,startTime:new Date(r).toJSON(),endTime:new Date(a).toJSON(),clientId:p,page:0,size:200,actionType:"CHAT"}})}const pe=()=>{const{state:{currentUser:e},dispatch:t}=R(),r=i.exports.useCallback(async()=>{if(e!=null&&e.phone){const a=await me(e==null?void 0:e.phone);t({type:"UPDATE_MY_COURSES",payload:a})}},[e==null?void 0:e.phone]);i.exports.useEffect(()=>{r()},[r])};function he(){const e=navigator.userAgent||navigator.vendor||window.opera;return{mobile:()=>/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}}const ge=()=>{const[e,t]=i.exports.useState();return i.exports.useEffect(()=>{const r=he();t(r)},[]),e},_=e=>{const[t,r]=i.exports.useState(!1),[a,s]=i.exports.useState(),{state:{currentUser:n},dispatch:d}=R(),l=c=>{r(!0),s(c),d({type:"LOGIN",payload:{phone:c}})},h=i.exports.useCallback(()=>{const c=localStorage.getItem(y);c&&l(c)},[]);return i.exports.useEffect(()=>{h()},[h]),i.exports.useEffect(()=>{n!=null&&n.phone?(r(!0),s(n.phone)):t&&(r(!1),s(void 0))},[t,n==null?void 0:n.phone]),e?[t,a]:[t]},fe=()=>{const{dispatch:e}=R();return i.exports.useCallback(()=>{localStorage.removeItem(y),e({type:"LOGOUT"})},[])},be=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[0-9])\d{8}$/,ye=e=>{const t=i.exports.useRef(),[r,a]=i.exports.useState(!0),[s]=b.useForm();return u(b,{form:s,className:"normal-form",onFinish:d=>{var l;d.code.length===C&&d.code.toLowerCase()===((l=t.current)==null?void 0:l.getCodesAsString(!0))?e.onSubmit(d.phone):a(!1)},autoComplete:"off",size:"large",children:[o("h3",{children:"\u8BF7\u4F7F\u7528\u624B\u673A\u53F7\u767B\u5F55"}),o(b.Item,{name:"phone",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{pattern:be,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u624B\u673A\u53F7"}],children:o(E,{placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"})}),o(b.Item,{name:"code",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}],help:r?void 0:"\u9A8C\u8BC1\u7801\u8F93\u5165\u9519\u8BEF",validateStatus:r?void 0:"error",children:o(E,{placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",addonAfter:o(ue,{ref:t})})}),o(b.Item,{children:o(M,{style:{width:"100%"},type:"primary",htmlType:"submit",children:"\u767B\u5F55"})}),u("span",{children:["\u767B\u5F55\u5373\u4EE3\u8868\u9605\u8BFB\u5E76\u540C\u610F ",o("span",{style:{color:"#3db477"},children:"\u300A\u670D\u52A1\u534F\u8BAE\u548C\u9690\u79C1\u653F\u7B56\u300B"})]})]})},D=({isMobile:e})=>{const{state:{currentUser:t,loginDialogVisible:r},dispatch:a}=R();_();const s=c=>{a({type:"UPDATE_LOGIN_DIALOG_VISIBLE",payload:c})},n=c=>{a({type:"LOGIN",payload:{phone:c}})},d=()=>{a({type:"LOGOUT"})},l=c=>{localStorage.setItem(y,c),j.success("\u767B\u5F55\u6210\u529F\uFF0C\u6B22\u8FCE\u56DE\u6765!"),s(!1),n(c)};return t!=null&&t.phone?o(q,{overlayClassName:"user-dropdown-menus",overlay:o(V,{onClick:({key:c})=>{c==="logout"&&(localStorage.removeItem(y),d())},items:[{key:"myCourse",label:o($,{to:"/myCourse",children:"\u6211\u7684\u8BFE\u7A0B"})},{key:"logout",label:o("span",{children:"\u9000\u51FA\u767B\u5F55"})}]}),placement:"bottomRight",arrow:!0,children:e?o(I,{symbol:"icon-user"}):u("span",{className:"user-info not-link",children:[t.phone,o("img",{width:30,src:ee,alt:"avatar"})]})}):u(v,{children:[e?o(I,{symbol:"icon-user",onClick:()=>s(!0)}):o("span",{className:"nav-link",onClick:()=>s(!0),children:"\u767B\u5F55"}),o(U,{width:350,open:r,footer:null,onCancel:()=>s(!1),maskClosable:!1,children:o(ye,{onSubmit:l})})]})},Ce=({isMobile:e})=>{const t=S();return o("header",{className:"main-header",children:u("div",{className:"header-content content",children:[u("a",{href:"/homepage/",children:[o("img",{src:"https://ssl.cdn.maodouketang.com/FoRrEnaH85pNGFtxu38hwf1dHbBt",alt:"logo"}),o("span",{className:"action-item",children:"\u793E\u533A"})]}),u("span",{onClick:()=>t("//"),children:[o(I,{symbol:"icon-home"}),"\u9996\u9875"]}),u("span",{children:[o(D,{isMobile:e}),"\u6211\u7684"]})]})})},Re=()=>o("footer",{children:u("div",{className:"content",children:[u("div",{className:"footer-info",children:[u("section",{children:[o("div",{className:"sub-title",children:"React\u57F9\u8BAD\u793E\u533A"}),o("div",{className:"sub-items",children:o("span",{children:"\u81F4\u529B\u4E8E\u505A\u4E2D\u56FD\u6700\u597D\u7684React\u57F9\u8BAD\u54C1\u724C"})})]}),u("section",{children:[o("div",{className:"sub-title",children:"\u8D44\u6E90\u94FE\u63A5"}),o("div",{className:"sub-items",children:A([{text:"React\u5B98\u7F51",link:"https://reactjs.org/"}],({text:e,link:t})=>o("div",{children:o("a",{href:t,children:e})},t))})]}),u("section",{children:[o("div",{className:"sub-title",children:"\u8054\u7CFB\u6211\u4EEC"}),o("div",{className:"sub-items",children:A([{label:"\u7535\u8BDD",text:"13691584139"},{label:"\u5730\u5740",text:"\u5317\u4EAC\u5E02\u6D77\u6DC0\u533A\u6E05\u534E\u79D1\u6280\u56ED\u79D1\u6280\u5927\u53A6C\u5EA7G05"}],({label:e,text:t})=>u("div",{children:[u("span",{children:[e,"\uFF1A"]}),t]},e))})]})]}),o("a",{className:"record-number",href:"https://beian.miit.gov.cn/#/Integrated/index",children:"\u5317\u4EAC\u6E05\u534E\u5927\u5B66\xB7\u4EACICP\u590716045052\u53F7-11"})]})});const xe=()=>{const e=W(),t=S(),r=e.pathname==="/",a=!0,[s,n]=_(a),d=fe(),l=ge(),h=!!(l!=null&&l.mobile());pe();const c=u("div",{className:"custom-course-nav",children:[o("span",{className:"nav-common-link nav-link",onClick:()=>t("/"),children:"\u8BFE\u7A0B\u57F9\u8BAD"}),o("span",{className:"nav-common-link nav-link",onClick:()=>window.open("http://tasks.os2edu.cn/pc/"),children:"\u4EFB\u52A1\u4E2D\u5FC3"})]});let F={customRender:u(v,{children:[c,o(D,{})]})};return s&&(F={customRender:c,userInfo:{phone:n},dropMenu:[{key:"myCourse",title:"\u6211\u7684\u8BFE\u7A0B",onClick(){t("/myCourse")}},{key:"logout",title:"\u9000\u51FA\u767B\u5F55",onClick(){d()}}]}),o(Y,{headerProps:{title:"React\u57F9\u8BAD\u793E\u533A",logo:"https://ssl.cdn.maodouketang.com/FoRrEnaH85pNGFtxu38hwf1dHbBt",extra:F},className:`container ${h?"container-mobile":""}`,children:u(v,{children:[h&&o(Ce,{isMobile:!0}),o(J,{children:o(K,{})}),r&&o(Re,{})]})})},ve=i.exports.lazy(()=>x(()=>import("./index.b8e7d91c.js"),["assets/index.b8e7d91c.js","assets/index.e0d76449.css","assets/vendor.e4257099.js","assets/vendor.324c6f0d.css","assets/index.7822d2de.js","assets/index.b2d9a3f8.css"])),Ie=i.exports.lazy(()=>x(()=>import("./index.9fbaf900.js"),["assets/index.9fbaf900.js","assets/index.bbdb3a23.css","assets/vendor.e4257099.js","assets/vendor.324c6f0d.css"])),we=i.exports.lazy(()=>x(()=>import("./index.dfa07f46.js"),["assets/index.dfa07f46.js","assets/index.7ade5cd7.css","assets/vendor.e4257099.js","assets/vendor.324c6f0d.css","assets/index.7822d2de.js","assets/index.b2d9a3f8.css"])),Fe=i.exports.lazy(()=>x(()=>import("./index.b78f1452.js"),["assets/index.b78f1452.js","assets/index.45bb8373.css","assets/vendor.e4257099.js","assets/vendor.324c6f0d.css"])),ke=Z([{path:"/",element:o(xe,{}),children:[{index:!0,element:o(ve,{})},{path:"/:id",element:o(Ie,{})},{path:"/:id/replay/:replayId",element:o(Fe,{})},{path:"myCourse",element:o(we,{})}]}],{basename:"/course"});Q.createRoot(document.getElementById("root")).render(o(se,{children:o(i.exports.Suspense,{fallback:o("div",{style:{display:"flex",width:"100vw",height:"100vh"},children:o(re,{size:"large",tip:"\u9875\u9762\u52A0\u8F7D\u4E2D...",delay:500})}),children:o(X,{router:ke})})}));export{de as B,f as E,I,re as L,Ae as R,y as U,Te as a,Be as b,ge as c,Le as d,_e as e,De as f,Ne as g,Se as h,Oe as i,Pe as r,R as u};
