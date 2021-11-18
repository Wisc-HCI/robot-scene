"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeshLookupTable = exports.MeshLookup = void 0;

var _HeadPitch = _interopRequireDefault(require("./MeshLoaders/Nao/HeadPitch"));

var _HeadYaw = _interopRequireDefault(require("./MeshLoaders/Nao/HeadYaw"));

var _LAnklePitch = _interopRequireDefault(require("./MeshLoaders/Nao/LAnklePitch"));

var _LAnkleRoll = _interopRequireDefault(require("./MeshLoaders/Nao/LAnkleRoll"));

var _LElbowRoll = _interopRequireDefault(require("./MeshLoaders/Nao/LElbowRoll"));

var _LFinger = _interopRequireDefault(require("./MeshLoaders/Nao/LFinger11"));

var _LFinger2 = _interopRequireDefault(require("./MeshLoaders/Nao/LFinger12"));

var _LFinger3 = _interopRequireDefault(require("./MeshLoaders/Nao/LFinger13"));

var _LFinger4 = _interopRequireDefault(require("./MeshLoaders/Nao/LFinger21"));

var _LFinger5 = _interopRequireDefault(require("./MeshLoaders/Nao/LFinger22"));

var _LFinger6 = _interopRequireDefault(require("./MeshLoaders/Nao/LFinger23"));

var _LHipPitch = _interopRequireDefault(require("./MeshLoaders/Nao/LHipPitch"));

var _LHipRoll = _interopRequireDefault(require("./MeshLoaders/Nao/LHipRoll"));

var _LHipYawPitch = _interopRequireDefault(require("./MeshLoaders/Nao/LHipYawPitch"));

var _LKneePitch = _interopRequireDefault(require("./MeshLoaders/Nao/LKneePitch"));

var _LShoulderRoll = _interopRequireDefault(require("./MeshLoaders/Nao/LShoulderRoll"));

var _LThumb = _interopRequireDefault(require("./MeshLoaders/Nao/LThumb1"));

var _LThumb2 = _interopRequireDefault(require("./MeshLoaders/Nao/LThumb2"));

var _LWristYaw = _interopRequireDefault(require("./MeshLoaders/Nao/LWristYaw"));

var _RAnklePitch = _interopRequireDefault(require("./MeshLoaders/Nao/RAnklePitch"));

var _RAnkleRoll = _interopRequireDefault(require("./MeshLoaders/Nao/RAnkleRoll"));

var _RElbowRoll = _interopRequireDefault(require("./MeshLoaders/Nao/RElbowRoll"));

var _RFinger = _interopRequireDefault(require("./MeshLoaders/Nao/RFinger11"));

var _RFinger2 = _interopRequireDefault(require("./MeshLoaders/Nao/RFinger12"));

var _RFinger3 = _interopRequireDefault(require("./MeshLoaders/Nao/RFinger13"));

var _RFinger4 = _interopRequireDefault(require("./MeshLoaders/Nao/RFinger21"));

var _RFinger5 = _interopRequireDefault(require("./MeshLoaders/Nao/RFinger22"));

var _RHipPitch = _interopRequireDefault(require("./MeshLoaders/Nao/RHipPitch"));

var _RHipRoll = _interopRequireDefault(require("./MeshLoaders/Nao/RHipRoll"));

var _RHipYawPitch = _interopRequireDefault(require("./MeshLoaders/Nao/RHipYawPitch"));

var _RKneePitch = _interopRequireDefault(require("./MeshLoaders/Nao/RKneePitch"));

var _RShoulderRoll = _interopRequireDefault(require("./MeshLoaders/Nao/RShoulderRoll"));

var _RShoulderPitch = _interopRequireDefault(require("./MeshLoaders/Nao/RShoulderPitch"));

var _RThumb = _interopRequireDefault(require("./MeshLoaders/Nao/RThumb1"));

var _RThumb2 = _interopRequireDefault(require("./MeshLoaders/Nao/RThumb2"));

