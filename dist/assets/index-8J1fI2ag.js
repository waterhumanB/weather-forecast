(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();class s{constructor(t=[]){this.children=t}render(){return""}attachEvent(){this.children.forEach(t=>{t.attachEvent&&t.attachEvent()})}}class d extends s{constructor(t,e,o,n=[]){super(n),this.id=t,this.text=e,this.onClick=o}render(){const t=this.children.map(e=>e.render()).join("");return`
      <button id="${this.id}" onclick="${this.onClick}">
        ${this.text}
        ${t}
      </button>
    `}attachEvent(){const t=document.getElementById(this.id);t&&typeof this.onClick=="function"&&t.addEventListener("click",this.onClick),super.attachEvent()}}class h extends s{constructor(t,e,o=[]){super(o),this.title=t,this.date=e}render(){const t=this.children.map(e=>e.render()).join("");return`
      <div id="card">
        <h3>${this.title}</h3>
        <p>${this.date}</p>
        ${t}
      </div>
    `}}class p{constructor(t,e,o,n,r){this.iconUrl=t,this.temp=e,this.temp_min=o,this.temp_max=n,this.description=r}render(){return`
      <div id="info">
          <div>
            <img src=${this.iconUrl} alt="${this.description}"></img>
            <div id="temp">
              <div>
                <p>현재</p>
                <p>${this.temp}</p>
              </div>
              <div>
                <p>최저/최고</p>
                <p>${this.temp_min}°C / ${this.temp_max}°C</p>
              </div>
            </div>
          </div>
          <p>${this.description}</p>
        </div> 
    `}}const u="49149f2e43d63b1c6297a9bcd79db8a2";async function f(i="Seoul"){const t=`https://api.openweathermap.org/data/2.5/weather?q=${i}&appid=${u}&units=metric&lang=kr`;try{const e=await fetch(t);if(!e.ok)throw new Error("현재 날씨 API 호출 실패");const o=await e.json(),r=`http://openweathermap.org/img/wn/${o.weather[0].icon}.png`;return{...o,iconUrl:r}}catch(e){return console.error("현재 날씨 정보를 가져오는 중 오류 발생:",e),null}}async function w(i="Seoul"){const t=`https://api.openweathermap.org/data/2.5/forecast?q=${i}&appid=${u}&units=metric&lang=kr`;try{const e=await fetch(t);if(!e.ok)throw new Error("예보 API 호출 실패");return await e.json()}catch(e){return console.error("예보 정보를 가져오는 중 오류 발생:",e),null}}const g=new Date,y=new Intl.DateTimeFormat("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),v=y.format(g),$=v.replace(/\s/g,"").split(/[\.,:]/),[E,b,C,L,x]=$,I=`${E}년 ${b}월 ${C}일 ${L}시 ${x}분`;class l extends s{constructor(){super(),this.data=null,this.loadData()}setState(t){this.data=t,this.update()}async loadData(){try{const t=await f();this.setState(t)}catch(t){console.error("Error loading weather data:",t)}}update(){const t=document.getElementById("root");t.innerHTML=this.render(),this.attachEvent()}render(){if(!this.data)return"<p>Loading...</p>";const t=new p(this.data.iconUrl,this.data.main.temp,this.data.main.temp_min,this.data.main.temp_max,this.data.weather[0].description),e=new h(this.data.name,I,[t]);return this.button=new d(this.data.name,"",()=>m("/detail"),[e]),`
      <h1>홈 페이지</h1>
      ${this.button.render()}
    `}attachEvent(){this.button&&this.button.attachEvent()}}class D extends s{constructor(){super(),this.data=null,this.loadData()}setState(t){this.data=t,this.update()}async loadData(){try{const t=await w();this.setState(t)}catch(t){console.error("Error loading weather data:",t)}}update(){const t=document.getElementById("root");t.innerHTML=this.render(),this.button&&this.button.attachEvent()}render(){if(!this.data)return"<p>Loading...</p>";const t=this.data.list.map(e=>{const n=`http://openweathermap.org/img/wn/${e.weather[0].icon}.png`,r=new p(n,e.main.temp,e.main.temp_min,e.main.temp_max,e.weather[0].description);return new h(this.data.city.name,e.dt_txt,[r]).render()}).join("");return this.button=new d("goHome","홈으로",()=>m("/"),[]),`
      <h1>${this.data.city.name}</h1>
      ${this.button.render()}
      ${t}
    `}attachEvent(){this.button&&this.button.attachEvent()}}const _={"/":l,"/detail":D};function c(i){const t=document.getElementById("root"),e=_[i]||l,o=new e;t.innerHTML=o.render(),o.attachEvent()}function m(i){history.pushState({},"",i),c(i)}window.addEventListener("popstate",()=>{c(window.location.pathname)});window.onload=()=>{c(window.location.pathname||"/")};
