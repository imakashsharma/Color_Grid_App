import React, { Component } from 'react'
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'


//Creating a Class Function
class AxiosData extends Component {
    constructor(props) {
        super(props)


        // Declaring Variables
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        axios.get("http://localhost:9500/getColor")                        //Using Axio Store Variables
            .then(response => {
                console.log(response.data)
                this.setState({ data: response.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
    // tableStyle = {
    //     margin: 'auto',
    //     color: 'White',
    //     padding: "10px",
    //     fontFamily: 'Arial',
    //     border: 'solid',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: '30%',
    //     height: '500px',
    //     cursor: 'pointer'
    // }

    ContainerStyle = {
        color: 'White',
        padding: "10px",
        fontFamily: 'Arial',
        border: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    }
    divStyle = {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
    render() {
        const { data } = this.state
        return (
            <div style={this.divStyle}>
                {/* <table style={this.tableStyle}>
                    <tbody>
                    {
                        data.length ?
                         data.reverse().map(data =>
                            <tr>
                                <td style={{backgroundColor: data.Color}}>
                                    {data.Color}
                                </td>
                            </tr>) : null
                    }
                    </tbody>
                </table> */}
                <Container style={this.ContainerStyle}>
                    <Row className="show-grid">
                        {
                            data.length ?
                            data.reverse().map(data =>
                                <Col xs={4} md={4} style={{backgroundColor: data.Color, padding:'4vw'}}>
                                    {data.Color}            
                                </Col>) : null
                        }    
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AxiosData