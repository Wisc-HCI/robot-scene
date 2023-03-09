import React, { memo } from 'react';
import TF, { WorldTF, GizmoTF } from "./TF";
import Item from "./Item";
import Line from "./Line";
import Hull from "./Hull";
import Text from "./Text";
import PointCloud from "./PointCloud";

const Tree = memo(({
    activeTf, displayTfs, allTfs, allItems, allLines, allHulls, allTexts, allPoints,
    highlightColor, ghosts, targetRef, targetId, targetSource, filterActive, tfFilter, customProps }) => {

    const TFComponent = activeTf === 'world'
        ? WorldTF
        : activeTf === 'gizmo'
            ? GizmoTF
            : TF;

    const tfProps = activeTf === targetId ? customProps : {};

    const filteredTfs = filterActive ? allTfs.filter(tf => tfFilter.includes(tf.key)) : allTfs;
    const newFilterActive = filterActive ? activeTf !== targetRef : filterActive;

    return (
        <TFComponent objectKey={activeTf} displayTfs={displayTfs} ref={targetId === activeTf ? targetRef : null} {...tfProps} ghost={ghosts} highlightColor={highlightColor}>
            {filteredTfs.filter(v => v.frame === activeTf || (activeTf === 'world' && !v.frame)).map(tf => (
                <Tree
                    key={tf.key}
                    activeTf={tf.key}
                    displayTfs={displayTfs}
                    allTfs={allTfs}
                    allItems={allItems}
                    allLines={allLines}
                    allHulls={allHulls}
                    allTexts={allTexts}
                    allPoints={allPoints}
                    highlightColor={highlightColor}
                    ghosts={ghosts}
                    targetRef={targetRef}
                    targetSource={targetSource}
                    targetId={targetId}
                    filterActive={newFilterActive}
                    tfFilter={tfFilter}
                    customProps={customProps}
                />
            ))}
            {allItems.filter(v => v.frame === activeTf || (activeTf === 'world' && !v.frame)).map(item => {
                const itemProps = item.key === targetId && targetSource === 'items' ? customProps : {};
                if (!filterActive || item.key === targetId || activeTf === targetId ) {
                    return (
                        <Item
                            key={item.key}
                            objectKey={item.key}
                            highlightColor={highlightColor}
                            ghost={ghosts}
                            ref={item.key === targetId ? targetRef : null}
                            {...itemProps}
                        />)
                } else return null

            })}
            {allLines.filter(v => v.frame === activeTf || (activeTf === 'world' && !v.frame)).map(line => {
                const lineProps = line.key === targetId && targetSource === 'lines'  ? customProps : {};
                if (!filterActive || line.key === targetId || activeTf === targetId ) {
                    return (
                        <Line
                            key={line.key}
                            objectKey={line.key}
                            ref={line.lineKey === targetId ? targetRef : null}
                            {...lineProps}
                        />)
                } else return null

            })}
            {allHulls.filter(v => v.frame === activeTf || (activeTf === 'world' && !v.frame)).map(hull => {
                const hullProps = hull.key === targetId && targetSource === 'hulls'  ? customProps : {};
                if (!filterActive || hull.key === targetId || activeTf === targetId ) {
                    return (
                        <Hull
                            key={hull.key}
                            objectKey={hull.key}
                            highlightColor={highlightColor}
                            ghost={ghosts}
                            ref={hull.key === targetId ? targetRef : null}
                            {...hullProps}
                        />)
                } else return null
            })}
            {allTexts.filter(v => v.frame === activeTf || (activeTf === 'world' && !v.frame)).map(text => {
                const textProps = text.key === targetId && targetSource === 'texts'  ? customProps : {};
                if (!filterActive || text.key === targetId || activeTf === targetId ) {
                    return (
                        <Text
                            key={text.key}
                            objectKey={text.key}
                            highlightColor={highlightColor}
                            ref={text.key === targetId ? targetRef : null}
                            {...textProps}
                        />)
                } else return null
            })}
            {allPoints.filter(v => v.frame === activeTf || (activeTf === 'world' && !v.frame)).map(points => {
                const pointsProps = points.key === targetId && targetSource === 'points'  ? customProps : {};
                if (!filterActive || points.key === targetId || activeTf === targetId ) {
                    return (
                        <PointCloud
                            key={points.key}
                            objectKey={points.key}
                            highlightColor={highlightColor}
                            ref={points.key === targetId ? targetRef : null}
                            {...pointsProps}
                        />)
                } else return null
            })}
        </TFComponent>
    )
})

export default Tree