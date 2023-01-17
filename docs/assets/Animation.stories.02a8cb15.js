import{r as b}from"./index.7f7b9823.js";import{S as f,u as i}from"./Scene.52d4b02c.js";import{j as m,a as t}from"./jsx-runtime.ad8a4007.js";import"./_commonjsHelpers.712cc82f.js";import"./client.6362116e.js";import"./index.f82ae1e6.js";const k={title:"Animation",component:f},g=e=>{const{tfs:r,items:l,hulls:c,lines:h,texts:u,...p}=e,[a,y,n]=i(s=>[s.play,s.pause,s.reset]);return b.exports.useLayoutEffect(()=>{i.setState({tfs:r,items:l,hulls:c,lines:h,texts:u})},[r,l,c,h,u]),m("div",{style:{height:"calc(100vh - 3rem)",width:"calc(100vw - 2rem)"},children:[t(f,{...p,store:i}),m("div",{style:{textAlign:"center"},children:[t("button",{onClick:()=>a(),children:"Play"}),t("button",{onClick:()=>a(.5),children:"Play (0.5x)"}),t("button",{onClick:()=>a(2),children:"Play (2x)"}),t("button",{onClick:()=>y(),children:"Pause"}),t("button",{onClick:()=>n(0),children:"Reset"}),t("button",{onClick:()=>n(Math.PI/2),children:"Reset (0.25)"}),t("button",{onClick:()=>n(Math.PI),children:"Reset (0.5)"}),t("button",{onClick:()=>n(3*Math.PI/2),children:"Reset (0.75)"})]})]})},o=g.bind({});o.args={tfs:{movingFrame:{frame:"world",position:{x:e=>Math.cos(e/1e3),y:e=>Math.sin(e/1e3),z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:e=>.25*Math.cos(e/1e3)+1,y:1,z:1}}},items:{colorshiftlift:{shape:"cube",name:"ColorShift/Lift",frame:"movingFrame",position:{x:0,y:0,z:e=>Math.sin(e/1e3)+1},rotation:{w:1,x:0,y:0,z:0},color:{r:e=>(Math.sin(e/1e3)/2+.5)*255,g:10,b:10,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!0},opacity:{shape:"cube",name:"Opacity",frame:"movingFrame",position:{x:1,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:10,b:10,a:e=>Math.sin(e/1e3)/2+.5},scale:{x:.5,y:.5,z:.5},highlighted:!1},scale:{shape:"cube",name:"Scale",frame:"movingFrame",position:{x:1,y:0,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:255,b:10,a:1},scale:{x:.5,y:e=>Math.sin(e/1e3)/2+1,z:.5},highlighted:!1},hidden:{shape:"cube",name:"Hidden",frame:"movingFrame",position:{x:0,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:10,b:255,a:1},scale:{x:.5,y:.5,z:.5},hidden:e=>Math.sin(e/1e3)>0}},lines:{},hulls:{},texts:{colorshiftlift:{value:"ColorShift/Lift",frame:"movingFrame",position:{x:0,y:0,z:e=>Math.sin(e/1e3)+1.5},color:{r:e=>(Math.sin(e/1e3)/2+.5)*255,g:10,b:10,a:1}},opacity:{value:"Opacity",frame:"movingFrame",position:{x:1,y:1,z:1.5},color:{r:10,g:10,b:10,a:e=>Math.sin(e/1e3)/2+.5}},scale:{value:"Scale",frame:"movingFrame",position:{x:1,y:0,z:1.5},color:{r:10,g:255,b:10,a:1}},hidden:{value:"Hidden",frame:"movingFrame",position:{x:0,y:1,z:1.5},color:{r:10,g:10,b:255,a:1},hidden:e=>Math.sin(e/1e3)>0}},displayTfs:!0,displayGrid:!0,isPolar:!1,backgroundColor:"#d0d0d0",planeColor:"#a8a8a8",highlightColor:"#ffffff",plane:-.75,fov:60,ar:!1,vr:!1,onPointerMissed:()=>console.log("Missed Click")};var d;o.parameters={...o.parameters,storySource:{source:`args => {
  const {
    tfs,
    items,
    hulls,
    lines,
    texts,
    ...otherArgs
  } = args;
  const [play, pause, reset] = useDefaultSceneStore(state => [state.play, state.pause, state.reset]);
  useLayoutEffect(() => {
    useDefaultSceneStore.setState({
      tfs,
      items,
      hulls,
      lines,
      texts
    });
  }, [tfs, items, hulls, lines, texts]);
  return <div style={{
    height: 'calc(100vh - 3rem)',
    width: 'calc(100vw - 2rem)'
  }}>
            <Scene {...otherArgs} store={useDefaultSceneStore} />
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
}`,...(d=o.parameters)==null?void 0:d.storySource}};const P=["Animation"];export{o as Animation,P as __namedExportsOrder,k as default};
//# sourceMappingURL=Animation.stories.02a8cb15.js.map
