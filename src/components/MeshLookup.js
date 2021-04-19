import HeadPitch from './MeshLoaders/Nao/HeadPitch';
import HeadYaw from './MeshLoaders/Nao/HeadYaw';
import LAnklePitch from './MeshLoaders/Nao/LAnklePitch';

const MeshLookupTable = {
  'package://nao_meshes/meshes/V40/HeadPitch.dae': HeadPitch,
  'package://nao_meshes/meshes/V40/HeadYaw.dae': HeadYaw,
  'package://nao_meshes/meshes/V40/LAnklePitch.dae': LAnklePitch,
}

export default function MeshLookup(path) {return MeshLookupTable[path]()}
