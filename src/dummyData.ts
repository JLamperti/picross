import { TileOptions } from './types/FieldDataType'
import { FillDataType } from './types/FillDataType'
export const dummyField = [
    [TileOptions.FILL, TileOptions.FILL, TileOptions.FILL, TileOptions.CROSS, TileOptions.FILL],
    [TileOptions.FILL, TileOptions.CROSS, TileOptions.EMPTY, TileOptions.CROSS, TileOptions.EMPTY],
    [TileOptions.FILL, TileOptions.CROSS, TileOptions.CROSS, TileOptions.CROSS, TileOptions.FILL],
    [TileOptions.CROSS, TileOptions.EMPTY, TileOptions.CROSS, TileOptions.FILL, TileOptions.EMPTY],
    [TileOptions.CROSS, TileOptions.CROSS, TileOptions.FILL, TileOptions.EMPTY, TileOptions.FILL],
]

export const dummyRowFillInfo: FillDataType = [[1, 2], [3], [4], [1, 2], [2]]
export const dummyColFillInfo: FillDataType = [[2], [2], [4], [1, 2], [3]]
