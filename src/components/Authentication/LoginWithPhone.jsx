import classes from './auth.module.css'
import logo from '../../images/rideLogo.png'
import { useState } from 'react'

const LoginWithPhone = () => {

    const [credents, setCredents] = useState({
        number: '',
        password: ''
    })
    const handleChange = e => {
        let credentials = { ...credents };
        credentials[e.target.name] = e.target.value;
        setCredents(credentials)
    }
    const formSubmit = () => {
        console.log(credents)
    }

    return (
        <div className={classes.login__main}>
            <div className={classes.login__header}>
                <div className={classes.logo}><img src={logo} alt="loginPage" /></div>
            </div>
            <div className={classes.login__container}>
                <h2>LOGIN</h2>
                <div>
                    <div className="mb-3">
                        <label htmlFor="number" className="form-label">Enter your number</label>
                        <input onChange={handleChange} type="text" name="number" className="form-control" id="number" placeholder="i.e: +91 888 000 6666" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Enter your number</label>
                        <input onChange={handleChange} type="password" name="password" className="form-control" id="password" placeholder="********" />
                    </div>
                    <div className="d-grid">
                        <button onClick={formSubmit} className="btn btn-primary" type="button">PROCEED</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoginWithPhone
