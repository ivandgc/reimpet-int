import React, { Component } from 'react';
import { Segment, Header, Image, Grid } from 'semantic-ui-react'
import '../App.css'
import landingImage from '../res/landing.png'

class Home extends Component {

  render(){

    return(
      <div>
        <Header textAlign='center' className='banner-name'>Reimpet International Corporation</Header>
        <Segment inverted color='green'>
          <Grid stackable container verticalAlign='middle' columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Image circular src={ landingImage }/>
              </Grid.Column>
              <Grid.Column>
                <p className='intro-text'>
                  Reimpet International Corporation (RIC) is a diversified oilfield
                  supply company providing a complete range of equipment, parts, and
                  accessories for oil and gas related projects. In addition, RIC is
                  a well-resourced company, striving for excellence and total customer
                  satisfaction. We directly serve the end-users by offering our
                  exceptional supply and service.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  }
}

export default Home
