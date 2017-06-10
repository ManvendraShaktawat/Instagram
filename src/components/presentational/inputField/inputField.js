import React from "react";

class InputField extends React.Component {
  render() {
	return (
			<div className="form-group">
				<label htmlFor={this.props.name}>{this.props.label}</label>
				<input type={this.props.type} ref={(el)=>{this.props.parentContext[this.props.name] = el;}} className="form-control" id={this.props.name} placeholder={this.props.placeholder} name={this.props.name} />
			</div>
		);
	}
}

export default InputField;