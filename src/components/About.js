import React, { Component } from 'react';
import '../App.css'
import clientsImage from '../res/our-clients.png'
import teamImage from '../res/our-team.png'
import { Header, Image, Divider, Grid } from 'semantic-ui-react'

class About extends Component {

  render(){

    return(
      <div>
        <Header textAlign='center' className='banner-name'>About Us</Header>
        <Divider></Divider>
        <Header textAlign='center' as='h1'>Our Clients</Header>
        <Grid stackable container centered verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={9}>
              <p className='about-text'>
                Most of Reimpet International Corporation’s clients are currently
                located on eastern Venezuela on the region near the Orinoco
                Petroleum Belt (Largest Extra Heavy Crude Oil Reserve of the World)
                and also in Colombia. They consist of exploration and drilling
                companies, refineries, petrochemical plants, pipeline projects,
                etc. With complete dedication to the energy industry, RIC will
                provide expertise and any supplies needed for oil and gas projects.
              </p>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image centered src={ clientsImage }/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider></Divider>
        <Header textAlign='center' as='h1'>Our Team</Header>
        <Grid stackable container centered verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image centered src={ teamImage }/>
            </Grid.Column>
            <Grid.Column width={9}>
              <p className='about-text'>
                Reimpet International Corporation has a team with many years of
                experience in the oil and gas industry. We are located on the largest
                oilfield market of the world (Houston, Texas) and work hard to keep up
                with the supply and demand of new and used equipment. Customer
                satisfaction is our number one priority.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default About
