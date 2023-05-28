import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { userName, isUser } from '../store';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import '../css/home.css'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

export default function DropdownUser() {
    const username = useAtom(userName);
    const [userStatus, setUserStatus] = useAtom(isUser);
    const navigate = useNavigate();

    const exitHandler = event => {
        event.preventDefault();
        setUserStatus(false);
        if(userStatus===false){
            navigate('/login')
        }
    }

    const profileHandler = () => {
        navigate('/profile');
      };
      

    return (
        <Dropdown><Dropdown.Toggle variant='success' id='dropdown-basic'>
            Merhaba, {username} <span className="ico-menu"></span>
        </Dropdown.Toggle>
            <Dropdown.Menu>
                <DropdownItem>
                   <button className='dropdownItem' onClick={profileHandler}>Bilgilerim<span className="ico-right-open"></span></button>
                </DropdownItem>
                <Dropdown.Item>
                    <button className='dropdownItem' onClick={exitHandler}>Çıkış Yap<span className="ico-right-open"></span></button>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
