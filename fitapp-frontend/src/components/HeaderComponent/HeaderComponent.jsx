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
                            <a href="www.localhost:3000/home" className="navbar-brand">Home</a>
                            <a href="www.localhost:3000/" className="navbar-brand">nav1</a>
                            <a href="www.localhost:3000/" className="navbar-brand">nav2</a>
                            <a href="www.localhost:3000/" className="navbar-brand">nav3</a>
                        </div>

                    </nav>
                </header>
                

            </div>


        )

    }




}

export default HeaderComponent