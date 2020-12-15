import React from 'react'
import { FieldDataType } from '../types/FieldDataType'
import { FillDataType, fillDataDisplayPositions } from '../types/FillDataType'
import { Field } from './Field'
import { FillDataDisplay } from './FillDataDisplay'

export const Puzzle: React.FC<{
    rowFillData: FillDataType
    colFillData: FillDataType
    fieldData: FieldDataType
}> = ({ rowFillData, colFillData, fieldData }) => {
    return (
        <div className="picross-puzzle">
            <div className="corner-filler" />
            <FillDataDisplay fillData={colFillData} position={fillDataDisplayPositions.TOP} />
            <FillDataDisplay fillData={rowFillData} position={fillDataDisplayPositions.LEFT} />
            <Field fieldData={fieldData} />
        </div>
    )
}
