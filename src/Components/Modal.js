import React, { Component } from 'react'
import axios from "axios";


//Creating a Class Component
class Form extends Component {
    //Creating a Constructor
    constructor(props) {
        super(props)
        //Declaring Variables
        this.state = {
            Color: ''
        }
    }

    handleColorChange = event => {                      //Function to Handle Color Change
        this.setState({
            Color: event.target.value
        })
    }

    handleSubmit = event => {
        axios.post('http://localhost:9500/postColor', this.state)                  // Axios to Post Data to MongoDB
            .then(data => {
                console.log(data);
            })
    }
    componentDidMount() {
        axios.get("http://localhost:9500/getColor")									 // Axios to Get Data from MongoDB
            .then(response => {
                // const Color = response.data.filter(x => x.Color);
                // this.setState({ Color }) 
            })
            .catch(err => {
                console.log(err)
            })
    }

    ModalStyle = {
        display: 'flex',
        padding: "10px",
        marginTop: '10px',
        marginLeft: "30%",
    }
    LabelStyle ={
        display: 'flex',
        padding: "10px",
        marginTop: '10px',
        marginLeft: "40%",
    }
    ButtonStyle = {
        backgroundColor: '#0d6efd',
        border: 'none',
        borderRadius: '3px',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '14px',
        marginLeft: '40%',
        fontFamily: 'Arial'
    }
    render() {
        const { Color } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                {/*Creating Form to send Data */}
                <div>
                    <label style={this.LabelStyle}>
                        Enter Color
                        <br />
                    </label>
                    <input
                        type="text"
                        value={Color}
                        onChange={this.handleColorChange}
                        placeholder="Red"
                        required
                        style={this.ModalStyle}
                    />
                </div>
                <br />
                <button type="submit" style={this.ButtonStyle}>Submit</button>
            </form>
        )
    }
}
export default Form