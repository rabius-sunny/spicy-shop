import classes from './auth.module.css'
import logo from '../../images/rideLogo.png'
import { useContext, useState } from 'react'
import { NumberContext } from '../../App'
import { Link } from 'react-router-dom'

const SignupPage = () => {

    const [isNumber, setIsNumber] = useContext(NumberContext)

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
            .then(res => console.log('signed up'))
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
            .then(res => console.log('signed up'))
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
                        {isNumber ? <button onClick={handleShopKeeper} className="btn btn-primary" type="button">Login shopkeeper</button> : <button onClick={handleUser} className="btn btn-primary" type="button">Login user</button>}
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
