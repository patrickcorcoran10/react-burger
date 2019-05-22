import React, { Component } from 'react'
import { Jumbotron, Container, Row } from 'reactstrap';
import '../Burgerboard/Burgerboard.css';
import superagent from 'superagent';
import axios from 'axios';

export default class Burgerboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      available: [],
      eaten: []
    }
    this.eat = this.eat.bind(this);
    this.create = this.create.bind(this);
    this.acceptBurgerName = this.acceptBurgerName.bind(this);
  };
  acceptBurgerName = e => {
    console.log(this.state)
    this.setState({
      burgers: {
        name: this.refs.name.value,
        eaten: false
      }
    })
  };
  create = e => {
    e.preventDefault();
    console.log('we are submitting', this.state.burgers);
    superagent
      .post('/create')
      .send({
        name: this.refs.name.value,
        eaten: false
      })
      .end((err, res) => {
        console.log(res)
    });
    this.refs.name.value = '';
  };
  eat = e => {
    e.preventDefault();
    console.log("Yum, that was good.");
    let id = e.target.value;
    axios.put('/eat/' + id)
    .then(res => {
      console.log(res);
      this.componentDidMount();
    })
  };
  delete = e => {
    e.preventDefault();
    console.log('So long burger');
    let id = e.target.value;
    axios.delete('/remove/' + id)
    .then(res => {
      console.log(res);
      this.componentDidMount();
    })
  }
  componentDidMount() {
    axios.get('/get-burgers')
    .then(res => {
      this.setState({
        available: res.data
      })
    })
    axios.get('/get-eaten-burgers')
    .then(res => {
      this.setState({
        eaten: res.data
      })
    })
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div>
        <Jumbotron fluid>
            <Container fluid>
            <h1 className="display-3">Welcome to the Burger Store</h1>
            <p className="lead">Browse the Current Burgers Available, Eat What You Like, or Create Your Own!</p>
            </Container>
        </Jumbotron>
        </div>
        <hr/>
        <Row>
            <div className='col-md-4'>
            </div>
            <div className='col-md-4'>
                <p>Create Your Own Burger!</p>
                <input placeholder=' Place Burger Here' onChange={this.acceptBurgerName} ref='name'/>
                <br/>
                <br/>
                <button onClick={this.create}>Create!</button>
            </div>
            <div className='col-md-4'>
            </div>
        </Row>
        <div className='row'>
            <div className='col-md-1'></div>
            <div className='col-md-4'>
                <h6>Burgers Available</h6> 
                <hr/>
                {this.state.available.map((d, i) => (
                  <div key={d.id}>
                    <h6>{d.name}</h6>
                    <button value={d.id} onClick={this.eat}>EAT!</button>
                  </div>
                  
                ))}
            </div>
            <div className='col-md-2'></div>

            <div className='col-md-4'>
                <h6>Eaten Burgers</h6>
                <hr/>
                {this.state.eaten.map((d, i) => (
                  <div key={d.id}>
                    <h6>{d.name}</h6>
                    <button value={d.id} onClick={this.delete}>Remove from the Board</button>
                  </div>
                ))}
            </div>
            <div className='col-md-1'></div>
        </div>
      </div>
    )
  }
}
