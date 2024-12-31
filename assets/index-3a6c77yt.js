(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();class o{constructor(t={}){this.props=t,this.state=t.initialState||{},this.children=t.children||[],this.init()}init(){this.render(),this.renderChildren(),this.attachEvents()}setState(t){this.state={...this.state,...t},this.update()}update(){this.render(),this.renderChildren(),this.attachEvents()}template(){return""}render(){const t=document.getElementById("root");t.innerHTML=this.template()}attachEvents(){this.children.forEach(t=>{t.attachEvents&&t.attachEvents()})}renderChildren(){this.children.forEach(t=>{t instanceof o&&t.render()})}}class l extends o{constructor(t={}){const{id:e="",text:a="",onClick:n=()=>{},children:i=[]}=t;super(t),this.id=e,this.text=a,this.onClick=n,this.children=i}template(){const t=this.children.map(e=>e.template()).join("");return`
      <button id="${this.id}">
        ${this.text}
        ${t}
      </button>
    `}attachEvents(){const t=document.getElementById(this.id);t&&typeof this.onClick=="function"&&t.addEventListener("click",this.onClick)}}class p extends o{constructor(t={}){const{title:e="",date:a="",children:n=[]}=t;super(t),this.title=e,this.date=a,this.children=n}template(){const t=this.children.map(e=>e.template()).join("");return`
      <div id="card">
        <h3>${this.title}</h3>
        <p>${this.date}</p>
        ${t}
      </div>
    `}}class u extends o{constructor(t={}){const{iconUrl:e="",temp:a="",temp_min:n="",temp_max:i="",description:s=""}=t;super(t),this.iconUrl=e,this.temp=a,this.temp_min=n,this.temp_max=i,this.description=s}template(){return`
      <div id="info">
        <div>
          <img src="${this.iconUrl}" alt="${this.description}"></img>
          <div id="temp">
            <div>
              <p>현재</p>
              <p>${this.temp}°C</p>
            </div>
            <div>
              <p>최저/최고</p>
              <p>${this.temp_min}°C / ${this.temp_max}°C</p>
            </div>
          </div>
        </div>
        <p>${this.description}</p>
      </div> 
    `}}const m="49149f2e43d63b1c6297a9bcd79db8a2";async function g(r="Seoul"){const t=`https://api.openweathermap.org/data/2.5/weather?q=${r}&appid=${m}&units=metric&lang=kr`;try{const e=await fetch(t);if(!e.ok)throw new Error("현재 날씨 API 호출 실패");const a=await e.json(),i=`http://openweathermap.org/img/wn/${a.weather[0].icon}.png`;return{...a,iconUrl:i}}catch(e){return console.error("현재 날씨 정보를 가져오는 중 오류 발생:",e),null}}async function y(r="Seoul"){const t=`https://api.openweathermap.org/data/2.5/forecast?q=${r}&appid=${m}&units=metric&lang=kr`;try{const e=await fetch(t);if(!e.ok)throw new Error("예보 API 호출 실패");return await e.json()}catch(e){return console.error("예보 정보를 가져오는 중 오류 발생:",e),null}}const v=r=>{const t=new Date(r*1e3),e={timeZone:"Asia/Seoul",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"},n=new Intl.DateTimeFormat("ko-KR",e).formatToParts(t),i={};return n.forEach(s=>{s.type!=="literal"&&(i[s.type]=s.value)}),`${i.year}년 ${i.month}월 ${i.day}일 ${i.hour}시 ${i.minute}분`};class f extends o{constructor(t={}){super({...t,initialState:{data:null}}),this.info=null,this.card=null,this.button=null,this.loadData()}async loadData(){try{const t=await g();this.setState({data:t})}catch(t){console.error("Error loading weather data:",t),this.setState({data:null})}}template(){var t,e,a,n,i,s,d,h;return console.log(this.state.data),this.state.data?(this.info=new u({iconUrl:`https://openweathermap.org/img/wn/${(e=(t=this.state.data)==null?void 0:t.weather[0])==null?void 0:e.icon}@2x.png`,temp:(a=this.state.data)==null?void 0:a.main.temp,temp_min:(n=this.state.data)==null?void 0:n.main.temp_min,temp_max:(i=this.state.data)==null?void 0:i.main.temp_max,description:(s=this.state.data)==null?void 0:s.weather[0].description,children:[]}),this.card=new p({title:(d=this.state.data)==null?void 0:d.name,date:v((h=this.state.data)==null?void 0:h.dt),children:[this.info]}),this.button=new l({id:"Seoul",onClick:()=>w("/detail"),children:[this.card]}),`
      <h1>홈 페이지</h1>
      ${this.button.template()}
    `):"<p>Loading...</p>"}attachEvents(){this.button&&this.button.attachEvents()}}class $ extends o{constructor(t={}){super({...t,initialState:{data:null}}),this.info=null,this.card=null,this.button=null,this.loadData()}async loadData(){try{const t=await y();this.setState({data:t})}catch(t){console.error("Error loading weather data:",t),this.setState({data:null})}}template(){var e;if(console.log(this.state.data),!this.state.data)return"<p>Loading...</p>";const t=(e=this.state.data)==null?void 0:e.list.map(a=>{var s;const i=`http://openweathermap.org/img/wn/${a.weather[0].icon}.png`;return this.info=new u({iconUrl:i,temp:a.main.temp,temp_min:a.main.temp_min,temp_max:a.main.temp_max,description:a.weather[0].description}),this.card=new p({title:(s=this.state.data)==null?void 0:s.city.name,date:a.dt_txt,children:[this.info]}),this.card.template()}).join("");return this.button=new l({id:"goHome",text:"홈으로",onClick:()=>w("/weather-forecast")}),`
      <h1>${this.state.data.city.name}</h1>
      ${this.button.template()}
      ${t}
    `}attachEvents(){this.button&&this.button.attachEvents()}}const E={"/":f,"/detail":$};function c(r){const t=document.getElementById("root"),e=E[r]||f,a=new e;t.innerHTML=a.render(),a.attachEvents()}function w(r){history.pushState({},"",r),c(r)}window.addEventListener("popstate",()=>{c(window.location.pathname)});window.onload=()=>{c(window.location.pathname||"/")};
