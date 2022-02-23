import React, { Component } from "react";
import FoodService from "../Util/FoodService";
import './FoodList.css';

class FoodList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            food: []

        }
        //Bind object to action(else it's undefined)
        this.addFood = this.addFood.bind(this);
    }

    //Component gets called after its mounted
    componentDidMount() {
        //Send data to the state
        //Send response data to food array
        FoodService.getFood().then((res) => {
            this.setState({ food: res.data })
        })

    }

    //Route - simple say "go to /add-food", you can also pass the state ("/add-food", { state: 'sample data'});
    addFood(){
        this.props.history.push('/add-food');
    }

    render() {
        return (

            <div>
                <h2 className="text-center">Food database</h2>
                <div className = "row" className="w-25 p-3">
                    <button className="btn btn-primary" onClick={this.addFood}> Add Food</button>
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
                                <th> Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.food.map(
                                    food =>
                                        <tr key={food.id}>
                                            <td> {food.foodName} </td>
                                            <td> {food.foodKcal} </td>
                                            <td> {food.foodProtein}</td>
                                            <td> {food.foodCarb}</td>
                                            <td> {food.foodFat}</td>
                                            <td> PlaceHolder</td>
                                        </tr>
                                )
                            }
                        </tbody>


                    </table>

                </div>





            </div>

        )



    }




}

export default FoodList