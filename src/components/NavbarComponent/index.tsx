import React from "react";
import {
    Navbar,
    ButtonGroup,
    DropdownButton,
    Dropdown
} from 'react-bootstrap';
import logo from "../../assets/images/logo.svg";
import BeerTechLogo from "../../assets/images/beer-tech-logo.png";
import './style.scss';
import { TokenService } from "../../services/TokenService"
import { useHistory } from 'react-router-dom';

interface NavbarComponentProps {
    name: string
}

const handleLogout = () => {
    const tokenService = new TokenService(window.localStorage);
    tokenService.clearToken()
    window.location.reload()
}


const NavbarComponent = ({ name }: NavbarComponentProps) => {
    const history = useHistory();
    const handleRedirect = () => {
        history.push('/rewards')
    }
    return (
        <Navbar className='navbar-container'>
            <Navbar.Brand href="/" className='navbar-title'>
                <div>
                    <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />{' '}
                    <span className='navbar-title-margin'>eer Coins</span>
                    <p className='navbar-description'>AB Inbev Virtual Wallet</p>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <img alt="" src={BeerTechLogo} width="50" height="50" className="d-inline-block align-top navbar-beer-tech-logo" />
                <Navbar.Text className='beer-tech-logo-margin'>
                    <ButtonGroup vertical>
                        <DropdownButton as={ButtonGroup} title={name} id="bg-vertical-dropdown-3">
                            <Dropdown.Item onClick={handleLogout} eventKey="1">Logout</Dropdown.Item>
                            <Dropdown.Item onClick={handleRedirect} eventKey="1">Rewards</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavbarComponent; 