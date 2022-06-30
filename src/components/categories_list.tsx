import { PageProps } from 'gatsby'
import React, { MouseEventHandler } from 'react'
import { ICategories } from '../models/interfaces'

export default (props: DataProps) => {
    return (
        <div className='grid-container'>
            {props.categories.map((c, i) =>
                <div key={c + i.toString()}>
                    <div className='category-title'>{c.category}</div>
                    <ul className='category-list'>
                        {c.metadata.map((m, i) =>
                            <li key={"category " + i.toString()} onClick={(event:React.MouseEvent<HTMLLIElement>) => {props.onItemSelected(m)}}>{m}</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    )
}

interface DataProps {
    categories: ICategories[],
    onItemSelected: (category:string) => void
}