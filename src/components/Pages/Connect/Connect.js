import React from 'react';

import { Button, Radio, Icon, Row, Col, Card } from 'antd';

class Connect extends React.Component {

  render() {

    const buttonStyle = {
      width: '95%',
      height: '100px',
      marginBottom: '10px',
      fontSize: '30px'
    }

    const iconStyle = {
      fontSize: '30px'
    }

    return (
      <div>
        <Row>
          <Col span={16} push={8}>
            <Card>
              <Col span={14} push={10}>
                <img
                  style = {{width: '90%'}}
                  src = 'https://d1oh9y2nmj4y5b.cloudfront.net/uploads/photo/filename/6144/PatriziaEdited-0227.jpg' />
              </Col>
              <Col span={10} pull={14} style = {{textAlign: 'left'}}>
                <h1> Featured Local </h1>
                <h2> Florentine Chef Patrizia </h2>
                <p> Private cooking class in a home of a chef who is also a fascinating, worldly wine journalist. Your instructor Patrizia is Florentine but is well-versed in the cuisine of the​ Emilia-Romagna- home of egg-based pastas like tagliatelle and ravioli. This experience is​ a hands-on culinary adventure with one of the citys most genuine gastronomic experts.​ Which begins with a stroll around a local market for all fresh seasonal ingredients! </p>
              </Col>
            </Card>
          </Col>
          <Col span={8} pull={16}>
            <Button style={buttonStyle}> <Icon type = "notification" style = {{ iconStyle }} /> HiveBuzz </Button>
            <Button style={buttonStyle}> <Icon type = "smile-o" style = {{ iconStyle }} /> Rent-A-Local </Button>
            <Button style={buttonStyle}> <Icon type = "shopping-cart" style = {{ iconStyle }} /> Marketplace </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Connect;
