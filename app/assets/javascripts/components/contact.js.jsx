var Contact = React.createClass({
  render: function () {
    return (
      <div>
        <h4>{ this.props.full_name }</h4>
        <p>{ this.props.email }</p>
        <p>{ this.props.phone }</p>
      </div>
    )
  }
});