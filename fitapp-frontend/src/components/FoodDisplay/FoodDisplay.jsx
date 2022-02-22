import React, { Component } from "react";

class FoodDisplay extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (

            <div>
                <h2 className="text-center">Food database</h2>
                <div className="row" className="w-25 p-3">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add food</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                    <thead> 
                            <tr>
                                <th> Name</th>
                                <th> Kcal</th>
                                <th> Protein</th>
                                <th> Carb</th>
                                <th> Fat</th>
                            </tr>
                        </thead>
                  

                    </table>

                </div>





            </div>

        )



    }




}

export default FoodDisplay