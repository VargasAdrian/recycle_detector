import { PageProps } from 'gatsby'
import React from 'react'

export default (props: PageProps) => {
    let category = props.params.id;

    return (
        <div>Esto es un detalle</div>
    )
}