import React from 'react';

import Itinerary from "./Itinerary"
import Plan from "./index"

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Card, Col, Button, Icon, Input } from 'antd';
import { AddBookMarkSearch } from './AddBookMarkSearch';

const { Meta } = Card;

class ItineraryCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      bookmarkSearchVisible: false
    };
    this.delete = this.delete.bind(this);
    
  }

  delete = () => {
    this.setState({
      visible: false
    });
    this.props.remove(this.props.data);
  }
  handleBookmarkClick = () => {   
    this.setState({bookmarkSearchVisible: !this.state.bookmarkSearchVisible});
  }
  handleOnDrop = e =>{
    e.preventDefault();    
    
    let data;

    try {
      data = JSON.parse(e.dataTransfer.getData('text'));
    } catch (e) {      
      return;
    }
    
    this.props.onItineraryAdded(data);

  }

  render() {
    return (
      <div>
        <Col span={8}>
          <Card
            hoverable
            style = {{ margin: '5px' }}
            title = {this.props.title}            
            cover = {<img src= {this.props.picture}  />} >
          <Input
            onDrop = {this.handleOnDrop}
            addonAfter={<Icon  type="book" onClick={this.handleBookmarkClick}/>} 
            defaultValue="Drag a bookmark here!"             
          />  
          <Meta
            description = {this.props.description} 
          />          
          <Button>
              <Link to = {`/plan/${this.props.number}`}> Edit Itinerary </Link>
          </Button>
          <br/>
          <Button
              onClick = {this.delete}
              type="danger"> Delete Itinerary
          </Button>
          </Card>
          
        </Col>
        <Col span={8}>
         <AddBookMarkSearch bookmarkSearchVisible = {this.state.bookmarkSearchVisible}/>
        </Col> 
      </div>
    )
  }
}

export default ItineraryCard;