var _RWristYaw = _interopRequireDefault(require("./MeshLoaders/Nao/RWristYaw"));

var _Torso = _interopRequireDefault(require("./MeshLoaders/Nao/Torso"));

var _finger = _interopRequireDefault(require("./MeshLoaders/Panda/finger"));

var _hand = _interopRequireDefault(require("./MeshLoaders/Panda/hand"));

var _link = _interopRequireDefault(require("./MeshLoaders/Panda/link0"));

var _link2 = _interopRequireDefault(require("./MeshLoaders/Panda/link1"));

var _link3 = _interopRequireDefault(require("./MeshLoaders/Panda/link2"));

var _link4 = _interopRequireDefault(require("./MeshLoaders/Panda/link3"));

var _link5 = _interopRequireDefault(require("./MeshLoaders/Panda/link4"));

var _link6 = _interopRequireDefault(require("./MeshLoaders/Panda/link5"));

var _link7 = _interopRequireDefault(require("./MeshLoaders/Panda/link6"));

var _link8 = _interopRequireDefault(require("./MeshLoaders/Panda/link7"));

var _robotiq_arg2f_85_base_link = _interopRequireDefault(require("./MeshLoaders/Robotiq2f85/collision/robotiq_arg2f_85_base_link"));

var _robotiq_arg2f_85_inner_finger = _interopRequireDefault(require("./MeshLoaders/Robotiq2f85/collision/robotiq_arg2f_85_inner_finger"));

var _robotiq_arg2f_85_inner_knuckle = _interopRequireDefault(require("./MeshLoaders/Robotiq2f85/collision/robotiq_arg2f_85_inner_knuckle"));

var _robotiq_arg2f_85_outer_finger = _interopRequireDefault(require("./MeshLoaders/Robotiq2f85/collision/robotiq_arg2f_85_outer_finger"));

var _robotiq_arg2f_85_outer_knuckle = _interopRequireDefault(require("./MeshLoaders/Robotiq2f85/collision/robotiq_arg2f_85_outer_knuckle"));

var _robotiq_arg2f_base_link = _interopRequireDefault(require("./MeshLoaders/Robotiq2f85/collision/robotiq_arg2f_base_link"));

var _robotiq_arg2f_85_base_link2 = _interopRequireDefault(require("./MeshLoaders/Robotiq2f85/visual/robotiq_arg2f_85_base_link"));

var _robotiq_arg2f_85_inner_finger2 = _interopRequireDefault(require("./MeshLoaders/Robotiq2f85/visual/robotiq_arg2f_85_inner_finger"));

var _robotiq_arg2f_85_inner_knuckle2 = _interopRequireDefault(require("./MeshLoaders/Robotiq2f85/visual/robotiq_arg2f_85_inner_knuckle"));

var _robotiq_arg2f_85_outer_finger2 = _interopRequireDefault(require("./MeshLoaders/Robotiq2f85/visual/robotiq_arg2f_85_outer_finger"));

var _robotiq_arg2f_85_outer_knuckle2 = _interopRequireDefault(require("./MeshLoaders/Robotiq2f85/visual/robotiq_arg2f_85_outer_knuckle"));

var _robotiq_arg2f_85_pad = _interopRequireDefault(require("./MeshLoaders/Robotiq2f85/visual/robotiq_arg2f_85_pad"));

var _robotiq_gripper_coupling = _interopRequireDefault(require("./MeshLoaders/Robotiq2f85/visual/robotiq_gripper_coupling"));

var _robotiq_85_base_link = _interopRequireDefault(require("./MeshLoaders/RobotiqWisc/visual/robotiq_85_base_link"));

var _robotiq_85_knuckle_link = _interopRequireDefault(require("./MeshLoaders/RobotiqWisc/visual/robotiq_85_knuckle_link"));

var _robotiq_85_finger_link = _interopRequireDefault(require("./MeshLoaders/RobotiqWisc/visual/robotiq_85_finger_link"));

