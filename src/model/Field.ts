import { FieldDataType, TileOptions } from '../types/FieldDataType'

export const fieldDataMethods = {
    get(fieldData: FieldDataType, x: number, y: number): TileOptions {
        return fieldData[x][y]
    },

    getRow(fieldData: FieldDataType, x: number): TileOptions[] {
        return fieldData[x]
    },

    getColumn(fieldData: FieldDataType, y: number): TileOptions[] {
        return fieldData?.map((row) => row[y])
    },

    set(fieldData: FieldDataType, x: number, y: number, value: TileOptions): FieldDataType {
        fieldData[x][y] = value
        return fieldData
    },

    setRow(fieldData: FieldDataType, x: number, rowData: TileOptions[]): FieldDataType {
        fieldData[x] = rowData
        return fieldData
    },

    setColumn(fieldData: FieldDataType, y: number, columnData: TileOptions[]): FieldDataType {
        columnData.forEach((entry, index) => {
            fieldData[y][index] = entry
        })
        return fieldData
    },
}
