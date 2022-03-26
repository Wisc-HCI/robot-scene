import React, { useLayoutEffect } from 'react';
import Scene from '../components/Scene';
import { useDefaultSceneStore } from '../components';

export default {
    title: 'CoFrame',
    component: Scene,
}

const Template = (args) => {
    const { tfs, items, hulls, lines, texts, ...otherArgs } = args;
    useLayoutEffect(() => {
        useDefaultSceneStore.setState({ tfs, items, hulls, lines, texts })
    }, [tfs, items, hulls, lines, texts])
    return <div style={{ height: 'calc(100vh - 2rem)', width: 'calc(100vw - 2rem)' }}><Scene {...otherArgs} store={useDefaultSceneStore} /></div>
};

export const CoFrame = Template.bind({});
CoFrame.storyName = "CoFrame";
CoFrame.args = {
    tfs: {
        'simulated_base_link': {
            frame: 'world',
            position: { x: 0, y: -0.15, z: 0 },
            rotation: { w: 0, x: 0, y: 0, z: 1 },
            scale: {x:1,y:1,z:1}
        },
        'simulated_shoulder_link': {
            frame: 'simulated_base_link',
            position: { x: 0, y: 0, z: 0.15185 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: {x:1,y:1,z:1}
        },
        'simulated_upper_arm_link': {
            frame: 'simulated_shoulder_link',
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 0.7071067811140325, x: 0.7071067812590626, y: 0, z: 0 },
            scale: {x:1,y:1,z:1}
        },
        'simulated_forearm_link': {
            frame: 'simulated_upper_arm_link',
            position: { x: -0.24355, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: {x:1,y:1,z:1}
        },
        'simulated_wrist_1_link': {
            frame: 'simulated_forearm_link',
            position: { x: -0.2132, y: 0, z: 0.13105 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: {x:1,y:1,z:1}
        },
        'simulated_wrist_2_link': {
            frame: 'simulated_wrist_1_link',
            position: { x: 0, y: -0.08535, z: 0 },
            rotation: { w: 0.7071067811140325, x: 0.7071067812590626, y: 0, z: 0 },
            scale: {x:1,y:1,z:1}
        },
        'simulated_wrist_3_link': {
            frame: 'simulated_wrist_2_link',
            position: { x: 0, y: 0.0921, z: 0 },
            rotation: { w: 0.7071067811140325, x: -0.7071067812590626, y: 0, z: 0 },
            scale: {x:1,y:1,z:1}
        },
        'simulated_flange': {
            frame: 'simulated_wrist_3_link',
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 0.5, x: -0.5, y: -0.5, z: -0.5 },
            scale: {x:1,y:1,z:1}
        },
        'simulated_tool0': {
            frame: 'simulated_flange',
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 0.5, x: 0.5, y: 0.5, z: 0.5 },
            scale: {x:1,y:1,z:1}
        },
        'simulated_robotiq_85_base_link': {
            frame: 'simulated_tool0',
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 0.5, x: 0.5, y: -0.5, z: 0.5 },
            scale: {x:1,y:1,z:1}
        },
        'simulated_robotiq_85_left_knuckle_link': {
            frame: 'simulated_robotiq_85_base_link',
            position: { x: 0.05490451627, y: 0.03060114443, z: 0 },
            rotation: { w: 0, x: 1, y: 0, z: 0 },
            scale: {x:1,y:1,z:1}
        },
        'simulated_robotiq_85_right_knuckle_link': {
            frame: 'simulated_robotiq_85_base_link',
            position: { x: 0.05490451627, y: -0.03060114443, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: {x:1,y:1,z:1}
        },
        'simulated_robotiq_85_left_finger_link': {
            frame: 'simulated_robotiq_85_left_knuckle_link',
            position: { x: -0.00408552455, y: -0.03148604435, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: {x:1,y:1,z:1}
        },
        'simulated_robotiq_85_right_finger_link': {
            frame: 'simulated_robotiq_85_right_knuckle_link',
            position: { x: -0.00408552455, y: -0.03148604435, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: {x:1,y:1,z:1}
        },
        'simulated_robotiq_85_left_inner_knuckle_link': {
            frame: 'simulated_robotiq_85_base_link',
            position: { x: 0.06142, y: 0.0127, z: 0 },
            rotation: { w: 0, x: 1, y: 0, z: 0 },
            scale: {x:1,y:1,z:1}
        },
        'simulated_robotiq_85_right_inner_knuckle_link': {
            frame: 'simulated_robotiq_85_base_link',
            position: { x: 0.06142, y: -0.0127, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: {x:1,y:1,z:1}
        },
        'simulated_robotiq_85_left_finger_tip_link': {
            frame: 'simulated_robotiq_85_left_inner_knuckle_link',
            position: { x: 0.04303959807, y: -0.03759940821, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: {x:1,y:1,z:1}
        },
        'simulated_robotiq_85_right_finger_tip_link': {
            frame: 'simulated_robotiq_85_right_inner_knuckle_link',
            position: { x: 0.04303959807, y: -0.03759940821, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: {x:1,y:1,z:1}
        }
    },
    items: {
       
        table: {
            shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/Table/Table.stl",
            name: "Table",
            frame: "world",
            position: { x: 0, y: 0.36, z: -0.37 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            color: { r: 10, g: 10, b: 10, a: 1 },
            highlighted: false,
            showName: false
        },
        tableGizmo: {
            shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/Table/Table.stl",
            name: "Table",
            frame: "gizmo",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            color: { r: 10, g: 10, b: 10, a: 1 },
            highlighted: false,
            showName: false,
        },
        printerGizmo: {
            shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/MK2-Printer/MK2-Printer.stl",
            name: "3D Printer",
            frame: "gizmo",
            position: { x: 0, y: 0, z: .66 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            showName: false
        },
        bladeConveyor: {
            shape: 'conveyor',
            name: "Blade Production Conveyor Belt",
            frame: "world",
            position: { x: -0.85, y: -0.25, z: -0.75 },
            rotation: { w: 0.707, x: 0, y: 0, z: 0.707 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            showName: false
        },
        bladeConveyorCollision: {
            shape: 'conveyor_collision',
            name: "Blade Production Conveyor Belt Collision",
            frame: "world",
            position: { x: -0.85, y: -0.25, z: -0.75 },
            rotation: { w: 0.707, x: 0, y: 0, z: 0.707 },
            color: { r: 255, g: 0, b: 0, a: 0.3 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            showName: false,
            wireframe: true,
        },
        conveyorReceiver: {
            shape: 'conveyor_receiver',
            name: "Blade Receiver",
            frame: "world",
            position: { x: -0.85, y: -0.25, z: -0.75 },
            rotation: { w: 0.707, x: 0, y: 0, z: 0.707 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            showName: false
        },
        conveyorReceiverCollision: {
            shape: 'conveyor_receiver_collision',
            name: "Blade Receiver Collision",
            frame: "world",
            position: { x: -0.85, y: -0.25, z: -0.75 },
            rotation: { w: 0.707, x: 0, y: 0, z: 0.707 },
            color: { r: 255, g: 0, b: 0, a: 0.3 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            showName: false,
            wireframe: true,
        },
        knifeConveyor: {
            shape: 'conveyor',
            name: "Finished Knife Conveyor Belt",
            frame: "world",
            position: { x: 0.85, y: -0.25, z: -0.75 },
            rotation: { w: 0.707, x: 0, y: 0, z: -0.707 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            showName: false
        },
        knifeConveyorCollision: {
            shape: 'conveyor_collision',
            name: "Blade Production Conveyor Belt Collision",
            frame: "world",
            position: { x: 0.85, y: -0.25, z: -0.75 },
            rotation: { w: 0.707, x: 0, y: 0, z: -0.707 },
            color: { r: 255, g: 0, b: 0, a: 0.3 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            showName: false,
            wireframe: true,
        },
        conveyorDispatcher: {
            shape: 'conveyor_dispatcher',
            name: "Knife Dispatcher",
            frame: "world",
            position: { x: 0.85, y: -0.25, z: -0.75 },
            rotation: { w: 0.707, x: 0, y: 0, z: -0.707 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            showName: true
        },
        conveyorDispatcherCollision: {
            shape: 'conveyor_dispatcher_collision',
            name: "Knife Dispatcher",
            frame: "world",
            position: { x: 0.85, y: -0.25, z: -0.75 },
            rotation: { w: 0.707, x: 0, y: 0, z: -0.707 },
            color: { r: 255, g: 0, b: 0, a: 0.3 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            showName: false,
            wireframe: true,
        },
        pedestal: {
            shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/ur3e-Pedestal/Pedestal.stl",
            name: "Pedestal",
            frame: "world",
            position: { x: 0, y: -0.15, z: -0.38 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            color: { r: 15, g: 15, b: 15, a: 1 },
            highlighted: false,
            showName: false
        },
        printer: {
            shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/MK2-Printer/MK2-Printer.stl",
            name: "3D Printer",
            frame: "world",
            position: { x: -0.28, y: 0.32, z: 0.3 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: true,
            showName: false
        },
        blade: {
            shape: "blade",
            name: "Blade",
            frame: "world",
            position: { x: -0.559, y: -0.239, z: -0.03 },
            rotation: { w: 0.644, x: 0.310, y: -0.296, z: -0.638 },
            scale: { x: 0.2, y: 0.2, z: 0.2 },
            highlighted: false,
            showName: false
        },
        leftHandle: {
            shape: "handle_l",
            name: "Left Handle",
            frame: "world",
            position: { x: -0.2, y: 0.28, z: 0.074 },
            rotation: { w: 0.707, x: 0.707, y: 0, z: 0 },
            scale: { x: 0.2, y: 0.2, z: 0.2 },
            highlighted: false,
            showName: false
        },
        rightHandle: {
            shape: "handle_r",
            name: "Right Handle",
            frame: "world",
            position: { x: -0.3, y: 0.28, z: 0.078 },
            rotation: { w: 0.707, x: 0.707, y: 0, z: 0 },
            scale: { x: 0.2, y: 0.2, z: 0.2 },
            highlighted: false,
            showName: false
        },
        transportJig: {
            shape: "transport_jig",
            name: "Transport Jig",
            frame: "world",
            position: { x: -0.559, y: -0.239, z: -0.03 },
            rotation: { w: 0.644, x: 0.310, y: -0.296, z: -0.638 },
            scale: { x: 0.2, y: 0.2, z: 0.2 },
            highlighted: false,
            showName: false
        },
        assemblyJig: {
            shape: "assembly_jig",
            name: "Assembly Jig",
            frame: "world",
            position: { x: 0.2, y: 0.28, z: 0.14 },
            rotation: { w: -0.5, x: 0.5, y: -0.5, z: -0.5 },
            scale: { x: 0.2, y: 0.2, z: 0.2 },
            highlighted: false,
            showName: false
        },
        assemblyJigCollision: {
            shape: "assembly_jig_collision",
            name: "Assembly Jig Collision",
            frame: "world",
            position: { x: 0.2, y: 0.28, z: 0.14 },
            rotation: { w: -0.5, x: 0.5, y: -0.5, z: -0.5 },
            scale: { x: 0.2, y: 0.2, z: 0.2 },
            color: { r: 255, g: 0, b: 0, a: 0.3 },
            highlighted: false,
            showName: false,
            wireframe: true,
        },
        knifeWithTransportJig: {
            shape: "knife_with_transport_jig",
            name: "Knife with Transport Jig",
            frame: "world",
            position: { x: 0.584, y: -0.238, z: 0.293 },
            rotation: { w: -0.372, x: 0.604, y: -0.602, z: 0.368 },
            scale: { x: 0.2, y: 0.2, z: 0.2 },
            highlighted: false,
            showName: false
        },
        base: {
            shape: "package://ur_description/meshes/ur3/collision/base.stl",
            name: 'Base',
            frame: "simulated_base_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 0, x: 0, y: 0, z: 1 },
            scale: { x: 1, y: 1, z: 1 },
            color: {r:255,g:0,b:0,a:1},
            showName: false,
            wireframe : true,
            highlighted: false
        },
        shoulderLink: {
            shape: "package://ur_description/meshes/ur3/visual/shoulder.dae",
            name: 'Shoulder Link',
            frame: "simulated_shoulder_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 0, x: 0, y: 0, z: 1 },
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            highlighted: false,
        },
        shoulderLinkCollision:{
            shape: "package://ur_description/meshes/ur3/collision/shoulder.stl",
            name: 'Shoulder Link',
            frame: "simulated_shoulder_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 0, x: 0, y: 0, z: 1 },
            scale: { x: 1, y: 1, z: 1 },
            color: {r:255,g:0,b:0,a:1},
            showName: false,
            wireframe: true,
            highlighted: false,
        },
        upperArmLink: {
            shape: "package://ur_description/meshes/ur3/visual/upperarm.dae",
            name: "Upper Arm Link",
            frame: "simulated_upper_arm_link",
            position: { x: 0, y: 0, z: 0.12 },
            rotation: { w: 0.5, x: 0.5, y: -0.5, z: -0.5 },
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            highlighted: false,
        },
       upperArmLinkCollision:{
            shape: "package://ur_description/meshes/ur3/collision/upperarm.stl",
            name: "Upper Arm Link",
            frame: "simulated_upper_arm_link",
            position: { x: 0, y: 0, z: 0.12 },
            rotation: { w: 0.5, x: 0.5, y: -0.5, z: -0.5 },
            scale: { x: 1, y: 1, z: 1 },
            color: {r:255,g:0,b:0,a:1},
            showName: false,
            wireframe: true,
            highlighted: false,
        },
        forearmLink: {
            shape: "package://ur_description/meshes/ur3/visual/forearm.dae",
            name: "Forearm Link",
            frame: "simulated_forearm_link",
            position: { x: 0, y: 0, z: 0.027 },
            rotation: { w: 0.5, x: 0.5, y: -0.5, z: -0.5 },
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            highlighted: false,
        },
        forearmLinkCollision: {
            shape: "package://ur_description/meshes/ur3/collision/forearm.stl",
            name: "Forearm Link",
            frame: "simulated_forearm_link",
            position: { x: 0, y: 0, z: 0.027 },
            rotation: { w: 0.5, x: 0.5, y: -0.5, z: -0.5 },
            scale: { x: 1, y: 1, z: 1 },
            color: {r:255,g:0,b:0,a:1},
            showName: false,
            wireframe: true,
            highlighted: false,
        },
        wrist1Link: {
            shape: "package://ur_description/meshes/ur3/visual/wrist1.dae",
            name: "Wrist 1 Link",
            frame: "simulated_wrist_1_link",
            position: { x: 0, y: 0, z: -0.104 },
            rotation: { w: 0.7071068, x: 0.7071068, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            highlighted: false,
        },
        wrist1LinkCollision: {
            shape: "package://ur_description/meshes/ur3/collision/wrist1.stl",
            name: "Wrist 1 Link",
            frame: "simulated_wrist_1_link",
            position: { x: 0, y: 0, z: -0.104 },
            rotation: { w: 0.7071068, x: 0.7071068, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            color: {r:255,g:0,b:0,a:1},
            showName: false,
            wireframe: true,
            highlighted: false,
        },

        wrist2Link: {
            shape: "package://ur_description/meshes/ur3/visual/wrist2.dae",
            name: "Wrist 2 Link",
            frame: "simulated_wrist_2_link",
            position: { x: 0, y: 0, z: -0.08535 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            highlighted: false,
        },
        wrist2LinkCollision: {
            shape: "package://ur_description/meshes/ur3/visual/wrist2.dae",
            name: "Wrist 2 Link",
            frame: "simulated_wrist_2_link",
            position: { x: 0, y: 0, z: -0.08535 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            color: {r:255,g:0,b:0,a:1},
            showName: false,
            wireframe: true,
            highlighted: false,
        },
        wrist3Link: {
            shape: "package://ur_description/meshes/ur3/visual/wrist3.dae",
            name: "Wrist 3 Link",
            frame: "simulated_wrist_3_link",
            position: { x: 0, y: 0, z: -0.0921 },
            rotation: { w: 0.7071068, x: 0.7071068, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            highlighted: false,
        },
        wrist3LinkCollision:{
            shape: "package://ur_description/meshes/ur3/visual/wrist3.dae",
            name: "Wrist 3 Link",
            frame: "simulated_wrist_3_link",
            position: { x: 0, y: 0, z: -0.0921 },
            rotation: { w: 0.7071068, x: 0.7071068, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            color: {r:255,g:0,b:0,a:1},
            showName: false,
            wireframe: true,
            highlighted: false,
        },
        gripperBaseLink: {
            shape: "package://robotiq_85_description/meshes/visual/robotiq_85_base_link.dae",
            name: "Gripper Base",
            frame: "simulated_robotiq_85_base_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            highlighted: false
        },
        gripperLeftKnuckle: {
            shape: "package://robotiq_85_description/meshes/visual/robotiq_85_knuckle_link.dae",
            name: "Gripper Left Knuckle",
            frame: "simulated_robotiq_85_left_knuckle_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            highlighted: false
        },
        gripperRightKnuckle: {
            shape: "package://robotiq_85_description/meshes/visual/robotiq_85_knuckle_link.dae",
            name: "Gripper Right Knuckle",
            frame: "simulated_robotiq_85_right_knuckle_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            highlighted: false
        },
        gripperLeftFinger: {
            shape: "package://robotiq_85_description/meshes/visual/robotiq_85_finger_link.dae",
            name: "Gripper Left Finger",
            frame: "simulated_robotiq_85_left_finger_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            highlighted: false
        },
        gripperRightFinger: {
            shape: "package://robotiq_85_description/meshes/visual/robotiq_85_finger_link.dae",
            name: "Gripper Right Finger",
            frame: "simulated_robotiq_85_right_finger_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            highlighted: false
        },
        gripperLeftInnerKnuckle: {
            shape: "package://robotiq_85_description/meshes/visual/robotiq_85_inner_knuckle_link.dae",
            name: "Gripper Left Inner Knuckle",
            frame: "simulated_robotiq_85_left_inner_knuckle_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            highlighted: false
        },
        gripperRightInnerKnuckle: {
            shape: "package://robotiq_85_description/meshes/visual/robotiq_85_inner_knuckle_link.dae",
            name: "Gripper Right Inner Knuckle",
            frame: "simulated_robotiq_85_right_inner_knuckle_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            highlighted: false
        },
        gripperLeftFingerTip: {
            shape: "package://robotiq_85_description/meshes/visual/robotiq_85_finger_tip_link.dae",
            name: "Gripper Left Finger Tip",
            frame: "simulated_robotiq_85_left_finger_tip_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            highlighted: false
        },
        gripperRightFingerTip: {
            shape: "package://robotiq_85_description/meshes/visual/robotiq_85_finger_tip_link.dae",
            name: "Gripper Right Finger Tip",
            frame: "simulated_robotiq_85_right_finger_tip_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            highlighted: false
        },
        gripperBaseLinkCollision: {
            shape: "package://robotiq_85_description/meshes/collision/robotiq_85_base_link.stl",
            name: "Gripper Base Collision",
            frame: "simulated_robotiq_85_base_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: {r:255,g:0,b:0,a:1},
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            wireframe: true,
            highlighted: false
        },
        gripperLeftKnuckleCollision: {
            shape: "package://robotiq_85_description/meshes/collision/robotiq_85_knuckle_link.stl",
            name: "Gripper Left Knuckle Collision",
            frame: "simulated_robotiq_85_left_knuckle_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: {r:255,g:0,b:0,a:1},
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            highlighted: false
        },
        gripperRightKnuckleCollision: {
            shape: "package://robotiq_85_description/meshes/collision/robotiq_85_knuckle_link.stl",
            name: "Gripper Right Knuckle Collision",
            frame: "simulated_robotiq_85_right_knuckle_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: {r:255,g:0,b:0,a:1},
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            wireframe: true,
            highlighted: false
        },
        gripperLeftFingerCollision: {
            shape: "package://robotiq_85_description/meshes/collision/robotiq_85_finger_link.stl",
            name: "Gripper Left Finger Collision",
            frame: "simulated_robotiq_85_left_finger_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: {r:255,g:0,b:0,a:1},
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            wireframe: true,
            highlighted: false
        },
        gripperRightFingerCollision: {
            shape: "package://robotiq_85_description/meshes/collision/robotiq_85_finger_link.stl",
            name: "Gripper Right Finger Collision",
            frame: "simulated_robotiq_85_right_finger_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: {r:255,g:0,b:0,a:1},
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            wireframe: true,
            highlighted: false
        },
        gripperLeftInnerKnuckleCollision: {
            shape: "package://robotiq_85_description/meshes/collision/robotiq_85_inner_knuckle_link.stl",
            name: "Gripper Left Inner Knuckle Collision",
            frame: "simulated_robotiq_85_left_inner_knuckle_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: {r:255,g:0,b:0,a:1},
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            wireframe: true,
            highlighted: false
        },
        gripperRightInnerKnuckleCollision: {
            shape: "package://robotiq_85_description/meshes/collision/robotiq_85_inner_knuckle_link.stl",
            name: "Gripper Right Inner Knuckle Collision",
            frame: "simulated_robotiq_85_right_inner_knuckle_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: {r:255,g:0,b:0,a:1},
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            wireframe: true,
            highlighted: false
        },
        gripperLeftFingerTipCollision: {
            shape: "package://robotiq_85_description/meshes/collision/robotiq_85_finger_tip_link.stl",
            name: "Gripper Left Finger Tip Collision",
            frame: "simulated_robotiq_85_left_finger_tip_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: {r:255,g:0,b:0,a:1},
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            wireframe: true,
            highlighted: false
        },
        gripperRightFingerTipCollision: {
            shape: "package://robotiq_85_description/meshes/collision/robotiq_85_finger_tip_link.stl",
            name: "Gripper Right Finger Tip Collision",
            frame: "simulated_robotiq_85_right_finger_tip_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: {r:255,g:0,b:0,a:1},
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            wireframe: true,
            highlighted: false
        },
        base: {
            shape: "package://ur_description/meshes/ur3/visual/base.dae",
            name: 'Base',
            frame: "simulated_base_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 0, x: 0, y: 0, z: 1 },
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            highlighted: true
        },
        ur3Base:{
            shape:'package://ur_description/meshes/ur3/collision/base.stl',
             name: 'Base',
            frame: "simulated_base_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 0, x: 0, y: 0, z: 1 },
            color: {r:255,g:0,b:0,a:1},
            scale: { x: 1, y: 1, z: 1 },
            wireframe : true,
            highlighted:true,
            hidden:true
        },
    },
    lines: {
        line1: {
          name: "Line1",
          frame: "world",
          width: 1,
          vertices: [
            {position:{x:0,y:0,z:0},color:{r:0,g:0,b:0}},
            {position:{x:1,y:0,z:0},color:{r:255,g:0,b:0}},
            {position:{x:1,y:1,z:0},color:{r:255,g:255,b:0}},
            {position:{x:0,y:1,z:0},color:{r:0,g:255,b:0}},
            {position:{x:0,y:1,z:1},color:{r:0,g:255,b:255}},
            {position:{x:0,y:0,z:1},color:{r:0,g:0,b:255}},
            {position:{x:1,y:0,z:1},color:{r:255,g:0,b:255}},
            {position:{x:1,y:1,z:1},color:{r:255,g:255,b:255}}
        ],
          hidden: true
        }
    },
    hulls: {
        usage: {
            name: 'Robot Space Usage',
            frame: 'world',
            vertices: [
                { x: -0.5, y: -0.5, z: 0 },
                { x: 0.5, y: -0.5, z: 0 },
                { x: 0.5, y: 0.5, z: 0 },
                { x: -0.5, y: 0.5, z: 0 },
                { x: -0.5, y: 0.5, z: 1 },
                { x: -0.5, y: -0.5, z: 1 },
                { x: 0.5, y: -0.5, z: 1 },
                { x: 0.5, y: 0.5, z: 1 },
                { x: -0.75, y: 0, z: 0.5 },
                { x: 0.75, y: 0, z: 0.5 },
                { x: 0, y: 0.75, z: 0.5 },
                { x: 0, y: -0.75, z: 0.5 },
            ],
            color: { r: 10, g: 200, b: 235, a: (time) => (Math.sin(time / 1000) / 6 + 0.25) },
            wireframe: false,
            highlighted: true,
            showName: false,
            hidden: false
        }
    },
    texts: {
        workcellLabel: {
            value: "Work Cell",
            frame: "world",
            position: { x: 0, y: 0, z: 1.3 },
            color: { r: 10, g: 10, b: 255, a: 1 }
        },
        miniworkcellLabel: {
            value: "Mini Work Cell",
            frame: "gizmo",
            position: { x: 0, y: 0, z: 1.3 },
            color: { r: 10, g: 10, b: 255, a: 1 }
        }
    },
    displayTfs: false,
    displayGrid: true,
    isPolar: false,
    backgroundColor: '#1e1e1e',
    planeColor: '#141414',
    highlightColor: '#ffffff',
    plane: -0.75,
    fov: 60,
    ar: false,
    vr: false,
    onPointerMissed: () => console.log('Missed Click')
}