var _robotiq_85_finger_tip_link = _interopRequireDefault(require("./MeshLoaders/RobotiqWisc/visual/robotiq_85_finger_tip_link"));

var _robotiq_85_inner_knuckle_link = _interopRequireDefault(require("./MeshLoaders/RobotiqWisc/visual/robotiq_85_inner_knuckle_link"));

var _robotiq_85_base_link2 = _interopRequireDefault(require("./MeshLoaders/RobotiqWisc/collision/robotiq_85_base_link"));

var _robotiq_85_knuckle_link2 = _interopRequireDefault(require("./MeshLoaders/RobotiqWisc/collision/robotiq_85_knuckle_link"));

var _robotiq_85_finger_link2 = _interopRequireDefault(require("./MeshLoaders/RobotiqWisc/collision/robotiq_85_finger_link"));

var _robotiq_85_finger_tip_link2 = _interopRequireDefault(require("./MeshLoaders/RobotiqWisc/collision/robotiq_85_finger_tip_link"));

var _robotiq_85_inner_knuckle_link2 = _interopRequireDefault(require("./MeshLoaders/RobotiqWisc/collision/robotiq_85_inner_knuckle_link"));

var _Pedestal_link_collision = _interopRequireDefault(require("./MeshLoaders/Baxter/base/Pedestal_link_collision"));

var _PEDESTAL = _interopRequireDefault(require("./MeshLoaders/Baxter/base/PEDESTAL"));

var _H = _interopRequireDefault(require("./MeshLoaders/Baxter/head/H0"));

var _H2 = _interopRequireDefault(require("./MeshLoaders/Baxter/head/H1"));

var _E = _interopRequireDefault(require("./MeshLoaders/Baxter/lower_elbow/E1"));

var _W = _interopRequireDefault(require("./MeshLoaders/Baxter/lower_forearm/W1"));

var _Base_link_collision = _interopRequireDefault(require("./MeshLoaders/Baxter/torso/Base_link_collision"));

var _Base_link = _interopRequireDefault(require("./MeshLoaders/Baxter/torso/Base_link"));

var _E2 = _interopRequireDefault(require("./MeshLoaders/Baxter/upper_elbow/E0"));

var _W2 = _interopRequireDefault(require("./MeshLoaders/Baxter/upper_forearm/W0"));

var _S = _interopRequireDefault(require("./MeshLoaders/Baxter/upper_shoulder/S0"));

var _S2 = _interopRequireDefault(require("./MeshLoaders/Baxter/lower_shoulder/S1"));

var _W3 = _interopRequireDefault(require("./MeshLoaders/Baxter/wrist/W2"));

var _base = _interopRequireDefault(require("./MeshLoaders/Ur3/visual/base"));

var _forearm = _interopRequireDefault(require("./MeshLoaders/Ur3/visual/forearm"));

var _shoulder = _interopRequireDefault(require("./MeshLoaders/Ur3/visual/shoulder"));

var _upperarm = _interopRequireDefault(require("./MeshLoaders/Ur3/visual/upperarm"));

var _wrist = _interopRequireDefault(require("./MeshLoaders/Ur3/visual/wrist1"));

var _wrist2 = _interopRequireDefault(require("./MeshLoaders/Ur3/visual/wrist2"));

var _wrist3 = _interopRequireDefault(require("./MeshLoaders/Ur3/visual/wrist3"));

var _base2 = _interopRequireDefault(require("./MeshLoaders/Ur3/collision/base"));

var _forearm2 = _interopRequireDefault(require("./MeshLoaders/Ur3/collision/forearm"));

var _shoulder2 = _interopRequireDefault(require("./MeshLoaders/Ur3/collision/shoulder"));

var _upperarm2 = _interopRequireDefault(require("./MeshLoaders/Ur3/collision/upperarm"));

var _wrist4 = _interopRequireDefault(require("./MeshLoaders/Ur3/collision/wrist1"));

var _wrist5 = _interopRequireDefault(require("./MeshLoaders/Ur3/collision/wrist2"));

