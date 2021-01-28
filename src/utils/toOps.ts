import { IselectedOption } from "@janda-com/front/dist/types/interface";


export function toOps<T, C extends keyof T>(op: Array<T>, id: C, label: C): IselectedOption[] {
    return op.map((o) => ({
        label: o[label] as any,
        value: o[id] as any
    }))
}
