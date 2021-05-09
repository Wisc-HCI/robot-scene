import HeadPitch from './MeshLoaders/Nao/HeadPitch';
import HeadYaw from './MeshLoaders/Nao/HeadYaw';
import LAnklePitch from './MeshLoaders/Nao/LAnklePitch';
import LAnkleRoll from './MeshLoaders/Nao/LAnkleRoll';
import LElbowRoll from './MeshLoaders/Nao/LElbowRoll';
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

import MK2Printer from './MeshLoaders/Other/MK2Printer';
import FlatArrow from './MeshLoaders/Other/Arrow';
//---------------------------------------------- Panda
import Finger from './MeshLoaders/Panda/finger';
import Hand from './MeshLoaders/Panda/hand';
import Link0 from './MeshLoaders/Panda/link0';
import Link1 from './MeshLoaders/Panda/link1';
import Link2 from './MeshLoaders/Panda/link2';
import Link3 from './MeshLoaders/Panda/link3';
import Link4 from './MeshLoaders/Panda/link4';
import Link5 from './MeshLoaders/Panda/link5';
import Link6 from './MeshLoaders/Panda/link6';
import Link7 from './MeshLoaders/Panda/link7';
//---------------------------------------------- Robotiq2f85
import RobotiqCollision85BaseLink from
'./MeshLoaders/Robotiq2f85/collision/robotiq_arg2f_85_base_link';
import RobotiqCollision85InnerFinger from
'./MeshLoaders/Robotiq2f85/collision/robotiq_arg2f_85_inner_finger';
import RobotiqCollision85InnerKnuckle from
'./MeshLoaders/Robotiq2f85/collision/robotiq_arg2f_85_inner_knuckle';
import RobotiqCollision85OuterFinger from
'./MeshLoaders/Robotiq2f85/collision/robotiq_arg2f_85_outer_finger';
import RobotiqCollision85OuterKnuckle from
'./MeshLoaders/Robotiq2f85/collision/robotiq_arg2f_85_outer_knuckle';
import RobotiqCollisionBaseLink from
'./MeshLoaders/Robotiq2f85/collision/robotiq_arg2f_base_link';

import RobotiqVisual85BaseLink from
'./MeshLoaders/Robotiq2f85/visual/robotiq_arg2f_85_base_link';
import RobotiqVisual85InnerFinger from
'./MeshLoaders/Robotiq2f85/visual/robotiq_arg2f_85_inner_finger';
import RobotiqVisual85InnerKnuckle from
'./MeshLoaders/Robotiq2f85/visual/robotiq_arg2f_85_inner_knuckle';
import RobotiqVisual85OuterFinger from
'./MeshLoaders/Robotiq2f85/visual/robotiq_arg2f_85_outer_finger';
import RobotiqVisual85OuterKnuckle from
'./MeshLoaders/Robotiq2f85/visual/robotiq_arg2f_85_outer_knuckle';
import RobotiqVisual85Pad from
'./MeshLoaders/Robotiq2f85/visual/robotiq_arg2f_85_pad';
import RobotiqVisualGripper from
'./MeshLoaders/Robotiq2f85/visual/robotiq_gripper_coupling';
//-------------------------------------------------Baxter
import Pedestal_Link_Collision from
'./MeshLoaders/Baxter/base/Pedestal_link_collision';
import PEDESTAL from
'./MeshLoaders/Baxter/base/PEDESTAL';
import H0 from
'./MeshLoaders/Baxter/head/H0';
import H1 from
'./MeshLoaders/Baxter/head/H1';
import E1 from
'./MeshLoaders/Baxter/lower_elbow/E1';
import W1 from
'./MeshLoaders/Baxter/lower_forearm/W1';
import Base_Link_Collision from
'./MeshLoaders/Baxter/torso/Base_link_collision';
import Base_Link from
'./MeshLoaders/Baxter/torso/Base_link';
import E0 from
'./MeshLoaders/Baxter/upper_elbow/E0';
import W0 from
'./MeshLoaders/Baxter/upper_forearm/W0';
import S0 from
'./MeshLoaders/Baxter/upper_shoulder/S0';
import W2 from
'./MeshLoaders/Baxter/wrist/W2';
//--------------------------------------------------Ur3
import Ur3Base from './MeshLoaders/Ur3/base';
import Ur3Forearm from './MeshLoaders/Ur3/forearm';
import Ur3Shoulder from './MeshLoaders/Ur3/shoulder';
import Ur3Upperarm from './MeshLoaders/Ur3/upperarm';
import Ur3Wrist1 from './MeshLoaders/Ur3/wrist1';
import Ur3Wrist2 from './MeshLoaders/Ur3/wrist2';
import Ur3Wrist3 from './MeshLoaders/Ur3/wrist3';
//--------------------------------------------------Ur5
import Ur5Base from './MeshLoaders/Ur5/base';
import Ur5Forearm from './MeshLoaders/Ur5/forearm';
import Ur5Shoulder from './MeshLoaders/Ur5/shoulder';
import Ur5Upperarm from './MeshLoaders/Ur5/upperarm';
import Ur5Wrist1 from './MeshLoaders/Ur5/wrist1';
import Ur5Wrist2 from './MeshLoaders/Ur5/wrist2';
import Ur5Wrist3 from './MeshLoaders/Ur5/wrist3';
//---------------------------------------------------Ur10
import Ur10Base from './MeshLoaders/Ur10/base';
import Ur10Forearm from './MeshLoaders/Ur10/forearm';
import Ur10Shoulder from './MeshLoaders/Ur10/shoulder';
import Ur10Upperarm from './MeshLoaders/Ur10/upperarm';
import Ur10Wrist1 from './MeshLoaders/Ur10/wrist1';
import Ur10Wrist2 from './MeshLoaders/Ur10/wrist2';
import Ur10Wrist3 from './MeshLoaders/Ur10/wrist3';




