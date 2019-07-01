import React, { Component } from 'react';
import '../App.css'
import ProductsData from '../res/products_data'
import Product from './Product.js'
import { Header, Card, Segment, Divider, Grid, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class ProductContainer extends Component {
  state = { activeCategory: 'All Units' }

  handleItemClick = (e, { name }) => this.setState({ activeCategory: name })

  filteredProducts = () => {
    if (this.state.activeCategory === 'All Units') {
      return ProductsData
    } else {
      return ProductsData.filter( product => product.category === this.state.activeCategory )
    }
  }

  render(){
    const { activeCategory } = this.state

    return(
      <div>
        <Header textAlign='center' className='banner-name'>Equipment</Header>
        <Divider></Divider>
        <Segment basic textAlign='center'>
          <b><p className='equipment-extra' >
            Options at Extra Cost: New API Mast Certification, Fully Refurbish to Customer's Specs<br />
            <Link to='/contact-us' onClick={ this.props.handleBrowser }>CONTACT US FOR PRICING</Link>
          </p></b>
        </Segment>
        <Divider></Divider>
        <Header as='h1' textAlign='center'>{activeCategory}</Header><br />
        <Grid>
          <Grid.Column width={3}>
            <Menu fluid vertical tabular>
              <Header as='h2' textAlign='center'>Categories</Header><br />
              <Menu.Item name='All Units' active={activeCategory === 'All Units'} onClick={this.handleItemClick}/>
              <Menu.Item name='Workover Rigs' active={activeCategory === 'Workover Rigs'} onClick={this.handleItemClick}/>
              <Menu.Item name='Coiled Tubing Units' active={activeCategory === 'Coiled Tubing Units'} onClick={this.handleItemClick}/>
            </Menu>
          </Grid.Column>
          <Grid.Column width={12}>
            <Card.Group stackable className='container' itemsPerRow={3}>
              {this.filteredProducts().map( (product, index) => {
                return(
                  <Product key={product.id} product={product}/>
                )
              })}
            </Card.Group>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default ProductContainer
