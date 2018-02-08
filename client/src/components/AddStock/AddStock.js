import React from 'react'
import { Button, Card, Image, Input } from 'semantic-ui-react'

export const AddStock = () => (
  <Card>
    <Card.Content>
      <Card.Header>
        Enter the Stock Code
      </Card.Header>
      <Card.Description>
        Add any number of stocks for comparison between them.
      </Card.Description>
      <Input action='Code' placeholder='Code...' />
    </Card.Content>
  </Card>
)
