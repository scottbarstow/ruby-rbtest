var Navigation = ReactRouter.Navigation;

var UpdatePhone = React.createClass({
  mixins: [Navigation, State, Validation],

  update: function(event) {
    event.preventDefault();
    var z = this;
    var id = this.props.params.id;

    $.ajax({
      type: 'PATCH',
      url: '/contacts/' + id,
      data: {
        contact: {
          phone: this.state.phone
        }
      },
      success: function(){
        z.setState({errors: {}});
        z.transitionTo('list-tasks');
      },
      error: function(xhr){
        z.setState({errors: xhr.responseJSON.errors});
      }
    });
  },

  phoneChange: function(e){
    this.setState({phone: e.target.value})
  },

  render: function () {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h2>Add Contact</h2>
          <form className="form-horizontal" onSubmit={this.update}>
            <InputField
              label="Phone"
              value={this.state.phone}
              message={this.validationMessage('phone')}
              state={this.validationState('phone')}
              onChange={this.phoneChange} />
            <ReactBootstrap.ButtonInput type='submit' />
          </form>
        </div>
      </div>
    )
  }
});