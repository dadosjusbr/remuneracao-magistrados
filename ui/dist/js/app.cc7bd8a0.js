(function(t){function e(e){for(var a,n,u=e[0],i=e[1],d=e[2],l=0,b=[];l<u.length;l++)n=u[l],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&b.push(s[n][0]),s[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);c&&c(e);while(b.length)b.shift()();return r.push.apply(r,d||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],a=!0,u=1;u<o.length;u++){var i=o[u];0!==s[i]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=o[0]))}return t}var a={},s={app:0},r=[];function n(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=a,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/novo/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var c=i;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"01ae":function(t,e,o){"use strict";var a=o("d946"),s=o.n(a);s.a},"02d5":function(t,e,o){t.exports=o.p+"img/logo_ufcg.f13d0d17.png"},"0c23":function(t,e,o){},"0d7e":function(t,e,o){},"0f95":function(t,e,o){t.exports=o.p+"img/logo_analytics.53130990.png"},"2c73":function(t,e,o){},"36df":function(t,e,o){"use strict";var a=o("0c23"),s=o.n(a);s.a},"3f69":function(t,e,o){},"49c5":function(t,e,o){"use strict";var a=o("c932"),s=o.n(a);s.a},"4c4b":function(t,e,o){"use strict";var a=o("0d7e"),s=o.n(a);s.a},"4d32":function(t,e,o){},"4ec4":function(t,e,o){"use strict";var a=o("6325"),s=o.n(a);s.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("nav-bar"),t._m(0),o("router-view"),o("page-footer")],1)},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"divisoria-colorida"},[o("div",{staticClass:"cor-1"}),o("div",{staticClass:"cor-2"}),o("div",{staticClass:"cor-3"}),o("div",{staticClass:"cor-4"}),o("div",{staticClass:"cor-5"})])}],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"logo"},[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"active",attrs:{src:o("cf05")}})])],1),a("div",{staticClass:"navMenus"},[a("router-link",{attrs:{to:"/"}},[a("a",{staticClass:"i"},[t._v(" Início ")])]),a("router-link",{attrs:{to:"/sobre"}},[a("a",[t._v(" Sobre ")])]),a("router-link",{attrs:{to:"/contato"}},[a("a",[t._v(" Contato ")])])],1)])},u=[],i={name:"navBar"},d=i,c=(o("dc9c"),o("2877")),l=Object(c["a"])(d,n,u,!1,null,"33a2e4aa",null),b=l.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"logoContainer"},[a("img",{attrs:{src:o("87a7")}})])])}],h={name:"pageFooter"},p=h,j=(o("b060"),Object(c["a"])(p,x,f,!1,null,"32ef4b5c",null)),m=j.exports,q={components:{navBar:b,pageFooter:m}},g=q,v=Object(c["a"])(g,s,r,!1,null,null,null),y=v.exports,_=o("8c4f"),C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("state-page-container")],1)},M=[],O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"header"},[o("h1",{staticClass:"stateName text-left"},[t._v(t._s(this.stateName))]),o("img",{staticClass:"image rounded float-left",attrs:{src:this.flagUrl}})]),o("entity",{attrs:{entityName:"Ministério Público",agencies:t.mAgencies}}),o("entity",{attrs:{entityName:"Judiciário",agencies:t.jAgencies}})],1)},w=[],A=(o("4160"),o("159b"),o("96cf"),o("1da1")),Y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"entity"},[o("h1",{staticClass:"entityName"},[t._v(t._s(this.entityName))]),t._l(t.agencies,(function(t,e){return o("agency",{key:e,attrs:{agencyName:t}})}))],2)},N=[],k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"agencyContainer"},[o("h2",{staticClass:"agencyName"},[o("router-link",{attrs:{to:{name:"agency",params:{agencyName:this.agencyName.toLowerCase()}}}},[t._v(" "+t._s(this.agencyName.toUpperCase())+" ")])],1),o("div",{staticClass:"buttonContainer"},[t.checkPreviousYear?o("button",{staticClass:"button btn btn-dark",on:{click:function(e){return t.previousYear()}}},[t._v(" < ")]):o("button",{staticClass:"deactivatedButton"},[t._v("<")]),o("a",{staticClass:"year"},[t._v(" "+t._s(this.currentYear)+" ")]),t.checkNextYear?o("button",{staticClass:"button btn btn-dark",on:{click:function(e){return t.nextYear()}}},[t._v(" > ")]):o("button",{staticClass:"deactivatedButton"},[t._v(">")])]),o("bar-graph",{attrs:{options:t.chartOptions,series:t.series}})],1)},$=[],E=(o("caad"),o("d81d"),o("b680"),o("2532"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"graphContainer"},[o("apexcharts",{attrs:{width:"100%",height:"400",type:"bar",options:t.options,series:t.series}})],1)}),S=[],P=o("1321"),D=o.n(P),T={name:"barGraph",components:{apexcharts:D.a},props:{options:{type:Object,default:null},series:{type:Array,default:null}}},R=T,F=(o("d791"),Object(c["a"])(R,E,S,!1,null,"558bafbd",null)),B=F.exports,W={name:"agency",components:{barGraph:B},props:{agencyName:{type:String,default:""}},data:function(){return{currentYear:(new Date).getFullYear(),data:{},series:[],chartOptions:{colors:["#991040","#F9CD30","#00AEEF"],chart:{stacked:!0,toolbar:{show:!1},zoom:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1}},yaxis:{decimalsInFloat:2,labels:{show:!0,minWidth:0,maxWidth:160,style:{colors:[],fontSize:"16px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:600,cssClass:"apexcharts-yaxis-label"},formatter:function(t){return"R$ "+(t/1e6).toFixed(1)+"M"}}},xaxis:{categories:["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]},legend:{position:"right",offsetY:120},fill:{opacity:1},dataLabels:{enabled:!1}}}},computed:{checkNextYear:function(){return!(this.currentYear>=(new Date).getFullYear())},checkPreviousYear:function(){return!(this.currentYear<=2018)}},methods:{fetchData:function(){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/orgao/totais/PB/"+t.agencyName+"/"+t.currentYear);case 2:o=e.sent;case 3:if(null!=o.data.MonthTotals){e.next=10;break}return t.currentYear-=1,e.next=7,t.$http.get("/orgao/totais/PB/"+t.agencyName+"/"+t.currentYear);case 7:o=e.sent,e.next=3;break;case 10:t.data=o.data,t.generateSeries();case 12:case"end":return e.stop()}}),e)})))()},generateSeries:function(){12!=this.data.MonthTotals.length&&this.addMonthsWithNoValue();var t=this.data.MonthTotals.map((function(t){return t["Others"]})),e=this.data.MonthTotals.map((function(t){return t["Wage"]})),o=this.data.MonthTotals.map((function(t){return t["Perks"]}));this.series=[{name:"Outros",data:t},{name:"Indenizações",data:o},{name:"Remunerações",data:e}]},addMonthsWithNoValue:function(){var t=new Array;this.data.MonthTotals.forEach((function(e){t.push(e.Month)}));for(var e=1;e<=12;e++)t.includes(e)||this.data.MonthTotals.push({Month:e,Others:0,Perks:0,Wage:0});this.data.MonthTotals.sort((function(t,e){return t.Month-e.Month}))},nextYear:function(){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.currentYear=t.currentYear+1,e.next=3,t.$http.get("/orgao/totais/PB/"+t.agencyName+"/"+t.currentYear);case 3:o=e.sent,null==o.data.MonthTotals?(alert("Não existem dados disponíveis para o ano: "+t.currentYear),t.currentYear=t.currentYear-1):(t.data=o.data,t.generateSeries());case 5:case"end":return e.stop()}}),e)})))()},previousYear:function(){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.currentYear=t.currentYear-1,e.next=3,t.$http.get("/orgao/totais/PB/"+t.agencyName+"/"+t.currentYear);case 3:o=e.sent,null==o.data.MonthTotals?(alert("Não existem dados disponíveis para o ano: "+t.currentYear),t.currentYear=t.currentYear+1):(t.data=o.data,t.generateSeries());case 5:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.fetchData();case 1:case"end":return e.stop()}}),e)})))()}},J=W,I=(o("ec4f"),Object(c["a"])(J,k,$,!1,null,"4bda1e26",null)),U=I.exports,z={name:"entity",components:{agency:U},props:{entityName:{type:String,default:""},agencies:{type:Array,default:function(){return[]}}}},L=z,V=(o("4c4b"),Object(c["a"])(L,Y,N,!1,null,"099b1a4f",null)),G=V.exports,H={name:"statePageContainer",components:{entity:G},data:function(){return{flagUrl:"https://1.bp.blogspot.com/-422XO8VbnkM/WFwr1v6yeoI/AAAAAAACRBM/0wtdW0JfArwQQMucxHxRrLSoHTsy7_6OwCEw/s1600/paraibano%2B2%2Bbandeira.png",stateName:"Paraíba",stateData:{},jAgencies:[],mAgencies:[]}},methods:{fetchData:function(){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){var o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/orgao/PB");case 2:o=e.sent,a=o.data,t.stateData=a,t.setjAgencies(a),t.setmAgencies(a);case 7:case"end":return e.stop()}}),e)})))()},setjAgencies:function(t){var e=[];t!=={}&&t.Agency.forEach((function(t){"J"==t.AgencyCategory&&e.push(t.Name)})),this.jAgencies=e},setmAgencies:function(t){var e=[];t!=={}&&t.Agency.forEach((function(t){"M"==t.AgencyCategory&&e.push(t.Name)})),this.mAgencies=e}},mounted:function(){this.fetchData()}},Q=H,X=(o("e141"),Object(c["a"])(Q,O,w,!1,null,"6adfa2d1",null)),Z=X.exports,K={components:{statePageContainer:Z}},tt=K,et=(o("6228"),Object(c["a"])(tt,C,M,!1,null,null,null)),ot=et.exports,at=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"agencyContainer"},[o("div",{staticClass:"agencyNameContainer"},[o("h1",{staticClass:"agencyName"},[t._v(t._s(t.agencyName.toUpperCase()))])]),o("agency-summary",{attrs:{agencySummary:t.agencySummary}}),o("graph-container")],1)},st=[],rt=(o("b65f"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cards"},t._l(t.agencySummary,(function(t,e,a){return o("info-card",{key:a,attrs:{info:{value:t,name:e}}})})),1)}),nt=[],ut=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("h2",{staticClass:"score"},[t._v(" "+t._s(t.info.value)+" "),o("p",{staticClass:"text"},[t._v(t._s(t.info.name.replace("_"," ")))])])])},it=[],dt={name:"infoCard",props:{info:{type:Object,default:null}}},ct=dt,lt=(o("df90"),Object(c["a"])(ct,ut,it,!1,null,"6b148aa9",null)),bt=lt.exports,xt={name:"agencySummary",components:{infoCard:bt},props:{agencySummary:{type:Object,default:null}}},ft=xt,ht=(o("f7e7"),Object(c["a"])(ft,rt,nt,!1,null,null,null)),pt=ht.exports,jt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"graphContainer"},[o("div",{staticClass:"buttonContainer"},[o("button",{staticClass:"button btn btn-dark",on:{click:function(e){return t.previousMonth()}}},[t._v(" ‹ ")]),o("a",[t._v(" "+t._s(this.months[this.currentMonthAndYear.month])+" ")]),o("button",{staticClass:"button btn btn-dark",on:{click:function(e){return t.nextMonth()}}},[t._v(" › ")])]),o("graph-point",{attrs:{width:"100%",type:"scatter",options:t.chartOptions,series:t.series}})],1)},mt=[],qt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"graph"},[o("apexcharts",{attrs:{width:"99%",height:"500",type:"scatter",options:t.options,series:t.series}})],1)},gt=[],vt={name:"graphPoint",components:{apexcharts:D.a},props:{options:{type:Object,default:null},series:{type:Array,default:null}}},yt=vt,_t=(o("8b41"),Object(c["a"])(yt,qt,gt,!1,null,null,null)),Ct=_t.exports,Mt={name:"graphContainer",components:{graphPoint:Ct},data:function(){return{agencyName:this.$route.params.agencyName,months:{1:"Janeiro",2:"Fevereiro",3:"Março",4:"Abril",5:"Maio",6:"Junho",7:"Julho",8:"Agosto",9:"Setembro",10:"Outubro",11:"Novembro",12:"Dezembro"},salaryData:[],currentMonthAndYear:{year:2019,month:1},chartOptions:{tooltip:{custom:function(t){var e=t.series,o=t.seriesIndex,a=t.dataPointIndex;return'<div class="arrow_box"><span>'+e[o][a]+"</span></div>"},colors:["#00AEEF"]}}}},methods:{nextMonth:function(){var t,e,o=this;12===this.currentMonthAndYear.month?(t=this.currentMonthAndYear.year+1,e=1):(t=this.currentMonthAndYear,e=this.currentMonthAndYear.month+1),this.currentMonthAndYear={year:t,month:e},this.$http.get("/orgao/salario/"+this.agencyName+"/"+t+"/"+e).then((function(t){return o.salaryData=t.data}))},previousMonth:function(){var t,e,o=this;1===this.currentMonthAndYear.month?(t=this.currentMonthAndYear.year-1,e=12):(t=this.currentMonthAndYear.year,e=this.currentMonthAndYear.month-1),this.currentMonthAndYear={year:t,month:e},this.$http.get("/orgao/salario/"+this.agencyName+"/"+t+"/"+e).then((function(t){return o.salaryData=t.data}))}},computed:{series:function(){var t=this.salaryData.map((function(t,e){return[t["Total"],e+1]}));return[{name:"total",data:t}]},names:function(){return this.salaryData.map((function(t){return t["Name"]}))},wages:function(){return this.salaryData.map((function(t){return t["Wage"]}))},others:function(){return this.salaryData.map((function(t){return t["Others"]}))},perks:function(){return this.salaryData.map((function(t){return t["Perks"]}))}},mounted:function(){var t=this;this.$http.get("/orgao/salario/"+this.agencyName+"/"+this.currentMonthAndYear.year+"/"+this.currentMonthAndYear.month).then((function(e){return t.salaryData=e.data}))}},Ot=Mt,wt=(o("36df"),Object(c["a"])(Ot,jt,mt,!1,null,"1ebdac03",null)),At=wt.exports,Yt=new Intl.NumberFormat("de-DE"),Nt={name:"agencyPageContainer",components:{agencySummary:pt,graphContainer:At},data:function(){return{agencyName:this.$route.params.agencyName,agencySummary:null}},methods:{fetchData:function(){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){var o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/orgao/resumo/"+t.agencyName);case 2:o=e.sent,a=o.data,t.agencySummary={Total_Empregados:Yt.format(Math.trunc(a.TotalEmployees)),"Total_Salários":"R$ "+Yt.format(a.TotalWage.toFixed(2)),"Total_Indenizações":"R$ "+Yt.format(a.TotalPerks.toFixed(2)),"Salário_Máximo":"R$ "+Yt.format(a.MaxWage.toFixed(2))};case 5:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.fetchData()}},kt=Nt,$t=(o("01ae"),Object(c["a"])(kt,at,st,!1,null,"38690706",null)),Et=$t.exports,St=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aboutContainer"},[a("p",[t._v(" textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjusdadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjusdadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjusdadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjusdadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjus textão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão aqui sobre o dadosjustextão ")]),a("div",{staticClass:"logoContainer"},[a("img",{staticClass:"img1",attrs:{src:o("02d5")}}),a("img",{staticClass:"img3",attrs:{src:o("d3f8")}}),a("img",{staticClass:"img2",attrs:{src:o("0f95")}})])])}],Dt={name:"about"},Tt=Dt,Rt=(o("4ec4"),Object(c["a"])(Tt,St,Pt,!1,null,"b6ee848e",null)),Ft=Rt.exports,Bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Wt=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"aboutContainer"},[o("p",[t._v("textão aqui sobre o contato")])])}],Jt={name:"contact"},It=Jt,Ut=(o("49c5"),Object(c["a"])(It,Bt,Wt,!1,null,"dee939d6",null)),zt=Ut.exports;a["a"].use(_["a"]);var Lt=[{path:"/",name:"home",component:ot},{path:"/orgao/:agencyName",name:"agency",component:Et},{path:"/sobre",name:"sobre",component:Ft},{path:"/contato",name:"contato",component:zt}],Vt=new _["a"]({routes:Lt}),Gt=Vt,Ht=o("2f62");a["a"].use(Ht["a"]);var Qt=new Ht["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Xt=o("bc3a"),Zt=o.n(Xt);o("ab8b");a["a"].config.productionTip=!1;var Kt=Zt.a.create({baseURL:"https://dadosjusbr.org/uiapi/v1"});a["a"].prototype.$http=Kt,new a["a"]({router:Gt,store:Qt,render:function(t){return t(y)}}).$mount("#app")},6228:function(t,e,o){"use strict";var a=o("f51f"),s=o.n(a);s.a},6325:function(t,e,o){},"87a7":function(t,e,o){t.exports=o.p+"img/white_logo.16edf55b.png"},"87db":function(t,e,o){},"8b41":function(t,e,o){"use strict";var a=o("2c73"),s=o.n(a);s.a},b060:function(t,e,o){"use strict";var a=o("e500"),s=o.n(a);s.a},b3e2:function(t,e,o){},c932:function(t,e,o){},ce27:function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.57fcf432.png"},d26b:function(t,e,o){},d3f8:function(t,e,o){t.exports=o.p+"img/logo_mppb.ed1760a3.png"},d791:function(t,e,o){"use strict";var a=o("4d32"),s=o.n(a);s.a},d946:function(t,e,o){},dc9c:function(t,e,o){"use strict";var a=o("b3e2"),s=o.n(a);s.a},df90:function(t,e,o){"use strict";var a=o("ce27"),s=o.n(a);s.a},e141:function(t,e,o){"use strict";var a=o("d26b"),s=o.n(a);s.a},e500:function(t,e,o){},ec4f:function(t,e,o){"use strict";var a=o("87db"),s=o.n(a);s.a},f51f:function(t,e,o){},f7e7:function(t,e,o){"use strict";var a=o("3f69"),s=o.n(a);s.a}});