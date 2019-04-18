import React, { Component } from 'react';
import '../App.css'
import { Segment, Header } from 'semantic-ui-react'

class Contact extends Component {

  render(){

    return(
      <Segment basic textAlign='center'>
        <Header textAlign='center' className='banner-name'>Contact Us</Header>
          <p>
            We would be pleased to assist you with any questions about our product
             line or our deliveries. Just email us at <a href="mailto:sales@reimpetintl.com">sales@reimpetintl.com</a> or
             call us at <a href="tel:+1-713-453-6833">713-453-6833</a>
          </p>
        <Segment>
          <Header as='h2'>Houston Office</Header>
          <p>
            Address: 1302 Miles St, Houston, Texas, 77015<br />
            Office Phone Numbers: <a href="tel:+1-713-453-6653">713-453-6653</a>, <a href="tel:+1-713-453-6833">713-453-6833</a><br />
            Colombia Phone Number: <a href="tel:+57-1-589-7647">57-1-589-7647</a><br />
            Fax Number:281-582-6175<br />
          </p>
        </Segment>
        <Segment>
          <Header as='h2'>Colombia Office</Header>
          <p>
            Ing. Liliana Parra<br />
            Colombia Sales Manager<br />
            Cell Phone Number: <a href="tel:+57-316-625-8561">57-316-625-8561</a><br />
            Email: <a href="mailto:lparra@reimpetintl.com">lparra@reimpetintl.com</a><br />
          </p>
        </Segment>
        <Segment>
          <Header as='h2'>Venezuela Office</Header>
          <p>
            Ing. Ruben Lovera<br />
            Venezuela Sales Manager<br />
            Caracas, Venezuela<br />
            Office Phone Number: <a href="tel:+58-212-7517452">0212-7517452</a>, <a href="tel:+58-283-255-7102">0283-255-7102</a><br />
            <a href="mailto:rubenlovera@reimpetintl.com">rubenlovera@reimpetintl.com</a><br />
          </p>
        </Segment>
      </Segment>
    )
  }
}

export default Contact
