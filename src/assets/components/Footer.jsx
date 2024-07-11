import twitter from '../images/twitter-icon.png'
import facebook from '../images/facebook-icon.png'
import instagram from '../images/instagram-icon.png'
import github from '../images/github-icon.png'

export default function Footer() {
    return(
        <div className = 'footer--div'>
            <div className = 'footer-items'>
                <a href="https://x.com/smskbuilds"><img src={twitter}/></a>
                <a href="https://www.facebook.com/SpencerKulwiec"><img src={facebook}/></a>
                <a href="https://www.instagram.com/spencerish/"><img src={instagram}/></a>
                <a href="https://github.com/smskbuilds"><img src={github}/></a>
            </div>
        </div>
    )
}