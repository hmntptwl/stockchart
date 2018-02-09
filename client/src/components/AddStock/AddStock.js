import React from 'react'
import { Button, Card, Image, Input } from 'semantic-ui-react'
import { getItemFromLocalStorage,validateStock } from '../../assets/helper'
import './AddStock.css'


export class AddStock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isValidStock : false,
      stockCodeToCheck : '',
      loading : false,
    }
  }

  handleInputChange = (e) => {
   let upperCaseValue = e.target.value.toUpperCase();
   e.target.value = upperCaseValue;
   this.setState({
     stockCodeToCheck : upperCaseValue
   })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading : false
    })
  }

  handleClick = () => {
    this.setState({stockCodeToCheck : '', loading : true});
    let { stockCodeToCheck } = this.state;
    validateStock(stockCodeToCheck).then(res => {
     if(res === 'success') {
       //so that stockcache can be assigned new value;
       this.props.onAddStock(stockCodeToCheck);
     }
     this.setState({ loading : false })
   })
  }

  render(){
    return (
      <div className="addcard-root">
        <Card>
          <Card.Content>
            <Card.Header>
              Enter the Stock Code
            </Card.Header>
            <Card.Description>
              Note: stockcode should be valid.
            </Card.Description>
            <div>
              <Input onChange={this.handleInputChange.bind(this)} placeholder='Code' value={this.state.stockCodeToCheck}
              />
              <Button content='Add' onClick={this.handleClick.bind(this)} loading={this.state.loading}/>
            </div>
          </Card.Content>
        </Card>
    </div>
    )
  }
}
