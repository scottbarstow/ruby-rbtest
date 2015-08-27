var InputField = React.createClass({
  render: function () {
    return (
      <ReactBootstrap.Input
        type="text"
        label={this.props.label}
        value={this.props.value}
        help={this.props.message}
        hasFeedback
        bsStyle={this.props.state}
        ref="input"
        onChange={this.props.onChange} />
    )
  }
});