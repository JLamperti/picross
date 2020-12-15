import React from 'react'

export const FillDataForLineDisplay: React.FC<{ fillDataEntry: number[] }> = ({
    fillDataEntry,
}) => {
    return (
        <div className="fill-data-display-entry">
            {fillDataEntry.map((fillDataNumber, index) => (
                <p key={index}>{fillDataNumber}</p>
            ))}
        </div>
    )
}
