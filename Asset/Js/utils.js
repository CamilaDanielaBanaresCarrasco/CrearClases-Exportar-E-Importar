///Enviar codigo de un lado a otro


/*export*/ function doblar(x){
    return x*2
    
}


const nombre = `Alex`;

export{
    nombre,
    doblar

}

// OTRA FORMA DE EXPORTAR LOS ELEMENTOS //forma de exportar con el default
export default function doblar2(x){

    return x+2
}