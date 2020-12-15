import React from 'react'
import { FieldDataType, TileOptions } from '../types/FieldDataType'

export const Field: React.FC<{ fieldData: FieldDataType }> = ({ fieldData }) => {
    return (
        <div className="field">
            {fieldData.map((rowData, index) => (
                <FieldRow rowData={rowData} rowIndex={index} key={index} />
            ))}
        </div>
    )
}

const FieldRow: React.FC<{ rowData: TileOptions[]; rowIndex: number }> = ({
    rowData,
    rowIndex,
}) => {
    return (
        <div className="field-row">
            {rowData.map((tileData, index) => (
                <Tile tileData={tileData} key={`r${rowIndex}c${index}`} />
            ))}
        </div>
    )
}

const Tile: React.FC<{ tileData: TileOptions }> = ({ tileData }) => {
    const classname = `tile tile-${TileOptions[tileData].toLowerCase()}`
    return <div className={classname} />
}
