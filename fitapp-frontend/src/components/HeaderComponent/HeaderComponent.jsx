import './HeaderComponent.css';
import React, { Component } from "react";

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="www.#.com" className="navbar-brand">Home</a>
                        </div>
                    </nav>
                </header>

            </div>


        )

    }




}

export default HeaderComponent