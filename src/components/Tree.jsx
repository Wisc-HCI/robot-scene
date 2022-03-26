import React, { useRef, useEffect, memo } from 'react';
import TF, { WorldTF, GizmoTF } from "./TF";
import Item from "./Item";
import Line from "./Line";
import Hull from "./Hull";
import Text from "./Text";

const Tree = memo(({
    activeTf, displayTfs, allTfs, allItems, allLines, allHulls, allTexts,
    highlightColor, ghosts, targetRef, targetId, filterActive, tfFilter, customProps }) => {

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
                    highlightColor={highlightColor}
                    ghosts={ghosts}
                    targetRef={targetRef}
                    targetId={targetId}
                    filterActive={newFilterActive}
                    tfFilter={tfFilter}
                    customProps={customProps}
                />
            ))}
            {allItems.filter(v => v.frame === activeTf || (activeTf === 'world' && !v.frame)).map(item => {
                const itemProps = item.key === targetId ? customProps : {};
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
                }

            })}
            {allLines.filter(v => v.frame === activeTf || (activeTf === 'world' && !v.frame)).map(line => {
                const lineProps = line.key === targetId ? customProps : {};
                if (!filterActive || line.key === targetId || activeTf === targetId ) {
                    return (
                        <Line
                            key={line.key}
                            objectKey={line.key}
                            ref={line.lineKey === targetId ? targetRef : null}
                            {...lineProps}
                        />)
                }

            })}
            {allHulls.filter(v => v.frame === activeTf || (activeTf === 'world' && !v.frame)).map(hull => {
                const hullProps = hull.key === targetId ? customProps : {};
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
                }
            })}
            {allTexts.filter(v => v.frame === activeTf || (activeTf === 'world' && !v.frame)).map(text => {
                const textProps = text.key === targetId ? customProps : {};
                if (!filterActive || text.key === targetId || activeTf === targetId ) {
                    return (
                        <Text
                            key={text.key}
                            objectKey={text.key}
                            highlightColor={highlightColor}
                            ref={text.key === targetId ? targetRef : null}
                            {...textProps}
                        />)
                }
            })}
        </TFComponent>
    )
})

export default Tree