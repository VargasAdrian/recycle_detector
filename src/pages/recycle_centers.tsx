import React from 'react'
import Menu from '../components/menu'

export default () => {

    return (
        <div>
            <Menu />
            <div>
                <div>¿Dónde estas?</div>
                <input />

                <button>Usar ubicación</button>
            </div>
            <div>
                Resultados
            </div>
        </div>
    )
}