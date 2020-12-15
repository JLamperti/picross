import React from 'react'

import { Puzzle } from './picross/Puzzle'

import { dummyField, dummyColFillInfo, dummyRowFillInfo } from './dummyData'

function App() {
    return (
        <>
            <Puzzle
                fieldData={dummyField}
                rowFillData={dummyRowFillInfo}
                colFillData={dummyColFillInfo}
            />
        </>
    )
}

export default App
