import React, { Component } from 'react'
import { Jumbotron, Container, Row } from 'reactstrap';
import '../Burgerboard/Burgerboard.css';
import superagent from 'superagent';

export default class Burgerboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgers: {
        name: '',
        eaten: false
      },
      eaten: []
    }
    // this.eat = this.eat.bind(this);
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
        name: "test",
        eaten: true
      })
      .end((err, res) => {
        console.log(res)
    });
    this.refs.name.value = '';
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
            </div>
            <div className='col-md-2'></div>

            <div className='col-md-4'>
                <h6>Eaten Burgers</h6>
            </div>
            <div className='col-md-1'></div>
        </div>
      </div>
    )
  }
}
