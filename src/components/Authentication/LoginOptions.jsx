import classes from './auth.module.css'
import login from '../../images/login.png'
import mobile from '../../images/mobile.png'
import fb from '../../images/fb.png'
import google from '../../images/google.png'
import email from '../../images/mail.png'
import { useHistory } from 'react-router'
import { useContext } from 'react'
import { NumberContext } from '../../App'
import { Link } from 'react-router-dom'

const LoginOptions = () => {

    const [isNumber, setIsNumber] = useContext(NumberContext)
    const history = useHistory()
    const handleMobileClick = () => {
        setIsNumber(true);
        history.push("/login-page");
    }
    const handleEmailClick = () => {
        setIsNumber(false);
        history.push("/login-page");

    }

    return (
        <div className={classes.login__main}>
            <div className={classes.login__header}>
                <div className={classes.logo}><Link to="/"><img src={login} alt="loginPage" /></Link></div>
            </div>
            <div className={classes.login__container}>
                <h2>LOGIN</h2>
                <div>
                    <div>
                        <div className={classes.login__option}>
                            <img src={mobile} alt="" />
                            <button onClick={handleMobileClick} className="text-secondary">Continue with Mobile Number </button>
                            <div></div>
                        </div>
                    </div>
                    <div className={classes.login__option}>
                        <img src={fb} alt="" />
                        <p className="text-secondary">Continue with Facebook </p>
                        <div></div>
                    </div>
                    <div className={classes.login__option}>
                        <img src={google} alt="" />
                        <p className="text-secondary">Continue with Google </p>
                        <div></div>
                    </div>
                    <div className={classes.login__option}>
                        <img src={email} alt="" />
                        <button onClick={handleEmailClick} className="text-secondary">Continue with Email </button>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginOptions
