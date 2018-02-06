import React from 'react'
import { Button, Card, Image, Input } from 'semantic-ui-react'

export const AddStock = () => (
  <Card>
    <Card.Content>
      <Card.Header>
        Steve Sanders
      </Card.Header>
      <Card.Meta>
        Friends of Elliot
      </Card.Meta>
      <Card.Description>
        Steve wants to add you to the group <strong>best friends</strong>
      </Card.Description>
      <Input action='Code' placeholder='Code...' />
    </Card.Content>
  </Card>
)
