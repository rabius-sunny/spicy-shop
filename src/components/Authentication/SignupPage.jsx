import classes from './auth.module.css'
import logo from '../../images/rideLogo.png'
import { useContext, useState } from 'react'
import { NumberContext, ProductsContext } from '../../App'
import { Link, useHistory } from 'react-router-dom'

const SignupPage = () => {

    const history = useHistory()
    const [isNumber, setIsNumber] = useContext(NumberContext)
    const [products, setProducts] = useContext(ProductsContext)
    const [credent, setCredents] = useState({
        name: '',
        number: '',
        email: '',
        password: ''
    })
    const handleChange = e => {
        let credentials = { ...credent };
        credentials[e.target.name] = e.target.value;
        setCredents(credentials)
    }
    const getData = (number, password) => {
        fetch('http://localhost:4040/vendor/login/' + number + '/' + password)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                alert('signed up as shopkeeper successfully')
                history.push("/");
            })
    }
    const handleShopKeeper = () => {
        let { name, email, number, password } = credent
        let data = {
            name: name,
            email: email,
            number: number,
            password: password
        }
        fetch('http://localhost:4040/vendor/signup', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => getData(number, password))
            .catch(err => console.log(err))
    }
    const handleUser = () => {
        let { name, email, number, password } = credent
        let userData = {
            name: name,
            email: email,
            number: number,
            password: password
        }
        fetch('http://localhost:4040/user/signup', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => {
                alert('signed up user successfully')
                history.push('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={classes.login__main}>
            <div className={classes.login__header}>
                <div className={classes.logo}><img src={logo} alt="loginPage" /></div>
            </div>
            <div className={classes.login__container}>
                <h2>SIGN UP</h2>
                <div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Enter Your Name</label>
                        <input onChange={handleChange} type="text" name="name" className="form-control" id="name" placeholder="John Doe" />
                    </div>
                    {
                        isNumber ?
                            <div className="mb-3">
                                <label htmlFor="number" className="form-label">Enter your number</label>
                                <input onChange={handleChange} type="text" name="number" className="form-control" id="number" placeholder='i.e: +91 888 000 6666' />
                            </div> :
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Enter your email</label>
                                <input onChange={handleChange} type="text" name="email" className="form-control" id="number" placeholder='jhon@doe.com' />
                            </div>
                    }
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Enter your Password</label>
                        <input onChange={handleChange} type="password" name="password" className="form-control" id="password" placeholder="********" />
                    </div>


                    <div className="d-grid">
                        {isNumber ? <button onClick={handleShopKeeper} className="btn btn-primary" type="button">Signup shopkeeper</button> : <button onClick={handleUser} className="btn btn-primary" type="button">Signup user</button>}
                    </div>
                    <div className="my-3">
                        <p>Already have an account? <Link to="/login">login here</Link></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignupPage
