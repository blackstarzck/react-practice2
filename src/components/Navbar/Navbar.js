import React, { Component } from 'react' //imrc
import { MenuItems } from "./MenuItems" // named export를 불로오는 표기. 
import { Button } from '../Button' // named export를 불로오는 표기.
import './Navbar.css';

class Navbar extends Component {
state = { clicked: false }
handleClick = () => {
    this.setState({ clicked: !this.state.clicked }) // oposite value of state
}

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }
}

export default Navbar