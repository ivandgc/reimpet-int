import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Link } from 'react-router-dom'
import { Image, Menu, Segment } from 'semantic-ui-react'
import logo from './res/reimpet-logo.jpg'
import Home from './components/Home'
import About from './components/About'
import ProductContainer from './components/ProductContainer'
import Contact from './components/Contact'
import EquipmentForm from './components/EquipmentForm'
import Inventory from './components/Inventory'

class App extends Component {

  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Segment basic padded className='banner' onClick={() => this.handleItemClick({}, { name: '' })} >
          <Link to='/'>
            <Image className='logo' src={ logo } size='medium' centered/>
          </Link>
        </Segment>
        <Menu inverted color='green' size='large' widths={3}>
          <Menu.Item
            as={NavLink}
            exact to='/about-us'
            name='aboutUs'
            active={activeItem === 'aboutUs'}
            onClick={this.handleItemClick}/>
          <Menu.Item
            as={NavLink}
            exact to='/products'
            name='equipment'
            active={activeItem === 'products'}
            onClick={this.handleItemClick}/>
          <Menu.Item
            as={NavLink}
            exact to='/contact-us'
            name='contactUs'
            active={activeItem === 'contactUs'}
            onClick={this.handleItemClick}/>
        </Menu>
        <Route exact path='/' render={() => <Home />}/>
        <Route path='/about-us' render={() => <About />}/>
        <Route path='/products' render={() => <ProductContainer handleBrowser={ () => this.handleItemClick({}, { name: 'contact-us' }) }/>}/>
        <Route path='/contact-us' render={() => <Contact />}/>
        <Route exact path='/inventory' render={() => <Inventory /> } />
        <Route exact path='/inventory/new' render={() => <EquipmentForm /> } />
      </div>
    );
  }
}

export default App;
