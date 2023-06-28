import './BtnCatalog.css';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export const BtnCatalog = () => {
  return (
    <div className='catalog__container'>
       <a href="https://optin.myperfit.com/subscribe/herbobotanica/6fxVXLsS" target="_blank" className="btn__catalog" aria-label="Solicitar catalogo de productos" >
        <CloudDownloadIcon className='catalog__icon'/>
        <p className='catalog__title'>Catalogo</p>
       </a>

    </div>
  )
}


