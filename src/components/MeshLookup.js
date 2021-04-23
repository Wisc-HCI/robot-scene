import HeadPitch from './MeshLoaders/Nao/HeadPitch';
import HeadYaw from './MeshLoaders/Nao/HeadYaw';
import LAnklePitch from './MeshLoaders/Nao/LAnklePitch';
import LAnkleRoll from './MeshLoaders/Nao/LAnkleRoll';
import LELbowRoll from './MeshLoaders/Nao/LELbowRoll';
import LFinger11 from './MeshLoaders/Nao/LFinger11';
import LFinger12 from './MeshLoaders/Nao/LFinger12';
import LFinger13 from './MeshLoaders/Nao/LFinger13';
import LFinger21 from './MeshLoaders/Nao/LFinger21';
import LFinger22 from './MeshLoaders/Nao/LFinger22';
import LFinger23 from './MeshLoaders/Nao/LFinger23';
import LHipPitch from './MeshLoaders/Nao/LHipPitch';
import LHipRoll from './MeshLoaders/Nao/LHipRoll';
import LHipYawPitch from './MeshLoaders/Nao/LHipYawPitch';
import LKneePitch from './MeshLoaders/Nao/LKneePitch';
import LShoulderRoll from './MeshLoaders/Nao/LShoulderRoll';
import LThumb1 from './MeshLoaders/Nao/LThumb1';
import LThumb2 from './MeshLoaders/Nao/LThumb2';
import LWristYaw from './MeshLoaders/Nao/LWristYaw';
import RAnklePitch from './MeshLoaders/Nao/RAnklePitch';
import RAnkleRoll from './MeshLoaders/Nao/RAnkleRoll';
import RElbowRoll from  './MeshLoaders/Nao/RElbowRoll';
import RFinger11 from  './MeshLoaders/Nao/RFinger11';
import RFinger12 from  './MeshLoaders/Nao/RFinger12';
import RFinger13 from  './MeshLoaders/Nao/RFinger13';
import RFinger21 from  './MeshLoaders/Nao/RFinger21';
import RFinger22 from  './MeshLoaders/Nao/RFinger22';
import RHipPitch from  './MeshLoaders/Nao/RHipPitch';
import RHipRoll from  './MeshLoaders/Nao/RHipRoll';
import RHipYawPitch from  './MeshLoaders/Nao/RHipYawPitch';
import RKneePitch from  './MeshLoaders/Nao/RKneePitch';
import RShoulderRoll from  './MeshLoaders/Nao/RShoulderRoll';
import RShoulderPitch from  './MeshLoaders/Nao/RShoulderPitch';
import RThumb1 from  './MeshLoaders/Nao/RThumb1';
import RThumb2 from  './MeshLoaders/Nao/RThumb2';
import RWristYaw from  './MeshLoaders/Nao/RWristYaw';
import Torso from  './MeshLoaders/Nao/Torso';


const MeshLookupTable = {
  'package://nao_meshes/meshes/V40/HeadPitch.dae': HeadPitch,
  'package://nao_meshes/meshes/V40/HeadYaw.dae': HeadYaw,
  'package://nao_meshes/meshes/V40/LAnklePitch.dae': LAnklePitch,
  'package://nao_meshes/meshes/V40/LAnkleRoll.dae': LAnkleRoll,
  'package://nao_meshes/meshes/V40/LELbowRoll.dae': LELbowRoll,
  'package://nao_meshes/meshes/V40/LFinger11.dae': LFinger11,
  'package://nao_meshes/meshes/V40/LFinger12.dae': LFinger12,
  'package://nao_meshes/meshes/V40/LFinger13.dae':LFinger13,
  'package://nao_meshes/meshes/V40/LFinger21.dae': LFinger21,
  'package://nao_meshes/meshes/V40/LFinger22.dae': LFinger22,
  'package://nao_meshes/meshes/V40/LFinger23.dae': LFinger23,
  'package://nao_meshes/meshes/V40/LHipPitch.dae': LHipPitch,
  'package://nao_meshes/meshes/V40/LHipRoll.dae': LHipRoll,
  'package://nao_meshes/meshes/V40/LHipYawPitch.dae': LHipYawPitch,
  'package://nao_meshes/meshes/V40/LKneePitch.dae': LKneePitch,
  'package://nao_meshes/meshes/V40/LShoulderRoll.dae': LShoulderRoll,
  'package://nao_meshes/meshes/V40/LThumb1.dae': LThumb1,
  'package://nao_meshes/meshes/V40/LThumb2.dae': LThumb2,
  'package://nao_meshes/meshes/V40/LWristYaw.dae': LWristYaw,
  'package://nao_meshes/meshes/V40/RAnklePitch.dae': RAnklePitch,
  'package://nao_meshes/meshes/V40/RAnkleRoll.dae': RAnkleRoll,
  'package://nao_meshes/meshes/V40/RElbowRoll.dae': RElbowRoll,
  'package://nao_meshes/meshes/V40/RFinger11.dae': RFinger11,
  'package://nao_meshes/meshes/V40/RFinger12.dae': RFinger12,
  'package://nao_meshes/meshes/V40/RFinger13.dae': RFinger13,
  'package://nao_meshes/meshes/V40/RFinger21.dae': RFinger21,
  'package://nao_meshes/meshes/V40/RFinger22.dae': RFinger22,
  'package://nao_meshes/meshes/V40/RHipPitch.dae': RHipPitch,
  'package://nao_meshes/meshes/V40/RHipRoll.dae': RHipRoll,
  'package://nao_meshes/meshes/V40/RHipYawPitch.dae': RHipYawPitch,
  'package://nao_meshes/meshes/V40/RKneePitch.dae': RKneePitch,
  'package://nao_meshes/meshes/V40/RShoulderRoll.dae': RShoulderRoll,
  'package://nao_meshes/meshes/V40/RShoulderPitch.dae': RShoulderPitch,
  'package://nao_meshes/meshes/V40/RThumb1.dae': RThumb1,
  'package://nao_meshes/meshes/V40/RThumb2.dae': RThumb2,
  'package://nao_meshes/meshes/V40/RWristYaw.dae': RWristYaw,
  'package://nao_meshes/meshes/V40/Torso.dae': Torso
}

export default function MeshLookup(path) {return MeshLookupTable[path]()}
