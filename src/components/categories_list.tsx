import { PageProps } from 'gatsby'
import React from 'react'
import { ICategories } from '../models/interfaces'

export default (props: DataProps) => {
    return (
        <div className='grid-container'>
            {props.categories.map(c =>
                <div>
                    <div className='category-title'>{c.category}</div>
                    <ul className='category-list'>
                        {c.metadata.map(m =>
                            <li>{m}</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    )
}

interface DataProps {
    categories: ICategories[]
}