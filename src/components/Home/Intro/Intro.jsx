import { Link } from 'react-router-dom'
import classes from './intro.module.css'

const Intro = () => {
    return (
        <section>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12">
                        <div className={classes.intro__left}>
                            <h1>HURRY !!</h1>
                            <p>HUNGER DON'T WAIT</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className={classes.intro__right}>
                            <p>
                                <h2>GET STARTED</h2>
                                <small>Avail Best Offers & Disounts Only For You</small>
                            </p>
                            <p className="text-secondary">Continue without Login</p>
                            <Link to="/login"><p className="text-secondary">Already a Spicy Member? <span>LOGIN</span></p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
