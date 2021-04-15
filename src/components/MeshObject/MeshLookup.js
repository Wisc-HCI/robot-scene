import NaoHead from './meshes/NaoHead.glb';


const RAW_LOOKUP = [
  {name:'nao/head',
   mesh:NaoHead
  }
 ]

let LOOKUP = {};
RAW_LOOKUP.forEach(async (item)=>{
  let value = await import(item.mesh);
  console.log(value);
  LOOKUP[item.name] = value
})

export default LOOKUP;
