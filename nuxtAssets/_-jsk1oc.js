import{d as G,c as l,i as s,W as H,a as t,f as a,j as n,t as o,I as D,J as F,b as d}from"./BftIUcDm.js";const J={key:0,class:"rounded border border-red-500 dark:border-red-600 bg-red-500 dark:bg-red-600 select-none h-7 px-1 flex items-center text-white"},L={key:0},R={key:1,class:"rounded border border-yellow-400 dark:border-yellow-500 bg-yellow-400 dark:bg-yellow-500 select-none h-7 px-1 flex items-center text-white"},U={key:0},X={key:2,class:"rounded border border-yellow-400 dark:border-yellow-500 bg-yellow-400 dark:bg-yellow-500 select-none h-7 px-1 flex items-center text-white"},q={key:0},z={key:3,class:"rounded border border-gray-800 dark:border-white select-none h-7 px-1 flex items-center"},A={key:0},K={key:4,class:"rounded border border-gray-800 dark:border-white select-none h-7 px-1 flex items-center"},M={key:0},P={key:5,class:"relative rounded-full border border-blue-600 text-blue-600 h-7 w-7 select-none"},Q={class:"absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"},Y={key:6,class:"relative rounded-full border border-blue-600 bg-blue-600 text-white h-7 w-7 select-none"},Z={class:"absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"},$={key:7,class:"relative rounded-full border h-7 w-7 select-none border-gray-800 dark:border-white"},x={class:"absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"},te=G({__name:"timelineBall",props:{ball:{}},setup(ee){return(e,r)=>{var b,i,u,y,p,_,k,h,w,f,m,g,v,c,N,B,E,T,O,V,W,C,I,S,j;return((b=e.ball)==null?void 0:b.wicket)!=s(H).NONE?(t(),l("div",J,[r[0]||(r[0]=a(" W")),(i=e.ball)!=null&&i.total_runs&&((u=e.ball)==null?void 0:u.total_runs)>0?(t(),l("span",L,o((y=e.ball)==null?void 0:y.total_runs),1)):n("",!0)])):(p=e.ball)!=null&&p.no_ball?(t(),l("div",R,[r[1]||(r[1]=a(" nb")),(_=e.ball)!=null&&_.total_runs&&((k=e.ball)==null?void 0:k.total_runs)>0?(t(),l("span",U,o((h=e.ball)==null?void 0:h.total_runs),1)):n("",!0)])):(w=e.ball)!=null&&w.wide?(t(),l("div",X,[r[2]||(r[2]=a(" wd")),(f=e.ball)!=null&&f.total_runs&&((m=e.ball)==null?void 0:m.total_runs)>0?(t(),l("span",q,o((g=e.ball)==null?void 0:g.total_runs),1)):n("",!0)])):((v=e.ball)==null?void 0:v.hit_by)==s(D).NONE?(t(),l("div",z,[r[3]||(r[3]=a(" b")),(c=e.ball)!=null&&c.total_runs&&((N=e.ball)==null?void 0:N.total_runs)>0?(t(),l("span",A,o((B=e.ball)==null?void 0:B.total_runs),1)):n("",!0)])):((E=e.ball)==null?void 0:E.hit_by)==s(D).LEG?(t(),l("div",K,[r[4]||(r[4]=a(" lb")),(T=e.ball)!=null&&T.total_runs&&((O=e.ball)==null?void 0:O.total_runs)>0?(t(),l("span",M,o((V=e.ball)==null?void 0:V.total_runs),1)):n("",!0)])):((W=e.ball)==null?void 0:W.boundary)==s(F).FOUR?(t(),l("div",P,[d("span",Q,o((C=e.ball)==null?void 0:C.total_runs),1)])):((I=e.ball)==null?void 0:I.boundary)==s(F).SIX?(t(),l("div",Y,[d("span",Z,o((S=e.ball)==null?void 0:S.total_runs),1)])):(t(),l("div",$,[d("span",x,o((j=e.ball)==null?void 0:j.runs_by_running),1)]))}}});export{te as _};
