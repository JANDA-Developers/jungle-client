import { IselectedOption } from "@janda-com/front/dist/types/interface"
import { useState } from "react"

export const useMultiSelect = <T>(defaultSelecteds:IselectedOption<T>[],options:IselectedOption<T>[]) => {
    const [selectedOptions, setSelecteds] = useState(defaultSelecteds)
    const onChanges = (ops:IselectedOption[]) => {
        setSelecteds(ops);
    }
    return { selectedOptions, onChanges,options}
}