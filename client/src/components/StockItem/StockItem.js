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
    console.log(nextProps)
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

  handleIconClick(e){
    let array = this.state.items;
    let stockCode = e.target.code;
    // let index = array.indexOf(stockCode);
    // array.splice(index, 1);
    // this.setState({items: array });
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
                 <Icon  code={v} link name='remove' onClick={this.handleIconClick.bind(this) } />
                 <Card.Header content={v["header"]} />
                 <Card.Meta content='Musicians' />
                 <Card.Description content='Jake is a drummer living in New York.' />
               </Card.Content>
             </Card>
          ))
        }
        </Card.Group>
      </div>
  )
 }
}
