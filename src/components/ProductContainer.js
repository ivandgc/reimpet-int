import React, { Component } from 'react';
import '../App.css'
import ProductsData from '../res/products_data'
import Product from './Product.js'
import { Header, Card, Segment, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class ProductContainer extends Component {

  render(){
    return(
      <div>
        <Segment basic textAlign='center'>
          <Header textAlign='center' className='banner-name'>Products</Header>
          <p>
            Options at Extra Cost: New API Mast Certification, Fully Refurbish to Customer's Specs<br />
            <Link to='/contact-us' onClick={ this.props.handleBrowser }>CONTACT US FOR PRICING</Link>
          </p>
        </Segment>
        <Divider></Divider>
        <Header as='h1' textAlign='center'>Workover and Pulling Units</Header><br />
        <Card.Group stackable className='container' itemsPerRow={3}>
          {ProductsData.map( (product, index) => {
            return(
              <Product key={index} product={product}/>
            )
          })}
        </Card.Group>
      </div>
    )
  }
}

export default ProductContainer
