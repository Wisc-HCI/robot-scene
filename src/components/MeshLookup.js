import HeadPitch from './MeshLoaders/Nao/HeadPitch';
import HeadYaw from './MeshLoaders/Nao/HeadYaw';
import LAnklePitch from './MeshLoaders/Nao/LAnklePitch';
import LAnkleRoll from './MeshLoaders/Nao/LAnkleRoll';
import MK2Printer from './MeshLoaders/Other/MK2Printer';

const MeshLookupTable = {
  'package://nao_meshes/meshes/V40/HeadPitch.dae': HeadPitch,
  'package://nao_meshes/meshes/V40/HeadYaw.dae': HeadYaw,
  'package://nao_meshes/meshes/V40/LAnklePitch.dae': LAnklePitch,
  'package://nao_meshes/meshes/V40/LAnkleRoll.dae': LAnkleRoll,
  'package://app/meshes/MK2Printer.obj':MK2Printer
}

const MeshLookup = (path) => {
  return MeshLookupTable[path]()
}

export { MeshLookupTable, MeshLookup }
