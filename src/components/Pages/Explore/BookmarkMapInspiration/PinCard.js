/******************* PinCard Component of Explore page *******************/
import React,{Component} from 'react';
import {getPictures} from '../../../../userApi';
import {Card,Form,Input,Spin} from 'antd';

export class PinInput extends Component {
    constructor(props) {
      super(props);
  
      this.state = {         
        loading: false
      };  
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }     
  
    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      return (
        <Form className="bookmark-inspiration" onSubmit={this.handleSubmit}>         
          <Spin spinning={this.state.loading} />
        </Form>
      );
    }
  }

  export const PinCard = (props) => (    
    <div className="pin-preview">    
      <Card
        style={{ maxWidth: "80%" }}       
       cover={<img src={props.imageSrc} alt="" />}
      >
        <Input
          placeholder="Add title..."
          style={{marginBottom:"20px"}}        
          type="text"
          value={props.title}
          onChange={props.handleTitleChange}          
        />

        <Input
          placeholder="Add description..."
          type="text"
          value={props.description}
          onChange={props.handleDescriptionChange}
        />
      </Card>
    </div>
  );