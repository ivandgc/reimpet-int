import React, { Component } from 'react';
import '../App.css'
import clientsImage from '../res/our-clients.png'
import teamImage from '../res/our-team.png'
import { Segment, Header, Image, Divider } from 'semantic-ui-react'

class About extends Component {

  render(){

    return(
      <div>
        <Header textAlign='center' className='banner-name'>About Us</Header>
        <Divider></Divider>
        <Segment basic className='home-segment'>
          <Header textAlign='center' as='h1'>Our Clients</Header>
          <p className='about-clients'>
            Most of Reimpet International Corporation’s clients are currently
             located on eastern Venezuela on the region near the Orinoco
             Petroleum Belt (Largest Extra Heavy Crude Oil Reserve of the World)
             and also in Colombia. They consist of exploration and drilling
             companies, refineries, petrochemical plants, pipeline projects,
             etc. With complete dedication to the energy industry, RIC will
             provide expertise and any supplies needed for oil and gas projects.
          </p>
          <Image className='about-clients-picture' src={ clientsImage }/>
        </Segment>
        <Divider></Divider>
        <Segment basic textAlign='center' className='home-segment'>
          <Header as='h1'>Our Team</Header>
          <Image className='float-left team-picture' src={ teamImage }/>
          <p className='float-right team-text'>
            Reimpet International Corporation has a team with many years of
            experience in the oil and gas industry. We are located on the largest
            oilfield market of the world (Houston, Texas) and work hard to keep up
            with the supply and demand of new and used equipment. Customer
            satisfaction is our number one priority.
          </p>
        </Segment>
      </div>
    )
  }
}

export default About
