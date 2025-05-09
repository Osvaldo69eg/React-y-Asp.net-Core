
export default function MostrarErrorCampo({ error }: ErrorMessageProps) {
  if (!error) return null;

  return <div className="text-danger">{error}</div>;
}


interface ErrorMessageProps {
  error?: string;
}
