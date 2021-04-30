import React from 'react';
import useIncStore from '../components/IncStore';

export default {
    title: 'Inc Demo'
};

function Counter() {
    const inc = useIncStore((state) => state.inc);
    const count = useIncStore((state) => state.forest.bears.count);
    return (
      <div>
        <span style={{color:'white'}}>{count}</span>
        <button onClick={inc}>Breed</button>
      </div>
    );
}

const Story = () => (<Counter/>)

export const IncDemo = Story.bind({});
