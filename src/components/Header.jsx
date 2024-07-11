import logoImage from '../assets/logo-image.png';
export default function Header(){
    return(
        <header>
            <img src={logoImage} alt='logoimage'></img>
            <h2>Your Brain on Quiz!</h2>
        </header>
    )
}
