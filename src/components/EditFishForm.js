import React from "react";
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
    static propTypes = {
        fish: PropTypes.shape({
            image: PropTypes.string,
            price: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        index: PropTypes.string,
        updateFish: PropTypes.func
    }
    handleChange = event => {
        //update that fish 
        // 1. Take a copy of the current fish 
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish)
    }
    render() {
        return <div className="fish-edit">
            <input 
            type="text" 
            name="name" 
            onChange={this.handleChange} 
            value={this.props.fish.name}
            />            
            <input 
            type="text" 
            name="price" 
            onChange={this.handleChange} 
            value={this.props.fish.price}
            />
            <select 
            type="text" 
            name="status" 
            onChange={this.handleChange} 
            value={this.props.fish.status}>
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out! </option>
            </select>
            <textarea 
            name="desc" 
            value={this.props.fish.desc} 
            onChange={this.handleChange}
            />
            <input 
            type="text" 
            name="image" 
            value={this.props.fish.image} 
            onChange={this.handleChange}
            />
            <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
        </div>
    }
}

export default EditFishForm;