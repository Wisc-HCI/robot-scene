import{r as k}from"./index.7f7b9823.js";import{S as b,u as i,E as v,a as C,M}from"./ErrorFallback.4b00d79e.js";import{j as t,a as p}from"./client.c582ae78.js";import"./_commonjsHelpers.712cc82f.js";import"./inheritsLoose.b8ebfe26.js";const E={title:"Animation",component:b},z=e=>{const{tfs:r,items:l,hulls:c,lines:h,texts:u,points:m,...g}=e,[a,x,o]=i(s=>[s.play,s.pause,s.reset]);return k.exports.useEffect(()=>{i.setState({tfs:r,items:l,hulls:c,lines:h,texts:u,points:m})},[r,l,c,h,u,m]),t(v,{FallbackComponent:C,children:p("div",{style:{height:"calc(100vh - 3rem)",width:"calc(100vw - 2rem)"},children:[t(b,{...g,store:i,meshLookup:M}),p("div",{style:{textAlign:"center"},children:[t("button",{onClick:()=>a(),children:"Play"}),t("button",{onClick:()=>a(.5),children:"Play (0.5x)"}),t("button",{onClick:()=>a(2),children:"Play (2x)"}),t("button",{onClick:()=>x(),children:"Pause"}),t("button",{onClick:()=>o(0),children:"Reset"}),t("button",{onClick:()=>o(Math.PI/2),children:"Reset (0.25)"}),t("button",{onClick:()=>o(Math.PI),children:"Reset (0.5)"}),t("button",{onClick:()=>o(3*Math.PI/2),children:"Reset (0.75)"})]})]})})},n=z.bind({});n.args={tfs:{movingFrame:{frame:"world",position:{x:e=>Math.cos(e/1e3),y:e=>Math.sin(e/1e3),z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:e=>.25*Math.cos(e/1e3)+1,y:1,z:1}}},items:{colorshiftlift:{shape:"cube",name:"ColorShift/Lift",frame:"movingFrame",position:{x:0,y:0,z:e=>Math.sin(e/1e3)+1},rotation:{w:1,x:0,y:0,z:0},color:{r:e=>(Math.sin(e/1e3)/2+.5)*255,g:10,b:10,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!0},opacity:{shape:"cube",name:"Opacity",frame:"movingFrame",position:{x:1,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:10,b:10,a:e=>Math.sin(e/1e3)/2+.5},scale:{x:.5,y:.5,z:.5},highlighted:!1},scale:{shape:"cube",name:"Scale",frame:"movingFrame",position:{x:1,y:0,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:255,b:10,a:1},scale:{x:.5,y:e=>Math.sin(e/1e3)/2+1,z:.5},highlighted:!1},hidden:{shape:"cube",name:"Hidden",frame:"movingFrame",position:{x:0,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:10,b:255,a:1},scale:{x:.5,y:.5,z:.5},hidden:e=>Math.sin(e/1e3)>0}},lines:{},hulls:{},texts:{colorshiftlift:{value:"ColorShift/Lift",frame:"movingFrame",position:{x:0,y:0,z:e=>Math.sin(e/1e3)+1.5},color:{r:e=>(Math.sin(e/1e3)/2+.5)*255,g:10,b:10,a:1}},opacity:{value:"Opacity",frame:"movingFrame",position:{x:1,y:1,z:1.5},color:{r:10,g:10,b:10,a:e=>Math.sin(e/1e3)/2+.5}},scale:{value:"Scale",frame:"movingFrame",position:{x:1,y:0,z:1.5},color:{r:10,g:255,b:10,a:1}},hidden:{value:"Hidden",frame:"movingFrame",position:{x:0,y:1,z:1.5},color:{r:10,g:10,b:255,a:1},hidden:e=>Math.sin(e/1e3)>0}},points:{},displayTfs:!0,displayGrid:!0,isPolar:!1,backgroundColor:"#d0d0d0",planeColor:"#a8a8a8",highlightColor:"#ffffff",plane:-.75,fov:60,ar:!1,vr:!1,onPointerMissed:()=>console.log("Missed Click")};var d,f,y;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const {
    tfs,
    items,
    hulls,
    lines,
    texts,
    points,
    ...otherArgs
  } = args;
  const [play, pause, reset] = useDefaultSceneStore(state => [state.play, state.pause, state.reset]);
  useEffect(() => {
    useDefaultSceneStore.setState({
      tfs,
      items,
      hulls,
      lines,
      texts,
      points
    });
  }, [tfs, items, hulls, lines, texts, points]);
  return <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div style={{
      height: "calc(100vh - 3rem)",
      width: "calc(100vw - 2rem)"
    }}>
        <Scene {...otherArgs} store={useDefaultSceneStore} meshLookup={MeshLookupTable} />
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
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const R=["Animation"];export{n as Animation,R as __namedExportsOrder,E as default};
//# sourceMappingURL=Animation.stories.616a1f9f.js.map
