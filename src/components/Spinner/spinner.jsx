import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './spinner.css'

export const Spinner = () => {
	return (
		<div className='spinner__container'>
            <h3 className='spinner__title'>Cargado productos...</h3>
			<CircularProgress className='spinner'/>
            </div>
	);
};


