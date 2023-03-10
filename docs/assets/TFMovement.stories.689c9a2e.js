import{r as a}from"./index.7f7b9823.js";import{S as b,u as o,E as T,a as z,M as P}from"./ErrorFallback.4b00d79e.js";import{j as t,a as S}from"./client.c582ae78.js";import"./_commonjsHelpers.712cc82f.js";import"./inheritsLoose.b8ebfe26.js";const L={title:"Moving Transforms",component:b},F=y=>{const{tfs:s,items:r,hulls:l,lines:i,texts:c,points:p,...v}=y,e=o(k=>k.setProperty),[x,m]=a.exports.useState(0),[C,f]=a.exports.useState(0),[M,u]=a.exports.useState(0);return a.exports.useEffect(()=>{o.setState({tfs:s,items:r,hulls:l,lines:i,texts:c,points:p})},[s,r,l,i,c,p]),t(T,{FallbackComponent:z,children:S("div",{style:{height:"calc(100vh - 3rem)",width:"calc(100vw - 2rem)"},children:[t(b,{...v,store:o,meshLookup:P,displayTfs:!0,translateSnap:x,rotateSnap:C,scaleSnap:M}),S("div",{style:{textAlign:"center"},children:[t("button",{onClick:()=>{m(0),e(["tfs","moving","transformMode"],"translate")},children:"Translate Free"}),t("button",{onClick:()=>{m(.25),e(["tfs","moving","transformMode"],"translate")},children:"Translate Snapping"}),t("button",{onClick:()=>{f(0),e(["tfs","moving","transformMode"],"rotate")},children:"Rotate Free"}),t("button",{onClick:()=>{f(Math.PI/6),e(["tfs","moving","transformMode"],"rotate")},children:"Rotate Snapping"}),t("button",{onClick:()=>{u(0),e(["tfs","moving","transformMode"],"scale")},children:"Scale Free"}),t("button",{onClick:()=>{u(.1),e(["tfs","moving","transformMode"],"scale")},children:"Scale Snapping"})]})]})})},n=F.bind({});n.storyName="Moving Transforms";n.args={tfs:{moving:{frame:"world",position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1},transformMode:"rotate"}},items:{immovable:{shape:"cube",name:"Immovable Cube",frame:"moving",position:{x:0,y:0,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:255,g:10,b:10,a:1},scale:{x:.5,y:.5,z:.5}},translateCube:{shape:"cube",name:"Translate Cube (Async)",frame:"moving",position:{x:1,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:10,b:10,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!1},rotateCube:{shape:"cube",name:"Rotate Cube",frame:"moving",position:{x:1,y:0,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:255,b:10,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!1},scaleCube:{shape:"cube",name:"Scale Cube",frame:"moving",position:{x:0,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:10,b:255,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!1}},lines:{},hulls:{},texts:{},points:{},displayTfs:!1,displayGrid:!0,isPolar:!1,backgroundColor:"#d0d0d0",planeColor:"#a8a8a8",highlightColor:"#ffffff",plane:-.75,fov:60,paused:!1,ar:!1,vr:!1,onPointerMissed:()=>console.log("Missed Click")};var d,g,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const {
    tfs,
    items,
    hulls,
    lines,
    texts,
    points,
    ...otherArgs
  } = args;
  const setProperty = useDefaultSceneStore(state => state.setProperty);
  const [translateSnap, setTranslateSnap] = useState(0);
  const [rotateSnap, setRotateSnap] = useState(0);
  const [scaleSnap, setScaleSnap] = useState(0);
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
        
      <Scene {...otherArgs} store={useDefaultSceneStore} meshLookup={MeshLookupTable} displayTfs translateSnap={translateSnap} rotateSnap={rotateSnap} scaleSnap={scaleSnap} />
      <div style={{
        textAlign: "center"
      }}>
        <button onClick={() => {
          setTranslateSnap(0);
          setProperty(["tfs", "moving", "transformMode"], "translate");
        }}>
          Translate Free
        </button>
        <button onClick={() => {
          setTranslateSnap(0.25);
          setProperty(["tfs", "moving", "transformMode"], "translate");
        }}>
          Translate Snapping
        </button>
        <button onClick={() => {
          setRotateSnap(0);
          setProperty(["tfs", "moving", "transformMode"], "rotate");
        }}>
          Rotate Free
        </button>
        <button onClick={() => {
          setRotateSnap(Math.PI / 6);
          setProperty(["tfs", "moving", "transformMode"], "rotate");
        }}>
          Rotate Snapping
        </button>
        <button onClick={() => {
          setScaleSnap(0);
          setProperty(["tfs", "moving", "transformMode"], "scale");
        }}>
          Scale Free
        </button>
        <button onClick={() => {
          setScaleSnap(0.1);
          setProperty(["tfs", "moving", "transformMode"], "scale");
        }}>
          Scale Snapping
        </button>
      </div>
    </div>
    </ErrorBoundary>;
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const j=["MovingTransforms"];export{n as MovingTransforms,j as __namedExportsOrder,L as default};
//# sourceMappingURL=TFMovement.stories.689c9a2e.js.map
