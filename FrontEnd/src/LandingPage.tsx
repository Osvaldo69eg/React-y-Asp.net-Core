import { useEffect, useState } from "react";
import { landingPageDTO } from "./peliculas/peliculas.model";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";

export default function LandingPage() {
    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

    useEffect(() => {
        const timerId = setTimeout(() => {

            setPeliculas({
                enCartelera: [
                    {
                        id: 1, titulo: "Spiderman lejos de casa",
                        poster: "imagenes/FarFromHome.jpg"
                    },
                    {
                        id: 2, titulo: "moana",
                        poster: "imagenes/moana.jpg"
                    }
                ],
                proximosEstenos: [
                    {
                        id: 3, titulo: "Soul",
                        poster: "imagenes/soul.jpg"
                    }
                ]
            })
        }, 500);

        return () => clearTimeout(timerId)
    })

    return (
        <>
            <h3>Peliculas en cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera} />
            <h3>Proximos estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstenos} />
        </>
    )

}