import React from 'react'
import { Card,Input } from 'semantic-ui-react'
import { AddStock } from '../AddStock/AddStock'
import './StockItem.css'

const items = [];

export class StockItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stocks : props.stocks,
      items : []
    }
  }

  componentWillReceiveProps(nextProps) {
    let chunks = [];
    nextProps["stocks"].forEach((v) => {
      chunks.push (
        {
          header : v,
          description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
          meta: 'ROI: 34%',
        }
      );
    })
    this.setState({items : [...chunks]});
  }

  render(){
    return(
      <div className="stockItem-root">
        <Card.Group items={this.state.items} />
      </div>
  )
 }
}
