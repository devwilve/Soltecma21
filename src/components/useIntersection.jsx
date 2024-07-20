import { useEffect, useRef , useState} from "react";


export default function useIntersection(opciones = {}){
    const [isIntersecting, setIsIntersecting] = useState(false)
   

    const refElement = useRef();

    useEffect(() => {
        const element = refElement.current;
        
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    setIsIntersecting(entry.isIntersecting)
                    
                });
            }, opciones);

        if(element){
            observer.observe(element)
        }

        return () =>{
            if(element){
                observer.unobserve(element);
            }
        };
    }, [opciones]);

    return [refElement , isIntersecting];
}