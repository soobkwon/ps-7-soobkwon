import React, { Component } from 'react';
import * as d3 from 'd3';

export class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        d3.csv('data/courses.csv').then(data => {
            this.setState({
                data: data
            })
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h4>Skills and Familiarities</h4>
                    <div className="container">
                        <h5>Languages and Frameworks</h5>
                        <ul>
                            <li>CSS</li>
                            <li>Git</li>
                            <li>HTML</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>JQuery</li>
                            <li>Python</li>
                            <li>R</li>
                            <li>React</li>
                            <li>React Router</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div className="container">
                        <h5>Tools</h5>
                        <ul>
                            <li>Adobe Illustrator</li>
                            <li>Adobe Photoshop</li>
                            <li>Adobe XD</li>
                            <li>Canopy</li>
                            <li>Eclipse</li>
                            <li>Microsoft Office</li>
                            <li>RazorSQL/Microsoft SQL Server</li>
                            <li>Visual Studio Code</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
