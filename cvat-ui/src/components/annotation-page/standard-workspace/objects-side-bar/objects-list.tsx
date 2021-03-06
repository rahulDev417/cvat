import React from 'react';

import { SelectValue } from 'antd/lib/select';
import { StatesOrdering } from 'reducers/interfaces';
import ObjectItemContainer from 'containers/annotation-page/standard-workspace/objects-side-bar/object-item';
import ObjectListHeader from './objects-list-header';


interface Props {
    listHeight: number;
    statesHidden: boolean;
    statesLocked: boolean;
    statesCollapsed: boolean;
    statesOrdering: StatesOrdering;
    sortedStatesID: number[];
    annotationsFilters: string[];
    changeStatesOrdering(value: StatesOrdering): void;
    changeAnnotationsFilters(value: SelectValue): void;
    lockAllStates(): void;
    unlockAllStates(): void;
    collapseAllStates(): void;
    expandAllStates(): void;
    hideAllStates(): void;
    showAllStates(): void;
}

function ObjectListComponent(props: Props): JSX.Element {
    const {
        listHeight,
        statesHidden,
        statesLocked,
        statesCollapsed,
        statesOrdering,
        sortedStatesID,
        annotationsFilters,
        changeStatesOrdering,
        changeAnnotationsFilters,
        lockAllStates,
        unlockAllStates,
        collapseAllStates,
        expandAllStates,
        hideAllStates,
        showAllStates,
    } = props;

    return (
        <div style={{ height: listHeight }}>
            <ObjectListHeader
                statesHidden={statesHidden}
                statesLocked={statesLocked}
                statesCollapsed={statesCollapsed}
                statesOrdering={statesOrdering}
                annotationsFilters={annotationsFilters}
                changeStatesOrdering={changeStatesOrdering}
                changeAnnotationsFilters={changeAnnotationsFilters}
                lockAllStates={lockAllStates}
                unlockAllStates={unlockAllStates}
                collapseAllStates={collapseAllStates}
                expandAllStates={expandAllStates}
                hideAllStates={hideAllStates}
                showAllStates={showAllStates}
            />
            <div className='cvat-objects-sidebar-states-list'>
                { sortedStatesID.map((id: number): JSX.Element => (
                    <ObjectItemContainer key={id} clientID={id} />
                ))}
            </div>
        </div>
    );
}

export default React.memo(ObjectListComponent);
