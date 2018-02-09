import React from 'react'
import { Card,Input,Icon } from 'semantic-ui-react'
import { AddStock } from '../AddStock/AddStock'
import './StockItem.css'



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
        }
      );
    })
    this.setState({items : [...chunks]});
  }

  handleIconClick(e){
    e.preventDefault();
    let array = this.state.items;
    let stockCode = e.target.getAttribute('code');
    this.props.onRemoveStock(stockCode);
  }

  render(){
    return (
      <div className="stockItem-root">
        <Card.Group>
          {
           this.state.items.map((v,i) => (
            <Card key={i}>
               <Card.Content>
                 <Icon  code={v["header"]} link name='remove' onClick={this.handleIconClick.bind(this) } />
                 <Card.Header content={v["header"]} />
               </Card.Content>
             </Card>
          ))
        }
        </Card.Group>
      </div>
  )
 }
}
