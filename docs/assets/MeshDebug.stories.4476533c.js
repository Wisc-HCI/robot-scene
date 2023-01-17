import{r as b}from"./index.7f7b9823.js";import{S as h,u as i}from"./Scene.52d4b02c.js";import{a as f}from"./jsx-runtime.ad8a4007.js";import{M as m}from"./MeshLookup.6e4b64a1.js";import"./_commonjsHelpers.712cc82f.js";import"./client.6362116e.js";import"./index.f82ae1e6.js";const L={title:"Mesh Debug",component:h},v=e=>{const{tfs:t,items:r,hulls:a,lines:n,texts:l,...x}=e;return b.exports.useLayoutEffect(()=>{i.setState({tfs:t,items:r,hulls:a,lines:n,texts:l})},[t,r,a,n,l]),f("div",{style:{height:"calc(100vh - 2rem)",width:"calc(100vw - 2rem)"},children:f(h,{...x,store:i,meshLookup:m})})};let p={},d={},g={};var u=-10,s=-12;Object.keys(m).forEach((e,t)=>{s===0?s+=2:s>0&&s%10===0?(u+=2,s=-10):s+=2,p[`${t}`]={name:`${t}`,position:{x:s,y:u,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},d[e]={shape:e,name:e,frame:`${t}`,position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},scale:e.includes("robotiq_2f_85_gripper_visualization")?{x:.001,y:.001,z:.001}:{x:1,y:1,z:1},editMode:"inactive",highlighted:!1},g[e]={value:e,frame:`${t}`,position:{x:0,y:0,z:.5},color:{r:10,g:10,b:255,a:1}}});const o=v.bind({});o.args={tfs:p,items:d,texts:g,lines:{},hulls:{},displayTfs:!1,displayGrid:!0,isPolar:!1,backgroundColor:"#d0d0d0",planeColor:"#a8a8a8",highlightColor:"#ffffff",plane:-.75,fov:60,ar:!1,vr:!1,onPointerMissed:()=>console.log("Missed Click")};var c;o.parameters={...o.parameters,storySource:{source:`args => {
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
}`,...(c=o.parameters)==null?void 0:c.storySource}};const T=["MeshDebug"];export{o as MeshDebug,T as __namedExportsOrder,L as default};
//# sourceMappingURL=MeshDebug.stories.4476533c.js.map
