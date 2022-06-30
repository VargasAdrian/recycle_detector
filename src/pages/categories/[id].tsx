import { navigate, PageProps } from 'gatsby'
import React, { useEffect, useState } from 'react'

export default (props: PageProps) => {
    const [loading, setLoading] = useState(true);
    const [file, setFile] = useState<any>(null);
    
    useEffect(() => {
      import(`../../content/${props.params.id}`)
        .then(f => {
            setFile(f);
            setLoading(false);
        })
        .catch(e => {
            navigate('/404/');
        });
    
      return () => {
        
      }
    }, [props.params.id])

    if(loading)
        return(
            <div>Loading</div>
        )

    console.log(file);

    return (
        <div>Esto es un detalle</div>
    )
}