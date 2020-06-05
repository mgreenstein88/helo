import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    
    render(){
        return(
            <div>
                Nav.js
                <button>Home
                    <Link to="/dashboard">Dashboard</Link>
                </button>
                <button>New Post
                    <Link to="newPost">New Post</Link>
                </button>
                <button>Logout
                    <Link to="auth">Auth</Link>
                </button>
            </div>
        )
    }
}

export default Nav