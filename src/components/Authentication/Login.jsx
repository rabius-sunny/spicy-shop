import classes from './auth.module.css'
import login from '../../images/login.png'
import mobile from '../../images/mobile.png'
import fb from '../../images/fb.png'
import google from '../../images/google.png'
import email from '../../images/mail.png'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className={classes.login__main}>
            <div className={classes.login__header}>
                <div className={classes.logo}><img src={login} alt="loginPage" /></div>
            </div>
            <div className={classes.login__container}>
                <h2>LOGIN</h2>
                <div>
                    <Link to="/login-with-phone">
                        <div className={classes.login__option}>
                            <img src={mobile} alt="" />
                            <p>Continue with Mobile Number </p>
                            <div></div>
                        </div>
                    </Link>
                    <div className={classes.login__option}>
                        <img src={fb} alt="" />
                        <p>Continue with Facebook </p>
                        <div></div>
                    </div>
                    <div className={classes.login__option}>
                        <img src={google} alt="" />
                        <p>Continue with Google </p>
                        <div></div>
                    </div>
                    <div className={classes.login__option}>
                        <img src={email} alt="" />
                        <p>Continue with Email </p>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
