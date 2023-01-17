import{r as a}from"./index.7f7b9823.js";import{S as d,u as o}from"./Scene.52d4b02c.js";import{j as u,a as t}from"./jsx-runtime.ad8a4007.js";import"./_commonjsHelpers.712cc82f.js";import"./client.6362116e.js";import"./index.f82ae1e6.js";const w={title:"TFMovement",component:d},C=g=>{const{tfs:s,items:r,hulls:l,lines:i,texts:c,...h}=g,e=o(x=>x.setProperty),[y,p]=a.exports.useState(0),[b,m]=a.exports.useState(0),[v,f]=a.exports.useState(0);return a.exports.useLayoutEffect(()=>{o.setState({tfs:s,items:r,hulls:l,lines:i,texts:c})},[s,r,l,i,c]),u("div",{style:{height:"calc(100vh - 3rem)",width:"calc(100vw - 2rem)"},children:[t(d,{...h,store:o,displayTfs:!0,translateSnap:y,rotateSnap:b,scaleSnap:v}),u("div",{style:{textAlign:"center"},children:[t("button",{onClick:()=>{p(0),e(["tfs","moving","transformMode"],"translate")},children:"Translate Free"}),t("button",{onClick:()=>{p(.25),e(["tfs","moving","transformMode"],"translate")},children:"Translate Snapping"}),t("button",{onClick:()=>{m(0),e(["tfs","moving","transformMode"],"rotate")},children:"Rotate Free"}),t("button",{onClick:()=>{m(Math.PI/6),e(["tfs","moving","transformMode"],"rotate")},children:"Rotate Snapping"}),t("button",{onClick:()=>{f(0),e(["tfs","moving","transformMode"],"scale")},children:"Scale Free"}),t("button",{onClick:()=>{f(.1),e(["tfs","moving","transformMode"],"scale")},children:"Scale Snapping"})]})]})},n=C.bind({});n.storyName="TFMovement";n.args={tfs:{moving:{frame:"world",position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1},transformMode:"rotate"}},items:{immovable:{shape:"cube",name:"Immovable Cube",frame:"moving",position:{x:0,y:0,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:255,g:10,b:10,a:1},scale:{x:.5,y:.5,z:.5}},translateCube:{shape:"cube",name:"Translate Cube (Async)",frame:"moving",position:{x:1,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:10,b:10,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!1},rotateCube:{shape:"cube",name:"Rotate Cube",frame:"moving",position:{x:1,y:0,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:255,b:10,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!1},scaleCube:{shape:"cube",name:"Scale Cube",frame:"moving",position:{x:0,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:10,b:255,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!1}},lines:{},hulls:{},texts:{},displayTfs:!1,displayGrid:!0,isPolar:!1,backgroundColor:"#d0d0d0",planeColor:"#a8a8a8",highlightColor:"#ffffff",plane:-.75,fov:60,paused:!1,ar:!1,vr:!1,onPointerMissed:()=>console.log("Missed Click")};var S;n.parameters={...n.parameters,storySource:{source:`args => {
  const {
    tfs,
    items,
    hulls,
    lines,
    texts,
    ...otherArgs
  } = args;
  const setProperty = useDefaultSceneStore(state => state.setProperty);
  const [translateSnap, setTranslateSnap] = useState(0);
  const [rotateSnap, setRotateSnap] = useState(0);
  const [scaleSnap, setScaleSnap] = useState(0);
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
            <Scene {...otherArgs} store={useDefaultSceneStore} displayTfs translateSnap={translateSnap} rotateSnap={rotateSnap} scaleSnap={scaleSnap} />
            <div style={{
      textAlign: 'center'
    }}>
                <button onClick={() => {
        setTranslateSnap(0);
        setProperty(['tfs', 'moving', 'transformMode'], 'translate');
      }}>Translate Free</button>
                <button onClick={() => {
        setTranslateSnap(0.25);
        setProperty(['tfs', 'moving', 'transformMode'], 'translate');
      }}>Translate Snapping</button>
                <button onClick={() => {
        setRotateSnap(0);
        setProperty(['tfs', 'moving', 'transformMode'], 'rotate');
      }}>Rotate Free</button>
                <button onClick={() => {
        setRotateSnap(Math.PI / 6);
        setProperty(['tfs', 'moving', 'transformMode'], 'rotate');
      }}>Rotate Snapping</button>
                <button onClick={() => {
        setScaleSnap(0);
        setProperty(['tfs', 'moving', 'transformMode'], 'scale');
      }}>Scale Free</button>
                <button onClick={() => {
        setScaleSnap(0.1);
        setProperty(['tfs', 'moving', 'transformMode'], 'scale');
      }}>Scale Snapping</button>
            </div>
        </div>;
}`,...(S=n.parameters)==null?void 0:S.storySource}};const R=["TFMovement"];export{n as TFMovement,R as __namedExportsOrder,w as default};
//# sourceMappingURL=TFMovement.stories.f2a1128c.js.map
