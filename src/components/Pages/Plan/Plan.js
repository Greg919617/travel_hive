import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button, Row, Col, message, Modal, Form, Input } from 'antd';
import { addPlan, getPlans } from '../../../ApiContracts/planApi'
import PlanCard from "./PlanCard";

const { TextArea } = Input;

export class Plan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      picture: '',
      modalVisible: false,
      data: []
    }
    this.addTrip = this.addTrip.bind(this);
    this.removeTrip = this.removeTrip.bind(this);
  }
  componentWillMount(){
    getPlans().then((plansObject) => {
      if(!plansObject) return
      this.setState({data: plansObject.plans});     
    })    
  }  

  handleProp = (prop) => {
    return (e) => {
      this.setState({
        [prop]: e.target.value
      })
    }
  }

  removeTrip = (index) => {
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

  addTrip = (e) => {
    e.preventDefault();

    let tripInfo =
      {
        title: this.state.title,
        description: this.state.description,
        picture: this.state.picture
      }

    addPlan({                
      title: this.state.title,
      description: this.state.description,    
    }).then(response => {
      if (response) {
        message.success("Plan added!");        
        this.setState({
          modalVisible: false,
          data: this.state.data.concat(tripInfo),
          title: '',
          description: '',
          picture: ''
        });
      } else {
        message.error("Plan was not saved!");
      }
    });
  }

  render() {
    return (
      <Row gutter={24}>
        <p> PLANNING PAGE </p>
        <Button onClick={this.showModal}> Create a new plan </Button>
        <Modal
          title="Create a new plan"
          visible={this.state.modalVisible}
          onOk = {this.addTrip}
          onCancel={this.hideModal}>
          <Form>
            <Input
              placeholder="Add a title" value={this.state.title}
              onChange={this.handleProp('title').bind(this)} />
            {/*<Input
              placeholder="Add picture URL" value={this.state.picture}
            onChange={this.handleProp('picture').bind(this)} /> */}
            <TextArea
              placeholder = "Write a brief description about your trip"
              value={this.state.description}
              onChange={this.handleProp('description').bind(this)}
              rows={4} />
          </Form>
        </Modal>
        <div>
          {this.state.data.map((x, i) =>
            <div key={i}>
              <PlanCard
                data = {x}
                number = {i}
                remove = {this.removeTrip.bind(this, i)}
                title = {x.title}
                description = {x.description}
                picture = {x.picture} />
            </div>
          )}
        </div>
      </Row>
    );
  }
}


