import React, { Component } from 'react'
import FoodService from '../Util/FoodService';

class AddFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //initialize 
      foodName: '',
      foodKcal: '',
      foodProtein: '',
      foodCarb: '',
      foodFat: ''

    }

    //Bind object to action(else it's undefined
    this.changeFoodNameHandler = this.changeFoodNameHandler.bind(this);
    this.changeFoodKcalHandler = this.changeFoodKcalHandler.bind(this);
    this.changeFoodProteinHandler = this.changeFoodProteinHandler.bind(this);
    this.changeFoodCarbHandler = this.changeFoodCarbHandler.bind(this);
    this.changeFoodFatHandler = this.changeFoodFatHandler.bind(this);
  }

  saveFood = (e) => {
    e.preventDefault();

    let food = {
      footName: this.state.foodName,
      foodKcal: this.state.foodKcal,
      foodProtein: this.state.foodProtein,
      foodCarb: this.state.foodCarb,
      foodFat: this.state.foodFat
    };

    //console log to track food object
    console.log('food =>' + JSON.stringify(food));

    FoodService.createFood(food).then(res => {
      this.props.history.push('/food');
    })
  }

  //take value and use it
  changeFoodNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  }

  changeFoodKcalHandler = (event) => {
    this.setState({ foodKcal: event.target.value });
  }

  changeFoodProteinHandler = (event) => {
    this.setState({ foodProtein: event.target.value });
  }

  changeFoodCarbHandler = (event) => {
    this.setState({ foodCarb: event.target.value });
  }

  changeFoodFatHandler = (event) => {
    this.setState({ foodFat: event.target.value });
  }

  //if you press cancel button, go to localhost
  cancel() {
    this.props.history.push('/food');
  }



  render() {
    return (
      <div>
        <br></br>
        <div className='container'>
          <div className='row'>
            <div className="card col-md-6 offset-md-3 offset-md-3"></div>
            <h3 className="text-center">Add Food</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Name: </label>
                  <input placeholder="Food Name" name="foodName" className="form-control"
                    value={this.state.foodName} onChange={this.changeFoodNameHandler} />
                </div>

                <div className="form-group">
                  <label> Kcal: </label>
                  <input placeholder="kcal" name="foodKcal" className="form-control"
                    value={this.state.foodKcal} onChange={this.changeFoodKcalHandler} />
                </div>

                <div className="form-group">
                  <label> Protein:  </label>
                  <input placeholder="Protein: " name="foodProtein" className="form-control"
                    value={this.state.foodProtein} onChange={this.changeFoodProteinHandler} />
                </div>

                <div className="form-group">
                  <label> Carb:  </label>
                  <input placeholder="Carb: " name="foodCarb" className="form-control"
                    value={this.state.foodCarb} onChange={this.changeFoodCarbHandler} />
                </div>

                <div className="form-group">
                  <label> Fat:  </label>
                  <input placeholder="Fat: " name="foodFat" className="form-control"
                    value={this.state.foodFat} onChange={this.changeFoodFatHandler} />
                </div>

                <button className="btn btn-success" onClick={this.saveFood}>Save</button>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

              </form>


            </div>


          </div>


        </div>






      </div>
    )
  }
}


export default AddFood