import { IMetaData } from "../component/inputRender/ObjectInputRender"

export const metaToObject = (meta?: IMetaData) => {
    let obj: any = {}

    for (let key in meta) {
        if (meta[key].default === undefined) throw Error(`meta key ${key} Dose not have default value.`)
        obj[key] = meta[key].default
    }

    return obj
}

