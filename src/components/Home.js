import React, { Component } from 'react';
import { Segment, Header, Image } from 'semantic-ui-react'
import '../App.css'
import landingImage from '../res/landing.png'

class Home extends Component {

  render(){

    return(
      <div>
        <Header textAlign='center' className='banner-name'>Reimpet International Corporation</Header>
        <Segment inverted color='green' className='home-segment'>
          <Image circular className='float-left' src={ landingImage }/>
          <p className='float-right'>
            Reimpet International Corporation (RIC) is a diversified oilfield
            supply company providing a complete range of equipment, parts, and
            accessories for oil and gas related projects. In addition, RIC is
            a well-resourced company, striving for excellence and total customer
            satisfaction. We directly serve the end-users by offering our
            exceptional supply and service.
          </p>
        </Segment>
      </div>
    )
  }
}

export default Home
