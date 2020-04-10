import React, { Component } from 'react';
import Edit from './Edit/Edit';
import { MdMessage, MdFavorite } from 'react-icons/md';
import { FaReply } from 'react-icons/fa';
import { IoIosContacts, IoIosMenu } from 'react-icons/io';
import './Post.css';

class Post extends Component {

constructor (props) {
  super(props)
  this.state = {
    editing: false,
    showMasterMenu: false
  }
  this.toggleMasterMenu = this.toggleMasterMenu.bind( this );
  this.showEdit = this.showEdit.bind( this );
  this.delete = this.delete.bind( this );
  this.update = this.update.bind( this );
  this.hideEdit = this.hideEdit.bind( this );
}
toggleMasterMenu() {
  this.setState({ showMasterMenu: !this.state.showMasterMenu });
}

showEdit() {
  this.setState({editing: !this.state.editing})
}

delete() {
  this.props.deletePostFn(this.props.id)
}

update(text) {
  this.props.updatePostFn(this.props.id, text )
}

hideEdit() {
  this.setState({editing: false})
}

render() {
  const { editing, showMasterMenu } = this.state;
  const { text, date } = this.props;

  return (
    <section className="Post__parent" onClick={ this.hideMasterMenu }>

      <div className="Post__master-controls">
        <IoIosMenu onClick={ this.toggleMasterMenu } />

        <div className="Post__master-menu" style={ { display: showMasterMenu ? 'flex' : 'none' } }>
          <span onClick={ this.showEdit }>Edit</span>
          <span onClick={ this.delete } >Delete</span>
        </div>
      </div>

      <div className="Post__meta-data">
        <div className="Post__profile-picture">
          <IoIosContacts />
        </div>

        <span className="Post__name">DevMountain</span>
        <span className="Post__handle">@DevMountain</span>

        <span className="Post__date">- { date }</span>
        <span className="Post__text">{ text }</span>
      </div>

      <div className="Post__content">
        {
          editing
          ?
            <Edit text={text}
                  hideEdit={ this.hideEdit }
                  update={this.update} />
          :
            <span className="Post__text">{ text }</span>
        }
      </div>

      <div className="Post__user-controls">
        <FaReply className="Post__control-icon" />
        <MdFavorite className="Post__control-icon" />
        <MdMessage className="Post__control-icon" />
      </div>

    </section>
  )
}
}

export default Post;