var _wrist6 = _interopRequireDefault(require("./MeshLoaders/Ur3/collision/wrist3"));

var _base3 = _interopRequireDefault(require("./MeshLoaders/Ur5/base"));

var _forearm3 = _interopRequireDefault(require("./MeshLoaders/Ur5/forearm"));

var _shoulder3 = _interopRequireDefault(require("./MeshLoaders/Ur5/shoulder"));

var _upperarm3 = _interopRequireDefault(require("./MeshLoaders/Ur5/upperarm"));

var _wrist7 = _interopRequireDefault(require("./MeshLoaders/Ur5/wrist1"));

var _wrist8 = _interopRequireDefault(require("./MeshLoaders/Ur5/wrist2"));

var _wrist9 = _interopRequireDefault(require("./MeshLoaders/Ur5/wrist3"));

var _base4 = _interopRequireDefault(require("./MeshLoaders/Ur10/base"));

var _forearm4 = _interopRequireDefault(require("./MeshLoaders/Ur10/forearm"));

var _shoulder4 = _interopRequireDefault(require("./MeshLoaders/Ur10/shoulder"));

var _upperarm4 = _interopRequireDefault(require("./MeshLoaders/Ur10/upperarm"));

var _wrist10 = _interopRequireDefault(require("./MeshLoaders/Ur10/wrist1"));

var _wrist11 = _interopRequireDefault(require("./MeshLoaders/Ur10/wrist2"));

var _wrist12 = _interopRequireDefault(require("./MeshLoaders/Ur10/wrist3"));

var _DBenchy = _interopRequireDefault(require("./MeshLoaders/Other/3DBenchy"));

var _Arrow = _interopRequireDefault(require("./MeshLoaders/Other/Arrow"));

var _Box = _interopRequireDefault(require("./MeshLoaders/Other/Box"));

var _CollisionBox = _interopRequireDefault(require("./MeshLoaders/Other/Collision-Box"));

var _CollisionMk2Printer = _interopRequireDefault(require("./MeshLoaders/Other/Collision-Mk2-Printer"));

var _CollisionPedestal = _interopRequireDefault(require("./MeshLoaders/Other/Collision-Pedestal"));

var _CollisionTable = _interopRequireDefault(require("./MeshLoaders/Other/Collision-Table"));

var _InfoPhycon = _interopRequireDefault(require("./MeshLoaders/Other/InfoPhycon"));

var _LocationMarker = _interopRequireDefault(require("./MeshLoaders/Other/LocationMarker"));

var _MK2Printer = _interopRequireDefault(require("./MeshLoaders/Other/MK2Printer"));

var _OpenWaypointMarker = _interopRequireDefault(require("./MeshLoaders/Other/OpenWaypointMarker"));

var _Pedestal = _interopRequireDefault(require("./MeshLoaders/Other/Pedestal"));

var _Table = _interopRequireDefault(require("./MeshLoaders/Other/Table"));

var _WarningPhycon = _interopRequireDefault(require("./MeshLoaders/Other/WarningPhycon"));

var _Tag = _interopRequireDefault(require("./MeshLoaders/Other/Tag"));

var _Flag = _interopRequireDefault(require("./MeshLoaders/Other/Flag"));

var _Blade = _interopRequireDefault(require("./MeshLoaders/Other/Blade"));

var _HandleL = _interopRequireDefault(require("./MeshLoaders/Other/HandleL"));

var _HandleR = _interopRequireDefault(require("./MeshLoaders/Other/HandleR"));

var _Knife = _interopRequireDefault(require("./MeshLoaders/Other/Knife"));

var _Conveyor = _interopRequireDefault(require("./MeshLoaders/Other/Conveyor"));

var _ConveyorCollision = _interopRequireDefault(require("./MeshLoaders/Other/ConveyorCollision"));

var _TransportJig = _interopRequireDefault(require("./MeshLoaders/Other/TransportJig"));

