import React from "react";

import { Checkbox, Col, Row, message, Icon } from 'antd';

export class Checklist extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      passport: false,
      vaccine: false,
      insurance: false,
      currency: false,
      adapter: false,
      mail: false,
      email: false
    }
    this.onPassPort = this.onPassPort.bind(this);
    this.onVaccine = this.onVaccine.bind(this);
    this.onInsurance = this.onInsurance.bind(this);
    this.onCurrency = this.onCurrency.bind(this);
    this.onAdapter = this.onAdapter.bind(this);
    this.onMail = this.onMail.bind(this);
    this.onEmail = this.onEmail.bind(this);
  }

  onPassPort = () => {
    this.setState({ passport: !this.state.passport })
    !this.state.passport ? message.success('Passport is good to go!') : message.error(<Icon type="frown-o" />)
  }

  onVaccine = () => {
    this.setState({ vaccine: !this.state.vaccine })
    !this.state.vaccine ? message.success('Vaccines are done!') : message.error(<Icon type="frown-o" />)
  }

  onInsurance = () => {
    this.setState({ insurance: !this.state.insurance })
    !this.state.insurance ? message.success('Your travel is now insured!') : message.error(<Icon type="frown-o" />)
  }

  onCurrency = () => {
    this.setState({ currency: !this.state.currency})
    !this.state.currency ? message.success('Get Dat Money!') : message.error(<Icon type="frown-o" />)
  }

  onAdapter = () => {
    this.setState({ adapter: !this.state.adapter })
    !this.state.adapter ? message.success('Make sure your phone is charged and post pictures to this site!') : message.error(<Icon type="frown-o" />)
  }

  onMail = () => {
    this.setState({ mail: !this.state.mail })
    !this.state.mail ? message.success('Your mail is now being held!') : message.error(<Icon type="frown-o" />)
  }

  onEmail = () => {
    this.setState({ email: !this.state.email })
    !this.state.email ? message.success('I am out of the office for the foreseeable future. Email someone else if you have problems!') : message.error(<Icon type="frown-o" />)
  }

  render() {

    const listStyle = {
      textAlign: 'left',
      margin: '20px'
    }

    return (
      <div style = {listStyle}>
        <h1> Checklist </h1>
        <p> ( ) Days to Go </p>
        <p> 3 Month(s) to Go </p>
        <Row gutter={8}>
          <Col span={24}> <Checkbox onChange={this.onPassPort}> Passport </Checkbox> </Col>
          <Col span={24}> <Checkbox onChange={this.onVaccine}> No Vaccines Needed </Checkbox> </Col>
          <Col span={24}> <Checkbox onChange={this.onInsurance}> Travel Insurance </Checkbox> </Col>
        </Row>
        <br />
        <p> 1 Month(s) to Go </p>
        <Row gutter={8}>
          <Col span={24}> <Checkbox onChange={this.onCurrency}> Foreign Currency </Checkbox> </Col>
          <Col span={24}> <Checkbox onChange={this.onAdapter}> Adapter </Checkbox> </Col>
        </Row>
        <br />
        <p> 1 Week(s) To Go </p>
        <Row gutter={8}>
          <Col span={24}> <Checkbox onChange={this.onMail}> Hold Mail </Checkbox> </Col>
          <Col span={24}> <Checkbox onChange={this.onEmail}> OOO E-mail </Checkbox> </Col>
        </Row>
      </div>
    );
  }
}
