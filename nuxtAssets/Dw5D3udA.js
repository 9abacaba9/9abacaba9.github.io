import{_ as yt}from"./BqSKh5cC.js";import{d as gt,y as xt,z as pt,A as ut,D as mt,r as at,o as ht,E as ft,u as bt,n as nt,s as kt,G as vt,c as d,a as l,b as t,j as p,i as e,t as a,f as c,O as it,F as C,g as F,e as N,w as O,H as wt,W as m,Y as It,R as Dt}from"./BftIUcDm.js";import{a as St,D as $,M as j,b as E,f as Tt,c as Ct}from"./Bcq5nZh3.js";import{c as A}from"./9bzZCwMd.js";const Ft={class:"max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8"},$t={class:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-6"},Et={key:0,class:"flex justify-between items-center"},Rt={class:"flex flex-col"},Nt={class:"text-lg font-medium"},Ot={class:"text-lg font-medium mt-2"},At={class:"flex flex-col"},jt={class:"flex flex-col items-end font-bold"},Wt={key:0,class:"text-lg"},Mt={key:0},Yt={class:"text-gray-500 dark:text-gray-400"},Bt={key:1},Lt={class:"flex flex-col items-end font-bold"},Ht={key:0,class:"text-lg mt-2"},Gt={key:0},Vt={class:"text-gray-500 dark:text-gray-400"},Pt={key:1},Ut={class:"mt-3"},zt={class:"text-gray-500 dark:text-gray-400 text-sm"},Kt={key:0,class:"bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-6"},qt={class:"border-b border-gray-200 dark:border-gray-700"},Jt={class:"flex -mb-px"},Qt={class:"p-4"},Xt={class:"overflow-x-auto"},Zt={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-700"},te={class:"divide-y divide-gray-200 dark:divide-gray-700"},ee={class:"py-2"},se={class:"font-medium"},ae={class:"text-gray-600 dark:text-gray-400 max-w-xs text-sm"},ne={class:"py-2 px-1 text-right font-semibold align-top"},ie={class:"py-2 px-1 text-right align-top"},re={class:"py-2 px-1 text-right align-top"},oe={class:"py-2 px-1 text-right align-top"},de={class:"py-2 px-1 text-right align-top"},le={class:"flex flex-col gap-1"},ce={class:"text-sm font-medium text-gray-900 dark:text-gray-100 flex justify-between"},_e={class:"text-gray-600 dark:text-gray-400"},ye={class:"text-sm font-medium text-gray-900 dark:text-gray-100 flex justify-between"},ge={key:0},xe={class:"text-gray-600 dark:text-gray-400"},pe={class:"mt-6"},ue={key:0,class:"text-sm font-semibold text-gray-900 dark:text-white mb-2"},me={class:"text-sm text-gray-600 dark:text-gray-400"},he={class:"mt-6"},fe={class:"text-sm text-gray-600 dark:text-gray-400"},be={class:"mt-6"},ke={class:"flex flex-col gap-1 text-sm divide-y divide-gray-200 dark:divide-gray-700"},ve={class:"flex py-2 gap-1"},we={class:"basis-5/12 text-left"},Ie={class:"text-gray-600 dark:text-gray-400"},De={class:"basis-2/12 text-center font-semibold"},Se={class:"text-gray-600 dark:text-gray-400"},Te={class:"basis-5/12 text-right"},Ce={class:"text-gray-600 dark:text-gray-400"},Fe={class:"mt-6"},$e={class:"overflow-x-auto"},Ee={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-700"},Re={class:"divide-y divide-gray-200 dark:divide-gray-700"},Ne={class:"px-1 py-2 font-medium"},Oe={class:"px-1 py-2 text-right"},Ae={class:"px-1 py-2 text-right"},je={class:"px-1 py-2 text-right font-semibold"},We={class:"px-1 py-2 text-right"},Me={class:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mt-6 grid grid-cols-2 gap-2"},Ve=gt({__name:"scoreboard",setup(Ye){const rt=xt(),ot=pt(),W=ut("warn_unsaved",()=>!1),s=mt(new St(-1,-1,-1,[],[],!1,!1)),o=at(void 0),h=at(0),dt=A(async()=>{var x,R,b,k,v,w,I,D,S;if(h.value,!o.value)return[];let f=await $.player_batting_inning.where("inningID").equals(o.value.id).toArray(),i=[];for(let u of f){let g="not out";if(u.outOnBall!=-1){let n=await $.balls.get(u.outOnBall);if((n==null?void 0:n.wicket)==m.NONE)throw It.out_on_a_non_wicket_ball;(n==null?void 0:n.wicket)==m.BOWLED&&(g=`b ${(x=s.player_by_id(n.bowlerID))==null?void 0:x.name}`),((n==null?void 0:n.wicket)==m.CAUGHT||(n==null?void 0:n.wicket)==m.CAUGHT_AND_BATSMEN_CROSSED)&&(n.helperID==n.bowlerID?g=`c & b ${(R=s.player_by_id(n.bowlerID))==null?void 0:R.name}`:g=`c ${(b=s.player_by_id(n.helperID))==null?void 0:b.name} b ${(k=s.player_by_id(n.bowlerID))==null?void 0:k.name}`),(n==null?void 0:n.wicket)==m.LBW&&(g=`lbw b ${(v=s.player_by_id(n.bowlerID))==null?void 0:v.name}`),Dt.includes(n==null?void 0:n.wicket)&&(g=`run out (${(w=s.player_by_id(n==null?void 0:n.helperID))==null?void 0:w.name})`),(n==null?void 0:n.wicket)==m.STUMPED&&(g=`st ${(I=s.player_by_id(n.helperID))==null?void 0:I.name} b ${(D=s.player_by_id(n.bowlerID))==null?void 0:D.name}`),(n==null?void 0:n.wicket)==m.HIT_WICKET&&(g=`hit wicket b ${(S=s.player_by_id(n.bowlerID))==null?void 0:S.name}`)}i.push({...u,strikeRate:u.strikeRate,dismissal:g})}return i}),M=A(async()=>{if(h.value,!!o.value)return await Tt(o.value)}),lt=A(async()=>{if(h.value,!!o.value)return await Ct(o.value)}),ct=A(async()=>{if(h.value,!!o.value)return await $.player_bowling_inning.where({inningID:o.value.id}).toArray()});async function _t(){await wt("Warning","Are you sure you want to delete this match?")&&(W.value=!0,await nt(),await s.delete_self(),W.value=!1,ot.push("/"))}return ht(async()=>{var i,x;let f=await $.match.get(parseInt(rt.params.id));if(f===void 0)throw ft({fatal:!0,statusCode:404});Object.assign(s,f),await s.load_data($),s.SecondInning?(o.value=s.SecondInning,h.value++):s.FirstInning&&(o.value=s.FirstInning,h.value++),bt({title:`Scoreboard - ${(i=s.team1)==null?void 0:i.name} vs ${(x=s.team2)==null?void 0:x.name} - CRK2`}),await nt(),kt(!1)}),(f,i)=>{var b,k,v,w,I,D,S,u,g,n,Y,B,L,H,G,V,P,U,z,K,q,J,Q,X,Z,tt,et,st;const x=yt,R=vt("Button");return l(),d("div",Ft,[t("div",$t,[e(s)?(l(),d("div",Et,[t("div",Rt,[t("span",Nt,a((k=(b=e(s))==null?void 0:b.team1)==null?void 0:k.name),1),t("span",Ot,a((w=(v=e(s))==null?void 0:v.team2)==null?void 0:w.name),1)]),t("div",At,[t("div",jt,[((I=e(s))==null?void 0:I.Status)!=e(j).NOT_STARTED?(l(),d("span",Wt,[c(a((S=(D=e(s))==null?void 0:D.FirstInning)==null?void 0:S.runs),1),((g=(u=e(s))==null?void 0:u.FirstInning)==null?void 0:g.id_YetToBat.length)!=0||e(s).FirstInning.id_striker!=-1&&e(s).FirstInning.id_non_striker!=-1?(l(),d("span",Mt,"/"+a((Y=(n=e(s))==null?void 0:n.FirstInning)==null?void 0:Y.wickets),1)):p("",!0),i[2]||(i[2]=c("   ")),t("span",Yt,"("+a(e(E)((B=e(s))==null?void 0:B.FirstInning.balls))+")",1)])):(l(),d("span",Bt," "))]),t("div",Lt,[[e(j).SECOND_INNING,e(j).COMPLETED].includes((L=e(s))==null?void 0:L.Status)?(l(),d("span",Ht,[c(a((G=(H=e(s))==null?void 0:H.SecondInning)==null?void 0:G.runs),1),((P=(V=e(s))==null?void 0:V.SecondInning)==null?void 0:P.id_YetToBat.length)!=0||((U=e(s))==null?void 0:U.SecondInning.id_striker)!=-1&&((z=e(s))==null?void 0:z.SecondInning.id_non_striker)!=-1?(l(),d("span",Gt,"/"+a((q=(K=e(s))==null?void 0:K.SecondInning)==null?void 0:q.wickets),1)):p("",!0),i[3]||(i[3]=c("   ")),t("span",Vt,"("+a(e(E)((J=e(s))==null?void 0:J.SecondInning.balls))+")",1)])):(l(),d("span",Pt," "))])])])):p("",!0),t("div",Ut,[t("span",zt,a((Q=e(s))==null?void 0:Q.StatusMessage),1)])]),e(o)!=null?(l(),d("div",Kt,[t("div",qt,[t("nav",Jt,[(X=e(s))!=null&&X.FirstInning?(l(),d("button",{key:0,onClick:i[0]||(i[0]=r=>o.value=e(s).FirstInning),class:it(["px-4 py-4 text-sm font-medium whitespace-nowrap",[e(o)===e(s).FirstInning?"border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400":"text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"]])}," First Inning ",2)):p("",!0),(Z=e(s))!=null&&Z.SecondInning?(l(),d("button",{key:1,onClick:i[1]||(i[1]=r=>o.value=e(s).SecondInning),class:it(["px-4 py-4 text-sm font-medium whitespace-nowrap",[e(o)===e(s).SecondInning?"border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400":"text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"]])}," Second Inning ",2)):p("",!0)])]),t("div",Qt,[i[11]||(i[11]=t("h2",{class:"text-lg font-semibold text-gray-900 dark:text-white mb-4"},"Batting",-1)),t("div",Xt,[t("table",Zt,[i[4]||(i[4]=t("thead",null,[t("tr",{class:"text-left text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider"},[t("th",{class:"py-2"},"Batter"),t("th",{class:"py-2 px-1 text-right"},"R"),t("th",{class:"py-2 px-1 text-right"},"B"),t("th",{class:"py-2 px-1 text-right"},"4s"),t("th",{class:"py-2 px-1 text-right"},"6s"),t("th",{class:"py-2 px-1 text-right"},"SR")])],-1)),t("tbody",te,[(l(!0),d(C,null,F(e(dt),r=>{var y,_;return l(),d("tr",{key:r.id,class:"text-sm text-gray-900 dark:text-gray-100"},[t("td",ee,[t("div",se,a((_=(y=e(s))==null?void 0:y.player_by_id(r.playerID))==null?void 0:_.name),1),t("div",ae,a(r.dismissal),1)]),t("td",ne,a(r.runs),1),t("td",ie,a(r.balls),1),t("td",re,a(r.fours),1),t("td",oe,a(r.sixes),1),t("td",de,a(r.strikeRate),1)])}),128))])]),t("div",le,[t("div",ce,[i[5]||(i[5]=t("span",{class:"mr-4"},"Extras",-1)),t("span",null,[c(a(e(o).extras)+" ",1),t("span",_e," (b "+a(e(o).byes)+", lb "+a(e(o).leg_byes)+", w "+a(e(o).wides)+", nb "+a(e(o).no_balls)+") ",1)])]),t("div",ye,[i[6]||(i[6]=t("span",{class:"mr-4"},"Total",-1)),t("span",null,[c(a(e(o).runs),1),e(o).id_YetToBat.length!=0||e(o).id_striker!=-1&&e(o).id_non_striker!=-1?(l(),d("span",ge,"/"+a(e(o).wickets),1)):p("",!0),t("span",xe," ("+a(e(E)(e(o).balls))+" Overs, RR: "+a(e(o).run_rate)+") ",1)])])])]),t("div",pe,[e(o).id_YetToBat.length>0?(l(),d("h3",ue,"Yet To Bat")):p("",!0),t("p",me,[(l(!0),d(C,null,F(e(o).id_YetToBat,(r,y)=>{var _;return l(),d("span",{key:y},a((_=e(s).player_by_id(r))==null?void 0:_.name)+a(y+1!=e(o).id_YetToBat.length?", ":""),1)}),128))])]),t("div",he,[i[7]||(i[7]=t("h3",{class:"text-sm font-semibold text-gray-900 dark:text-white mb-2"},"Fall of Wickets",-1)),t("p",fe,[(l(!0),d(C,null,F(e(M),(r,y)=>{var _,T;return l(),d("span",{key:y},a(r.runs)+"-"+a(r.wickets)+" ("+a((_=e(s).player_by_id(r.playerID))==null?void 0:_.name)+", "+a(e(E)(r.balls))+")"+a(y+1!=((T=e(M))==null?void 0:T.length)?", ":""),1)}),128))])]),t("div",be,[i[8]||(i[8]=t("h3",{class:"text-sm font-semibold text-gray-900 dark:text-white mb-2"},"Partnerships",-1)),t("div",ke,[(l(!0),d(C,null,F(e(lt),(r,y)=>{var _,T;return l(),d("div",{key:y},[t("div",ve,[t("div",we,[t("span",null,[c(a(r.player1.runs),1),t("span",Ie,"("+a(r.player1.balls)+")",1)]),c(" "+a((_=e(s).player_by_id(r.player1.id))==null?void 0:_.name),1)]),t("div",De,[c(a(r.runs),1),t("span",Se," ("+a(r.balls)+")",1)]),t("div",Te,[t("span",null,[c(a(r.player2.runs),1),t("span",Ce,"("+a(r.player2.balls)+")",1)]),c(" "+a((T=e(s).player_by_id(r.player2.id))==null?void 0:T.name),1)])])])}),128))])]),t("div",Fe,[i[10]||(i[10]=t("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white mb-4"},"Bowling",-1)),t("div",$e,[t("table",Ee,[i[9]||(i[9]=t("thead",null,[t("tr",{class:"text-left text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider"},[t("th",{class:"px-1 py-2"},"Bowler"),t("th",{class:"px-1 py-2 text-right"},"O"),t("th",{class:"px-1 py-2 text-right"},"R"),t("th",{class:"px-1 py-2 text-right"},"W"),t("th",{class:"px-1 py-2 text-right"},"Econ")])],-1)),t("tbody",Re,[(l(!0),d(C,null,F(e(ct),(r,y)=>{var _;return l(),d("tr",{key:y,class:"text-sm text-gray-900 dark:text-gray-100"},[t("td",Ne,a((_=e(s).player_by_id(r.playerID))==null?void 0:_.name),1),t("td",Oe,a(e(E)(r.balls)),1),t("td",Ae,a(r.runs),1),t("td",je,a(r.wickets),1),t("td",We,a(r.economy),1)])}),128))])])])])])])):p("",!0),t("div",Me,[N(x,{to:`/match/${(tt=e(s))==null?void 0:tt.id}`,class:"flex items-center bg-pink-500 dark:bg-pink-600 text-white font-bold py-2 px-4 rounded w-full justify-center"},{default:O(()=>i[12]||(i[12]=[c("Controls")])),_:1},8,["to"]),N(x,{to:`/match/${(et=e(s))==null?void 0:et.id}/timeline`,class:"flex items-center bg-indigo-500 dark:bg-indigo-600 text-white font-bold py-2 px-4 rounded w-full justify-center"},{default:O(()=>i[13]||(i[13]=[c("Timeline")])),_:1},8,["to"]),N(x,{to:`/match/${(st=e(s))==null?void 0:st.id}/charts`,class:"flex items-center bg-yellow-400 dark:bg-yellow-500 text-white font-bold py-2 px-4 rounded w-full justify-center"},{default:O(()=>i[14]||(i[14]=[c("Charts")])),_:1},8,["to"]),N(R,{class:"flex items-center bg-red-500 dark:bg-red-600 text-white font-bold py-2 px-4 rounded w-full justify-center",onClick:_t},{default:O(()=>i[15]||(i[15]=[c("Delete")])),_:1})])])}}});export{Ve as default};
