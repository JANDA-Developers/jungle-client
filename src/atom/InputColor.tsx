import React, {useState} from 'react'

interface IProp  {
    value:string,
    onChange: (data: any, index?: number) => void
}

const InputColor:React.FC<IProp> = ({value, onChange}) => {

    const [colour, setColour] = useState(value);
    const [colourPicked, setColourPicked] = useState(false);

    const handleChangeColor = () => {
        onChange(colour);
        setColourPicked(true);
    }

    return (
        <div className="adminEdit__colourInner">
            <input type="color" value={colour}
                   className="adminEdit__colourPicker"
                   onChange={(e)=> {
                        const color = e.currentTarget.value;
                        setColour(color);
                   }}
            >
            </input>
            <button className="adminEdit__colourBtn" onClick={handleChangeColor}>
                해당 색상선택
            </button>
            {
                colourPicked &&
                <span className="adminEdit__colourPicked">
                    선택된 색상 : {colour}
                </span>
            }
          
        </div>
    )
}

export default InputColor
