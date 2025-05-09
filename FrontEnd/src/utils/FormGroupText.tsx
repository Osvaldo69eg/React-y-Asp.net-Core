import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import MostrarErrorCampo from './MostrarErrorCampo';

interface FormGroupTextProps {
  label: string;
  field: UseFormRegisterReturn;
  error?: string;
  htmlFor?: string;
}

export default function FormGroupText(props: FormGroupTextProps) {
  return (
    <div className="form-group">
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input id={props.htmlFor} className="form-control" {...props.field} />
      <MostrarErrorCampo error={props.error} />
    </div>
  );
}