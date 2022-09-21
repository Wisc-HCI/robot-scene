import{r as p}from"./index.b2461cfb.js";import{S as l,u as t}from"./Scene.805e9737.js";import{j as s}from"./jsx-runtime.afb89c8a.js";import{M as h}from"./MeshLookup.fbb57448.js";import"./iframe.4fbcc1d3.js";import"./client.3f2b035b.js";import"./index.cf6f0c78.js";const w={parameters:{storySource:{source:`import React, { useLayoutEffect } from 'react';
import Scene from '../components/Scene';
import { useDefaultSceneStore } from '../components';
import { MeshLookupTable } from './meshes/MeshLookup';

export default {
    title: 'CoFrame',
    component: Scene,
}

const Template = (args) => {
    const { tfs, items, hulls, lines, texts, ...otherArgs } = args;
    useLayoutEffect(() => {
        useDefaultSceneStore.setState({ tfs, items, hulls, lines, texts })
    }, [tfs, items, hulls, lines, texts])
    return <div style={{ height: 'calc(100vh - 2rem)', width: 'calc(100vw - 2rem)' }}><Scene {...otherArgs} store={useDefaultSceneStore} meshLookup={MeshLookupTable}/></div>
};

export const CoFrame = Template.bind({});
CoFrame.storyName = "CoFrame";
CoFrame.args = {
    tfs: {
        "thingType-98892a7c1c1911ecbe2600155d1a70a2": {
            "frame": "world",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "thingType-98892b3a1c1911ecbe2600155d1a70a2": {
            "frame": "world",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "thingType-98892bd01c1911ecbe2600155d1a70a2": {
            "frame": "world",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "thingType-98892ce81c1911ecbe2600155d1a70a2": {
            "frame": "world",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "thingType-98892d7e1c1911ecbe2600155d1a70a2": {
            "frame": "world",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "thingType-98892e001c1911ecbe2600155d1a70a2": {
            "frame": "world",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "robot-agent-988926121c1911eccbe2600155d1a70a2": {
            "frame": "pedestal",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "human-agent-ccbe2600155d1a70a2988926121c1911e": {
            "frame": "world",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "machine-ac5a063a-9ff9-4c0a-8fa6-81d3983f4a10": {
            "frame": "table",
            "position": {
                "x": -0.28,
                "y": -0.04,
                "z": 0.67
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "toolType-assembly-jig": {
            "frame": "world",
            "position": {
                "x": 0.2,
                "y": 0.28,
                "z": 0.14
            },
            "rotation": {
                "w": -0.5,
                "x": 0.5,
                "y": -0.5,
                "z": -0.5
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "machine-0c804bb3-f341-4b82-b9f0-e5aab536e4d7": {
            "frame": "world",
            "position": {
                "x": -0.85,
                "y": -0.25,
                "z": -0.75
            },
            "rotation": {
                "w": 0.707,
                "x": 0,
                "y": 0,
                "z": 0.707
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "translate"
        },
        "machine-0914222f-03e0-4b4c-a8c4-03146867ba7b": {
            "frame": "world",
            "position": {
                "x": -0.85,
                "y": -0.25,
                "z": -0.75
            },
            "rotation": {
                "w": 0.707,
                "x": 0,
                "y": 0,
                "z": 0.707
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "machine-9133367a-f691-4d94-9764-50d9685db30a": {
            "frame": "world",
            "position": {
                "x": 0.85,
                "y": -0.25,
                "z": -0.75
            },
            "rotation": {
                "w": 0.707,
                "x": 0,
                "y": 0,
                "z": -0.707
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "machine-67d870e0-511d-4662-bf0d-8478f5e860f8": {
            "frame": "world",
            "position": {
                "x": 0.85,
                "y": -0.25,
                "z": -0.75
            },
            "rotation": {
                "w": 0.707,
                "x": 0,
                "y": 0,
                "z": -0.707
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "toolType-transport-jig": {
            "frame": "world",
            "position": {
                "x": 0.3,
                "y": 0.28,
                "z": 0.14
            },
            "rotation": {
                "w": -0.5,
                "x": 0.5,
                "y": -0.5,
                "z": -0.5
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "table": {
            "frame": "world",
            "position": {
                "x": 0,
                "y": 0.36,
                "z": -0.37
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "pedestal": {
            "frame": "world",
            "position": {
                "x": 0,
                "y": -0.15,
                "z": -0.38
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "simulatedTool0": {
            "frame": "robot-agent-988926121c1911eccbe2600155d1a70a2",
            "position": {
                "x": 0.11666648089885712,
                "y": 0.2694645017385483,
                "z": 0.6366749751567841
            },
            "rotation": {
                "w": -0.37005797028541565,
                "x": 0.9280606508255005,
                "y": -0.01538957841694355,
                "z": 0.039035625755786896
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "robotBase": {
            "frame": "robot-agent-988926121c1911eccbe2600155d1a70a2",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0.38
            },
            "rotation": {
                "w": 0,
                "x": 0,
                "y": 0,
                "z": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "robotShoulderLink": {
            "frame": "robot-agent-988926121c1911eccbe2600155d1a70a2",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0.53185
            },
            "rotation": {
                "w": 0.6669439077377319,
                "x": 0,
                "y": 0,
                "z": 0.745107889175415
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "robotUpperArmLink": {
            "frame": "robot-agent-988926121c1911eccbe2600155d1a70a2",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0.53185
            },
            "rotation": {
                "w": -0.4478497803211212,
                "x": 0.5932892560958862,
                "y": -0.3847179114818573,
                "z": 0.5472025871276855
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "robotForearmLink": {
            "frame": "robot-agent-988926121c1911eccbe2600155d1a70a2",
            "position": {
                "x": -0.02560272067785263,
                "y": 0.23055101335048675,
                "z": 0.45763859629631043
            },
            "rotation": {
                "w": 0.6748411655426025,
                "x": 0.1353885531425476,
                "y": 0.694024384021759,
                "z": 0.2111620008945465
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "robotWrist1Link": {
            "frame": "robot-agent-988926121c1911eccbe2600155d1a70a2",
            "position": {
                "x": 0.11584359407424927,
                "y": 0.14418705981224775,
                "z": 0.6451554048061371
            },
            "rotation": {
                "w": -0.29463568329811096,
                "x": 0.6713905930519104,
                "y": -0.22188881039619446,
                "z": 0.6427983641624451
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "robotWrist2Link": {
            "frame": "robot-agent-988926121c1911eccbe2600155d1a70a2",
            "position": {
                "x": 0.1089443638920784,
                "y": 0.20631420761346816,
                "z": 0.7032694268226624
            },
            "rotation": {
                "w": 0.9164819121360779,
                "x": -0.39580079913139343,
                "y": -0.05381776764988899,
                "z": -0.022500555962324142
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "robotWrist3Link": {
            "frame": "robot-agent-988926121c1911eccbe2600155d1a70a2",
            "position": {
                "x": 0.11666648089885712,
                "y": 0.2694645017385483,
                "z": 0.6366749751567841
            },
            "rotation": {
                "w": -0.37005797028541565,
                "x": 0.9280606508255005,
                "y": -0.01538957841694355,
                "z": 0.039035625755786896
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "gripperBaseLink": {
            "frame": "simulatedTool0",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "w": 0.5,
                "x": 0.5,
                "y": -0.5,
                "z": 0.5
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "gripperLeftKnuckle": {
            "frame": "gripperBaseLink",
            "position": {
                "x": 0.05490451627,
                "y": 0.03060114443,
                "z": 0
            },
            "rotation": {
                "w": 0,
                "x": 1,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "gripperRightKnuckle": {
            "frame": "gripperBaseLink",
            "position": {
                "x": 0.05490451627,
                "y": -0.03060114443,
                "z": 0
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "gripperLeftFinger": {
            "frame": "gripperLeftKnuckle",
            "position": {
                "x": -0.00408552455,
                "y": -0.03148604435,
                "z": 0
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "gripperRightFinger": {
            "frame": "gripperRightKnuckle",
            "position": {
                "x": -0.00408552455,
                "y": -0.03148604435,
                "z": 0
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "gripperLeftInnerKnuckle": {
            "frame": "gripperBaseLink",
            "position": {
                "x": 0.06142,
                "y": 0.0127,
                "z": 0
            },
            "rotation": {
                "w": 0,
                "x": 1,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "gripperRightInnerKnuckle": {
            "frame": "gripperBaseLink",
            "position": {
                "x": 0.06142,
                "y": -0.0127,
                "z": 0
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "gripperLeftFingerTip": {
            "frame": "gripperLeftInnerKnuckle",
            "position": {
                "x": 0.04303959807,
                "y": -0.03759940821,
                "z": 0
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "gripperRightFingerTip": {
            "frame": "gripperRightInnerKnuckle",
            "position": {
                "x": 0.04303959807,
                "y": -0.03759940821,
                "z": 0
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        }
    },
    items: {
        "zone-988926121c1911ecbe2600155d1a70a2": {
            "shape": "cube",
            "name": "Human Workspace Occupancy Zone",
            "frame": "world",
            "position": {
                "x": 0,
                "y": 1,
                "z": 0.4
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "color": {
                "r": 233,
                "g": 53,
                "b": 152,
                "a": 0.2
            },
            "scale": {
                "x": 2,
                "y": 1,
                "z": 0.8
            },
            "transformMode": "inactive",
            "highlighted": false,
            "hidden": true
        },
        "zone-988926d01c1911ecbe2600155d1a70a2": {
            "shape": "cube",
            "name": "Human Corridor Occupancy Zone",
            "frame": "world",
            "position": {
                "x": 0,
                "y": -1,
                "z": 0.4
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "color": {
                "r": 233,
                "g": 53,
                "b": 152,
                "a": 0.2
            },
            "scale": {
                "x": 2,
                "y": 1,
                "z": 0.8
            },
            "transformMode": "inactive",
            "highlighted": false,
            "hidden": true
        },
        "location-c540bea6-a0a8-40c2-8fcc-cb6ae772697c-tag": {
            "uuid": "location-c540bea6-a0a8-40c2-8fcc-cb6ae772697c-tag",
            "frame": "world",
            "name": "Initial Location",
            "shape": "flag",
            "position": {
                "x": 0.20400124405192815,
                "y": 0.15340864650572777,
                "z": 0.15008560705897595
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": -0.25,
                "y": 0.25,
                "z": 0.25
            },
            "highlighted": false,
            "showName": false,
            "color": {
                "r": 233,
                "g": 53,
                "b": 152,
                "a": 1
            },
            "hidden": true,
            "transformMode": "inactive"
        },
        "location-c540bea6-a0a8-40c2-8fcc-cb6ae772697c-pointer": {
            "uuid": "location-c540bea6-a0a8-40c2-8fcc-cb6ae772697c-pointer",
            "frame": "world",
            "shape": "package://app/meshes/LocationMarker.stl",
            "position": {
                "x": 0.20400124405192815,
                "y": 0.15340864650572777,
                "z": 0.15008560705897595
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0.6763577452496884,
                "w": 0.7365732824646558
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "highlighted": false,
            "showName": false,
            "color": {
                "r": 233,
                "g": 53,
                "b": 152,
                "a": 1
            },
            "hidden": true,
            "transformMode": "inactive"
        },
        "location-b7daabbd-6e24-4b8f-9c8e-5ea22d727ad0-tag": {
            "uuid": "location-b7daabbd-6e24-4b8f-9c8e-5ea22d727ad0-tag",
            "frame": "world",
            "name": "Deposit Location",
            "shape": "flag",
            "position": {
                "x": 0.40801871379516913,
                "y": -0.2369200947241372,
                "z": 0.30206792720062714
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": -0.25,
                "y": 0.25,
                "z": 0.25
            },
            "highlighted": false,
            "showName": false,
            "color": {
                "r": 100,
                "g": 18,
                "b": 128,
                "a": 1
            },
            "hidden": true,
            "transformMode": "inactive"
        },
        "location-b7daabbd-6e24-4b8f-9c8e-5ea22d727ad0-pointer": {
            "uuid": "location-b7daabbd-6e24-4b8f-9c8e-5ea22d727ad0-pointer",
            "frame": "world",
            "shape": "package://app/meshes/LocationMarker.stl",
            "position": {
                "x": 0.40801871379516913,
                "y": -0.2369200947241372,
                "z": 0.30206792720062714
            },
            "rotation": {
                "x": 0.7133230578218721,
                "y": -0.03940528263686746,
                "z": -0.03668088697820589,
                "w": -0.6987645894079457
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "highlighted": false,
            "showName": false,
            "color": {
                "r": 100,
                "g": 18,
                "b": 128,
                "a": 1
            },
            "hidden": true,
            "transformMode": "inactive"
        },
        "location-47238d9d-5241-4bdb-8b29-877f78cb124d-tag": {
            "uuid": "location-47238d9d-5241-4bdb-8b29-877f78cb124d-tag",
            "frame": "world",
            "name": "Blade Fetch Location",
            "shape": "flag",
            "position": {
                "x": -0.4501325157748985,
                "y": -0.25541537076762655,
                "z": -0.02822078016538941
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": -0.25,
                "y": 0.25,
                "z": 0.25
            },
            "highlighted": false,
            "showName": false,
            "color": {
                "r": 100,
                "g": 18,
                "b": 128,
                "a": 1
            },
            "hidden": true,
            "transformMode": "inactive"
        },
        "location-47238d9d-5241-4bdb-8b29-877f78cb124d-pointer": {
            "uuid": "location-47238d9d-5241-4bdb-8b29-877f78cb124d-pointer",
            "frame": "world",
            "shape": "package://app/meshes/LocationMarker.stl",
            "position": {
                "x": -0.4501325157748985,
                "y": -0.25541537076762655,
                "z": -0.02822078016538941
            },
            "rotation": {
                "x": -0.006622068142399432,
                "y": -0.6857443017700521,
                "z": 0.7277784747239732,
                "w": -0.007027982062342742
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "highlighted": false,
            "showName": false,
            "color": {
                "r": 100,
                "g": 18,
                "b": 128,
                "a": 1
            },
            "hidden": true,
            "transformMode": "inactive"
        },
        "waypoint-e7a63a7c-1df8-4ca6-9ffc-4f9b1e008aa4-tag": {
            "uuid": "waypoint-e7a63a7c-1df8-4ca6-9ffc-4f9b1e008aa4-tag",
            "frame": "world",
            "name": "WP 1",
            "shape": "tag",
            "position": {
                "x": -0.3319053491144722,
                "y": -0.006321044395614983,
                "z": 0.3364538095102072
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": -0.25,
                "y": 0.25,
                "z": 0.25
            },
            "highlighted": false,
            "showName": false,
            "color": {
                "r": 100,
                "g": 18,
                "b": 128,
                "a": 1
            },
            "hidden": true,
            "transformMode": "inactive"
        },
        "waypoint-e7a63a7c-1df8-4ca6-9ffc-4f9b1e008aa4-pointer": {
            "uuid": "waypoint-e7a63a7c-1df8-4ca6-9ffc-4f9b1e008aa4-pointer",
            "frame": "world",
            "shape": "package://app/meshes/OpenWaypointMarker.stl",
            "position": {
                "x": -0.3319053491144722,
                "y": -0.006321044395614983,
                "z": 0.3364538095102072
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0.9907218933440319,
                "w": 0.13590485660496693
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "highlighted": false,
            "showName": false,
            "color": {
                "r": 100,
                "g": 18,
                "b": 128,
                "a": 1
            },
            "hidden": true,
            "transformMode": "inactive"
        },
        "machine-ac5a063a-9ff9-4c0a-8fa6-81d3983f4a10": {
            "shape": "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/MK2-Printer/MK2-Printer.stl",
            "name": "3D Printer Machine",
            "frame": "machine-ac5a063a-9ff9-4c0a-8fa6-81d3983f4a10",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "machine-ac5a063a-9ff9-4c0a-8fa6-81d3983f4a10-collision": {
            "shape": "package://evd_ros_tasks/tasks/3d_printer_machine_tending/collision_meshes/MK2-Printer.stl",
            "name": "3D Printer Machine Collision",
            "frame": "machine-ac5a063a-9ff9-4c0a-8fa6-81d3983f4a10",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false,
            "color": {
                "r": 250,
                "g": 0,
                "b": 0,
                "a": 0.6
            },
            "wireframe": true,
            "hidden": true
        },
        "toolType-assembly-jig": {
            "shape": "assembly_jig",
            "name": "Assembly Jig Machine",
            "frame": "toolType-assembly-jig",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 0.2,
                "y": 0.2,
                "z": 0.2
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "toolType-assembly-jig-collision": {
            "shape": "assembly_jig_collision",
            "name": "Assembly Jig Machine Collision",
            "frame": "toolType-assembly-jig",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 0.2,
                "y": 0.2,
                "z": 0.2
            },
            "transformMode": "inactive",
            "highlighted": false,
            "color": {
                "r": 250,
                "g": 0,
                "b": 0,
                "a": 0.6
            },
            "wireframe": true,
            "hidden": true
        },
        "machine-0c804bb3-f341-4b82-b9f0-e5aab536e4d7": {
            "shape": "conveyor",
            "name": "Blade Conveyor",
            "frame": "machine-0c804bb3-f341-4b82-b9f0-e5aab536e4d7",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "machine-0c804bb3-f341-4b82-b9f0-e5aab536e4d7-collision": {
            "shape": "conveyor_collision",
            "name": "Blade Conveyor Collision",
            "frame": "machine-0c804bb3-f341-4b82-b9f0-e5aab536e4d7",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false,
            "color": {
                "r": 250,
                "g": 0,
                "b": 0,
                "a": 0.6
            },
            "wireframe": true,
            "hidden": true
        },
        "machine-0914222f-03e0-4b4c-a8c4-03146867ba7b": {
            "shape": "conveyor_receiver",
            "name": "Blade Feeder",
            "frame": "machine-0914222f-03e0-4b4c-a8c4-03146867ba7b",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "machine-0914222f-03e0-4b4c-a8c4-03146867ba7b-collision": {
            "shape": "conveyor_receiver_collision",
            "name": "Blade Feeder Collision",
            "frame": "machine-0914222f-03e0-4b4c-a8c4-03146867ba7b",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false,
            "color": {
                "r": 250,
                "g": 0,
                "b": 0,
                "a": 0.6
            },
            "wireframe": true,
            "hidden": true
        },
        "machine-9133367a-f691-4d94-9764-50d9685db30a": {
            "shape": "conveyor",
            "name": "Knife Conveyor",
            "frame": "machine-9133367a-f691-4d94-9764-50d9685db30a",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "machine-9133367a-f691-4d94-9764-50d9685db30a-collision": {
            "shape": "conveyor_collision",
            "name": "Knife Conveyor Collision",
            "frame": "machine-9133367a-f691-4d94-9764-50d9685db30a",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false,
            "color": {
                "r": 250,
                "g": 0,
                "b": 0,
                "a": 0.6
            },
            "wireframe": true,
            "hidden": true
        },
        "machine-67d870e0-511d-4662-bf0d-8478f5e860f8": {
            "shape": "conveyor_dispatcher",
            "name": "Knife Feeder",
            "frame": "machine-67d870e0-511d-4662-bf0d-8478f5e860f8",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "machine-67d870e0-511d-4662-bf0d-8478f5e860f8-collision": {
            "shape": "conveyor_dispatcher_collision",
            "name": "Knife Feeder Collision",
            "frame": "machine-67d870e0-511d-4662-bf0d-8478f5e860f8",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false,
            "color": {
                "r": 250,
                "g": 0,
                "b": 0,
                "a": 0.6
            },
            "wireframe": true,
            "hidden": true
        },
        "toolType-transport-jig": {
            "shape": "transport_jig",
            "name": "Transport Jig",
            "frame": "toolType-transport-jig",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 0.2,
                "y": 0.2,
                "z": 0.2
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "toolType-transport-jig-collision": {
            "shape": "transport_jig",
            "name": "Transport Jig Collision",
            "frame": "toolType-transport-jig",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false,
            "color": {
                "r": 250,
                "g": 0,
                "b": 0,
                "a": 0.6
            },
            "wireframe": true,
            "hidden": true
        },
        "inputOutput-ridn023-dz00-445jk-we90-e69tffb00845": {
            "shape": "handle_l",
            "frame": "machine-ac5a063a-9ff9-4c0a-8fa6-81d3983f4a10",
            "position": {
                "x": -0.2,
                "y": 0.28,
                "z": 0.074
            },
            "rotation": {
                "x": 0.707,
                "y": 0,
                "z": 0,
                "w": 0.707
            },
            "scale": {
                "x": 0.2,
                "y": 0.2,
                "z": 0.2
            },
            "transformMode": "inactive",
            "color": {
                "r": 0,
                "g": 200,
                "b": 0,
                "a": 0.2
            },
            "highlighted": false,
            "hidden": true
        },
        "inputOutput-mnpdm09-ty00-445md-yjg09-rnvor905mfi1203d": {
            "shape": "handle_r",
            "frame": "machine-ac5a063a-9ff9-4c0a-8fa6-81d3983f4a10",
            "position": {
                "x": -0.3,
                "y": 0.28,
                "z": 0.078
            },
            "rotation": {
                "x": 0.707,
                "y": 0,
                "z": 0,
                "w": 0.707
            },
            "scale": {
                "x": 0.2,
                "y": 0.2,
                "z": 0.2
            },
            "transformMode": "inactive",
            "color": {
                "r": 0,
                "g": 200,
                "b": 0,
                "a": 0.2
            },
            "highlighted": false,
            "hidden": true
        },
        "inputOutput-2d49b51b-dz37-488e-we56-e55ef6a0a8fc": {
            "shape": "blade",
            "frame": "world",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 0.2,
                "y": 0.2,
                "z": 0.2
            },
            "transformMode": "inactive",
            "color": {
                "r": 0,
                "g": 200,
                "b": 0,
                "a": 0.2
            },
            "highlighted": false,
            "hidden": true
        },
        "inputOutput-3d50b62b-dz37-488e-we56-e65eo6f0a80b": {
            "shape": "transport_jig",
            "frame": "toolType-transport-jig",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 0.2,
                "y": 0.2,
                "z": 0.2
            },
            "transformMode": "inactive",
            "color": {
                "r": 0,
                "g": 200,
                "b": 0,
                "a": 0.2
            },
            "highlighted": false,
            "hidden": true
        },
        "inputOutput-sefse456-ty56-234g-gh67-fth4567hfth7": {
            "shape": "blade_with_transport_jig",
            "frame": "world",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 0.2,
                "y": 0.2,
                "z": 0.2
            },
            "transformMode": "inactive",
            "color": {
                "r": 0,
                "g": 200,
                "b": 0,
                "a": 0.2
            },
            "highlighted": false,
            "hidden": true
        },
        "inputOutput-tjgnk5suei9-oo90-ruti0-gte0-u8cns9nc9s": {
            "shape": "handle_l",
            "frame": "toolType-assembly-jig",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 0.2,
                "y": 0.2,
                "z": 0.2
            },
            "transformMode": "inactive",
            "color": {
                "r": 0,
                "g": 200,
                "b": 0,
                "a": 0.2
            },
            "highlighted": false,
            "hidden": true
        },
        "inputOutput-tu8fnsiw0c-ie90-rcns89-tuy8-isnc9sa34s": {
            "shape": "handle_r",
            "frame": "toolType-assembly-jig",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 0.2,
                "y": 0.2,
                "z": 0.2
            },
            "transformMode": "inactive",
            "color": {
                "r": 0,
                "g": 200,
                "b": 0,
                "a": 0.2
            },
            "highlighted": false,
            "hidden": true
        },
        "inputOutput-eicns9ef9-sic9-eicns99-sey8-seo4s9dir9": {
            "shape": "blade",
            "frame": "toolType-assembly-jig",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 0.2,
                "y": 0.2,
                "z": 0.2
            },
            "transformMode": "inactive",
            "color": {
                "r": 0,
                "g": 200,
                "b": 0,
                "a": 0.2
            },
            "highlighted": false,
            "hidden": true
        },
        "inputOutput-tidvi23-tbn9-cjzd99-if98-of9nsnrc0s": {
            "shape": "knife",
            "frame": "thingType-98892bd01c1911ecbe2600155d1a70a2",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 0.2,
                "y": 0.2,
                "z": 0.2
            },
            "transformMode": "inactive",
            "color": {
                "r": 0,
                "g": 200,
                "b": 0,
                "a": 0.2
            },
            "highlighted": false,
            "hidden": true
        },
        "inputOutput-45fsoe9-tjfg9-gurd89-thf9-09ghnsn234d": {
            "shape": "handle_l",
            "frame": "toolType-assembly-jig",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 0.2,
                "y": 0.2,
                "z": 0.2
            },
            "transformMode": "inactive",
            "color": {
                "r": 0,
                "g": 200,
                "b": 0,
                "a": 0.2
            },
            "highlighted": false,
            "hidden": true
        },
        "inputOutput-948fnsi23-odns9-fins89-irn1-fcnr94820s": {
            "shape": "handle_r",
            "frame": "toolType-assembly-jig",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 0.2,
                "y": 0.2,
                "z": 0.2
            },
            "transformMode": "inactive",
            "color": {
                "r": 0,
                "g": 200,
                "b": 0,
                "a": 0.2
            },
            "highlighted": false,
            "hidden": true
        },
        "inputOutput-asfsn90-vnxmo9-nmbj89-ii4w-vnlsf0sfkx0": {
            "shape": "blade_with_transport_jig",
            "frame": "toolType-assembly-jig",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 0.2,
                "y": 0.2,
                "z": 0.2
            },
            "transformMode": "inactive",
            "color": {
                "r": 0,
                "g": 200,
                "b": 0,
                "a": 0.2
            },
            "highlighted": false,
            "hidden": true
        },
        "inputOutput-94nss89-8vnsk9-7hdn9-wy89-fhsne8923": {
            "shape": "knife_with_transport_jig",
            "frame": "thingType-98892ce81c1911ecbe2600155d1a70a2",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 0.2,
                "y": 0.2,
                "z": 0.2
            },
            "transformMode": "inactive",
            "color": {
                "r": 0,
                "g": 200,
                "b": 0,
                "a": 0.2
            },
            "highlighted": false,
            "hidden": true
        },
        "table": {
            "shape": "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/Table/Table.stl",
            "name": "Table",
            "frame": "table",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "color": {
                "r": 10,
                "g": 10,
                "b": 10,
                "a": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "pedestal": {
            "shape": "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/ur3e-Pedestal/Pedestal.stl",
            "name": "Pedestal",
            "frame": "pedestal",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "color": {
                "r": 15,
                "g": 15,
                "b": 15,
                "a": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "robotBase": {
            "shape": "package://ur_description/meshes/ur3/visual/base.dae",
            "name": "Robot Base",
            "frame": "robotBase",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 1,
                "w": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "robotShoulderLink": {
            "shape": "package://ur_description/meshes/ur3/visual/shoulder.dae",
            "name": "Shoulder Link",
            "frame": "robotShoulderLink",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 1,
                "w": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "robotUpperArmLink": {
            "shape": "package://ur_description/meshes/ur3/visual/upperarm.dae",
            "name": "Upper Arm Link",
            "frame": "robotUpperArmLink",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0.12
            },
            "rotation": {
                "x": 0.5,
                "y": -0.5,
                "z": -0.5,
                "w": 0.5
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "robotUpperArmLink-collision": {
            "shape": "package://ur_description/meshes/ur3/collision/upperarm.stl",
            "name": "Upper Arm Link Collision",
            "frame": "robotUpperArmLink",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0.12
            },
            "rotation": {
                "x": 0.5,
                "y": -0.5,
                "z": -0.5,
                "w": 0.5
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "color": {
                "r": 250,
                "g": 0,
                "b": 0,
                "a": 0.6
            },
            "transformMode": "inactive",
            "highlighted": false,
            "wireframe": true,
            "hidden": true
        },
        "robotForearmLink": {
            "shape": "package://ur_description/meshes/ur3/visual/forearm.dae",
            "name": "Forearm Link",
            "frame": "robotForearmLink",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0.027
            },
            "rotation": {
                "x": 0.5,
                "y": -0.5,
                "z": -0.5,
                "w": 0.5
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "robotForearmLink-collision": {
            "shape": "package://ur_description/meshes/ur3/collision/forearm.stl",
            "name": "Forearm Link Collision",
            "frame": "robotForearmLink",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0.027
            },
            "rotation": {
                "x": 0.5,
                "y": -0.5,
                "z": -0.5,
                "w": 0.5
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "color": {
                "r": 250,
                "g": 0,
                "b": 0,
                "a": 0.6
            },
            "transformMode": "inactive",
            "highlighted": false,
            "wireframe": true,
            "hidden": true
        },
        "robotWrist1Link": {
            "shape": "package://ur_description/meshes/ur3/visual/wrist1.dae",
            "name": "Wrist 1 Link",
            "frame": "robotWrist1Link",
            "position": {
                "x": 0,
                "y": 0,
                "z": -0.104
            },
            "rotation": {
                "x": 0.7071068,
                "y": 0,
                "z": 0,
                "w": 0.7071068
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "robotWrist1Link-collision": {
            "shape": "package://ur_description/meshes/ur3/collision/wrist1.stl",
            "name": "Wrist 1 Link Collision",
            "frame": "robotWrist1Link",
            "position": {
                "x": 0,
                "y": 0,
                "z": -0.104
            },
            "rotation": {
                "x": 0.7071068,
                "y": 0,
                "z": 0,
                "w": 0.7071068
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "color": {
                "r": 250,
                "g": 0,
                "b": 0,
                "a": 0.6
            },
            "transformMode": "inactive",
            "highlighted": false,
            "wireframe": true,
            "hidden": true
        },
        "robotWrist2Link": {
            "shape": "package://ur_description/meshes/ur3/visual/wrist2.dae",
            "name": "Wrist 2 Link",
            "frame": "robotWrist2Link",
            "position": {
                "x": 0,
                "y": 0,
                "z": -0.08535
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "robotWrist2Link-collision": {
            "shape": "package://ur_description/meshes/ur3/collision/wrist1.stl",
            "name": "Wrist 2 Link Collision",
            "frame": "robotWrist2Link",
            "position": {
                "x": 0,
                "y": 0,
                "z": -0.104
            },
            "rotation": {
                "x": 0.7071068,
                "y": 0,
                "z": 0,
                "w": 0.7071068
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "color": {
                "r": 250,
                "g": 0,
                "b": 0,
                "a": 0.6
            },
            "transformMode": "inactive",
            "highlighted": false,
            "wireframe": true,
            "hidden": true
        },
        "robotWrist3Link": {
            "shape": "package://ur_description/meshes/ur3/visual/wrist3.dae",
            "name": "Wrist 3 Link",
            "frame": "robotWrist3Link",
            "position": {
                "x": 0,
                "y": 0,
                "z": -0.0921
            },
            "rotation": {
                "x": 0.7071068,
                "y": 0,
                "z": 0,
                "w": 0.7071068
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "robotWrist3Link-collision": {
            "shape": "package://ur_description/meshes/ur3/collision/wrist3.stl",
            "name": "Wrist 3 Link Collision",
            "frame": "robotWrist3Link",
            "position": {
                "x": 0,
                "y": 0,
                "z": -0.0921
            },
            "rotation": {
                "x": 0.7071068,
                "y": 0,
                "z": 0,
                "w": 0.7071068
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "color": {
                "r": 250,
                "g": 0,
                "b": 0,
                "a": 0.6
            },
            "transformMode": "inactive",
            "highlighted": false,
            "wireframe": true,
            "hidden": true
        },
        "gripperBaseLink": {
            "shape": "package://robotiq_85_description/meshes/visual/robotiq_85_base_link.dae",
            "name": "Gripper Base",
            "frame": "gripperBaseLink",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "gripperLeftKnuckle": {
            "shape": "package://robotiq_85_description/meshes/visual/robotiq_85_knuckle_link.dae",
            "name": "Gripper Left Knuckle",
            "frame": "gripperLeftKnuckle",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "gripperRightKnuckle": {
            "shape": "package://robotiq_85_description/meshes/visual/robotiq_85_knuckle_link.dae",
            "name": "Gripper Right Knuckle",
            "frame": "gripperRightKnuckle",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "gripperLeftFinger": {
            "shape": "package://robotiq_85_description/meshes/visual/robotiq_85_finger_link.dae",
            "name": "Gripper Left Finger",
            "frame": "gripperLeftFinger",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "gripperRightFinger": {
            "shape": "package://robotiq_85_description/meshes/visual/robotiq_85_finger_link.dae",
            "name": "Gripper Right Finger",
            "frame": "gripperRightFinger",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "gripperLeftInnerKnuckle": {
            "shape": "package://robotiq_85_description/meshes/visual/robotiq_85_inner_knuckle_link.dae",
            "name": "Gripper Left Inner Knuckle",
            "frame": "gripperLeftInnerKnuckle",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "gripperRightInnerKnuckle": {
            "shape": "package://robotiq_85_description/meshes/visual/robotiq_85_inner_knuckle_link.dae",
            "name": "Gripper Right Inner Knuckle",
            "frame": "gripperRightInnerKnuckle",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "gripperLeftFingerTip": {
            "shape": "package://robotiq_85_description/meshes/visual/robotiq_85_finger_tip_link.dae",
            "name": "Gripper Left Finger Tip",
            "frame": "gripperLeftFingerTip",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        },
        "gripperRightFingerTip": {
            "shape": "package://robotiq_85_description/meshes/visual/robotiq_85_finger_tip_link.dae",
            "name": "Gripper Right Finger Tip",
            "frame": "gripperRightFingerTip",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0,
                "w": 1
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "transformMode": "inactive",
            "highlighted": false
        }
    },
    lines: {},
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
}`,locationsMap:{"co-frame":{startLoc:{col:17,line:11},endLoc:{col:1,line:17},startBody:{col:17,line:11},endBody:{col:1,line:17}}}}},title:"CoFrame",component:l},f=n=>{const{tfs:e,items:a,hulls:i,lines:o,texts:r,...d}=n;return p.exports.useLayoutEffect(()=>{t.setState({tfs:e,items:a,hulls:i,lines:o,texts:r})},[e,a,i,o,r]),s("div",{style:{height:"calc(100vh - 2rem)",width:"calc(100vw - 2rem)"},children:s(l,{...d,store:t,meshLookup:h})})},c=f.bind({});c.storyName="CoFrame";c.args={tfs:{"thingType-98892a7c1c1911ecbe2600155d1a70a2":{frame:"world",position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},"thingType-98892b3a1c1911ecbe2600155d1a70a2":{frame:"world",position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},"thingType-98892bd01c1911ecbe2600155d1a70a2":{frame:"world",position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},"thingType-98892ce81c1911ecbe2600155d1a70a2":{frame:"world",position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},"thingType-98892d7e1c1911ecbe2600155d1a70a2":{frame:"world",position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},"thingType-98892e001c1911ecbe2600155d1a70a2":{frame:"world",position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},"robot-agent-988926121c1911eccbe2600155d1a70a2":{frame:"pedestal",position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},"human-agent-ccbe2600155d1a70a2988926121c1911e":{frame:"world",position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},"machine-ac5a063a-9ff9-4c0a-8fa6-81d3983f4a10":{frame:"table",position:{x:-.28,y:-.04,z:.67},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},"toolType-assembly-jig":{frame:"world",position:{x:.2,y:.28,z:.14},rotation:{w:-.5,x:.5,y:-.5,z:-.5},scale:{x:1,y:1,z:1}},"machine-0c804bb3-f341-4b82-b9f0-e5aab536e4d7":{frame:"world",position:{x:-.85,y:-.25,z:-.75},rotation:{w:.707,x:0,y:0,z:.707},scale:{x:1,y:1,z:1},transformMode:"translate"},"machine-0914222f-03e0-4b4c-a8c4-03146867ba7b":{frame:"world",position:{x:-.85,y:-.25,z:-.75},rotation:{w:.707,x:0,y:0,z:.707},scale:{x:1,y:1,z:1}},"machine-9133367a-f691-4d94-9764-50d9685db30a":{frame:"world",position:{x:.85,y:-.25,z:-.75},rotation:{w:.707,x:0,y:0,z:-.707},scale:{x:1,y:1,z:1}},"machine-67d870e0-511d-4662-bf0d-8478f5e860f8":{frame:"world",position:{x:.85,y:-.25,z:-.75},rotation:{w:.707,x:0,y:0,z:-.707},scale:{x:1,y:1,z:1}},"toolType-transport-jig":{frame:"world",position:{x:.3,y:.28,z:.14},rotation:{w:-.5,x:.5,y:-.5,z:-.5},scale:{x:1,y:1,z:1}},table:{frame:"world",position:{x:0,y:.36,z:-.37},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},pedestal:{frame:"world",position:{x:0,y:-.15,z:-.38},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},simulatedTool0:{frame:"robot-agent-988926121c1911eccbe2600155d1a70a2",position:{x:.11666648089885712,y:.2694645017385483,z:.6366749751567841},rotation:{w:-.37005797028541565,x:.9280606508255005,y:-.01538957841694355,z:.039035625755786896},scale:{x:1,y:1,z:1}},robotBase:{frame:"robot-agent-988926121c1911eccbe2600155d1a70a2",position:{x:0,y:0,z:.38},rotation:{w:0,x:0,y:0,z:1},scale:{x:1,y:1,z:1}},robotShoulderLink:{frame:"robot-agent-988926121c1911eccbe2600155d1a70a2",position:{x:0,y:0,z:.53185},rotation:{w:.6669439077377319,x:0,y:0,z:.745107889175415},scale:{x:1,y:1,z:1}},robotUpperArmLink:{frame:"robot-agent-988926121c1911eccbe2600155d1a70a2",position:{x:0,y:0,z:.53185},rotation:{w:-.4478497803211212,x:.5932892560958862,y:-.3847179114818573,z:.5472025871276855},scale:{x:1,y:1,z:1}},robotForearmLink:{frame:"robot-agent-988926121c1911eccbe2600155d1a70a2",position:{x:-.02560272067785263,y:.23055101335048675,z:.45763859629631043},rotation:{w:.6748411655426025,x:.1353885531425476,y:.694024384021759,z:.2111620008945465},scale:{x:1,y:1,z:1}},robotWrist1Link:{frame:"robot-agent-988926121c1911eccbe2600155d1a70a2",position:{x:.11584359407424927,y:.14418705981224775,z:.6451554048061371},rotation:{w:-.29463568329811096,x:.6713905930519104,y:-.22188881039619446,z:.6427983641624451},scale:{x:1,y:1,z:1}},robotWrist2Link:{frame:"robot-agent-988926121c1911eccbe2600155d1a70a2",position:{x:.1089443638920784,y:.20631420761346816,z:.7032694268226624},rotation:{w:.9164819121360779,x:-.39580079913139343,y:-.05381776764988899,z:-.022500555962324142},scale:{x:1,y:1,z:1}},robotWrist3Link:{frame:"robot-agent-988926121c1911eccbe2600155d1a70a2",position:{x:.11666648089885712,y:.2694645017385483,z:.6366749751567841},rotation:{w:-.37005797028541565,x:.9280606508255005,y:-.01538957841694355,z:.039035625755786896},scale:{x:1,y:1,z:1}},gripperBaseLink:{frame:"simulatedTool0",position:{x:0,y:0,z:0},rotation:{w:.5,x:.5,y:-.5,z:.5},scale:{x:1,y:1,z:1}},gripperLeftKnuckle:{frame:"gripperBaseLink",position:{x:.05490451627,y:.03060114443,z:0},rotation:{w:0,x:1,y:0,z:0},scale:{x:1,y:1,z:1}},gripperRightKnuckle:{frame:"gripperBaseLink",position:{x:.05490451627,y:-.03060114443,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},gripperLeftFinger:{frame:"gripperLeftKnuckle",position:{x:-.00408552455,y:-.03148604435,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},gripperRightFinger:{frame:"gripperRightKnuckle",position:{x:-.00408552455,y:-.03148604435,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},gripperLeftInnerKnuckle:{frame:"gripperBaseLink",position:{x:.06142,y:.0127,z:0},rotation:{w:0,x:1,y:0,z:0},scale:{x:1,y:1,z:1}},gripperRightInnerKnuckle:{frame:"gripperBaseLink",position:{x:.06142,y:-.0127,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},gripperLeftFingerTip:{frame:"gripperLeftInnerKnuckle",position:{x:.04303959807,y:-.03759940821,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},gripperRightFingerTip:{frame:"gripperRightInnerKnuckle",position:{x:.04303959807,y:-.03759940821,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}}},items:{"zone-988926121c1911ecbe2600155d1a70a2":{shape:"cube",name:"Human Workspace Occupancy Zone",frame:"world",position:{x:0,y:1,z:.4},rotation:{x:0,y:0,z:0,w:1},color:{r:233,g:53,b:152,a:.2},scale:{x:2,y:1,z:.8},transformMode:"inactive",highlighted:!1,hidden:!0},"zone-988926d01c1911ecbe2600155d1a70a2":{shape:"cube",name:"Human Corridor Occupancy Zone",frame:"world",position:{x:0,y:-1,z:.4},rotation:{x:0,y:0,z:0,w:1},color:{r:233,g:53,b:152,a:.2},scale:{x:2,y:1,z:.8},transformMode:"inactive",highlighted:!1,hidden:!0},"location-c540bea6-a0a8-40c2-8fcc-cb6ae772697c-tag":{uuid:"location-c540bea6-a0a8-40c2-8fcc-cb6ae772697c-tag",frame:"world",name:"Initial Location",shape:"flag",position:{x:.20400124405192815,y:.15340864650572777,z:.15008560705897595},rotation:{w:1,x:0,y:0,z:0},scale:{x:-.25,y:.25,z:.25},highlighted:!1,showName:!1,color:{r:233,g:53,b:152,a:1},hidden:!0,transformMode:"inactive"},"location-c540bea6-a0a8-40c2-8fcc-cb6ae772697c-pointer":{uuid:"location-c540bea6-a0a8-40c2-8fcc-cb6ae772697c-pointer",frame:"world",shape:"package://app/meshes/LocationMarker.stl",position:{x:.20400124405192815,y:.15340864650572777,z:.15008560705897595},rotation:{x:0,y:0,z:.6763577452496884,w:.7365732824646558},scale:{x:1,y:1,z:1},highlighted:!1,showName:!1,color:{r:233,g:53,b:152,a:1},hidden:!0,transformMode:"inactive"},"location-b7daabbd-6e24-4b8f-9c8e-5ea22d727ad0-tag":{uuid:"location-b7daabbd-6e24-4b8f-9c8e-5ea22d727ad0-tag",frame:"world",name:"Deposit Location",shape:"flag",position:{x:.40801871379516913,y:-.2369200947241372,z:.30206792720062714},rotation:{w:1,x:0,y:0,z:0},scale:{x:-.25,y:.25,z:.25},highlighted:!1,showName:!1,color:{r:100,g:18,b:128,a:1},hidden:!0,transformMode:"inactive"},"location-b7daabbd-6e24-4b8f-9c8e-5ea22d727ad0-pointer":{uuid:"location-b7daabbd-6e24-4b8f-9c8e-5ea22d727ad0-pointer",frame:"world",shape:"package://app/meshes/LocationMarker.stl",position:{x:.40801871379516913,y:-.2369200947241372,z:.30206792720062714},rotation:{x:.7133230578218721,y:-.03940528263686746,z:-.03668088697820589,w:-.6987645894079457},scale:{x:1,y:1,z:1},highlighted:!1,showName:!1,color:{r:100,g:18,b:128,a:1},hidden:!0,transformMode:"inactive"},"location-47238d9d-5241-4bdb-8b29-877f78cb124d-tag":{uuid:"location-47238d9d-5241-4bdb-8b29-877f78cb124d-tag",frame:"world",name:"Blade Fetch Location",shape:"flag",position:{x:-.4501325157748985,y:-.25541537076762655,z:-.02822078016538941},rotation:{w:1,x:0,y:0,z:0},scale:{x:-.25,y:.25,z:.25},highlighted:!1,showName:!1,color:{r:100,g:18,b:128,a:1},hidden:!0,transformMode:"inactive"},"location-47238d9d-5241-4bdb-8b29-877f78cb124d-pointer":{uuid:"location-47238d9d-5241-4bdb-8b29-877f78cb124d-pointer",frame:"world",shape:"package://app/meshes/LocationMarker.stl",position:{x:-.4501325157748985,y:-.25541537076762655,z:-.02822078016538941},rotation:{x:-.006622068142399432,y:-.6857443017700521,z:.7277784747239732,w:-.007027982062342742},scale:{x:1,y:1,z:1},highlighted:!1,showName:!1,color:{r:100,g:18,b:128,a:1},hidden:!0,transformMode:"inactive"},"waypoint-e7a63a7c-1df8-4ca6-9ffc-4f9b1e008aa4-tag":{uuid:"waypoint-e7a63a7c-1df8-4ca6-9ffc-4f9b1e008aa4-tag",frame:"world",name:"WP 1",shape:"tag",position:{x:-.3319053491144722,y:-.006321044395614983,z:.3364538095102072},rotation:{w:1,x:0,y:0,z:0},scale:{x:-.25,y:.25,z:.25},highlighted:!1,showName:!1,color:{r:100,g:18,b:128,a:1},hidden:!0,transformMode:"inactive"},"waypoint-e7a63a7c-1df8-4ca6-9ffc-4f9b1e008aa4-pointer":{uuid:"waypoint-e7a63a7c-1df8-4ca6-9ffc-4f9b1e008aa4-pointer",frame:"world",shape:"package://app/meshes/OpenWaypointMarker.stl",position:{x:-.3319053491144722,y:-.006321044395614983,z:.3364538095102072},rotation:{x:0,y:0,z:.9907218933440319,w:.13590485660496693},scale:{x:1,y:1,z:1},highlighted:!1,showName:!1,color:{r:100,g:18,b:128,a:1},hidden:!0,transformMode:"inactive"},"machine-ac5a063a-9ff9-4c0a-8fa6-81d3983f4a10":{shape:"package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/MK2-Printer/MK2-Printer.stl",name:"3D Printer Machine",frame:"machine-ac5a063a-9ff9-4c0a-8fa6-81d3983f4a10",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},"machine-ac5a063a-9ff9-4c0a-8fa6-81d3983f4a10-collision":{shape:"package://evd_ros_tasks/tasks/3d_printer_machine_tending/collision_meshes/MK2-Printer.stl",name:"3D Printer Machine Collision",frame:"machine-ac5a063a-9ff9-4c0a-8fa6-81d3983f4a10",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1,color:{r:250,g:0,b:0,a:.6},wireframe:!0,hidden:!0},"toolType-assembly-jig":{shape:"assembly_jig",name:"Assembly Jig Machine",frame:"toolType-assembly-jig",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:.2,y:.2,z:.2},transformMode:"inactive",highlighted:!1},"toolType-assembly-jig-collision":{shape:"assembly_jig_collision",name:"Assembly Jig Machine Collision",frame:"toolType-assembly-jig",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:.2,y:.2,z:.2},transformMode:"inactive",highlighted:!1,color:{r:250,g:0,b:0,a:.6},wireframe:!0,hidden:!0},"machine-0c804bb3-f341-4b82-b9f0-e5aab536e4d7":{shape:"conveyor",name:"Blade Conveyor",frame:"machine-0c804bb3-f341-4b82-b9f0-e5aab536e4d7",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},"machine-0c804bb3-f341-4b82-b9f0-e5aab536e4d7-collision":{shape:"conveyor_collision",name:"Blade Conveyor Collision",frame:"machine-0c804bb3-f341-4b82-b9f0-e5aab536e4d7",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1,color:{r:250,g:0,b:0,a:.6},wireframe:!0,hidden:!0},"machine-0914222f-03e0-4b4c-a8c4-03146867ba7b":{shape:"conveyor_receiver",name:"Blade Feeder",frame:"machine-0914222f-03e0-4b4c-a8c4-03146867ba7b",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},"machine-0914222f-03e0-4b4c-a8c4-03146867ba7b-collision":{shape:"conveyor_receiver_collision",name:"Blade Feeder Collision",frame:"machine-0914222f-03e0-4b4c-a8c4-03146867ba7b",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1,color:{r:250,g:0,b:0,a:.6},wireframe:!0,hidden:!0},"machine-9133367a-f691-4d94-9764-50d9685db30a":{shape:"conveyor",name:"Knife Conveyor",frame:"machine-9133367a-f691-4d94-9764-50d9685db30a",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},"machine-9133367a-f691-4d94-9764-50d9685db30a-collision":{shape:"conveyor_collision",name:"Knife Conveyor Collision",frame:"machine-9133367a-f691-4d94-9764-50d9685db30a",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1,color:{r:250,g:0,b:0,a:.6},wireframe:!0,hidden:!0},"machine-67d870e0-511d-4662-bf0d-8478f5e860f8":{shape:"conveyor_dispatcher",name:"Knife Feeder",frame:"machine-67d870e0-511d-4662-bf0d-8478f5e860f8",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},"machine-67d870e0-511d-4662-bf0d-8478f5e860f8-collision":{shape:"conveyor_dispatcher_collision",name:"Knife Feeder Collision",frame:"machine-67d870e0-511d-4662-bf0d-8478f5e860f8",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1,color:{r:250,g:0,b:0,a:.6},wireframe:!0,hidden:!0},"toolType-transport-jig":{shape:"transport_jig",name:"Transport Jig",frame:"toolType-transport-jig",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:.2,y:.2,z:.2},transformMode:"inactive",highlighted:!1},"toolType-transport-jig-collision":{shape:"transport_jig",name:"Transport Jig Collision",frame:"toolType-transport-jig",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1,color:{r:250,g:0,b:0,a:.6},wireframe:!0,hidden:!0},"inputOutput-ridn023-dz00-445jk-we90-e69tffb00845":{shape:"handle_l",frame:"machine-ac5a063a-9ff9-4c0a-8fa6-81d3983f4a10",position:{x:-.2,y:.28,z:.074},rotation:{x:.707,y:0,z:0,w:.707},scale:{x:.2,y:.2,z:.2},transformMode:"inactive",color:{r:0,g:200,b:0,a:.2},highlighted:!1,hidden:!0},"inputOutput-mnpdm09-ty00-445md-yjg09-rnvor905mfi1203d":{shape:"handle_r",frame:"machine-ac5a063a-9ff9-4c0a-8fa6-81d3983f4a10",position:{x:-.3,y:.28,z:.078},rotation:{x:.707,y:0,z:0,w:.707},scale:{x:.2,y:.2,z:.2},transformMode:"inactive",color:{r:0,g:200,b:0,a:.2},highlighted:!1,hidden:!0},"inputOutput-2d49b51b-dz37-488e-we56-e55ef6a0a8fc":{shape:"blade",frame:"world",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:.2,y:.2,z:.2},transformMode:"inactive",color:{r:0,g:200,b:0,a:.2},highlighted:!1,hidden:!0},"inputOutput-3d50b62b-dz37-488e-we56-e65eo6f0a80b":{shape:"transport_jig",frame:"toolType-transport-jig",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:.2,y:.2,z:.2},transformMode:"inactive",color:{r:0,g:200,b:0,a:.2},highlighted:!1,hidden:!0},"inputOutput-sefse456-ty56-234g-gh67-fth4567hfth7":{shape:"blade_with_transport_jig",frame:"world",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:.2,y:.2,z:.2},transformMode:"inactive",color:{r:0,g:200,b:0,a:.2},highlighted:!1,hidden:!0},"inputOutput-tjgnk5suei9-oo90-ruti0-gte0-u8cns9nc9s":{shape:"handle_l",frame:"toolType-assembly-jig",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:.2,y:.2,z:.2},transformMode:"inactive",color:{r:0,g:200,b:0,a:.2},highlighted:!1,hidden:!0},"inputOutput-tu8fnsiw0c-ie90-rcns89-tuy8-isnc9sa34s":{shape:"handle_r",frame:"toolType-assembly-jig",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:.2,y:.2,z:.2},transformMode:"inactive",color:{r:0,g:200,b:0,a:.2},highlighted:!1,hidden:!0},"inputOutput-eicns9ef9-sic9-eicns99-sey8-seo4s9dir9":{shape:"blade",frame:"toolType-assembly-jig",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:.2,y:.2,z:.2},transformMode:"inactive",color:{r:0,g:200,b:0,a:.2},highlighted:!1,hidden:!0},"inputOutput-tidvi23-tbn9-cjzd99-if98-of9nsnrc0s":{shape:"knife",frame:"thingType-98892bd01c1911ecbe2600155d1a70a2",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:.2,y:.2,z:.2},transformMode:"inactive",color:{r:0,g:200,b:0,a:.2},highlighted:!1,hidden:!0},"inputOutput-45fsoe9-tjfg9-gurd89-thf9-09ghnsn234d":{shape:"handle_l",frame:"toolType-assembly-jig",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:.2,y:.2,z:.2},transformMode:"inactive",color:{r:0,g:200,b:0,a:.2},highlighted:!1,hidden:!0},"inputOutput-948fnsi23-odns9-fins89-irn1-fcnr94820s":{shape:"handle_r",frame:"toolType-assembly-jig",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:.2,y:.2,z:.2},transformMode:"inactive",color:{r:0,g:200,b:0,a:.2},highlighted:!1,hidden:!0},"inputOutput-asfsn90-vnxmo9-nmbj89-ii4w-vnlsf0sfkx0":{shape:"blade_with_transport_jig",frame:"toolType-assembly-jig",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:.2,y:.2,z:.2},transformMode:"inactive",color:{r:0,g:200,b:0,a:.2},highlighted:!1,hidden:!0},"inputOutput-94nss89-8vnsk9-7hdn9-wy89-fhsne8923":{shape:"knife_with_transport_jig",frame:"thingType-98892ce81c1911ecbe2600155d1a70a2",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:.2,y:.2,z:.2},transformMode:"inactive",color:{r:0,g:200,b:0,a:.2},highlighted:!1,hidden:!0},table:{shape:"package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/Table/Table.stl",name:"Table",frame:"table",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},color:{r:10,g:10,b:10,a:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},pedestal:{shape:"package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/ur3e-Pedestal/Pedestal.stl",name:"Pedestal",frame:"pedestal",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},color:{r:15,g:15,b:15,a:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},robotBase:{shape:"package://ur_description/meshes/ur3/visual/base.dae",name:"Robot Base",frame:"robotBase",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:1,w:0},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},robotShoulderLink:{shape:"package://ur_description/meshes/ur3/visual/shoulder.dae",name:"Shoulder Link",frame:"robotShoulderLink",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:1,w:0},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},robotUpperArmLink:{shape:"package://ur_description/meshes/ur3/visual/upperarm.dae",name:"Upper Arm Link",frame:"robotUpperArmLink",position:{x:0,y:0,z:.12},rotation:{x:.5,y:-.5,z:-.5,w:.5},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},"robotUpperArmLink-collision":{shape:"package://ur_description/meshes/ur3/collision/upperarm.stl",name:"Upper Arm Link Collision",frame:"robotUpperArmLink",position:{x:0,y:0,z:.12},rotation:{x:.5,y:-.5,z:-.5,w:.5},scale:{x:1,y:1,z:1},color:{r:250,g:0,b:0,a:.6},transformMode:"inactive",highlighted:!1,wireframe:!0,hidden:!0},robotForearmLink:{shape:"package://ur_description/meshes/ur3/visual/forearm.dae",name:"Forearm Link",frame:"robotForearmLink",position:{x:0,y:0,z:.027},rotation:{x:.5,y:-.5,z:-.5,w:.5},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},"robotForearmLink-collision":{shape:"package://ur_description/meshes/ur3/collision/forearm.stl",name:"Forearm Link Collision",frame:"robotForearmLink",position:{x:0,y:0,z:.027},rotation:{x:.5,y:-.5,z:-.5,w:.5},scale:{x:1,y:1,z:1},color:{r:250,g:0,b:0,a:.6},transformMode:"inactive",highlighted:!1,wireframe:!0,hidden:!0},robotWrist1Link:{shape:"package://ur_description/meshes/ur3/visual/wrist1.dae",name:"Wrist 1 Link",frame:"robotWrist1Link",position:{x:0,y:0,z:-.104},rotation:{x:.7071068,y:0,z:0,w:.7071068},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},"robotWrist1Link-collision":{shape:"package://ur_description/meshes/ur3/collision/wrist1.stl",name:"Wrist 1 Link Collision",frame:"robotWrist1Link",position:{x:0,y:0,z:-.104},rotation:{x:.7071068,y:0,z:0,w:.7071068},scale:{x:1,y:1,z:1},color:{r:250,g:0,b:0,a:.6},transformMode:"inactive",highlighted:!1,wireframe:!0,hidden:!0},robotWrist2Link:{shape:"package://ur_description/meshes/ur3/visual/wrist2.dae",name:"Wrist 2 Link",frame:"robotWrist2Link",position:{x:0,y:0,z:-.08535},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},"robotWrist2Link-collision":{shape:"package://ur_description/meshes/ur3/collision/wrist1.stl",name:"Wrist 2 Link Collision",frame:"robotWrist2Link",position:{x:0,y:0,z:-.104},rotation:{x:.7071068,y:0,z:0,w:.7071068},scale:{x:1,y:1,z:1},color:{r:250,g:0,b:0,a:.6},transformMode:"inactive",highlighted:!1,wireframe:!0,hidden:!0},robotWrist3Link:{shape:"package://ur_description/meshes/ur3/visual/wrist3.dae",name:"Wrist 3 Link",frame:"robotWrist3Link",position:{x:0,y:0,z:-.0921},rotation:{x:.7071068,y:0,z:0,w:.7071068},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},"robotWrist3Link-collision":{shape:"package://ur_description/meshes/ur3/collision/wrist3.stl",name:"Wrist 3 Link Collision",frame:"robotWrist3Link",position:{x:0,y:0,z:-.0921},rotation:{x:.7071068,y:0,z:0,w:.7071068},scale:{x:1,y:1,z:1},color:{r:250,g:0,b:0,a:.6},transformMode:"inactive",highlighted:!1,wireframe:!0,hidden:!0},gripperBaseLink:{shape:"package://robotiq_85_description/meshes/visual/robotiq_85_base_link.dae",name:"Gripper Base",frame:"gripperBaseLink",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},gripperLeftKnuckle:{shape:"package://robotiq_85_description/meshes/visual/robotiq_85_knuckle_link.dae",name:"Gripper Left Knuckle",frame:"gripperLeftKnuckle",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},gripperRightKnuckle:{shape:"package://robotiq_85_description/meshes/visual/robotiq_85_knuckle_link.dae",name:"Gripper Right Knuckle",frame:"gripperRightKnuckle",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},gripperLeftFinger:{shape:"package://robotiq_85_description/meshes/visual/robotiq_85_finger_link.dae",name:"Gripper Left Finger",frame:"gripperLeftFinger",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},gripperRightFinger:{shape:"package://robotiq_85_description/meshes/visual/robotiq_85_finger_link.dae",name:"Gripper Right Finger",frame:"gripperRightFinger",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},gripperLeftInnerKnuckle:{shape:"package://robotiq_85_description/meshes/visual/robotiq_85_inner_knuckle_link.dae",name:"Gripper Left Inner Knuckle",frame:"gripperLeftInnerKnuckle",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},gripperRightInnerKnuckle:{shape:"package://robotiq_85_description/meshes/visual/robotiq_85_inner_knuckle_link.dae",name:"Gripper Right Inner Knuckle",frame:"gripperRightInnerKnuckle",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},gripperLeftFingerTip:{shape:"package://robotiq_85_description/meshes/visual/robotiq_85_finger_tip_link.dae",name:"Gripper Left Finger Tip",frame:"gripperLeftFingerTip",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1},gripperRightFingerTip:{shape:"package://robotiq_85_description/meshes/visual/robotiq_85_finger_tip_link.dae",name:"Gripper Right Finger Tip",frame:"gripperRightFingerTip",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1},scale:{x:1,y:1,z:1},transformMode:"inactive",highlighted:!1}},lines:{},hulls:{usage:{name:"Robot Space Usage",frame:"world",vertices:[{x:-.5,y:-.5,z:0},{x:.5,y:-.5,z:0},{x:.5,y:.5,z:0},{x:-.5,y:.5,z:0},{x:-.5,y:.5,z:1},{x:-.5,y:-.5,z:1},{x:.5,y:-.5,z:1},{x:.5,y:.5,z:1},{x:-.75,y:0,z:.5},{x:.75,y:0,z:.5},{x:0,y:.75,z:.5},{x:0,y:-.75,z:.5}],color:{r:10,g:200,b:235,a:n=>Math.sin(n/1e3)/6+.25},wireframe:!1,highlighted:!0,showName:!1,hidden:!1}},texts:{workcellLabel:{value:"Work Cell",frame:"world",position:{x:0,y:0,z:1.3},color:{r:10,g:10,b:255,a:1}},miniworkcellLabel:{value:"Mini Work Cell",frame:"gizmo",position:{x:0,y:0,z:1.3},color:{r:10,g:10,b:255,a:1}}},displayTfs:!1,displayGrid:!0,isPolar:!1,backgroundColor:"#1e1e1e",planeColor:"#141414",highlightColor:"#ffffff",plane:-.75,fov:60,ar:!1,vr:!1,onPointerMissed:()=>console.log("Missed Click")};const k=["CoFrame"];export{c as CoFrame,k as __namedExportsOrder,w as default};
//# sourceMappingURL=CoFrame.stories.671f4e3b.js.map
