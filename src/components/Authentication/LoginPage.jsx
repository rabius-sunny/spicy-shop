import classes from './auth.module.css'
import logo from '../../images/rideLogo.png'
import { useContext, useState } from 'react'
import { NumberContext } from '../../App'
import { Link } from 'react-router-dom'

const LoginWithPhone = () => {

    const [isNumber, setIsNumber] = useContext(NumberContext)
    const [ShopkeeperCredents, setShopkeeperCredents] = useState({
        number: '',
        password: ''
    })
    const [userCredents, setUserCredents] = useState({
        email: '',
        password: ''
    })
    const handleUserChange = e => {
        let credentials = { ...userCredents };
        credentials[e.target.name] = e.target.value;
        setUserCredents(credentials)
    }
    const handleShopChange = e => {
        let credentials = { ...ShopkeeperCredents };
        credentials[e.target.name] = e.target.value;
        setShopkeeperCredents(credentials)
    }

    const shopKeeperSubmit = () => {
        console.log(ShopkeeperCredents)
    }
    const userSubmit = () => {
        console.log(userCredents)
    }

    return (
        <div className={classes.login__main}>
            <div className={classes.login__header}>
                <div className={classes.logo}><img src={logo} alt="loginPage" /></div>
            </div>
            <div className={classes.login__container}>
                <h2>LOGIN</h2>
                <div>
                    {
                        isNumber ?
                            <div className="mb-3">
                                <label htmlFor="number" className="form-label">Enter your number</label>
                                <input onChange={handleShopChange} type="text" name="number" className="form-control" id="number" placeholder="i.e: +91 888 000 6666" />
                            </div> :
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Enter your email</label>
                                <input onChange={handleUserChange} type="email" name="email" className="form-control" id="email" placeholder="john@doe.com" />
                            </div>
                    }
                    {
                        isNumber ?
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Enter your password</label>
                                <input onChange={handleShopChange} type="text" name="password" className="form-control" id="password" placeholder="********" />
                            </div> :
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Enter your password</label>
                                <input onChange={handleUserChange} type="password" name="password" className="form-control" id="password" placeholder="********" />
                            </div>
                    }

                    <div className="d-grid">
                        {isNumber ? <button onClick={shopKeeperSubmit} className="btn btn-primary" type="button">Login shopkeeper</button> : <button onClick={userSubmit} className="btn btn-primary" type="button">Login user</button>}
                    </div>
                    <div className="my-3">
                        <p>Don't have an account? <Link to="/signup">create here</Link></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoginWithPhone
