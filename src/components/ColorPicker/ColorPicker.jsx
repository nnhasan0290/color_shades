import {  SketchPicker } from "react-color"
import { GetGlobalContexts } from "../../utils/globalContext"

const ColorPicker = () => {
    //contexts
    const {color, setColor} = GetGlobalContexts()
    return(
       <SketchPicker width="auto" color={color} onChangeComplete={(color) => {
        setColor(color.hex);
       }}  />
    )
}

export default ColorPicker