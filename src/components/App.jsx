import React from "react";
import styles from './App.scss';
import html5image from './../images/html5.png';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as messageActions from './../actions/messageActions';

class App extends React.Component {

	constructor() {
		super();

		this.state = {
			newMessage: ''
		};

		this.editNewMessage = this.editNewMessage.bind(this);
		this.addNewMessage = this.addNewMessage.bind(this);
	}

	editNewMessage(event) {
		this.setState({
			newMessage: event.target.value
		});
	}

	addNewMessage() {
		if (this.state.newMessage.length > 0) {
			this.props.actions.addMessage(this.state.newMessage);
			this.setState({
				newMessage: ''
			});
		}		
	}

	getMessageBox(message, i){
		return <li key={i}>{message}</li>;
	}

	render() {
		return (
			<div>
				<img className="html-logo" src={html5image} alt=""/>
				
				<input className="new-message" type="text" onChange={this.editNewMessage} value={this.state.newMessage} />
				<input className="submit-message" type="submit" onClick={this.addNewMessage} />

				<ul className="message-box">
					{this.props.messages.map((message, i) => this.getMessageBox(message, i))}
				</ul>
			</div>
		);
	}
}

function mapsStateToProps(state, ownProps) {
	return {
		messages: state.messages
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(messageActions, dispatch)
	}
}

export default connect(mapsStateToProps, mapDispatchToProps)(App);