var _AssemblyJig = _interopRequireDefault(require("./MeshLoaders/Other/AssemblyJig"));

var _AssemblyJigCollision = _interopRequireDefault(require("./MeshLoaders/Other/AssemblyJigCollision"));

var _BladeWithTransportJig = _interopRequireDefault(require("./MeshLoaders/Other/BladeWithTransportJig"));

var _KnifeWithTransportJig = _interopRequireDefault(require("./MeshLoaders/Other/KnifeWithTransportJig"));

var _ConveyorDispatcher = _interopRequireDefault(require("./MeshLoaders/Other/ConveyorDispatcher"));

var _ConveyorReceiver = _interopRequireDefault(require("./MeshLoaders/Other/ConveyorReceiver"));

var _ConveyorDispatcherCollision = _interopRequireDefault(require("./MeshLoaders/Other/ConveyorDispatcherCollision"));

var _ConveyorReceiverCollision = _interopRequireDefault(require("./MeshLoaders/Other/ConveyorReceiverCollision"));

var _StandardMeshes = require("./Util/StandardMeshes");

var _MeshLookupTable;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MeshLookupTable = (_MeshLookupTable = {
  'sphere': _StandardMeshes.Sphere,
  'cube': _StandardMeshes.Cube,
  'cylinder': _StandardMeshes.Cylinder,
  'arrow': _StandardMeshes.Arrow,
  'flatarrow': _Arrow.default,
  'warning': _WarningPhycon.default,
  'info': _InfoPhycon.default,
  'tag': _Tag.default,
  'flag': _Flag.default,
  'blade': _Blade.default,
  'knife': _Knife.default,
  'handle_l': _HandleL.default,
  'handle_r': _HandleR.default,
  'conveyor': _Conveyor.default,
  'conveyor_collision': _ConveyorCollision.default,
  'transport_jig': _TransportJig.default,
  'assembly_jig': _AssemblyJig.default,
  'assembly_jig_collision': _AssemblyJigCollision.default,
  'blade_with_transport_jig': _BladeWithTransportJig.default,
  'knife_with_transport_jig': _KnifeWithTransportJig.default,
  'conveyor_dispatcher': _ConveyorDispatcher.default,
  'conveyor_receiver': _ConveyorReceiver.default,
  'conveyor_dispatcher_collision': _ConveyorDispatcherCollision.default,
  'conveyor_receiver_collision': _ConveyorReceiverCollision.default,
  'package://nao_meshes/meshes/V40/HeadPitch.dae': _HeadPitch.default,
  'package://nao_meshes/meshes/V40/HeadYaw.dae': _HeadYaw.default,
  'package://nao_meshes/meshes/V40/LAnklePitch.dae': _LAnklePitch.default,
  'package://nao_meshes/meshes/V40/LAnkleRoll.dae': _LAnkleRoll.default,
  'package://nao_meshes/meshes/V40/LElbowRoll.dae': _LElbowRoll.default,
  'package://nao_meshes/meshes/V40/LFinger11.dae': _LFinger.default,
  'package://nao_meshes/meshes/V40/LFinger12.dae': _LFinger2.default,
  'package://nao_meshes/meshes/V40/LFinger13.dae': _LFinger3.default,
  'package://nao_meshes/meshes/V40/LFinger21.dae': _LFinger4.default,
  'package://nao_meshes/meshes/V40/LFinger22.dae': _LFinger5.default,
  'package://nao_meshes/meshes/V40/LFinger23.dae': _LFinger6.default,
  'package://nao_meshes/meshes/V40/LHipPitch.dae': _LHipPitch.default,
  'package://nao_meshes/meshes/V40/LHipRoll.dae': _LHipRoll.default,
  'package://nao_meshes/meshes/V40/LHipYawPitch.dae': _LHipYawPitch.default,
  'package://nao_meshes/meshes/V40/LKneePitch.dae': _LKneePitch.default,
  'package://nao_meshes/meshes/V40/LShoulderRoll.dae': _LShoulderRoll.default,
  'package://nao_meshes/meshes/V40/LThumb1.dae': _LThumb.default,
  'package://nao_meshes/meshes/V40/LThumb2.dae': _LThumb2.default,
  'package://nao_meshes/meshes/V40/LWristYaw.dae': _LWristYaw.default,
  'package://nao_meshes/meshes/V40/RAnklePitch.dae': _RAnklePitch.default,
  'package://nao_meshes/meshes/V40/RAnkleRoll.dae': _RAnkleRoll.default,
  'package://nao_meshes/meshes/V40/RElbowRoll.dae': _RElbowRoll.default,
  'package://nao_meshes/meshes/V40/RFinger11.dae': _RFinger.default,
  'package://nao_meshes/meshes/V40/RFinger12.dae': _RFinger2.default,
  'package://nao_meshes/meshes/V40/RFinger13.dae': _RFinger3.default,
  'package://nao_meshes/meshes/V40/RFinger21.dae': _RFinger4.default,
  'package://nao_meshes/meshes/V40/RFinger22.dae': _RFinger5.default,
  'package://nao_meshes/meshes/V40/RHipPitch.dae': _RHipPitch.default,
  'package://nao_meshes/meshes/V40/RHipRoll.dae': _RHipRoll.default,
  'package://nao_meshes/meshes/V40/RHipYawPitch.dae': _RHipYawPitch.default,
  'package://nao_meshes/meshes/V40/RKneePitch.dae': _RKneePitch.default,
  'package://nao_meshes/meshes/V40/RShoulderRoll.dae': _RShoulderRoll.default,
  'package://nao_meshes/meshes/V40/RShoulderPitch.dae': _RShoulderPitch.default,
  'package://nao_meshes/meshes/V40/RThumb1.dae': _RThumb.default,
  'package://nao_meshes/meshes/V40/RThumb2.dae': _RThumb2.default,
  'package://nao_meshes/meshes/V40/RWristYaw.dae': _RWristYaw.default,
  'package://nao_meshes/meshes/V40/Torso.dae': _Torso.default,
  //------------------------------------------------------Panda
  'package://franka_ros/franka_description/meshes/visual/finger.dae': _finger.default,
  'package://franka_ros/franka_description/meshes/visual/hand.dae': _hand.default,
  'package://franka_ros/franka_description/meshes/visual/link0.dae': _link.default,
  'package://franka_ros/franka_description/meshes/visual/link1.dae': _link2.default,
  // missing
  'package://franka_ros/franka_description/meshes/visual/link2.dae': _link3.default,
  'package://franka_ros/franka_description/meshes/visual/link3.dae': _link4.default,
  'package://franka_ros/franka_description/meshes/visual/link4.dae': _link5.default,
  'package://franka_ros/franka_description/meshes/visual/link5.dae': _link6.default,
  'package://franka_ros/franka_description/meshes/visual/link6.dae': _link7.default,
  'package://franka_ros/franka_description/meshes/visual/link7.dae': _link8.default,
  //---------------------------------------------------------Robotiq2f85
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_base_link.stl': _robotiq_arg2f_85_base_link.default,
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_inner_finger.dae': _robotiq_arg2f_85_inner_finger.default,
  // huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_inner_knuckle.dae': _robotiq_arg2f_85_inner_knuckle.default,
  // tooo huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_outer_finger.dae': _robotiq_arg2f_85_outer_finger.default,
  // too huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_outer_knuckle.dae': _robotiq_arg2f_85_outer_knuckle.default,
  //too huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_base_link.stl': _robotiq_arg2f_base_link.default,
  // too huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_base_link.dae': _robotiq_arg2f_85_base_link2.default,
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_inner_finger.dae': _robotiq_arg2f_85_inner_finger2.default,
  // too huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_inner_knuckle.dae': _robotiq_arg2f_85_inner_knuckle2.default,
  // too huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_outer_finger.dae': _robotiq_arg2f_85_outer_finger2.default,
  // huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_outer_knuckle.dae': _robotiq_arg2f_85_outer_knuckle2.default,
  //huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_pad.dae': _robotiq_arg2f_85_pad.default,
  // huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_gripper_coupling.stl': _robotiq_gripper_coupling.default,
  //huge
  //---------------------------------------------------------RobotiqWisc
  'package://robotiq_85_description/meshes/visual/robotiq_85_base_link.dae': _robotiq_85_base_link.default,
  'package://robotiq_85_description/meshes/visual/robotiq_85_knuckle_link.dae': _robotiq_85_knuckle_link.default,
  'package://robotiq_85_description/meshes/visual/robotiq_85_finger_link.dae': _robotiq_85_finger_link.default,
  'package://robotiq_85_description/meshes/visual/robotiq_85_inner_knuckle_link.dae': _robotiq_85_inner_knuckle_link.default,
  'package://robotiq_85_description/meshes/visual/robotiq_85_finger_tip_link.dae': _robotiq_85_finger_tip_link.default,
  'package://robotiq_85_description/meshes/collision/robotiq_85_base_link.stl': _robotiq_85_base_link2.default,
  'package://robotiq_85_description/meshes/collision/robotiq_85_knuckle_link.stl': _robotiq_85_knuckle_link2.default,
  'package://robotiq_85_description/meshes/collision/robotiq_85_finger_link.stl': _robotiq_85_finger_link2.default,
  'package://robotiq_85_description/meshes/collision/robotiq_85_inner_knuckle_link.stl': _robotiq_85_inner_knuckle_link2.default,
  'package://robotiq_85_description/meshes/collision/robotiq_85_finger_tip_link.stl': _robotiq_85_finger_tip_link2.default,
  //------------------------------------------------------------------Baxter
  'package://baxter_common/baxter_description/meshes/base/PEDESTAL.DAE': _PEDESTAL.default,
  'package://baxter_common/baxter_description/meshes/base/pedestal_link_collision.DAE': _Pedestal_link_collision.default,
  'package://baxter_common/baxter_description/meshes/head/H0.DAE': _H.default,
  'package://baxter_common/baxter_description/meshes/head/H1.DAE': _H2.default,
  'package://baxter_common/baxter_description/meshes/lower_elbow/E1.DAE': _E.default,
  'package://baxter_common/baxter_description/meshes/lower_forearm/W1.DAE': _W.default,
  'package://baxter_common/baxter_description/meshes/lower_shoulder/S1.DAE': _S2.default,
  'package://baxter_common/baxter_description/meshes/torso/base_link.DAE': _Base_link.default,
  'package://baxter_common/baxter_description/meshes/torso/base_link_collision.DAE': _Base_link_collision.default,
  'package://baxter_common/baxter_description/meshes/upper_elbow/E0.DAE': _E2.default,
  'package://baxter_common/baxter_description/meshes/upper_forearm/W0.DAE': _W2.default,
  'package://baxter_common/baxter_description/meshes/upper_shoulder/S0.DAE': _S.default,
  'package://baxter_common/baxter_description/meshes/wrist/W2.DAE': _W3.default,
  //---------------------------------------------------------------------Ur3
  'package://ur_description/meshes/ur3/visual/base.dae': _base.default,
  'package://ur_description/meshes/ur3/visual/forearm.dae': _forearm.default,
  'package://ur_description/meshes/ur3/visual/shoulder.dae': _shoulder.default,
  'package://ur_description/meshes/ur3/visual/upperarm.dae': _upperarm.default,
  'package://ur_description/meshes/ur3/visual/wrist1.dae': _wrist.default,
  'package://ur_description/meshes/ur3/visual/wrist2.dae': _wrist2.default,
  'package://ur_description/meshes/ur3/visual/wrist3.dae': _wrist3.default,
  'package://ur_description/meshes/ur3/collision/base.stl': _base2.default,
  'package://ur_description/meshes/ur3/collision/forearm.stl': _forearm2.default,
  'package://ur_description/meshes/ur3/collision/shoulder.stl': _shoulder2.default,
  'package://ur_description/meshes/ur3/collision/upperarm.stl': _upperarm2.default,
  'package://ur_description/meshes/ur3/collision/wrist1.stl': _wrist4.default,
  'package://ur_description/meshes/ur3/collision/wrist2.stl': _wrist5.default,
  'package://ur_description/meshes/ur3/collision/wrist3.stl': _wrist6.default,
  //--------------------------------------------------------------------Ur5
  'package://ur_description/meshes/ur5/visual/base.dae': _base3.default,
  'package://ur_description/meshes/ur5/visual/forearm.dae': _forearm3.default,
  'package://ur_description/meshes/ur5/visual/shoulder.dae': _shoulder3.default,
  'package://ur_description/meshes/ur5/visual/upperarm.dae': _upperarm3.default,
  'package://ur_description/meshes/ur5/visual/wrist1.dae': _wrist7.default
}, _defineProperty(_MeshLookupTable, "package://ur_description/meshes/ur3/visual/wrist2.dae", _wrist8.default), _defineProperty(_MeshLookupTable, "package://ur_description/meshes/ur3/visual/wrist3.dae", _wrist9.default), _defineProperty(_MeshLookupTable, 'package://ur_description/meshes/ur10/visual/base.dae', _base4.default), _defineProperty(_MeshLookupTable, 'package://ur_description/meshes/ur10/visual/forearm.dae', _forearm4.default), _defineProperty(_MeshLookupTable, 'package://ur_description/meshes/ur10/visual/shoulder.dae', _shoulder4.default), _defineProperty(_MeshLookupTable, 'package://ur_description/meshes/ur10/visual/upperarm.dae', _upperarm4.default), _defineProperty(_MeshLookupTable, 'package://ur_description/meshes/ur10/visual/wrist1.dae', _wrist10.default), _defineProperty(_MeshLookupTable, 'package://ur_description/meshes/ur10/visual/wrist2.dae', _wrist11.default), _defineProperty(_MeshLookupTable, 'package://ur_description/meshes/ur10/visual/wrist3.dae', _wrist12.default), _defineProperty(_MeshLookupTable, 'package://app/meshes/3DBenchy.stl', _DBenchy.default), _defineProperty(_MeshLookupTable, 'package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/MK2-Printer/MK2-Printer.stl', _MK2Printer.default), _defineProperty(_MeshLookupTable, 'package://evd_ros_tasks/tasks/3d_printer_machine_tending/collision_meshes/MK2-Printer.stl', _CollisionMk2Printer.default), _defineProperty(_MeshLookupTable, 'package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/Box/Box.stl', _Box.default), _defineProperty(_MeshLookupTable, 'package://evd_ros_tasks/tasks/3d_printer_machine_tending/collision_meshes/Box.stl', _CollisionBox.default), _defineProperty(_MeshLookupTable, 'package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/ur3e-Pedestal/Pedestal.stl', _Pedestal.default), _defineProperty(_MeshLookupTable, 'package://evd_ros_tasks/tasks/3d_printer_machine_tending/collision_meshes/Pedestal.stl', _CollisionPedestal.default), _defineProperty(_MeshLookupTable, 'package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/Table/Table.stl', _Table.default), _defineProperty(_MeshLookupTable, 'package://evd_ros_tasks/tasks/3d_printer_machine_tending/collision_meshes/Table.stl', _CollisionTable.default), _defineProperty(_MeshLookupTable, 'package://app/meshes/LocationMarker.stl', _LocationMarker.default), _defineProperty(_MeshLookupTable, 'package://app/meshes/OpenWaypointMarker.stl', _OpenWaypointMarker.default), _MeshLookupTable);
exports.MeshLookupTable = MeshLookupTable;

var MeshLookup = function MeshLookup(path) {
  return MeshLookupTable[path]();
};

exports.MeshLookup = MeshLookup;