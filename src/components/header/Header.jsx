import React, { useState } from 'react'
import './styles.scss'
import logo2x from '../../assets/logo@2x.webp'
import { ReactComponent as MenuBlack } from '../../assets/menuBlack.svg'
import { ReactComponent as MenuClose } from '../../assets/menuClose.svg'

const Header = () => {

    return (
        <div className="box">
            <div className="background-img">
                <img
                    src={logo2x}
                    srcset="logo@2x.webp 2x"
                    alt="logo-pic"
                />
            </div>            

            <div className="option">
                <span className="Introduction">
                    introduction
                </span>

                <span className="solution">
                    solution
                </span>

                <span className="Rate-plan">
                    rate plan
                </span>

                <div className="Rectangle-662" />

                <span className="login">
                    login
                </span>

                <span className="Apply-for-free-use">
                    apply for free use
                </span>
            </div>
        </div>
    )
}

export default Header
