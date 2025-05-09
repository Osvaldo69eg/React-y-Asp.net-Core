import { useFormContext } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import './FormGroupMarkdown.css'

export default function FormGroupMarkdown(props: FormGroupMarkdownProps) {
  const { register, watch } = useFormContext();
  const valorCampo = watch(props.campo);

  return (
    <div className="form-group form-markdown">
      <div>
        <label>{props.label}</label>
        <div>
          <textarea
            {...register(props.campo)}
            className="form-control"
            rows={6}
          ></textarea>
        </div>
      </div>

      <div>
        <label>{props.label} (preview):</label>
        <div className="markdown-container">
          <ReactMarkdown>{valorCampo}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

interface FormGroupMarkdownProps {
  campo: string;
  label: string;
}
