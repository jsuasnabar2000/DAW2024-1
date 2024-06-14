import React from 'react'

const Hijo = ({children}) => {
    let nombre="Jaime"
    let element=<h4>Hola {nombre}</h4>
    let nEdad=12
    let text;
    if(nEdad<18){
        text="Menor de Edad"
    }else{
        text="Mayor de Edad"
    }
    let nEdad2=15
    const element2=(nEdad<18)?"Es Menor":"Es Mayor"
    return (
        <>
            <div>Componente Hijo</div>
            <p>{children}</p>
            {element}
            {200+20+5}
            {text}
            <p>{element2}</p>
        </>
        
    )
}

export default Hijo