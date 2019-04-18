import React, { Component } from 'react';
import '../App.css'
import { Card, Image as SemanticImage , Modal, Header, Icon } from 'semantic-ui-react'

class Product extends Component {
  imageSource = `../products/${this.props.product.pictures}/`

  state = {
    open: false,
    images: [],
    selectedImage: this.imageSource + `1.JPG`,
    fullscreenImage: false
  };

  openModal = () => {
    let images = this.listImages();
    this.setState({
      open: true,
      images: images
    });
  }

  closeModal = () => this.setState({ open: false })

  closeFullscreen = () => this.setState({ fullscreenImage: false})

  listImages = () => {
    let i = 1;
    let images = []
    while ( i < (this.props.product.pictureCount+1) ) {
      images.push(<SemanticImage key={i} src={ this.imageSource + `${i}.JPG`} onClick={ this.selectHandler(i) }/>);
      i++;
    }
    return images
  }

  selectHandler = i => () => this.selectImage(this.imageSource + `${i}.JPG`)

  selectImage = image => this.setState({ selectedImage: image})

  expandImage = () => this.setState({ fullscreenImage: true })

  render(){
    const { open, images, selectedImage, fullscreenImage } = this.state
    // create ProductInfo Component for modals
    return(
        <Card onClick={ this.openModal }>
          <SemanticImage className='card-image' src={ this.imageSource + "1.JPG" } />
          <Card.Content>
              <Card.Header>{ this.props.product.name }</Card.Header>
              <Card.Meta>{ this.props.product.location }</Card.Meta>
          </Card.Content>

        <Modal basic size='fullscreen' open={ fullscreenImage } onClose={ this.closeFullscreen } onClick={ this.closeFullscreen } style={{height: '100vh'}}>
          <Modal.Content image className='fullscreen-container'>
            <SemanticImage className='fullscreen-image' centered src={ selectedImage }/>
          </Modal.Content>
        </Modal>

        <Modal open={ open } onClose={ this.closeModal }>
          <Modal.Header>{ this.props.product.name }</Modal.Header>
          <Modal.Content image>
            <SemanticImage wrapped src={ selectedImage } onClick={ this.expandImage }/>
            <Modal.Description className='modal-description'>
              <Header>{ this.props.product.id }</Header>
              <p>{ this.props.product.location }</p>
              <p>{ this.props.product.description }</p>
              <Icon name='expand arrows alternate' className='expand-icon' onClick={ this.expandImage }/>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <SemanticImage.Group size='tiny' style={{float: 'left'}}>
              { images }
            </SemanticImage.Group>
          </Modal.Actions>
        </Modal>
      </Card>
    )
  }
}

export default Product
