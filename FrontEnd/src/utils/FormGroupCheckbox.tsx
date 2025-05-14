import { UseFormRegister } from "react-hook-form";
import { peliculaCreacionDTO } from "../peliculas/peliculas.model";

export default function FormGroupCheckbox(props:formGroupCheckbox){
return(
      <div className="form-group form-check">
      <input
        type="checkbox"
        id={props.campo}
        {...props.register(props.campo)}
        className="form-check-input"
      />
      <label htmlFor={props.campo}>{props.label}</label>
    </div>
)
}

interface formGroupCheckbox{
    label:string;
    campo: keyof peliculaCreacionDTO;
    register: UseFormRegister<peliculaCreacionDTO>;
    
}