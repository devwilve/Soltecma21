import {React, lazy , Suspense} from "react";
import CardInput from "../components/CardInput";
import ImagenComp from "../components/ImagenComp";
import Separator from "../components/Separator";
import { FcOk } from "react-icons/fc";
import styled from "styled-components";
import { LazyLoadComponent } from 'react-lazy-load-image-component';
const CardP = lazy(() => import('../components/CardP'));

export default function QuienesSomos(){


    return(
        <CardInput>
            <ImagenComp site='2' file='s2.jpg'/>
            <LazyLoadComponent delayTime={6000} placeholder={<PlaceCard/>} >
            
                <ValoresContainer>
                    <h3>Misión</h3>
                    <p>Satisfacer las necesidades de nuestros clientes en cada uno de los servicios que ofrecemos, ejecutando obras dentro de los plazos establecidos y  asegurando la calidad de los mismos, garantizando el cumplimiento de los criterios de protección integral.</p>
                </ValoresContainer>
            </LazyLoadComponent>
            
            <ValoresContainer >
                <h3>Visión</h3>
                <p>Buscamos impulsar el desarrollo del sector industrial y contribuir con nuestro entorno social al crear fuentes de empleo; ofreciendo así, un servicio de alta calidad a cada uno de nuestros clientes, consolidándonos como empresa eficiente, constante y responsable.</p>
            </ValoresContainer>
                <Separator/>
                <ImagenComp site='2' file='8.jpg'/>
            <ValoresContainer>

            <Suspense fallback={<p>Cargando...</p>}>
                <CardP >
                <p><b><FcOk/>Servicios Generales</b></p>
                    <p>Inspección y detección de fallas.</p>
                    <p>Reparación de equipos mecánicos, bombas, transportadoras, válvulas, sistemas neumáticos, sistemas oleohidraulicos, tapadoras, empaquetadoras y otros.</p>
                    <p>Reemplazo de rodamientos.</p>
                    <p>Reemplazo de empaques.</p>
                    <p>Reparación de tanques.</p>
                </CardP>
            </Suspense>
            
            <Suspense fallback={<p>Cargando...</p>}>
                <CardP >
                
                    <b><FcOk/> Mantenimiento preventivo mecánico industrial</b>
                    <p>Elaboración de planes de mantenimiento a equipos, maquinarias y activos de nuestros clientes.</p>
                    <p>Limpieza general de los equipos.</p>
                    <p>Lubricación de equipos.</p>
                    <p>Reparación de equipos industriales.</p>
                </CardP>
            </Suspense>

            <Suspense fallback={<p>Cargando...</p>}>
                <CardP >

                <p><b><FcOk/>Mantenimiento integral Eléctrico e instrumentación</b></p>
                
                    <p><b>Instalación</b></p>
                
                        <p>Instalación y acometida eléctrica de baja tensión para líneas de producción.</p>
                        <p>Diseño, fabricación y suministro de CCM, panel de control e instalación en campo.</p>
                        <p>Optimización de líneas de producción.</p>
                    <p><b>Mantenimiento</b></p>
                
                        <p>Mantenimiento correctivo y preventivo eléctrico de planta.</p>
                        <p>Mantenimiento predictivo y preventivo de instrumentación.</p>
                        <p>Instalación y modificaciones en sistemas neumáticos.</p>
            
                </CardP>
            </Suspense>
            
            <Suspense fallback={<p>Cargando...</p>}>
                <CardP >
                    <p><b><FcOk/>Mantenimiento de calderas según normas COVENIN y certificación de calderas ante INPSASEL.</b></p>
                </CardP>
            </Suspense>
                
            <Suspense fallback={<p>Cargando...</p>}>
                <CardP >
                <p><b><FcOk/>Soldadura industrial.</b></p>
                </CardP >
            </Suspense>
            
            <Suspense fallback={<p>Cargando...</p>}>
                <CardP >
                    <p><b><FcOk/>Asesoría en mantenimiento industrial.</b></p>
                    <p>Planificación, control, seguimiento de proyectos y Paradas mayores de planta.</p>
                </CardP>
            </Suspense>
            
            </ValoresContainer>
        </CardInput>
    )
}

const ValoresContainer = styled.div`
    padding: .8rem .5rem;
    margin-bottom: 2rem;
    text-align: justify;

    & h3{
        color: #2742b9;
        text-align: center;
    }
`

const PlaceCard = styled.div`
    width: 100%;
    height: 7rem;
    background-color: #464646;
    border-radius: 1rem;
`