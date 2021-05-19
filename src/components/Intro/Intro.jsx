import { Link } from 'react-router-dom'
import classes from './intro.module.css'

const Intro = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-6">
                        <div className={classes.intro__left}></div>
                        <h1>HURRY !!</h1>
                        <p className="text-secondary">HUNGER DON'T WAIT</p>
                    </div>
                    <div className="col-md-7 col-sm-6">
                        <div className={classes.intro__right}>
                            <p>
                                <h2>GET STARTED</h2>
                                <small>Avail Best Offers & Disounts Only For You</small>
                            </p>
                            <p>Continue without Login</p>
                            <p>Already a Spicy Member? <span><Link to="/login">LOGIN</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
