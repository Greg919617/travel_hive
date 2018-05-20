import React from 'react';

import Itinerary from "./Itinerary"
import Plan from "./index"

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Card, Col, Button, message } from 'antd';
import { updatePlanInspirationImage } from '../../../ApiContracts/planApi'
import { getInspirations } from '../../../userApi'

const { Meta } = Card;

class PlanCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
      picture: ""
    };
    this.delete = this.delete.bind(this);
  }
  componentWillMount = () =>{   
    const inspirationId = this.props.data.inspirationId;
    if(inspirationId){
      getInspirations(inspirationId).then((inspirationsObject) => {       
        if(!inspirationsObject) return
        this.onPictureUpdate(inspirationsObject.inspiration.image);     
        
      })    
    }
  }

  delete = () => {
    this.setState({
      visible: false
    });
    this.props.remove(this.props.data);
  }
  onPictureUpdate = (imageSrc) =>{
    this.setState({picture: imageSrc});
  }  

  onItineraryAdded = (inspirationId) =>{    
    updatePlanInspirationImage(this.props.data.id,inspirationId)
    .then(response => {
      console.log("Plan inspiration image update",response);
      if (response) {
        message.success("Plan updated!");      
      } else {
        message.error("Plan was not updated!");
      }
    });
  }

  render() {
    return (
      <div>
        <Col span={8}>
          <Card
            hoverable
            style = {{ margin: '5px' }}
            title = {this.props.title}
            //visible = {this.state.visible}
            cover = {<img src= {this.state.picture} height = '200px' />} >
          <Meta
            description = {this.props.description} />
            <Button>
              <Link to = {{pathname: `/plan/${this.props.number}`, onItineraryAdded: this.onItineraryAdded}}> Edit Trip </Link>
            </Button>
            <br/>
            <Button
              onClick = {this.delete}
              type="danger"> Delete Trip
            </Button>
          </Card>
        </Col>
      </div>
    )
  }
}

export default PlanCard;
