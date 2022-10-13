import React from "react";
import { Link } from 'react-router-dom'

export const Logo = () => (
    <div className="logo">
        <Link to="/">
            <img src="/assets/images/logo/voltep-logo-white-x1.svg" alt="Digital Agency"/>
        </Link>
    </div>
)

