import React from 'react'
import { Divider,Icon,Input } from 'antd'
import { getInspirations } from '../../../userApi'

const AddBookMarkSearchView = props => (
  <div>
    <div>
      Add BookMark
    </div>
    <Divider/>
    <div>
    <Input
      onChange={props.onChange}
      placeholder="input search text"      
      prefix={<Icon type="search" style={{ color: '#2FB1C0' }} />}
    />
    
    </div>
    <div>
    { props.inspirations.map((inspiration) => {
     return <img style={{width:"45%", margin:"5px"}} key={inspiration.id} src={inspiration.image}/>
    })}
      
    </div>
  </div>
);

export class AddBookMarkSearch extends React.Component {

    constructor(props){
      super(props);
      this.state = {
       inspirations:[]
      };      
    }
    componentWillMount = () =>{
      getInspirations().then((inspirationsObject) => {
        if(!inspirationsObject) return
        this.setState({ inspirations: inspirationsObject.inspirations});    
        
      })    
    }
    onChange = e =>{
      
    }
    filterInspirations = (index) => {
      this.setState({
        data: this.state.data.filter((x,i) => i != index)
      });
    }
  
    render() {
      return (
        <div>          
          {this.props.bookmarkSearchVisible ? <AddBookMarkSearchView 
                                                onChange = {this.onChange}
                                                inspirations = {this.state.inspirations}
                                              /> : null}
        </div>
      );    

    } 
  }    