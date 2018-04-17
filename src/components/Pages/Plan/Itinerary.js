import React from 'react';
import ItineraryCard from './ItineraryCard'
import {  Button, Row, Col, message, Modal, Form, Input } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const { TextArea } = Input;
class Itinerary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      picture: '',
      modalVisible: false,
      data: []
    }
    this.addItinerary = this.addItinerary.bind(this);
    this.removeItinerary = this.removeItinerary.bind(this);
    
  }
  handleProp = (prop) => {
    return (e) => {
      this.setState({
        [prop]: e.target.value
      })
    }
  }
  removeItinerary = (index) => {
    this.setState({
      data: this.state.data.filter((x,i) => i != index)
    });
  }
  showModal = () => {
    this.setState({
      modalVisible: true
    });
  }
  hideModal = () => {
    this.setState({
      modalVisible: false
    });
  }

  addItinerary = (e) => {
    e.preventDefault();

    let ItineraryInfo =
      {
        title: this.state.title,
        description: this.state.description,
        picture: this.state.picture
      }
      this.setState({
        modalVisible: false,
        data: this.state.data.concat(ItineraryInfo),
        title: '',
        description: '',
        picture: ''
      });  
    
  }

  render() {
    return (
      <div>
        <h1> {this.props.title} </h1>
        <p> {this.props.description} </p>
        {/*<p> Add Day by Day Activies </p> */}
        <Button onClick={this.showModal}>
          Add Day by Day Activities
        </Button>  
        <Button>
          <Link to = {`/plan/`}> Go Back to Previous Trips </Link>
        </Button>

         <Row gutter={24}>
       {/*} <p> PLANNING PAGE </p>
        <Button onClick={this.showModal}> Create a new plan </Button> */}
        <Modal
          title="Create a new Itinerary"
          visible={this.state.modalVisible}
          onOk = {this.addItinerary}
          onCancel={this.hideModal}>
          <Form>
            <Input
              placeholder="Add a title" value={this.state.title}
              onChange={this.handleProp('title').bind(this)} />
            {/*<Input
              placeholder="Add picture URL" value={this.state.picture}
            onChange={this.handleProp('picture').bind(this)} /> */}
            <TextArea
              placeholder = "Write a brief description about your itinerary"
              value={this.state.description}
              onChange={this.handleProp('description').bind(this)}
              rows={4} />
          </Form>
        </Modal>
        <div>
          {this.state.data.map((x, i) =>
            <div key={i}>
              <ItineraryCard
                data = {x}
                number = {i}
                remove = {this.removeItinerary.bind(this, i)}
                title = {x.title}
                description = {x.description}
                picture = {x.picture} />
            </div>
          )}
        </div>
      </Row>
      </div>
      
    )
  }
}

export default Itinerary;
