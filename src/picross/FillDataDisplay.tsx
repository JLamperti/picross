import React from 'react'
import { FillDataType, fillDataDisplayPositions } from '../types/FillDataType'
import { FillDataForLineDisplay } from './FillDataForLineDisplay'

const fillDataDisplayBaseClass = 'fill-data-display'
const getPositionClassName = (position: fillDataDisplayPositions): string => {
    return `${fillDataDisplayBaseClass}-${fillDataDisplayPositions[position].toLowerCase()}`
}

export const FillDataDisplay: React.FC<{
    fillData: FillDataType
    position: fillDataDisplayPositions
}> = ({ fillData, position }) => {
    const classname = `${fillDataDisplayBaseClass} ${getPositionClassName(position)}`
    return (
        <div className={classname}>
            {fillData.map((fillDataEntry, index) => (
                <FillDataForLineDisplay fillDataEntry={fillDataEntry} key={index} />
            ))}
        </div>
    )
}
