import{r as d}from"./index.7f7b9823.js";import{S as h,u as i,E as g,a as y,M as b}from"./ErrorFallback.4b00d79e.js";import{j as t}from"./client.c582ae78.js";import"./_commonjsHelpers.712cc82f.js";import"./inheritsLoose.b8ebfe26.js";const k={title:"Item Movement",component:h},x=f=>{const{tfs:o,items:s,hulls:a,lines:r,texts:n,points:l,...p}=f;return d.exports.useLayoutEffect(()=>{i.setState({tfs:o,items:s,hulls:a,lines:r,texts:n,points:l})},[o,s,a,r,n,l]),t(g,{FallbackComponent:y,children:t("div",{style:{height:"calc(100vh - 2rem)",width:"calc(100vw - 2rem)"},children:t(h,{...p,store:i,meshLookup:b})})})},e=x.bind({});e.storyName="Item Movement";e.args={tfs:{moving:{frame:"world",position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}}},items:{immovable:{shape:"cube",name:"Immovable Cube",frame:"moving",position:{x:0,y:0,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:255,g:10,b:10,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!0},translateCube:{shape:"cube",name:"Translate Cube (Async)",frame:"moving",position:{x:1,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:10,b:10,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!1,transformMode:"translate"},rotateCube:{shape:"cube",name:"Rotate Cube",frame:"moving",position:{x:1,y:0,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:255,b:10,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!1,transformMode:"rotate"},scaleCube:{shape:"cube",name:"Scale Cube",frame:"moving",position:{x:0,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:10,b:255,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!1,transformMode:"scale"}},lines:{},hulls:{},texts:{},points:{},displayTfs:!1,displayGrid:!0,isPolar:!1,backgroundColor:"#d0d0d0",planeColor:"#a8a8a8",highlightColor:"#ffffff",plane:-.75,fov:60,paused:!1,ar:!1,vr:!1,onPointerMissed:()=>console.log("Missed Click")};var m,c,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const {
    tfs,
    items,
    hulls,
    lines,
    texts,
    points,
    ...otherArgs
  } = args;
  useLayoutEffect(() => {
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
      height: "calc(100vh - 2rem)",
      width: "calc(100vw - 2rem)"
    }}>
        <Scene {...otherArgs} store={useDefaultSceneStore} meshLookup={MeshLookupTable} />
      </div>
    </ErrorBoundary>;
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const w=["ItemMovement"];export{e as ItemMovement,w as __namedExportsOrder,k as default};
//# sourceMappingURL=ItemMovement.stories.d49ed9c6.js.map
