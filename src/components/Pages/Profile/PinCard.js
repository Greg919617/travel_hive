/******************* PinCard Component of Profile Page *******************/
import React,{Component} from 'react';
import {getPictures} from '../../../userApi';
import {Card,Form,Input,Spin} from 'antd';

export class PinInput extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        url: "",
        // title: '',
        loading: false
      };
      this.handleOnEnter = this.handleOnEnter.bind(this);
      this.handleUrlChange = this.handleUrlChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }   
    handleOnEnter(event){
      this.setState({loading: true});
      getPictures(event.target.value).then(imageAttrs => {
        this.props.updateImages(imageAttrs);
        this.setState({ loading: false });
      });
    }  
    handleUrlChange(event) {   
       /* Pass url up to BookmarkInspiration component to use as attribution*/ 
      this.props.handleUrlAttribution(event.target.value);  
      /* Set the url so we can retrieve the images */
      this.setState({
        url: event.target.value,       
      });     
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      return (
        <Form className="bookmark-inspiration" onSubmit={this.handleSubmit}>
          <Input
            placeholder="Paste URL"
            value={this.state.url}
            onPressEnter={this.handleOnEnter}
            onChange={this.handleUrlChange}
            style={{ maxWidth: "80%" }}
          />
          <Spin spinning={this.state.loading} />
        </Form>
      );
    }
  }

  export const PinCard = ({ selectedImageAttrs, handleTitleChange,handleDescriptionChange, title, description }) => (
    <div className="pin-preview">
      <Card
        style={{ maxWidth: "60%" }}
        cover={<img src={selectedImageAttrs.src} alt="" />}
      >
        <Input
          type="text"
          value={title}         
          onChange={handleTitleChange}
          placeholder="Add Title..."
        />

        <Input
          type="text"
          value={description}         
          onChange={handleDescriptionChange}
          placeholder="Add Description..."
        />
      </Card>
    </div>
  );