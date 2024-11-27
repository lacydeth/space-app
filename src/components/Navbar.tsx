import { Link } from "react-router-dom"
import { routes } from "../App"
import styles from "./Navbar.module.css"
import { useState } from "react"

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900)

    window.addEventListener("resize", () => {setIsMobile(window.innerWidth < 900)})
    return (
        <>
            {isMobile ? <MobileNavbar/> : <DesktopNavbar/>}
        </>
    )
}
const DesktopNavbar = () => {
    return (
        <nav className={styles.desktop}>
            <div>
                <Link to={routes.homePage.path}><strong>00</strong>{routes.homePage.title}</Link>
                <Link to={routes.destinationPage.path}><strong>01</strong>{routes.destinationPage.title}</Link>
                <Link to={routes.crewPage.path}><strong>02</strong>{routes.crewPage.title}</Link>
                <Link to={routes.techPage.path}><strong>03</strong>{routes.techPage.title}</Link>
            </div>
        </nav>
    )
}
const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className={styles.mobile}>
            <div onClick={() => {setIsOpen(!isOpen)}} className={styles.hamburger}></div>
            <div style={{display: isOpen ? "flex" : "none"}} className={styles.links}>
                <Link to={routes.homePage.path}><strong>00</strong>{routes.homePage.title}</Link>
                <Link to={routes.destinationPage.path}><strong>01</strong>{routes.destinationPage.title}</Link>
                <Link to={routes.crewPage.path}><strong>02</strong>{routes.crewPage.title}</Link>
                <Link to={routes.techPage.path}><strong>03</strong>{routes.techPage.title}</Link>
            </div>
        </nav>
    )
}
export default Navbar