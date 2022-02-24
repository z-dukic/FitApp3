import React, { Component } from "react";
import FoodService from "../services/FoodService";
import './ListFoodComponent.css';

class ListFoodComponent extends React.Component {
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

    editFood(id){
        this.props.history.push(`/update-food/${id}`);
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
                                            <td>
                                                <button className="btn btn-info" onClick={() => this.editFood(food.id)}>Update</button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteFood(food.id)} className="btn btn-danger">Delete </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.viewFood(food.id)} className="btn btn-info">View </button>
                                            </td>
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

export default ListFoodComponent