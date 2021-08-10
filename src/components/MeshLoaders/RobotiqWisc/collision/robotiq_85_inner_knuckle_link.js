import RobotiqCollision85InnerKnuckleLink from '../../../Meshes/RobotiqWisc/collision/robotiq_85_inner_knuckle_link.glb';
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes } = useGLTF(RobotiqCollision85InnerKnuckleLink)
  return (
    [
        {type:'raw',geometry:nodes.mesh_0.geometry, material:nodes.mesh_0.material,rotation:[-Math.PI/2,0,0],}
    ]
  )
}

useGLTF.preload(RobotiqCollision85InnerKnuckleLink)