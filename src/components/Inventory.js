import React, { Component } from 'react';
import '../App.css'
import { Header, Divider, Table, Button, Icon } from 'semantic-ui-react'

class Inventory extends Component {

  render(){
    return(
      <div>
        <Header textAlign='center' className='banner-name'>Inventory</Header>

        <Divider></Divider>

        <Table celled compact definition>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell>Displayed</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Vendor</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row></Table.Row>
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan='7'>
                <Button floated='right' icon labelPosition='left' primary size='small'>
                  <Icon name='upload' /> Add Unit
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    )
  }
}

export default Inventory
