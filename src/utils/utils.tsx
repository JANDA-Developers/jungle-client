import { IselectedOption } from "@janda-com/front/dist/types/interface";


export function toOps<T, C extends keyof T>(op: Array<T>, id: C, label: C): IselectedOption[] {
    return op.map((o) => ({
        label: o[label] as any,
        value: o[id] as any
    }))
}


export const opFind = (value: string | undefined, ops: IselectedOption[], noDefault?: boolean): IselectedOption | null => {
    const defualt = noDefault ? null : ops[0]
    return ops.find(o => o.value === value) || defualt
}

export const opFilter = (value: string[], ops: IselectedOption[], noDefault?: boolean): IselectedOption[] => {
    return ops.filter(o => value.includes(o.value))
}

export default "-"