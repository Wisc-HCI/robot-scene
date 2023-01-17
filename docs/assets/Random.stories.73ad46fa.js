import{r as m}from"./index.7f7b9823.js";import{S as c,u as l}from"./Scene.52d4b02c.js";import{a as n}from"./jsx-runtime.ad8a4007.js";import{M as g}from"./MeshLookup.6e4b64a1.js";import"./_commonjsHelpers.712cc82f.js";import"./client.6362116e.js";import"./index.f82ae1e6.js";const M={title:"Random Shapes",component:c},p=e=>{const{tfs:r,items:t,hulls:a,lines:s,texts:i,...y}=e;return m.exports.useLayoutEffect(()=>{l.setState({tfs:r,items:t,hulls:a,lines:s,texts:i})},[r,t,a,s,i]),n("div",{style:{height:"calc(100vh - 2rem)",width:"calc(100vw - 2rem)"},children:n(c,{...y,store:l,meshLookup:g})})},o=p.bind({});o.args={tfs:{other1:{frame:"world",position:{x:1,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},other2:{name:"world",position:{x:-2,y:0,z:2},rotation:{w:.525322,x:.8509035,y:0,z:0},scale:{x:1,y:1,z:1}},other3:{name:"world",position:{x:2,y:0,z:1},rotation:{w:-.604,x:-.002,y:-.756,z:.252},scale:{x:1,y:1,z:1}}},items:{1:{shape:"cube",name:"My Cube",frame:"world",position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},color:{r:255,g:50,b:10,a:.75},scale:{x:.5,y:.5,z:.5},highlighted:!0},2:{shape:"sphere",name:"My Sphere",frame:"world",position:{x:0,y:2,z:2},rotation:{w:1,x:0,y:0,z:0},color:{r:255,g:255,b:30,a:.35},scale:{x:1,y:2,z:1},highlighted:!0,showName:!0},3:{shape:"cylinder",name:"My Cylinder",frame:"other2",shapeParams:{height:1.25},position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:200,b:235,a:.5},scale:{x:1,y:1,z:1},highlighted:!1},a3:{shape:"capsule",name:"My Capsule",frame:"other2",shapeParams:{height:.25},position:{x:1.2,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:200,b:235,a:.5},scale:{x:1,y:1,z:1},highlighted:!1},4:{shape:"flatarrow",name:"My Arrow 1",frame:"world",position:{x:1,y:0,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:70,g:70,b:250,a:.5},scale:{x:1,y:1,z:1},highlighted:!0},5:{shape:"arrow",name:"My Arrow 2",frame:"other1",position:{x:1,y:0,z:0},rotation:{w:-.604,x:-.002,y:-.756,z:.252},color:{r:255,g:70,b:250,a:.5},scale:{x:1,y:1,z:1},highlighted:!0},6:{shape:"arrow",name:"My Arrow 3",frame:"other3",position:{x:1,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},color:{r:255,g:70,b:250,a:.5},scale:{x:1,y:2,z:1},highlighted:!1},7:{shape:"blade_with_transport_jig",name:"Blade with Transport Jig",frame:"world",position:{x:0,y:2,z:1},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1},showName:!0,colorOverlay:!0,color:{r:e=>(Math.sin(e/1e3)/2+.5)*255,g:255,b:0,a:e=>Math.sin(e/1e3)/2+.5},highlighted:!0},8:{shape:"warning",name:"Nao Ankle",frame:"world",position:{x:1,y:.5,z:1},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1},colorOverlay:!0,color:{r:255,g:255,b:0,a:.5},highlighted:!1},9:{shape:"package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/MK2-Printer/MK2-Printer.stl",name:"3d Printer",frame:"world",position:{x:-1,y:1,z:.3},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1},colorOverlay:!0,color:{r:e=>(Math.sin(e/1e3)/2+.5)*255,g:0,b:0,a:.8},highlighted:!1},10:{frame:"world",name:"Tag",shape:"tag",position:{x:3,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},scale:{x:-1,y:1,z:1},highlighted:!1,showName:!0,color:{r:255,g:0,b:0,a:1}},11:{frame:"world",name:"flag",shape:"flag",position:{x:3,y:1.4,z:1},rotation:{w:1,x:0,y:0,z:0},scale:{x:-1,y:1,z:1},highlighted:!1,showName:!1,color:{r:255,g:0,b:0,a:1}}},lines:{line1:{name:"Line1",frame:"world",width:1,vertices:[{position:{x:1,y:2,z:0},color:{r:255,g:0,b:0}},{position:{x:2,y:1,z:1},color:{r:0,g:255,b:0}},{position:{x:2,y:2,z:1},color:{r:0,g:0,b:255}}],highlighted:!1},line2:{name:"Line1",frame:"other1",width:3,vertices:[{position:{x:1,y:0,z:0},color:{r:0,g:0,b:255}},{position:{x:1,y:0,z:1},color:{r:100,g:100,b:255}},{position:{x:2,y:1,z:1},color:{r:50,g:50,b:255}},{position:{x:2,y:2,z:1},color:{r:255,g:255,b:255}}],highlighted:!1}},hulls:{},texts:{},displayTfs:!0,displayGrid:!0,isPolar:!1,backgroundColor:"#d0d0d0",planeColor:"#a8a8a8",highlightColor:"#ffffff",plane:-.75,fov:60,ar:!1,vr:!1,onPointerMissed:()=>console.log("Missed Click")};var h;o.parameters={...o.parameters,storySource:{source:`args => {
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
  }}><Scene {...otherArgs} store={useDefaultSceneStore} meshLookup={MeshLookupTable} /></div>;
}`,...(h=o.parameters)==null?void 0:h.storySource}};const S=["RandomShapes"];export{o as RandomShapes,S as __namedExportsOrder,M as default};
//# sourceMappingURL=Random.stories.73ad46fa.js.map
