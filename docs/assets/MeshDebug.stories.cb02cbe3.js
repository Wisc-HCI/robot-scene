import{r as y}from"./index.7f7b9823.js";import{S as m,M as g,u,E,a as M}from"./ErrorFallback.4b00d79e.js";import{j as o}from"./client.c582ae78.js";import"./_commonjsHelpers.712cc82f.js";import"./inheritsLoose.b8ebfe26.js";const T={title:"Mesh Debug",component:m},z=e=>{const{tfs:t,items:n,hulls:a,lines:l,texts:i,points:c,...S}=e;return y.exports.useEffect(()=>{u.setState({tfs:t,items:n,hulls:a,lines:l,texts:i,points:c})},[t,n,a,l,i,c]),o(E,{FallbackComponent:M,children:o("div",{style:{height:"calc(100vh - 2rem)",width:"calc(100vw - 2rem)"},children:o(m,{...S,store:u,meshLookup:g})})})};let b={},x={},v={};var f=-10,s=-12;Object.keys(g).forEach((e,t)=>{s===0?s+=2:s>0&&s%10===0?(f+=2,s=-10):s+=2,b[`${t}`]={name:`${t}`,position:{x:s,y:f,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},x[e]={shape:e,name:e,frame:`${t}`,position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},scale:e.includes("robotiq_2f_85_gripper_visualization")?{x:.001,y:.001,z:.001}:{x:1,y:1,z:1},editMode:"inactive",highlighted:!1},v[e]={value:e,frame:`${t}`,position:{x:0,y:0,z:.5},color:{r:10,g:10,b:255,a:1}}});const r=z.bind({});r.args={tfs:b,items:x,texts:v,lines:{},hulls:{},points:{},displayTfs:!1,displayGrid:!0,isPolar:!1,backgroundColor:"#d0d0d0",planeColor:"#a8a8a8",highlightColor:"#ffffff",plane:-.75,fov:60,ar:!1,vr:!1,onPointerMissed:()=>console.log("Missed Click")};var p,h,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const {
    tfs,
    items,
    hulls,
    lines,
    texts,
    points,
    ...otherArgs
  } = args;
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
      height: "calc(100vh - 2rem)",
      width: "calc(100vw - 2rem)"
    }}>
        <Scene {...otherArgs} store={useDefaultSceneStore} meshLookup={MeshLookupTable} />
      </div>
    </ErrorBoundary>;
}`,...(d=(h=r.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};const F=["MeshDebug"];export{r as MeshDebug,F as __namedExportsOrder,T as default};
//# sourceMappingURL=MeshDebug.stories.cb02cbe3.js.map
