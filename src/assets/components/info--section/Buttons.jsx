import mail from '../../images/mail.png'
import linkedin from '../../images/linkedin.png'

export default function Buttons(){
    return (
        <div className = 'button-container'>
            <a className = 'btn btn-light user--email' href="mailto:smskbuilds@gmail.com">{<img className = 'icon' src={mail} height = '9.6px' width = '12.8px'/>}   Email</a>
            <a className = 'btn btn-primary user--linkedin' href = 'https://www.linkedin.com/in/spencerkulwiec/'>{<img className = 'icon' src = {linkedin} height = '13.3px' width = '13.3px'/>}   LinkedIn</a>
        </div>
    )
}