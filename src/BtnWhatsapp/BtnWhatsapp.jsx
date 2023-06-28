import './BtnWhatsapp.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const BtnWhatsapp = () => {
  return (
    <div>
       <a href="https://wa.me/541173633708" target="_blank" className="btn__whatsapp" aria-label="Comunicate por WhatsApp" >
        <WhatsAppIcon className='whatsapp__icon'/>
       </a>

    </div>
  )
}


