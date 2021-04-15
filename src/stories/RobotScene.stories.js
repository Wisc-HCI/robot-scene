import React from 'react';

import { RobotScene } from '../components/RobotScene';

export default {
  title: 'RobotScene',
  component: RobotScene,
};

const Template = (args) => <div style={{ height: "100vh", width: "100vw", padding: 0 }}><RobotScene {...args} /></div>;

export const RobotSceneStory = Template.bind({});
