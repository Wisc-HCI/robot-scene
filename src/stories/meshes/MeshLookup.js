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
//---------------------------------------------- RobotiqWisc
import RobotiqWiscVisualBaseLink from 
'./MeshLoaders/RobotiqWisc/visual/robotiq_85_base_link';
import RobotiqWiscVisualKnuckleLink from 
'./MeshLoaders/RobotiqWisc/visual/robotiq_85_knuckle_link';
import RobotiqWiscVisualFingerLink from 
'./MeshLoaders/RobotiqWisc/visual/robotiq_85_finger_link';
import RobotiqWiscVisualFingerTipLink from 
'./MeshLoaders/RobotiqWisc/visual/robotiq_85_finger_tip_link';
import RobotiqWiscVisualInnerKnuckleLink from 
'./MeshLoaders/RobotiqWisc/visual/robotiq_85_inner_knuckle_link';
import RobotiqWiscCollisionBaseLink from 
'./MeshLoaders/RobotiqWisc/collision/robotiq_85_base_link';
import RobotiqWiscCollisionKnuckleLink from 
'./MeshLoaders/RobotiqWisc/collision/robotiq_85_knuckle_link';
import RobotiqWiscCollisionFingerLink from 
'./MeshLoaders/RobotiqWisc/collision/robotiq_85_finger_link';
import RobotiqWiscCollisionFingerTipLink from 
'./MeshLoaders/RobotiqWisc/collision/robotiq_85_finger_tip_link';
import RobotiqWiscCollisionInnerKnuckleLink from 
'./MeshLoaders/RobotiqWisc/collision/robotiq_85_inner_knuckle_link';
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
import S1 from
'./MeshLoaders/Baxter/lower_shoulder/S1';
import W2 from
'./MeshLoaders/Baxter/wrist/W2';
//--------------------------------------------------Ur3
import Ur3Base from './MeshLoaders/Ur3/visual/base';
import Ur3Forearm from './MeshLoaders/Ur3/visual/forearm';
import Ur3Shoulder from './MeshLoaders/Ur3/visual/shoulder';
import Ur3Upperarm from './MeshLoaders/Ur3/visual/upperarm';
import Ur3Wrist1 from './MeshLoaders/Ur3/visual/wrist1';
import Ur3Wrist2 from './MeshLoaders/Ur3/visual/wrist2';
import Ur3Wrist3 from './MeshLoaders/Ur3/visual/wrist3';
import Ur3BaseCollision from './MeshLoaders/Ur3/collision/base';
import Ur3ForearmCollision from './MeshLoaders/Ur3/collision/forearm';
import Ur3ShoulderCollision from './MeshLoaders/Ur3/collision/shoulder';
import Ur3UpperarmCollision from './MeshLoaders/Ur3/collision/upperarm';
import Ur3Wrist1Collision from './MeshLoaders/Ur3/collision/wrist1';
import Ur3Wrist2Collision from './MeshLoaders/Ur3/collision/wrist2';
import Ur3Wrist3Collision from './MeshLoaders/Ur3/collision/wrist3';
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
//---------------------------------------------------Other
import Benchy from './MeshLoaders/Other/3DBenchy';
import FlatArrow from './MeshLoaders/Other/Arrow';
import Box from './MeshLoaders/Other/Box';
import Collision_Box from './MeshLoaders/Other/Collision-Box';
import Collision_Mk2_Printer from './MeshLoaders/Other/Collision-Mk2-Printer';
import Collision_Pedestal from './MeshLoaders/Other/Collision-Pedestal';
import Collision_Table from './MeshLoaders/Other/Collision-Table';
import InfoPhycon from './MeshLoaders/Other/InfoPhycon';
import LocationMarker from './MeshLoaders/Other/LocationMarker';
import MK2Printer from './MeshLoaders/Other/MK2Printer';
import OpenWaypointMarker from './MeshLoaders/Other/OpenWaypointMarker';
import Pedestal from './MeshLoaders/Other/Pedestal';
import Table from './MeshLoaders/Other/Table';
import WarningPhycon from './MeshLoaders/Other/WarningPhycon';
import Tag from './MeshLoaders/Other/Tag';
import Flag from './MeshLoaders/Other/Flag';
import Blade from './MeshLoaders/Other/Blade';
import HandleL from './MeshLoaders/Other/HandleL';
import HandleR from './MeshLoaders/Other/HandleR';
import Knife from './MeshLoaders/Other/Knife';
import Conveyor from './MeshLoaders/Other/Conveyor';
import ConveyorCollision from './MeshLoaders/Other/ConveyorCollision';
import TransportJig from './MeshLoaders/Other/TransportJig';
import AssemblyJig from './MeshLoaders/Other/AssemblyJig';
import AssemblyJigCollision from './MeshLoaders/Other/AssemblyJigCollision';
import BladeWithTransportJig from './MeshLoaders/Other/BladeWithTransportJig';
import KnifeWithTransportJig from './MeshLoaders/Other/KnifeWithTransportJig';
import ConveyorDispatcher from './MeshLoaders/Other/ConveyorDispatcher';
import ConveyorReceiver from './MeshLoaders/Other/ConveyorReceiver';
import ConveyorDispatcherCollision from './MeshLoaders/Other/ConveyorDispatcherCollision';
import ConveyorReceiverCollision from './MeshLoaders/Other/ConveyorReceiverCollision';

