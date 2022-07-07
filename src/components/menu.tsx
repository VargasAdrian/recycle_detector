import { Link } from 'gatsby';
import * as React from 'react';
import leaf from '../images/leaf.png';
import { routes } from '../utility/utils';

export default () => {


    return (
        <div className='menu'>
            <div className='container'>
                <img className='logo' src={leaf} />
            </div>

            <Link className='link ml-1' to={routes.recycle_centers}>Puntos de reciclaje</Link>
            <Link className='link ml-1' to={routes.goals}>Objetivo</Link>
        </div>
    )
}