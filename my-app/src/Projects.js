import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, CardBody, CardText, Col } from 'reactstrap';

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        d3.csv('data/projects.csv').then(data => {
            console.log(data)
            this.setState({
                data: data
            })
        })
    }

    render() {
        return (
            <div className="container">
                <h4>Projects</h4>
                {this.state.data.map((d, i) => {
                    return <Col sm="15" key={"project" + i}>
                        <Card>
                            <CardBody>
                                <h5 class = "card-title">
                                    {d.name} ( {d.date} ) 
                                </h5>
                                <h6 class="card-subtitle">
                                    {d.classID + " - " + d.className}
                                </h6>
                                <CardText>
                                    {d.description}
                                    <br />
                                    {d.team}
                                    <br />
                                    Tools Used: {d.tools}
                                </CardText>
                            </CardBody>
                        </Card>
                        <br />
                    </Col>

                })}
            </div>
        )
    }
}