// import { Sphere, Cube, Cylinder, Arrow } from './Util/StandardMeshes';

const MeshLookupTable = {
  // 'sphere':Sphere,
  // 'cube':Cube,
  // 'cylinder':Cylinder,
  // 'arrow':Arrow,
  'flatarrow':FlatArrow,
  'warning':WarningPhycon,
  'info':InfoPhycon,
  'tag':Tag,
  'flag':Flag,
  'blade':Blade,
  'knife':Knife,
  'handle_l':HandleL,
  'handle_r':HandleR,
  'conveyor':Conveyor,
  'conveyor_collision':ConveyorCollision,
  'transport_jig':TransportJig,
  'assembly_jig':AssemblyJig,
  'assembly_jig_collision':AssemblyJigCollision,
  'blade_with_transport_jig':BladeWithTransportJig,
  'knife_with_transport_jig':KnifeWithTransportJig,
  'conveyor_dispatcher':ConveyorDispatcher,
  'conveyor_receiver':ConveyorReceiver,
  'conveyor_dispatcher_collision':ConveyorDispatcherCollision,
  'conveyor_receiver_collision':ConveyorReceiverCollision,
  //------------------------------------------------------Panda
  'package://franka_ros/franka_description/meshes/visual/finger.dae': Finger,
  'package://franka_ros/franka_description/meshes/visual/hand.dae': Hand,
  'package://franka_ros/franka_description/meshes/visual/link0.dae': Link0,
  'package://franka_ros/franka_description/meshes/visual/link1.dae': Link1, // missing
  'package://franka_ros/franka_description/meshes/visual/link2.dae': Link2,
  'package://franka_ros/franka_description/meshes/visual/link3.dae': Link3,
  'package://franka_ros/franka_description/meshes/visual/link4.dae': Link4,
  'package://franka_ros/franka_description/meshes/visual/link5.dae': Link5,
  'package://franka_ros/franka_description/meshes/visual/link6.dae': Link6,
  'package://franka_ros/franka_description/meshes/visual/link7.dae': Link7,
  //---------------------------------------------------------Robotiq2f85
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_base_link.stl': RobotiqCollision85BaseLink,
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_inner_finger.dae': RobotiqCollision85InnerFinger,// huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_inner_knuckle.dae': RobotiqCollision85InnerKnuckle,// tooo huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_outer_finger.dae': RobotiqCollision85OuterFinger,// too huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_outer_knuckle.dae': RobotiqCollision85OuterKnuckle,//too huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_base_link.stl': RobotiqCollisionBaseLink, // too huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_base_link.dae': RobotiqVisual85BaseLink,
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_inner_finger.dae': RobotiqVisual85InnerFinger, // too huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_inner_knuckle.dae': RobotiqVisual85InnerKnuckle, // too huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_outer_finger.dae': RobotiqVisual85OuterFinger,// huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_outer_knuckle.dae': RobotiqVisual85OuterKnuckle, //huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_pad.dae': RobotiqVisual85Pad,// huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_gripper_coupling.stl': RobotiqVisualGripper, //huge
  //---------------------------------------------------------RobotiqWisc
  'package://robotiq_85_description/meshes/visual/robotiq_85_base_link.dae':RobotiqWiscVisualBaseLink,
  'package://robotiq_85_description/meshes/visual/robotiq_85_knuckle_link.dae':RobotiqWiscVisualKnuckleLink,
  'package://robotiq_85_description/meshes/visual/robotiq_85_finger_link.dae':RobotiqWiscVisualFingerLink,
  'package://robotiq_85_description/meshes/visual/robotiq_85_inner_knuckle_link.dae':RobotiqWiscVisualInnerKnuckleLink,
  'package://robotiq_85_description/meshes/visual/robotiq_85_finger_tip_link.dae':RobotiqWiscVisualFingerTipLink,
  'package://robotiq_85_description/meshes/collision/robotiq_85_base_link.stl':RobotiqWiscCollisionBaseLink,
  'package://robotiq_85_description/meshes/collision/robotiq_85_knuckle_link.stl':RobotiqWiscCollisionKnuckleLink,
  'package://robotiq_85_description/meshes/collision/robotiq_85_finger_link.stl':RobotiqWiscCollisionFingerLink,
  'package://robotiq_85_description/meshes/collision/robotiq_85_inner_knuckle_link.stl':RobotiqWiscCollisionInnerKnuckleLink,
  'package://robotiq_85_description/meshes/collision/robotiq_85_finger_tip_link.stl':RobotiqWiscCollisionFingerTipLink,
  //------------------------------------------------------------------Baxter
   'package://baxter_common/baxter_description/meshes/base/PEDESTAL.DAE':PEDESTAL,
   'package://baxter_common/baxter_description/meshes/base/pedestal_link_collision.DAE':Pedestal_Link_Collision,
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
    'package://ur_description/meshes/ur3/visual/base.dae' : Ur3Base,
    'package://ur_description/meshes/ur3/visual/forearm.dae': Ur3Forearm,
    'package://ur_description/meshes/ur3/visual/shoulder.dae' : Ur3Shoulder,
    'package://ur_description/meshes/ur3/visual/upperarm.dae' : Ur3Upperarm,
    'package://ur_description/meshes/ur3/visual/wrist1.dae' : Ur3Wrist1, 
    'package://ur_description/meshes/ur3/visual/wrist2.dae' : Ur3Wrist2,
    'package://ur_description/meshes/ur3/visual/wrist3.dae' : Ur3Wrist3,
    'package://ur_description/meshes/ur3/collision/base.stl' : Ur3BaseCollision,
    'package://ur_description/meshes/ur3/collision/forearm.stl': Ur3ForearmCollision,
    'package://ur_description/meshes/ur3/collision/shoulder.stl' : Ur3ShoulderCollision,
    'package://ur_description/meshes/ur3/collision/upperarm.stl' : Ur3UpperarmCollision,
    'package://ur_description/meshes/ur3/collision/wrist1.stl' : Ur3Wrist1Collision,
    'package://ur_description/meshes/ur3/collision/wrist2.stl' : Ur3Wrist2Collision,
    'package://ur_description/meshes/ur3/collision/wrist3.stl' : Ur3Wrist3Collision,
    //--------------------------------------------------------------------Ur5
    'package://ur_description/meshes/ur5/visual/base.dae' : Ur5Base,
    'package://ur_description/meshes/ur5/visual/forearm.dae': Ur5Forearm,
    'package://ur_description/meshes/ur5/visual/shoulder.dae' : Ur5Shoulder,
    'package://ur_description/meshes/ur5/visual/upperarm.dae' : Ur5Upperarm,
    'package://ur_description/meshes/ur5/visual/wrist1.dae' : Ur5Wrist1,
    'package://ur_description/meshes/ur5/visual/wrist2.dae' : Ur5Wrist2,
    'package://ur_description/meshes/ur5/visual/wrist3.dae' : Ur5Wrist3,
    //--------------------------------------------------------------------Ur10
     'package://ur_description/meshes/ur10/visual/base.dae' : Ur10Base,
     'package://ur_description/meshes/ur10/visual/forearm.dae': Ur10Forearm,
     'package://ur_description/meshes/ur10/visual/shoulder.dae' : Ur10Shoulder,
     'package://ur_description/meshes/ur10/visual/upperarm.dae' : Ur10Upperarm,
     'package://ur_description/meshes/ur10/visual/wrist1.dae' : Ur10Wrist1,
     'package://ur_description/meshes/ur10/visual/wrist2.dae' : Ur10Wrist2,
     'package://ur_description/meshes/ur10/visual/wrist3.dae' : Ur10Wrist3,
     //-------------------------------------------------------------------Other
     'package://app/meshes/3DBenchy.stl': Benchy,
     'package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/MK2-Printer/MK2-Printer.stl':MK2Printer,
     'package://evd_ros_tasks/tasks/3d_printer_machine_tending/collision_meshes/MK2-Printer.stl': Collision_Mk2_Printer,
     'package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/Box/Box.stl': Box,
     'package://evd_ros_tasks/tasks/3d_printer_machine_tending/collision_meshes/Box.stl': Collision_Box,
     'package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/ur3e-Pedestal/Pedestal.stl':Pedestal,
     'package://evd_ros_tasks/tasks/3d_printer_machine_tending/collision_meshes/Pedestal.stl': Collision_Pedestal,
     'package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/Table/Table.stl':Table,
     'package://evd_ros_tasks/tasks/3d_printer_machine_tending/collision_meshes/Table.stl': Collision_Table ,
     //'package://app/meshes/InfoPhycon.stl': InfoPhycon, // not showing
     'package://app/meshes/LocationMarker.stl': LocationMarker,
     'package://app/meshes/OpenWaypointMarker.stl': OpenWaypointMarker, //
}

const MeshLookup = (path) => MeshLookupTable[path]();

export { MeshLookupTable, MeshLookup };
