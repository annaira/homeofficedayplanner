import React from 'react';
import './index.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const Topbar = () => {
    return (
        <div>
            <div>
                <div className="Topbar-menu">
                    <MenuIcon style={{color: 'white'}}/>
                    <SearchIcon style={{color: 'white'}}/>
                </div>
            </div>
        </div>
    )
};

export default Topbar;