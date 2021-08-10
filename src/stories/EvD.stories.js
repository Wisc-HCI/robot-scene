import React, {Suspense} from 'react';

import Scene from '../components/Scene';
import useSceneStore from '../components/SceneStore';

import {Quaternion,Vector3} from 'three'

const origQuat = new Quaternion();
origQuat.set()
const testQuat = new Quaternion();
testQuat.setFromAxisAngle(new Vector3(0,0,1),Math.PI)
console.log(testQuat)

export default {
  title: 'EvD Demo',
  component: EvDViewer,
  decorators:[
    (storyFn) => {
        
      const defaultTfs = {
        'simulated_base_link':{
          frame:'world',
          translation: { x: 0, y: 0, z: 0 },
          rotation: { w: 0, x: 0, y: 0, z: 1 },
        },
        'simulated_shoulder_link':{
          frame:'simulated_base_link',
          translation: { x: 0, y: 0, z: 0.15185 },
          rotation: { w: 1, x: 0, y: 0, z: 0 },
        },
        'simulated_upper_arm_link':{
          frame:'simulated_shoulder_link',
          translation: { x: 0, y: 0, z: 0 },
          rotation: { w: 0.7071067811140325, x: 0.7071067812590626, y: 0, z: 0 }
        },
        'simulated_forearm_link':{
          frame:'simulated_upper_arm_link',
          translation: { x: -0.24355, y: 0, z: 0 },
          rotation: { w: 1, x: 0, y: 0, z: 0 },
        },
        'simulated_wrist_1_link':{
          frame:'simulated_forearm_link',
          translation: { x: -0.2132, y: 0, z: 0.13105},
          rotation: { w: 1, x: 0, y: 0, z: 0 },
        },
        'simulated_wrist_2_link':{
          frame:'simulated_wrist_1_link',
          translation: { x: 0, y: -0.08535, z: 0 },
          rotation: { w: 0.7071067811140325, x: 0.7071067812590626, y: 0, z: 0 },
        },
        'simulated_wrist_3_link':{
          frame:'simulated_wrist_2_link',
          translation: { x: 0, y: 0.0921, z: 0 },
          rotation: { w: 0.7071067811140325, x: -0.7071067812590626, y: 0, z: 0 },
        },
        'simulated_flange':{
          frame:'simulated_wrist_3_link',
          translation: { x: 0, y: 0, z: 0 },
          rotation: { w: 0.5, x: -0.5, y: -0.5, z: -0.5 },
        },
        'simulated_tool0':{
          frame:'simulated_flange',
          translation: { x: 0, y: 0, z: 0 },
          rotation: { w: 0.5, x: 0.5, y: 0.5, z: 0.5 },
        },
        'simulated_robotiq_85_base_link':{
          frame:'simulated_tool0',
          translation: {x: 0, y: 0, z: 0},
          rotation: { w: 0.5, x: 0.5, y: -0.5, z: 0.5},
        },
        'simulated_robotiq_85_left_knuckle_link':{
          frame:'simulated_robotiq_85_base_link',
          translation: { x: 0.05490451627, y: 0.03060114443, z: 0 },
          rotation: { w: 0, x: 1, y: 0, z: 0 },
        },
        'simulated_robotiq_85_right_knuckle_link':{
          frame:'simulated_robotiq_85_base_link',
          translation: { x: 0.05490451627, y: -0.03060114443, z: 0 },
          rotation: { w: 1, x: 0, y: 0, z: 0 },
        },
        'simulated_robotiq_85_left_finger_link':{
          frame:'simulated_robotiq_85_left_knuckle_link',
          translation: { x: -0.00408552455, y: -0.03148604435, z: 0 },
          rotation: { w: 1, x: 0, y: 0, z: 0 },
        },
        'simulated_robotiq_85_right_finger_link':{
          frame:'simulated_robotiq_85_right_knuckle_link',
          translation: { x: -0.00408552455, y: -0.03148604435, z: 0 },
          rotation: { w: 1, x: 0, y: 0, z: 0 },
        },
        'simulated_robotiq_85_left_inner_knuckle_link':{
          frame:'simulated_robotiq_85_base_link',
          translation: { x: 0.06142, y: 0.0127, z: 0 },
          rotation: { w: 0, x: 1, y: 0, z: 0 },
        },
        'simulated_robotiq_85_right_inner_knuckle_link':{
          frame:'simulated_robotiq_85_base_link',
          translation: { x: 0.06142, y: -0.0127, z: 0 },
          rotation: { w: 1, x: 0, y: 0, z: 0 },
        },
        'simulated_robotiq_85_left_finger_tip_link':{
          frame:'simulated_robotiq_85_left_inner_knuckle_link',
          translation: { x: 0.04303959807, y: -0.03759940821, z: 0 },
          rotation: { w: 1, x: 0, y: 0, z: 0 },
        },
        'simulated_robotiq_85_right_finger_tip_link':{
          frame:'simulated_robotiq_85_right_inner_knuckle_link',
          translation: { x: 0.04303959807, y: -0.03759940821, z: 0 },
          rotation: { w: 1, x: 0, y: 0, z: 0},
        }
      }
        
      const defaultItems = {
        table: {
          shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/Table/Table.stl",
          name: "Table",
          frame: "world",
          position: { x: 0, y: 0.36, z: -0.37 },
          rotation: { w: 1, x: 0, y: 0, z: 0 },
          scale: {x:1,y:1,z:1},
          color: {r: 40, g: 40, b: 40, a: 1},
          highlighted: false,
          showName: false
        },
        pedestal: {
          shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/ur3e-Pedestal/Pedestal.stl",
          name: "Pedestal",
          frame: "world",
          position: { x: 0, y: 0, z: -0.38 },
          rotation: { w: 1, x: 0, y: 0, z: 0 },
          scale: {x:1,y:1,z:1},
          color: {r: 50, g: 50, b: 50, a: 1},
          highlighted: false,
          showName: false
        },
        box: {
          shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/Box/Box.stl",
          name: "Box",
          frame: "world",
          position: { x: 0.35, y: 0.35, z: 0.07 },
          rotation: { w: 1, x: 0, y: 0, z: 0 },
          scale: {x:1,y:1,z:1},
          highlighted: false,
          showName: false
        },
        printer: {
          shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/MK2-Printer/MK2-Printer.stl",
          name: "3D Printer",
          frame: "world",
          position: { x: -0.28, y: 0.32, z: 0.3 },
          rotation: { w: 1, x: 0, y: 0, z: 0 },
          scale: {x:1,y:1,z:1},
          highlighted: false,
          showName: false
        },
        base: {
          shape: "package://ur_description/meshes/ur3/visual/base.dae",
          name: 'Base',
          frame: "simulated_base_link",
          position: { x: 0, y: 0, z: 0 },
          rotation: { w: 0, x: 0, y: 0, z: 1 },
          scale: {x:1,y:1,z:1},
          showName: false,
          highlighted: false
        },
        shoulderLink: {
          shape: "package://ur_description/meshes/ur3/visual/shoulder.dae",
          name: 'Shoulder Link',
          frame: "simulated_shoulder_link",
          position: { x: 0, y: 0, z: 0 },
          rotation: { w: 0, x: 0, y: 0, z: 1 },
          scale: {x:1,y:1,z:1},
          showName: false,
          highlighted: false,
        },
        upperArmLink: {
          shape: "package://ur_description/meshes/ur3/visual/upperarm.dae",
          name: "Upper Arm Link",
          frame: "simulated_upper_arm_link",
          position: { x: 0, y: 0, z: 0.12 },
          rotation: { w: 0.5, x: 0.5, y: -0.5, z: -0.5 },
          scale: {x:1,y:1,z:1},
          showName: false,
          highlighted: false,
        },
        forearmLink: {
          shape: "package://ur_description/meshes/ur3/visual/forearm.dae",
          name: "Forearm Link",
          frame: "simulated_forearm_link",
          position: { x: 0, y: 0, z: 0.027 },
          rotation: { w: 0.5, x: 0.5, y: -0.5, z: -0.5 },
          scale: {x:1,y:1,z:1},
          showName: false,
          highlighted: false,
        },
        wrist1Link: {
          shape: "package://ur_description/meshes/ur3/visual/wrist1.dae",
          name: "Wrist 1 Link",
          frame: "simulated_wrist_1_link",
          position: { x: 0, y: 0, z: -0.104 },
          rotation: { w: 0.7071068, x: 0.7071068, y: 0, z: 0 },
          scale: {x:1,y:1,z:1},
          showName: false,
          highlighted: false,
        },
        wrist2Link: {
          shape: "package://ur_description/meshes/ur3/visual/wrist2.dae",
          name: "Wrist 2 Link",
          frame: "simulated_wrist_2_link",
          position: { x: 0, y: 0, z: -0.08535 },
          rotation: { w: 1, x: 0, y: 0, z: 0 },
          scale: {x:1,y:1,z:1},
          showName: false,
          highlighted: false,
        },
        wrist3Link: {
          shape: "package://ur_description/meshes/ur3/visual/wrist3.dae",
          name: "Wrist 3 Link",
          frame: "simulated_wrist_3_link",
          position: { x: 0, y: 0, z: -0.0921 },
          rotation: { w: 0.7071068, x: 0.7071068, y: 0, z: 0 },
          scale: {x:1,y:1,z:1},
          showName: false,
          highlighted: false,
        },
        gripperBaseLink:{
          shape: "package://robotiq_85_description/meshes/visual/robotiq_85_base_link.dae",
          name: "Gripper Base",
          frame: "simulated_robotiq_85_base_link",
          position: { x: 0, y: 0, z: 0},
          rotation: { w: 1, x: 0, y: 0, z: 0},
          scale: {x:1,y:1,z:1},
          showName: false,
          highlighted: false
        },
        gripperLeftKnuckle:{
          shape: "package://robotiq_85_description/meshes/visual/robotiq_85_knuckle_link.dae",
          name: "Gripper Left Knuckle",
          frame: "simulated_robotiq_85_left_knuckle_link",
          position: { x: 0, y: 0, z: 0},
          rotation: { w: 1, x: 0, y: 0, z: 0},
          scale: {x:1,y:1,z:1},
          showName: false,
          highlighted: false
        },
        gripperRightKnuckle:{
          shape: "package://robotiq_85_description/meshes/visual/robotiq_85_knuckle_link.dae",
          name: "Gripper Right Knuckle",
          frame: "simulated_robotiq_85_right_knuckle_link",
          position: { x: 0, y: 0, z: 0},
          rotation: { w: 1, x: 0, y: 0, z: 0},
          scale: {x:1,y:1,z:1},
          showName: false,
          highlighted: false
        },
        gripperLeftFinger:{
          shape: "package://robotiq_85_description/meshes/visual/robotiq_85_finger_link.dae",
          name: "Gripper Left Finger",
          frame: "simulated_robotiq_85_left_finger_link",
          position: { x: 0, y: 0, z: 0},
          rotation: { w: 1, x: 0, y: 0, z: 0},
          scale: {x:1,y:1,z:1},
          showName: false,
          highlighted: false
        },
        gripperRightFinger:{
          shape: "package://robotiq_85_description/meshes/visual/robotiq_85_finger_link.dae",
          name: "Gripper Right Finger",
          frame: "simulated_robotiq_85_right_finger_link",
          position: { x: 0, y: 0, z: 0},
          rotation: { w: 1, x: 0, y: 0, z: 0},
          scale: {x:1,y:1,z:1},
          showName: false,
          highlighted: false
        },
        gripperLeftInnerKnuckle:{
          shape: "package://robotiq_85_description/meshes/visual/robotiq_85_inner_knuckle_link.dae",
          name: "Gripper Left Inner Knuckle",
          frame: "simulated_robotiq_85_left_inner_knuckle_link",
          position: { x: 0, y: 0, z: 0},
          rotation: { w: 1, x: 0, y: 0, z: 0},
          scale: {x:1,y:1,z:1},
          showName: false,
          highlighted: false
        },
        gripperRightInnerKnuckle:{
          shape: "package://robotiq_85_description/meshes/visual/robotiq_85_inner_knuckle_link.dae",
          name: "Gripper Right Inner Knuckle",
          frame: "simulated_robotiq_85_right_inner_knuckle_link",
          position: { x: 0, y: 0, z: 0},
          rotation: { w: 1, x: 0, y: 0, z: 0},
          scale: {x:1,y:1,z:1},
          showName: false,
          highlighted: false
        },
        gripperLeftFingerTip:{
          shape: "package://robotiq_85_description/meshes/visual/robotiq_85_finger_tip_link.dae",
          name: "Gripper Left Finger Tip",
          frame: "simulated_robotiq_85_left_finger_tip_link",
          position: { x: 0, y: 0, z: 0},
          rotation: { w: 1, x: 0, y: 0, z: 0},
          scale: {x:1,y:1,z:1},
          showName: false,
          highlighted: false
        },
        gripperRightFingerTip:{
          shape: "package://robotiq_85_description/meshes/visual/robotiq_85_finger_tip_link.dae",
          name: "Gripper Right Finger Tip",
          frame: "simulated_robotiq_85_right_finger_tip_link",
          position: { x: 0, y: 0, z: 0},
          rotation: { w: 1, x: 0, y: 0, z: 0},
          scale: {x:1,y:1,z:1},
          showName: false,
          highlighted: false
        }
      }
      
      const defaultLines = {
        line1: {
          name: "Line1",
          frame: "world",
          width: 1,
          vertices: [{position:{x:0,y:0,z:0},color:{r:0,g:0,b:0}},
                      {position:{x:1,y:0,z:0},color:{r:255,g:0,b:0}},
                      {position:{x:1,y:1,z:0},color:{r:255,g:255,b:0}},
                      {position:{x:0,y:1,z:0},color:{r:0,g:255,b:0}},
                      {position:{x:0,y:1,z:1},color:{r:0,g:255,b:255}},
                      {position:{x:0,y:0,z:1},color:{r:0,g:0,b:255}},
                      {position:{x:1,y:0,z:1},color:{r:255,g:0,b:255}},
                      {position:{x:1,y:1,z:1},color:{r:255,g:255,b:255}}],
          highlighted: false
        }
      }

      const defaultHulls = {
        usage: {
          name: 'Robot Space Usage',
          frame: 'world',
          vertices: [
            {x:-0.5,y:-0.5,z:0},
            {x:0.5,y:-0.5,z:0},
            {x:0.5,y:0.5,z:0},
            {x:-0.5,y:0.5,z:0},
            {x:-0.5,y:0.5,z:1},
            {x:-0.5,y:-0.5,z:1},
            {x:0.5,y:-0.5,z:1},
            {x:0.5,y:0.5,z:1},
            {x:-0.75,y:0,z:0.5},
            {x:0.75,y:0,z:0.5},
            {x:0,y:0.75,z:0.5},
            {x:0,y:-0.75,z:0.5},
          ],
          color:{ r: 10, g: 200, b: 235, a: 0.5 },
          highlighted: true,
          showName: true,
          onClick: ()=>console.log('Space Usage')
        }
      }

      useSceneStore.getState().setItems(defaultItems);
      useSceneStore.getState().setTfs(defaultTfs);
      useSceneStore.getState().setLines(defaultLines);
      useSceneStore.getState().setHulls(defaultHulls);

      return storyFn({plane:-0.36})
        

    }
]
};

function EvDViewer(props) {

  return (
    <Suspense fallback={<div>Loading... </div>}>
    <div style={{ height: "100vh", width: "100vw", padding: 0 }}>
      <Scene {...props}/>
    </div>
    </Suspense>
  )
}

const Story = (props) => (<EvDViewer {...props}/>)



export const StoryScene = Story.bind({});

StoryScene.args = {
  displayTfs:true,
  displayGrid:true,
  isPolar:false,
  backgroundColor:'#d0d0d0',
  planeColor:'#a8a8a8',
  highlightColor:'#ffffff',
  plane:-0.75
}

