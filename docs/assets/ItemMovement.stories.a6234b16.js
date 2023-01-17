import{r as u}from"./index.7f7b9823.js";import{S as m,u as n}from"./Scene.52d4b02c.js";import{a as l}from"./jsx-runtime.ad8a4007.js";import"./_commonjsHelpers.712cc82f.js";import"./client.6362116e.js";import"./index.f82ae1e6.js";const b={title:"ItemMovement",component:m},h=c=>{const{tfs:t,items:s,hulls:o,lines:a,texts:r,...f}=c;return u.exports.useLayoutEffect(()=>{n.setState({tfs:t,items:s,hulls:o,lines:a,texts:r})},[t,s,o,a,r]),l("div",{style:{height:"calc(100vh - 2rem)",width:"calc(100vw - 2rem)"},children:l(m,{...f,store:n})})},e=h.bind({});e.storyName="ItemMovement";e.args={tfs:{moving:{frame:"world",position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}}},items:{immovable:{shape:"cube",name:"Immovable Cube",frame:"moving",position:{x:0,y:0,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:255,g:10,b:10,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!0},translateCube:{shape:"cube",name:"Translate Cube (Async)",frame:"moving",position:{x:1,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:10,b:10,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!1,transformMode:"translate"},rotateCube:{shape:"cube",name:"Rotate Cube",frame:"moving",position:{x:1,y:0,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:255,b:10,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!1,transformMode:"rotate"},scaleCube:{shape:"cube",name:"Scale Cube",frame:"moving",position:{x:0,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:10,b:255,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!1,transformMode:"scale"}},lines:{},hulls:{},texts:{},displayTfs:!1,displayGrid:!0,isPolar:!1,backgroundColor:"#d0d0d0",planeColor:"#a8a8a8",highlightColor:"#ffffff",plane:-.75,fov:60,paused:!1,ar:!1,vr:!1,onPointerMissed:()=>console.log("Missed Click")};var i;e.parameters={...e.parameters,storySource:{source:`args => {
  const {
    tfs,
    items,
    hulls,
    lines,
    texts,
    ...otherArgs
  } = args;
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
    height: 'calc(100vh - 2rem)',
    width: 'calc(100vw - 2rem)'
  }}><Scene {...otherArgs} store={useDefaultSceneStore} /></div>;
}`,...(i=e.parameters)==null?void 0:i.storySource}};const z=["ItemMovement"];export{e as ItemMovement,z as __namedExportsOrder,b as default};
//# sourceMappingURL=ItemMovement.stories.a6234b16.js.map
