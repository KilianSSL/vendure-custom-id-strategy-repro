import { EntityIdStrategy } from '@vendure/core'
import Hashids from 'hashids'

const hashids = new Hashids('duPh7iJuar7EeGhu', 6)

export const decodeId = (id: string): number => {
    return Number(hashids.decode(id)[0])
}
export const encodeId = (primaryKey: number): string => {
    return hashids.encode(primaryKey)
}

export class CustomIdStrategy implements EntityIdStrategy<'increment'> {
    readonly primaryKeyType = 'increment'
    decodeId(id: string): number {
        return decodeId(id)
    }
    encodeId(primaryKey: number): string {
        return encodeId(primaryKey)
    }
}
