import { ChangeEvent, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";

export default function FormGroupImage(props: formGroupImagen) {

    const divStyle = { marginTop: '10px' };
    const imgStyle = { width: '450px' };

    const [imagenBase64, setImagenBase64] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const { setValue } = useFormContext();

    const ManejarOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            const archivo = e.currentTarget.files[0];
            aBase64(archivo)
                .then((base64: string) => {
                    setImagenBase64(base64);           
                    setValue(props.campo, archivo);      
                    if (inputRef.current) {
                        inputRef.current.value = '';    
                    }
                })
                .catch((error) => console.error(error));
        }
    }

    const aBase64 = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    }

    return (
        <div className="form-group">
            <label>{props.label}</label>
            <div>
                <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={ManejarOnChange}
                    ref={inputRef}
                />
            </div>

            {/* Mostrar imagen nueva si hay, si no, mostrar la de la URL */}
            {(imagenBase64 || props.imagenURL) && (
                <div style={divStyle}>
                    <img
                        style={imgStyle}
                        src={imagenBase64 || props.imagenURL}
                        alt="imagen seleccionada"
                    />
                </div>
            )}
        </div>
    )
}

interface formGroupImagen {
    campo: string;
    label: string;
    imagenURL?: string;
}
