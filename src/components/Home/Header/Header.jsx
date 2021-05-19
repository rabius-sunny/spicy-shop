import Navbar from '../../Shared/Navbar/Navbar'
import Intro from "../../Intro/Intro"
import classes from './header.module.css'

const Header = () => {
    return (
        <div className={classes.header__container}>
            <Navbar />
            <Intro />
        </div>
    )
}

export default Header
