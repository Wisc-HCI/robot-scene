import{r as C}from"./index.7f7b9823.js";import{S as b,ab as k,ac as F,ad as A,ae as x,Q as y,af as H,a8 as q,ag as d,ah as E}from"./Scene.52d4b02c.js";import{j as V,a as g}from"./jsx-runtime.ad8a4007.js";import"./_commonjsHelpers.712cc82f.js";import"./client.6362116e.js";import"./index.f82ae1e6.js";const J={title:"MoreControls",component:b},Q=(a,l,s)=>({...E(a,l),scalarValue:1,rangeValue:[.5,1.5],range:[0,2],setScalarValue:n=>a({scalarValue:n}),setRangeValue:n=>a({rangeValue:n}),setRange:n=>a({range:n}),onMove:(n,r,u,o)=>a(e=>{if(["scalarInputIndicator","bottomRangeInputIndicator","topRangeInputIndicator"].includes(n)){const t=d.exports.clamp((10*o.position.z+.5)*(e.range[1]-e.range[0])+e.range[0],e.range[0],e.range[1]);n==="scalarInputIndicator"?(e.scalarValue=t,e.items[n].position.z=(t-e.range[0])/(e.range[1]-e.range[0])*.1-.05,e.texts.inputText.value=Math.round(t*100)/100):(console.log("handling range"),n=="bottomRangeInputIndicator"&&e.range[1]>=t?e.rangeValue[0]=t:n=="bottomRangeInputIndicator"&&e.range[1]<t?(e.rangeValue[0]=e.rangeValue[1],e.rangeValue[1]=t):n=="topRangeInputIndicator"&&e.range[0]<=t?e.rangeValue[1]=t:n=="topRangeInputIndicator"&&e.range[0]>t&&(e.rangeValue[1]=e.rangeValue[0],e.rangeValue[0]=t),e.items.topRangeInputIndicator.position.z=(e.rangeValue[1]-e.range[0])/(e.range[1]-e.range[0])*.1-.05,e.items.bottomRangeInputIndicator.position.z=(e.rangeValue[0]-e.range[0])/(e.range[1]-e.range[0])*.1-.05,e.items.rangeInputRange.position={x:0,y:.05,z:(e.items.topRangeInputIndicator.position.z+e.items.bottomRangeInputIndicator.position.z)/2},e.items.rangeInputRange.shapeParams.height=(e.rangeValue[1]-e.rangeValue[0])/(e.range[1]-e.range[0])*.09,e.texts.inputRangeText.value=`${Math.round(e.rangeValue[0]*100)/100}, ${Math.round(e.rangeValue[1]*100)/100}`)}else e[r][n].position={...o.position},e[r][n].rotation=o.quaternion,e[r][n].rotation.x=o.quaternion.x,e[r][n].rotation.y=o.quaternion.y,e[r][n].rotation.z=o.quaternion.z,e[r][n].rotation.w=o.quaternion.w,e[r][n].scale={...o.scale}})}),p=k(F(A(Q)));console.log("starting",p.getState());const T=a=>{const{tfs:l,lines:s,texts:n,angle:r,length:u,rangeInputVal:o,scalarInputVal:e,range:t,...I}=a,[c,f,h]=p(i=>[i.play,i.pause,i.reset]),[R,M]=p(i=>[i.scalarValue,i.setScalarValue],x),[w,v]=p(i=>[i.rangeValue,i.setRangeValue],x),S=p(i=>i.setRange,x);return C.exports.useLayoutEffect(()=>{M(e),v(o),S(t);const i={angleFeedback:j(u,r)},P={..._(t,R),...$(t,w)};p.setState({tfs:l,items:P,hulls:i,lines:s,texts:n})},[l,s,n,r,u,t,e,o]),V("div",{style:{height:"calc(100vh - 3rem)",width:"calc(100vw - 2rem)"},children:[g(b,{...I,store:p}),V("div",{style:{textAlign:"center"},children:[g("button",{onClick:()=>c(),children:"Play"}),g("button",{onClick:()=>c(.5),children:"Play (0.5x)"}),g("button",{onClick:()=>c(2),children:"Play (2x)"}),g("button",{onClick:()=>f(),children:"Pause"}),g("button",{onClick:()=>h(0),children:"Reset"}),g("button",{onClick:()=>h(Math.PI/2),children:"Reset (0.25)"}),g("button",{onClick:()=>h(Math.PI),children:"Reset (0.5)"}),g("button",{onClick:()=>h(3*Math.PI/2),children:"Reset (0.75)"})]})]})},j=(a,l)=>{const s=new y,n=new H(0,Math.PI/2,0),r=s.clone().rotateTowards(new y().setFromEuler(n),l),u=s.clone().rotateTowards(new y().setFromEuler(n),l/2),o=new q(0,0,a),e=o.clone().applyQuaternion(r),t=o.clone().applyQuaternion(u),I=[{x:0,y:0,z:0},{x:o.x,y:o.y,z:o.z},{x:e.x,y:e.y,z:e.z},...d.exports.range(0,2*Math.PI,Math.PI/6).map(c=>({x:e.x*Math.sin(c),y:e.x*Math.cos(c),z:e.z})),...d.exports.range(0,2*Math.PI,Math.PI/6).map(c=>({x:t.x*Math.sin(c),y:t.x*Math.cos(c),z:t.z}))];return{frame:"world",name:"Robot Space Usage",vertices:I,color:{r:10,g:200,b:235,a:.7},wireframe:!1}},_=(a,l,s)=>{const n=(l-a[0])/(a[1]-a[0])*.1-.05;return{scalarInputHousing:{shape:"capsule",name:"Input Housing",frame:"movingFrame1",position:{x:0,y:s||.05,z:0},rotation:{w:1,x:0,y:0,z:0},color:{r:100,g:100,b:100,a:.3},scale:{x:1,y:1,z:1},shapeParams:{height:.1,radius:.02},highlighted:!1},scalarInputIndicator:{shape:"sphere",name:"Input Indicator",frame:"movingFrame1",position:{x:0,y:s||.05,z:n},rotation:{w:1,x:0,y:0,z:0},color:{r:0,g:0,b:255,a:1},scale:{x:.03,y:.03,z:.03},transformMode:"translate-z",highlighted:!1}}},$=(a,l,s)=>{const n=(l[1]-a[0])/(a[1]-a[0])*.1-.05,r=(l[0]-a[0])/(a[1]-a[0])*.1-.05,u=(l[1]-l[0])/(a[1]-a[0])*.09;return{rangeInputHousing:{shape:"capsule",name:"Input Housing",frame:"movingFrame2",position:{x:0,y:s||.05,z:0},rotation:{w:1,x:0,y:0,z:0},color:{r:100,g:100,b:100,a:.3},scale:{x:1,y:1,z:1},shapeParams:{height:.1,radius:.02},highlighted:!1},rangeInputRange:{shape:"capsule",name:"Input Housing",frame:"movingFrame2",position:{x:0,y:s||.05,z:(n+r)/2},rotation:{w:1,x:0,y:0,z:0},color:{r:0,g:0,b:255,a:1},scale:{x:1,y:1,z:1},shapeParams:{height:u,radius:.015},highlighted:!1},bottomRangeInputIndicator:{shape:"sphere",name:"Input Indicator Bottom",frame:"movingFrame2",position:{x:0,y:s||.05,z:r},rotation:{w:1,x:0,y:0,z:0},color:{r:0,g:0,b:255,a:1},scale:{x:.03,y:.03,z:.03},transformMode:"translate-z",highlighted:!1},topRangeInputIndicator:{shape:"sphere",name:"Input Indicator Top",frame:"movingFrame2",position:{x:0,y:s||.05,z:n},rotation:{w:1,x:0,y:0,z:0},color:{r:0,g:0,b:255,a:1},scale:{x:.03,y:.03,z:.03},transformMode:"translate-z",highlighted:!1}}},m=T.bind({});m.args={tfs:{movingFrame1:{frame:"world",position:{x:a=>Math.cos(a/5e3),y:a=>Math.sin(a/5e3),z:.5},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},movingFrame2:{frame:"world",position:{x:a=>Math.sin(a/5e3),y:a=>Math.cos(a/5e3),z:.5},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}}},lines:{},texts:{inputText:{value:"0.5",frame:"movingFrame1",position:{x:0,y:0,z:.25},color:{r:0,g:0,b:255,a:1}},inputRangeText:{value:"0.5, 1.5",frame:"movingFrame2",position:{x:0,y:0,z:.25},color:{r:0,g:0,b:255,a:1}}},displayTfs:!1,displayGrid:!0,isPolar:!1,backgroundColor:"#d0d0d0",planeColor:"#a8a8a8",highlightColor:"#ffffff",plane:0,fov:90,ar:!1,vr:!1,angle:Math.PI/6,length:.5,scalarInputVal:.5,rangeInputVal:[.5,1.5],range:[0,2],onPointerMissed:()=>console.log("Missed Click")};var z;m.parameters={...m.parameters,storySource:{source:`args => {
  const {
    tfs,
    lines,
    texts,
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
  useLayoutEffect(() => {
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
      texts
    });
  }, [tfs, lines, texts, angle, length, range, scalarInputVal, rangeInputVal]);
  return <div style={{
    height: 'calc(100vh - 3rem)',
    width: 'calc(100vw - 2rem)'
  }}>
            <Scene {...otherArgs} store={useStore} />
            <div style={{
      textAlign: 'center'
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
        </div>;
}`,...(z=m.parameters)==null?void 0:z.storySource}};const K=["MoreControls"];export{m as MoreControls,K as __namedExportsOrder,J as default};
//# sourceMappingURL=MoreControls.stories.462349fb.js.map
