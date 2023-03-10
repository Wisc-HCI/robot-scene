import{r as E}from"./index.7f7b9823.js";import{S as R,c as A,i as H,s as q,b as d,E as T,a as L,M as Q,Q as y,d as j,V as _,l as b,e as $}from"./ErrorFallback.4b00d79e.js";import{j as c,a as V}from"./client.c582ae78.js";import"./_commonjsHelpers.712cc82f.js";import"./inheritsLoose.b8ebfe26.js";const Z={title:"More Controls",component:R},D=(a,l,s)=>({...$(a,l),scalarValue:1,rangeValue:[.5,1.5],range:[0,2],setScalarValue:n=>a({scalarValue:n}),setRangeValue:n=>a({rangeValue:n}),setRange:n=>a({range:n}),onMove:(n,r,u,o)=>a(e=>{if(["scalarInputIndicator","bottomRangeInputIndicator","topRangeInputIndicator"].includes(n)){const t=b.exports.clamp((10*o.position.z+.5)*(e.range[1]-e.range[0])+e.range[0],e.range[0],e.range[1]);n==="scalarInputIndicator"?(e.scalarValue=t,e.items[n].position.z=(t-e.range[0])/(e.range[1]-e.range[0])*.1-.05,e.texts.inputText.value=Math.round(t*100)/100):(console.log("handling range"),n=="bottomRangeInputIndicator"&&e.range[1]>=t?e.rangeValue[0]=t:n=="bottomRangeInputIndicator"&&e.range[1]<t?(e.rangeValue[0]=e.rangeValue[1],e.rangeValue[1]=t):n=="topRangeInputIndicator"&&e.range[0]<=t?e.rangeValue[1]=t:n=="topRangeInputIndicator"&&e.range[0]>t&&(e.rangeValue[1]=e.rangeValue[0],e.rangeValue[0]=t),e.items.topRangeInputIndicator.position.z=(e.rangeValue[1]-e.range[0])/(e.range[1]-e.range[0])*.1-.05,e.items.bottomRangeInputIndicator.position.z=(e.rangeValue[0]-e.range[0])/(e.range[1]-e.range[0])*.1-.05,e.items.rangeInputRange.position={x:0,y:.05,z:(e.items.topRangeInputIndicator.position.z+e.items.bottomRangeInputIndicator.position.z)/2},e.items.rangeInputRange.shapeParams.height=(e.rangeValue[1]-e.rangeValue[0])/(e.range[1]-e.range[0])*.09,e.texts.inputRangeText.value=`${Math.round(e.rangeValue[0]*100)/100}, ${Math.round(e.rangeValue[1]*100)/100}`)}else e[r][n].position={...o.position},e[r][n].rotation=o.quaternion,e[r][n].rotation.x=o.quaternion.x,e[r][n].rotation.y=o.quaternion.y,e[r][n].rotation.z=o.quaternion.z,e[r][n].rotation.w=o.quaternion.w,e[r][n].scale={...o.scale}})}),h=A(H(q(D))),G=a=>{const{tfs:l,lines:s,texts:n,points:r,angle:u,length:o,rangeInputVal:e,scalarInputVal:t,range:p,...g}=a,[x,w,I]=h(i=>[i.play,i.pause,i.reset]),[v,k]=h(i=>[i.scalarValue,i.setScalarValue],d),[S,C]=h(i=>[i.rangeValue,i.setRangeValue],d),P=h(i=>i.setRange,d);return E.exports.useEffect(()=>{k(t),C(e),P(p);const i={angleFeedback:O(o,u)},F={...U(p,v),...W(p,S)};h.setState({tfs:l,items:F,hulls:i,lines:s,texts:n,points:r})},[l,s,n,r,u,o,p,t,e]),c(T,{FallbackComponent:L,children:V("div",{style:{height:"calc(100vh - 3rem)",width:"calc(100vw - 2rem)"},children:[c(R,{...g,store:h,meshLookup:Q}),V("div",{style:{textAlign:"center"},children:[c("button",{onClick:()=>x(),children:"Play"}),c("button",{onClick:()=>x(.5),children:"Play (0.5x)"}),c("button",{onClick:()=>x(2),children:"Play (2x)"}),c("button",{onClick:()=>w(),children:"Pause"}),c("button",{onClick:()=>I(0),children:"Reset"}),c("button",{onClick:()=>I(Math.PI/2),children:"Reset (0.25)"}),c("button",{onClick:()=>I(Math.PI),children:"Reset (0.5)"}),c("button",{onClick:()=>I(3*Math.PI/2),children:"Reset (0.75)"})]})]})})},O=(a,l)=>{const s=new y,n=new j(0,Math.PI/2,0),r=s.clone().rotateTowards(new y().setFromEuler(n),l),u=s.clone().rotateTowards(new y().setFromEuler(n),l/2),o=new _(0,0,a),e=o.clone().applyQuaternion(r),t=o.clone().applyQuaternion(u),p=[{x:0,y:0,z:0},{x:o.x,y:o.y,z:o.z},{x:e.x,y:e.y,z:e.z},...b.exports.range(0,2*Math.PI,Math.PI/6).map(g=>({x:e.x*Math.sin(g),y:e.x*Math.cos(g),z:e.z})),...b.exports.range(0,2*Math.PI,Math.PI/6).map(g=>({x:t.x*Math.sin(g),y:t.x*Math.cos(g),z:t.z}))];return{frame:"world",name:"Robot Space Usage",vertices:p,color:{r:10,g:200,b:235,a:.7},wireframe:!1}},U=(a,l,s)=>{const n=(l-a[0])/(a[1]-a[0])*.1-.05;return{scalarInputHousing:{shape:"capsule",name:"Input Housing",frame:"movingFrame1",position:{x:0,y:s||.05,z:0},rotation:{w:1,x:0,y:0,z:0},color:{r:100,g:100,b:100,a:.3},scale:{x:1,y:1,z:1},shapeParams:{height:.1,radius:.02},highlighted:!1},scalarInputIndicator:{shape:"sphere",name:"Input Indicator",frame:"movingFrame1",position:{x:0,y:s||.05,z:n},rotation:{w:1,x:0,y:0,z:0},color:{r:0,g:0,b:255,a:1},scale:{x:.03,y:.03,z:.03},transformMode:"translate-z",highlighted:!1}}},W=(a,l,s)=>{const n=(l[1]-a[0])/(a[1]-a[0])*.1-.05,r=(l[0]-a[0])/(a[1]-a[0])*.1-.05,u=(l[1]-l[0])/(a[1]-a[0])*.09;return{rangeInputHousing:{shape:"capsule",name:"Input Housing",frame:"movingFrame2",position:{x:0,y:s||.05,z:0},rotation:{w:1,x:0,y:0,z:0},color:{r:100,g:100,b:100,a:.3},scale:{x:1,y:1,z:1},shapeParams:{height:.1,radius:.02},highlighted:!1},rangeInputRange:{shape:"capsule",name:"Input Housing",frame:"movingFrame2",position:{x:0,y:s||.05,z:(n+r)/2},rotation:{w:1,x:0,y:0,z:0},color:{r:0,g:0,b:255,a:1},scale:{x:1,y:1,z:1},shapeParams:{height:u,radius:.015},highlighted:!1},bottomRangeInputIndicator:{shape:"sphere",name:"Input Indicator Bottom",frame:"movingFrame2",position:{x:0,y:s||.05,z:r},rotation:{w:1,x:0,y:0,z:0},color:{r:0,g:0,b:255,a:1},scale:{x:.03,y:.03,z:.03},transformMode:"translate-z",highlighted:!1},topRangeInputIndicator:{shape:"sphere",name:"Input Indicator Top",frame:"movingFrame2",position:{x:0,y:s||.05,z:n},rotation:{w:1,x:0,y:0,z:0},color:{r:0,g:0,b:255,a:1},scale:{x:.03,y:.03,z:.03},transformMode:"translate-z",highlighted:!1}}},m=G.bind({});m.args={tfs:{movingFrame1:{frame:"world",position:{x:a=>Math.cos(a/5e3),y:a=>Math.sin(a/5e3),z:.5},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},movingFrame2:{frame:"world",position:{x:a=>Math.sin(a/5e3),y:a=>Math.cos(a/5e3),z:.5},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}}},lines:{},texts:{inputText:{value:"0.5",frame:"movingFrame1",position:{x:0,y:0,z:.25},color:{r:0,g:0,b:255,a:1}},inputRangeText:{value:"0.5, 1.5",frame:"movingFrame2",position:{x:0,y:0,z:.25},color:{r:0,g:0,b:255,a:1}}},points:{},displayTfs:!1,displayGrid:!0,isPolar:!1,backgroundColor:"#d0d0d0",planeColor:"#a8a8a8",highlightColor:"#ffffff",plane:0,fov:90,ar:!1,vr:!1,angle:Math.PI/6,length:.5,scalarInputVal:.5,rangeInputVal:[.5,1.5],range:[0,2],onPointerMissed:()=>console.log("Missed Click")};var z,f,M;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const {
    tfs,
    lines,
    texts,
    points,
    angle,
    length,
    rangeInputVal,
    scalarInputVal,
    range,
    ...otherArgs
  } = args;
  const [play, pause, reset] = useStore(state => [state.play, state.pause, state.reset]);

  // Define changeable versions of the two range inputs
  const [scalarValue, setScalarValue] = useStore(state => [state.scalarValue, state.setScalarValue], shallow);
  const [rangeValue, setRangeValue] = useStore(state => [state.rangeValue, state.setRangeValue], shallow);
  const setRange = useStore(state => state.setRange, shallow);
  useEffect(() => {
    setScalarValue(scalarInputVal);
    setRangeValue(rangeInputVal);
    setRange(range);
    const hulls = {
      angleFeedback: getHullMesh(length, angle)
    };
    const items = {
      ...getScalarInputItems(range, scalarValue),
      ...getRangeInputItems(range, rangeValue)
    };
    useStore.setState({
      tfs,
      items,
      hulls,
      lines,
      texts,
      points
    });
  }, [tfs, lines, texts, points, angle, length, range, scalarInputVal, rangeInputVal]);
  return <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div style={{
      height: "calc(100vh - 3rem)",
      width: "calc(100vw - 2rem)"
    }}>
        <Scene {...otherArgs} store={useStore} meshLookup={MeshLookupTable} />
        <div style={{
        textAlign: "center"
      }}>
          <button onClick={() => play()}>Play</button>
          <button onClick={() => play(0.5)}>Play (0.5x)</button>
          <button onClick={() => play(2)}>Play (2x)</button>
          <button onClick={() => pause()}>Pause</button>
          <button onClick={() => reset(0)}>Reset</button>
          <button onClick={() => reset(Math.PI / 2)}>Reset (0.25)</button>
          <button onClick={() => reset(Math.PI)}>Reset (0.5)</button>
          <button onClick={() => reset(3 * Math.PI / 2)}>Reset (0.75)</button>
        </div>
      </div>
    </ErrorBoundary>;
}`,...(M=(f=m.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};const B=["MoreControls"];export{m as MoreControls,B as __namedExportsOrder,Z as default};
//# sourceMappingURL=MoreControls.stories.d07f5be2.js.map
