import classes from './auth.module.css'
import logo from '../../images/rideLogo.png'
import { useContext, useState } from 'react'
import { NumberContext, ProductsContext } from '../../App'
import { Link, useHistory } from 'react-router-dom'

const LoginWithPhone = () => {

    const history = useHistory()
    const [isNumber, setIsNumber] = useContext(NumberContext)
    const [ShopkeeperCredents, setShopkeeperCredents] = useState({
        number: '',
        password: ''
    })
    const [userCredents, setUserCredents] = useState({
        email: '',
        password: ''
    })
    const [products, setProducts] = useContext(ProductsContext)
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
        let { number, password } = ShopkeeperCredents;
        fetch('http://localhost:4040/vendor/login/' + number + '/' + password)
            .then(res => {
                if (res.status === 404) {
                    alert('Invalid Username or Password! Please try with actual credentials')
                }
                return res.json()
            })
            .then(data => {
                setProducts(data);
                history.push("/");
            })
            .catch(err => console.log(err))
    }
    const userSubmit = () => {
        let { email, password } = userCredents;
        fetch('http://localhost:4040/user/login/' + email + '/' + password)
            .then(res => {
                if (res.status === 200) {
                    alert('Login User Successfully')
                    history.push("/")
                } else {
                    alert("Invalid Username or Password. Please try with actual credentials")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={classes.login__main}>
            <div className={classes.login__header}>
                <div className={classes.logo}><Link to="/"><img src={logo} alt="loginPage" /></Link></div>
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
                                <input onChange={handleShopChange} type="password" name="password" className="form-control" id="password" placeholder="********" />
                            </div> :
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Enter your password</label>
                                <input onChange={handleUserChange} type="password" name="password" className="form-control" id="password" placeholder="********" />
                            </div>
                    }

                    <div className="d-grid">
                        {isNumber ? <button onClick={shopKeeperSubmit} className="btn myBtn" type="button">Login shopkeeper</button> : <button onClick={userSubmit} className="btn myBtn" type="button">Login user</button>}
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
