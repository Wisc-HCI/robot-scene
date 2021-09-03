import React, { useLayoutEffect } from 'react';

import Scene from '../components/Scene';
import useSceneStore from '../components/SceneStore';
import { MeshLookupTable } from '../components/MeshLookup';

export default {
    title: 'Scene',
    component: Scene,
}

const Template = (args) => {
    const { tfs, items, hulls, lines, ...otherArgs } = args;
    useLayoutEffect(() => {
        useSceneStore.setState({ tfs, items, hulls, lines })
    }, [tfs, items, hulls, lines])
    return <div style={{ height: 'calc(100vh - 2rem)', width: 'calc(100vw - 2rem)' }}><Scene {...otherArgs} /></div>
};

export const RandomShapes = Template.bind({});
RandomShapes.args = {
    tfs: {
        other1: {
            frame: 'world',
            translation: { x: 1, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 }
        },
        other2: {
            name: 'world',
            translation: { x: -2, y: 0, z: 2 },
            rotation: { w: 0.525322, x: 0.8509035, y: 0, z: 0 }
        },
        other3: {
            name: 'world',
            translation: { x: 2, y: 0, z: 1 },
            rotation: { w: -0.604, x: -0.002, y: -0.756, z: 0.252 }
        }
    },
    items: {
        1: {
            shape: "cube",
            name: "My Cube",
            frame: "world",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 255, g: 50, b: 10, a: 0.75 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            highlighted: true,
            onClick: () => { console.log('cube') },
            onPointerOver: () => { console.log('hover') },
            onPointerOut: () => { console.log('hover out') }
        },
        2: {
            shape: "sphere",
            name: "My Sphere",
            frame: "world",
            position: { x: 0, y: 2, z: 2 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 255, g: 255, b: 30, a: 0.35 },
            scale: { x: 1, y: 2, z: 1 },
            highlighted: true,
            showName: true,
            onClick: () => { console.log('sphere') }
        },
        3: {
            shape: "cylinder",
            name: "My Cylinder",
            frame: "other2",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 200, b: 235, a: 0.5 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            onClick: () => { console.log('cylinder') }
        },
        4: {
            shape: "flatarrow",
            name: "My Arrow 1",
            frame: "world",
            position: { x: 1, y: 0, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 70, g: 70, b: 250, a: 0.5 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: true,
            onClick: () => { console.log('flatarrow') }
        },
        5: {
            shape: "arrow",
            name: "My Arrow 2",
            frame: "other1",
            position: { x: 1, y: 0, z: 0 },
            rotation: { w: -0.604, x: -0.002, y: -0.756, z: 0.252 },
            color: { r: 255, g: 70, b: 250, a: 0.5 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: true,
            onClick: () => { console.log('arrow2') }
        },
        6: {
            shape: "arrow",
            name: "My Arrow 3",
            frame: "other3",
            position: { x: 1, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 255, g: 70, b: 250, a: 0.5 },
            scale: { x: 1, y: 2, z: 1 },
            highlighted: false,
            onClick: () => { console.log('arrow3') }
        },
        7: {
            shape: "package://nao_meshes/meshes/V40/HeadPitch.dae",
            name: "Nao Head",
            frame: "world",
            position: { x: 0, y: 2, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            showName: true,
            highlighted: true,
            onClick: () => { console.log('head') }
        },
        8: {
            shape: "package://nao_meshes/meshes/V40/LAnkleRoll.dae",
            name: "Nao Ankle",
            frame: "world",
            position: { x: 1, y: 0.5, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            onClick: () => { console.log('ankle') }
        },
        9: {
            shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/MK2-Printer/MK2-Printer.stl",
            name: "3d Printer",
            frame: "world",
            position: { x: -1, y: 1, z: .3 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            onClick: () => { console.log('printer') }
        }
    },
    lines: {
        line1: {
            name: "Line1",
            frame: "world",
            width: 1,
            vertices: [{ position: { x: 1, y: 2, z: 0 }, color: { r: 255, g: 0, b: 0 } },
            { position: { x: 2, y: 1, z: 1 }, color: { r: 0, g: 255, b: 0 } },
            { position: { x: 2, y: 2, z: 1 }, color: { r: 0, g: 0, b: 255 } }],
            highlighted: false
        },
        line2: {
            name: "Line1",
            frame: "other1",
            width: 3,
            vertices: [{ position: { x: 1, y: 0, z: 0 }, color: { r: 0, g: 0, b: 255 } },
            { position: { x: 1, y: 0, z: 1 }, color: { r: 100, g: 100, b: 255 } },
            { position: { x: 2, y: 1, z: 1 }, color: { r: 50, g: 50, b: 255 } },
            { position: { x: 2, y: 2, z: 1 }, color: { r: 255, g: 255, b: 255 } }],
            highlighted: false
        }
    },
    hulls: {},
    displayTfs: true,
    displayGrid: true,
    isPolar: false,
    backgroundColor: '#d0d0d0',
    planeColor: '#a8a8a8',
    highlightColor: '#ffffff',
    plane: -0.75,
    onPointerMissed: () => console.log('Missed Click')
}
export const EvD = Template.bind({});
EvD.storyName = "EvD Layout";
EvD.args = {
    tfs: {
        'simulated_base_link': {
            frame: 'world',
            translation: { x: 0, y: -0.15, z: 0 },
            rotation: { w: 0, x: 0, y: 0, z: 1 },
        },
        'simulated_shoulder_link': {
            frame: 'simulated_base_link',
            translation: { x: 0, y: 0, z: 0.15185 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
        },
        'simulated_upper_arm_link': {
            frame: 'simulated_shoulder_link',
            translation: { x: 0, y: 0, z: 0 },
            rotation: { w: 0.7071067811140325, x: 0.7071067812590626, y: 0, z: 0 }
        },
        'simulated_forearm_link': {
            frame: 'simulated_upper_arm_link',
            translation: { x: -0.24355, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
        },
        'simulated_wrist_1_link': {
            frame: 'simulated_forearm_link',
            translation: { x: -0.2132, y: 0, z: 0.13105 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
        },
        'simulated_wrist_2_link': {
            frame: 'simulated_wrist_1_link',
            translation: { x: 0, y: -0.08535, z: 0 },
            rotation: { w: 0.7071067811140325, x: 0.7071067812590626, y: 0, z: 0 },
        },
        'simulated_wrist_3_link': {
            frame: 'simulated_wrist_2_link',
            translation: { x: 0, y: 0.0921, z: 0 },
            rotation: { w: 0.7071067811140325, x: -0.7071067812590626, y: 0, z: 0 },
        },
        'simulated_flange': {
            frame: 'simulated_wrist_3_link',
            translation: { x: 0, y: 0, z: 0 },
            rotation: { w: 0.5, x: -0.5, y: -0.5, z: -0.5 },
        },
        'simulated_tool0': {
            frame: 'simulated_flange',
            translation: { x: 0, y: 0, z: 0 },
            rotation: { w: 0.5, x: 0.5, y: 0.5, z: 0.5 },
        },
        'simulated_robotiq_85_base_link': {
            frame: 'simulated_tool0',
            translation: { x: 0, y: 0, z: 0 },
            rotation: { w: 0.5, x: 0.5, y: -0.5, z: 0.5 },
        },
        'simulated_robotiq_85_left_knuckle_link': {
            frame: 'simulated_robotiq_85_base_link',
            translation: { x: 0.05490451627, y: 0.03060114443, z: 0 },
            rotation: { w: 0, x: 1, y: 0, z: 0 },
        },
        'simulated_robotiq_85_right_knuckle_link': {
            frame: 'simulated_robotiq_85_base_link',
            translation: { x: 0.05490451627, y: -0.03060114443, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
        },
        'simulated_robotiq_85_left_finger_link': {
            frame: 'simulated_robotiq_85_left_knuckle_link',
            translation: { x: -0.00408552455, y: -0.03148604435, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
        },
        'simulated_robotiq_85_right_finger_link': {
            frame: 'simulated_robotiq_85_right_knuckle_link',
            translation: { x: -0.00408552455, y: -0.03148604435, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
        },
        'simulated_robotiq_85_left_inner_knuckle_link': {
            frame: 'simulated_robotiq_85_base_link',
            translation: { x: 0.06142, y: 0.0127, z: 0 },
            rotation: { w: 0, x: 1, y: 0, z: 0 },
        },
        'simulated_robotiq_85_right_inner_knuckle_link': {
            frame: 'simulated_robotiq_85_base_link',
            translation: { x: 0.06142, y: -0.0127, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
        },
        'simulated_robotiq_85_left_finger_tip_link': {
            frame: 'simulated_robotiq_85_left_inner_knuckle_link',
            translation: { x: 0.04303959807, y: -0.03759940821, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
        },
        'simulated_robotiq_85_right_finger_tip_link': {
            frame: 'simulated_robotiq_85_right_inner_knuckle_link',
            translation: { x: 0.04303959807, y: -0.03759940821, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
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
            color: { r: 40, g: 40, b: 40, a: 1 },
            highlighted: false,
            showName: false,
            onClick: (e) => { e.stopPropagation() }
        },
        bladeConveyor: {
            shape: 'conveyor',
            name: "Blade Production Conveyor Belt",
            frame: "world",
            position: { x: -0.85, y: -0.25, z: -0.75 },
            rotation: { w: 0.707, x: 0, y: 0, z: 0.707 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            showName: false,
            onClick: (e) => { e.stopPropagation() }
        },
        conveyorReceiver: {
            shape: 'conveyor_receiver',
            name: "Blade Receiver",
            frame: "world",
            position: { x: -0.85, y: -0.25, z: -0.75 },
            rotation: { w: 0.707, x: 0, y: 0, z: 0.707 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            showName: false,
            onClick: (e) => { e.stopPropagation() }
        },
        knifeConveyor: {
            shape: 'conveyor',
            name: "Finished Knife Conveyor Belt",
            frame: "world",
            position: { x: 0.85, y: -0.25, z: -0.75 },
            rotation: { w: 0.707, x: 0, y: 0, z: -0.707 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            showName: false,
            onClick: (e) => { e.stopPropagation() }
        },
        conveyorDispatcher: {
            shape: 'conveyor_dispatcher',
            name: "Knife Dispatcher",
            frame: "world",
            position: { x: 0.85, y: -0.25, z: -0.75 },
            rotation: { w: 0.707, x: 0, y: 0, z: -0.707 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            showName: false,
            onClick: (e) => { e.stopPropagation() }
        },
        pedestal: {
            shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/ur3e-Pedestal/Pedestal.stl",
            name: "Pedestal",
            frame: "world",
            position: { x: 0, y: -0.15, z: -0.38 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            color: { r: 50, g: 50, b: 50, a: 1 },
            highlighted: false,
            showName: false,
            onClick: (e) => { e.stopPropagation() }
        },
        printer: {
            shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/MK2-Printer/MK2-Printer.stl",
            name: "3D Printer",
            frame: "world",
            position: { x: -0.28, y: 0.32, z: 0.3 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            showName: false,
            onClick: (e) => { e.stopPropagation() }
        },
        blade: {
            shape: "blade",
            name: "Blade",
            frame: "world",
            position: { x: -0.559, y: -0.239, z: -0.03 },
            rotation: { w: 0.644, x: 0.310, y: -0.296, z: -0.638 },
            scale: { x: 0.2, y: 0.2, z: 0.2 },
            highlighted: false,
            showName: false,
            // transformMode: 'translate',
            onMove: (t) => console.log(t),
            onClick: (e) => { e.stopPropagation() }
        },
        leftHandle: {
            shape: "handle_l",
            name: "Left Handle",
            frame: "world",
            position: { x: -0.2, y: 0.28, z: 0.074 },
            rotation: { w: 0.707, x: 0.707, y: 0, z: 0 },
            scale: { x: 0.2, y: 0.2, z: 0.2 },
            highlighted: false,
            showName: false,
            onClick: (e) => { e.stopPropagation() }
        },
        rightHandle: {
            shape: "handle_r",
            name: "Right Handle",
            frame: "world",
            position: { x: -0.3, y: 0.28, z: 0.078 },
            rotation: { w: 0.707, x: 0.707, y: 0, z: 0 },
            scale: { x: 0.2, y: 0.2, z: 0.2 },
            highlighted: false,
            showName: false,
            onClick: (e) => { e.stopPropagation() }
        },
        transportJig: {
            shape: "transport_jig",
            name: "Transport Jig",
            frame: "world",
            position: { x: -0.559, y: -0.239, z: -0.03 },
            rotation: { w: 0.644, x: 0.310, y: -0.296, z: -0.638 },
            scale: { x: 0.2, y: 0.2, z: 0.2 },
            highlighted: false,
            showName: false,
            // transformMode: 'rotate',
            onMove: (t) => console.log(t),
            onClick: (e) => { e.stopPropagation() }
        },
        assemblyJig: {
            shape: "assembly_jig",
            name: "Assembly Jig",
            frame: "world",
            position: { x: 0.2, y: 0.28, z: 0.14 },
            rotation: { w: -0.5, x: 0.5, y: -0.5, z: -0.5 },
            scale: { x: 0.2, y: 0.2, z: 0.2 },
            highlighted: false,
            showName: false,
            onClick: (e) => { e.stopPropagation() }
        },
        // bladeWithTransportJig: {
        //   shape: "blade_with_transport_jig",
        //   name: "Blade with Transport Jig",
        //   frame: "world",
        //   position: { x: 0.2, y: 0.58, z: 0.078 },
        //   rotation: { w: 0.707, x: 0.707, y: 0, z: 0 },
        //   scale: {x:0.2,y:0.2,z:0.2},
        //   highlighted: false,
        //   showName: false,
        //   onClick: (e)=>{e.stopPropagation()}
        // },
        knifeWithTransportJig: {
            shape: "knife_with_transport_jig",
            name: "Knife with Transport Jig",
            frame: "world",
            position: { x: 0.584, y: -0.238, z: 0.293 },
            rotation: { w: -0.372, x: 0.604, y: -0.602, z: 0.368 },
            scale: { x: 0.2, y: 0.2, z: 0.2 },
            highlighted: false,
            showName: false,
            // transformMode: 'translate',
            onMove: (t) => console.log(t),
            onClick: (e) => { e.stopPropagation() }
        },
        // knife: {
        //   shape: "knife",
        //   name: "Knife",
        //   frame: "world",
        //   position: { x: 0.2, y: 0.38, z: 0.078 },
        //   rotation: { w: 0.707, x: 0.707, y: 0, z: 0 },
        //   scale: {x:0.2,y:0.2,z:0.2},
        //   highlighted: false,
        //   showName: false,
        //   onClick: (e)=>{e.stopPropagation()}
        // },
        base: {
            shape: "package://ur_description/meshes/ur3/visual/base.dae",
            name: 'Base',
            frame: "simulated_base_link",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 0, x: 0, y: 0, z: 1 },
            scale: { x: 1, y: 1, z: 1 },
            showName: false,
            onClick: (e) => { e.stopPropagation() },
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
            onClick: (e) => { e.stopPropagation() },
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
            onClick: (e) => { e.stopPropagation() },
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
            onClick: (e) => { e.stopPropagation() },
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
            onClick: (e) => { e.stopPropagation() },
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
            onClick: (e) => { e.stopPropagation() },
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
            onClick: (e) => { e.stopPropagation() },
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
            onClick: (e) => { e.stopPropagation() },
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
            onClick: (e) => { e.stopPropagation() },
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
            onClick: (e) => { e.stopPropagation() },
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
            onClick: (e) => { e.stopPropagation() },
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
            onClick: (e) => { e.stopPropagation() },
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
            onClick: (e) => { e.stopPropagation() },
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
            onClick: (e) => { e.stopPropagation() },
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
            onClick: (e) => { e.stopPropagation() },
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
            onClick: (e) => { e.stopPropagation() },
            highlighted: false
        }
    },
    lines: {
        // line1: {
        //   name: "Line1",
        //   frame: "world",
        //   width: 1,
        //   vertices: [{position:{x:0,y:0,z:0},color:{r:0,g:0,b:0}},
        //               {position:{x:1,y:0,z:0},color:{r:255,g:0,b:0}},
        //               {position:{x:1,y:1,z:0},color:{r:255,g:255,b:0}},
        //               {position:{x:0,y:1,z:0},color:{r:0,g:255,b:0}},
        //               {position:{x:0,y:1,z:1},color:{r:0,g:255,b:255}},
        //               {position:{x:0,y:0,z:1},color:{r:0,g:0,b:255}},
        //               {position:{x:1,y:0,z:1},color:{r:255,g:0,b:255}},
        //               {position:{x:1,y:1,z:1},color:{r:255,g:255,b:255}}],
        //   highlighted: false
        // }
    },
    hulls: {
        // usage: {
        //   name: 'Robot Space Usage',
        //   frame: 'world',
        //   vertices: [
        //     {x:-0.5,y:-0.5,z:0},
        //     {x:0.5,y:-0.5,z:0},
        //     {x:0.5,y:0.5,z:0},
        //     {x:-0.5,y:0.5,z:0},
        //     {x:-0.5,y:0.5,z:1},
        //     {x:-0.5,y:-0.5,z:1},
        //     {x:0.5,y:-0.5,z:1},
        //     {x:0.5,y:0.5,z:1},
        //     {x:-0.75,y:0,z:0.5},
        //     {x:0.75,y:0,z:0.5},
        //     {x:0,y:0.75,z:0.5},
        //     {x:0,y:-0.75,z:0.5},
        //   ],
        //   color:{ r: 10, g: 200, b: 235, a: 0.5 },
        //   highlighted: true,
        //   showName: true,
        //   onClick: ()=>console.log('Space Usage')
        // }
    },
    displayTfs: false,
    displayGrid: true,
    isPolar: false,
    backgroundColor: '#1e1e1e',
    planeColor: '#141414',
    highlightColor: '#ffffff',
    plane: -0.75,
    onPointerMissed: () => console.log('Missed Click')
}
export const Movement = Template.bind({});
Movement.args = {
    tfs: {
        static: {
            frame: 'world',
            translation: { x: -1, y: 1, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 }
        }
    },
    items: {
        immovable: {
            shape: "cube",
            name: "Immovable Cube",
            frame: "static",
            position: { x: 0, y: 0, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 255, g: 10, b: 10, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            highlighted: true,
            onClick: () => {console.log('cube')},
            onPointerOver: () => {console.log('hover')},
            onPointerOut: () => {console.log('hover out')}
          }, 
          translateCube: {
            shape: "cube",
            name: "Translate Cube (Async)",
            frame: "static",
            position: { x: 1, y: 1, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 10, b: 10, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            highlighted: false,
            onClick: () => {console.log('cube')},
            onPointerOver: () => {console.log('hover')},
            onPointerOut: () => {console.log('hover out')},
            transformMode: 'translate',
            onMove: (transform)=>console.log(transform)
          },
          rotateCube: {
            shape: "cube",
            name: "Rotate Cube",
            frame: "static",
            position: { x: 1, y: 0, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 255, b: 10, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            highlighted: false,
            onClick: () => {console.log('cube')},
            onPointerOver: () => {console.log('hover')},
            onPointerOut: () => {console.log('hover out')},
            transformMode: 'rotate',
            onMove: (transform) => {
              useSceneStore.getState().setItemRotation('rotateCube',{
                x:transform.local.quaternion.x,
                y:transform.local.quaternion.y,
                z:transform.local.quaternion.z,
                w:transform.local.quaternion.w
              });
            }
          },
          scaleCube: {
            shape: "cube",
            name: "Scale Cube",
            frame: "static",
            position: { x: 0, y: 1, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 10, b: 255, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            highlighted: false,
            onClick: () => {console.log('cube')},
            onPointerOver: () => {console.log('hover')},
            onPointerOut: () => {console.log('hover out')},
            transformMode: 'scale',
            onMove: (transform) => {
              useSceneStore.getState().setItemScale('scaleCube',{
                x:transform.local.scale.x,
                y:transform.local.scale.y,
                z:transform.local.scale.z,
              });
            }
          }
    },
    lines: {},
    hulls: {},
    displayTfs: false,
    displayGrid: true,
    isPolar: false,
    backgroundColor: '#d0d0d0',
    planeColor: '#a8a8a8',
    highlightColor: '#ffffff',
    plane: -0.75,
    onPointerMissed: () => console.log('Missed Click')
}

let debugTfs = {};
let debugItems = {};

var y = -10;
var x = -12;

Object.keys(MeshLookupTable).forEach((key,i)=>{
    if (x===0){
    x += 2;
    }else if (x>0){
    if(x % 10 ===0){
        y += 2;
        x = -10;
    }else{
        x += 2;
    }
    }else{
    x += 2;
    }
    debugTfs[`${i}`] = {
        name: `${i}`,
        translation: {x: x, y:y, z: 0},
        rotation: { w: 1, x: 0, y: 0, z: 0 }
    };
    debugItems[key] = {
        shape: key,
        name: key,
        frame: `${i}`,
        position: { x: 0, y: 0, z: 0 },
        rotation: { w: 1, x: 0, y: 0, z: 0 },
        scale: key.includes('robotiq_2f_85_gripper_visualization') ? { x: 0.001, y: 0.001, z: 0.001 } : { x: 1, y: 1, z: 1 },
        editMode: 'inactive',
        showName: true,
        highlighted: false,
        onClick: () => { console.log(key) }
    }

})

export const MeshDebugging = Template.bind({});
MeshDebugging.args = {
    tfs: debugTfs,
    items: debugItems,
    lines: {},
    hulls: {},
    displayTfs: false,
    displayGrid: true,
    isPolar: false,
    backgroundColor: '#d0d0d0',
    planeColor: '#a8a8a8',
    highlightColor: '#ffffff',
    plane: -0.75,
    onPointerMissed: () => console.log('Missed Click')
}

