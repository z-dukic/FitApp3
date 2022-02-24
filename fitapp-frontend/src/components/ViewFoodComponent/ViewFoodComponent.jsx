import React, { Component } from 'react'

import FoodService from '../services/FoodService';

class ViewFoodComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            food: {}

        }
    }

    componentDidMount() {
        FoodService.getFoodById(this.state.id).then(res => {
            this.setState({ food: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Food Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Name: </label>
                            <div> {
                                this.state.food.foodName}</div>
                        </div>
                        <div className="row">
                            <label> Kcal: </label>
                            <div> {this.state.food.foodKcal}</div>
                        </div>
                        <div className="row">
                            <label> Protein:  </label>
                            <div> {this.state.food.foodProtein}</div>
                        </div>
                        <div className="row">
                            <label> Carbs: </label>
                            <div> {this.state.food.foodCarb}</div>
                        </div>
                        <div className="row">
                            <label> Fat: </label>
                            <div> {this.state.food.foodFat}</div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}


export default ViewFoodComponent