import { Sphere, Cube, Cylinder, Arrow } from './Util/StandardMeshes';

const MeshLookupTable = {
  'sphere':Sphere,
  'cube':Cube,
  'cylinder':Cylinder,
  'arrow':Arrow,
  'flatarrow':FlatArrow,
  'package://nao_meshes/meshes/V40/HeadPitch.dae': HeadPitch,
  'package://nao_meshes/meshes/V40/HeadYaw.dae': HeadYaw,
  'package://nao_meshes/meshes/V40/LAnklePitch.dae': LAnklePitch,
  'package://nao_meshes/meshes/V40/LAnkleRoll.dae': LAnkleRoll,
  'package://nao_meshes/meshes/V40/LElbowRoll.dae': LElbowRoll,
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
  'package://nao_meshes/meshes/V40/Torso.dae': Torso,
  'package://app/meshes/MK2Printer.obj':MK2Printer,
  //------------------------------------------------------Panda
  'package://franka_ros/franka_description/meshes/visual/finger.dae': Finger,
  'package://franka_ros/franka_description/meshes/visual/hand.dae': Hand,
  'package://franka_ros/franka_description/meshes/visual/link0.dae': Link0,
  'package://franka_ros/franka_description/meshes/visual/link1.dae': Link1,
  'package://franka_ros/franka_description/meshes/visual/link2.dae': Link2,
  'package://franka_ros/franka_description/meshes/visual/link3.dae': Link3,
  'package://franka_ros/franka_description/meshes/visual/link4.dae': Link4,
  'package://franka_ros/franka_description/meshes/visual/link5.dae': Link5,
  'package://franka_ros/franka_description/meshes/visual/link6.dae': Link6,
  'package://franka_ros/franka_description/meshes/visual/link7.dae': Link7,
  //---------------------------------------------------------Robotiq2f85
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_base_link.stl': RobotiqCollision85BaseLink,
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_inner_finger.dae': RobotiqCollision85InnerFinger,
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_inner_knuckle.dae': RobotiqCollision85InnerKnuckle,
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_outer_finger.dae': RobotiqCollision85OuterFinger,
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_outer_knuckle.dae': RobotiqCollision85OuterKnuckle,
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_base_link.stl': RobotiqCollisionBaseLink,

  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_base_link.dae': RobotiqVisual85BaseLink,
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_inner_finger.dae': RobotiqVisual85InnerFinger,
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_inner_knuckle.dae': RobotiqVisual85InnerKnuckle,
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_outer_finger.dae': RobotiqVisual85OuterFinger,
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_outer_knuckle.dae': RobotiqVisual85OuterKnuckle,
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_pad.dae': RobotiqVisual85Pad,
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_gripper_coupling.stl': RobotiqVisualGripper,
  //------------------------------------------------------------------Baxter
  'package://baxter_common/baxter_description/meshes/base/PEDESTAL.DAE':PEDESTAL,
  'package://baxter_common/baxter_description/meshes/base/pedestal_link_collision.DAE':pedestal_link_collision,
  'package://baxter_common/baxter_description/meshes/head/H0.DAE' : H0,
  'package://baxter_common/baxter_description/meshes/head/H1.DAE' : H1,
  'package://baxter_common/baxter_description/meshes/lower_elbow/E1.DAE' : E1,
  'package://baxter_common/baxter_description/meshes/lower_forearm/W1.DAE': W1,
  'package://baxter_common/baxter_description/meshes/lower_shoulder/S1.DAE':S1,
  'package://baxter_common/baxter_description/meshes/torso/base_link.DAE':Base_Link,
  'package://baxter_common/baxter_description/meshes/torso/base_link_collision.DAE' : Base_Link_Collision,
  'package://baxter_common/baxter_description/meshes/upper_elbow/E0.DAE':E0,
  'package://baxter_common/baxter_description/meshes/upper_forearm/W0.DAE':W0,
  'package://baxter_common/baxter_description/meshes/upper_shoulder/S0.DAE':S0,
  'package://baxter_common/baxter_description/meshes/wrist/W2.DAE': W2,
  //---------------------------------------------------------------------Ur3
  'package://universal_robot/ur_description/meshes/ur3/visual/base.dae' : Ur3Base,
  'package://universal_robot/ur_description/meshes/ur3/visual/forearm.dae': Ur3Forearm,
  'package://universal_robot/ur_description/meshes/ur3/visual/shoulder.dae' : Ur3Shoulder,
  'package://universal_robot/ur_description/meshes/ur3/visual/upperarm.dae' : Ur3Upperarm,
  'package://universal_robot/ur_description/meshes/ur3/visual/wrist1.dae' : Ur3Wrist1,
  'package://universal_robot/ur_description/meshes/ur3/visual/wrist2.dae' : Ur3Wrist2,
  'package://universal_robot/ur_description/meshes/ur3/visual/wrist3.dae' : Ur3Wrist3,
  //--------------------------------------------------------------------Ur5
  'package://universal_robot/ur_description/meshes/ur5/visual/base.dae' : Ur5Base,
  'package://universal_robot/ur_description/meshes/ur5/visual/forearm.dae': Ur5Forearm,
  'package://universal_robot/ur_description/meshes/ur5/visual/shoulder.dae' : Ur5Shoulder,
  'package://universal_robot/ur_description/meshes/ur5/visual/upperarm.dae' : Ur5Upperarm,
  'package://universal_robot/ur_description/meshes/ur5/visual/wrist1.dae' : Ur5Wrist1,
  'package://universal_robot/ur_description/meshes/ur3/visual/wrist2.dae' : Ur5Wrist2,
  'package://universal_robot/ur_description/meshes/ur3/visual/wrist3.dae' : Ur5Wrist3,
  //--------------------------------------------------------------------Ur10
   'package://universal_robot/ur_description/meshes/ur10/visual/base.dae' : Ur10Base,
   'package://universal_robot/ur_description/meshes/ur10/visual/forearm.dae': Ur10Forearm,
   'package://universal_robot/ur_description/meshes/ur10/visual/shoulder.dae' : Ur10Shoulder,
   'package://universal_robot/ur_description/meshes/ur10/visual/upperarm.dae' : Ur10Upperarm,
   'package://universal_robot/ur_description/meshes/ur10/visual/wrist1.dae' : Ur10Wrist1,
   'package://universal_robot/ur_description/meshes/ur10/visual/wrist2.dae' : Ur10Wrist2,
   'package://universal_robot/ur_description/meshes/ur10/visual/wrist3.dae' : Ur10Wrist3













}

const MeshLookup = (path) => MeshLookupTable[path]();

export { MeshLookupTable, MeshLookup };
