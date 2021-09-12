import RobotiqCollision85FingerTipLink from '../../../Meshes/RobotiqWisc/collision/robotiq_85_finger_tip_link.glb';
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes } = useGLTF(RobotiqCollision85FingerTipLink)
  return (
    [{type:'group', rotation:[-Math.PI/2,0,0],children:[
        {type:'raw',geometry:nodes.mesh_0.geometry, material:nodes.mesh_0.material}
    ]}]
  )
}

useGLTF.preload(RobotiqCollision85FingerTipLink)