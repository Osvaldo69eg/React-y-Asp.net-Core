import { FieldError, useFormContext, UseFormRegisterReturn } from "react-hook-form";
import MostrarErrorCampo from "../utils/MostrarErrorCampo";

interface formGroupFechaProps {
  campo: string;
  label: string;
  field: UseFormRegisterReturn;
  error?: FieldError | string;
}

export default function FormGroupFecha(props:formGroupFechaProps) {
  return (
    <div className="form-group">
      <label htmlFor={props.campo}>{props.label}</label>
      <input
        type="date"
        className="form-control"
        id={props.campo}
        {...props.field}
      />
      {props.error && <MostrarErrorCampo error={props.error.toString()} />}
    </div>
  );
}


