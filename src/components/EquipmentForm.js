import React, { Component } from 'react';
import '../App.css'
import { Header, Form } from 'semantic-ui-react'
import ImageUploader from 'react-images-upload';
import EquipmentAdapter from '../adapters/equipmentAdapter'

class EquipmentForm extends Component {
  state = {
    name: '',
    category: '',
    location: '',
    description: '',
    images: [],
    vendorName: '',
    vendorPhone: '',
    vendorEmail: '',
    price: '',
    visible: false
  }

  handleChange = (e) => {
    const target = e.target;
    const value = this.setTargetValue(target);
    const name = target.name;

    this.setState({ [name]: value });
  }

  setTargetValue = (target) => {
    return target.type === 'checkbox' ? target.checked : target.value;
  }

  onDrop = (images) => this.setState({ images: images });

  handleSubmit = (event) => {
    event.preventDefault();
    return EquipmentAdapter.addEquipment(this.state)
  }

  render(){
    return(
      <div>
        <Header className='banner-name' textAlign='center'>Add Unit</Header><br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input onChange={this.handleChange} value={this.state.name} name='name' label='Name' placeholder='Name' />
            <Form.Input onChange={this.handleChange} value={this.state.category} name='category' label='Category' placeholder='Category' />
            <Form.Input onChange={this.handleChange} value={this.state.location} name='location' label='Location' placeholder='Location' />
          </Form.Group>
          <Form.TextArea onChange={this.handleChange} value={this.state.description} name='description' label='Description' placeholder='Description' />
          <Form.Group>
            <ImageUploader
              withPreview
              withLabel={false}
              withIcon={false}
              buttonText='Upload Images'
              onChange={this.onDrop}
              imgExtension={['.jpg', '.gif', '.png']}
            />
          </Form.Group>
          <label>Vendor information and Price will never be public</label>
          <Form.Group widths='equal'>
            <Form.Input onChange={this.handleChange}  value={this.state.vendorName} name='vendorName' label='Vendor Name' placeholder='Vendor Name' />
            <Form.Input onChange={this.handleChange} value={this.state.vendorPhone} name='vendorPhone' label='Vendor Phone' placeholder='Vendor Phone' />
            <Form.Input onChange={this.handleChange} value={this.state.vendorEmail} name='vendorEmail' label='Vendor Email' placeholder='Vendor Email' />
            <Form.Input onChange={this.handleChange} value={this.state.price} name='price' label='Price' placeholder='Price' />
          </Form.Group>
          <Form.Group>
            <Form.Input inline type='checkbox' onChange={this.handleChange} checked={this.state.visible} name='visible' label='Publish on Website'/>
            <Form.Button>Submit</Form.Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default EquipmentForm
