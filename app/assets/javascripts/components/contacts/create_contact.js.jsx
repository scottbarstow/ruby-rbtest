var Navigation = ReactRouter.Navigation;

var CreateContact = React.createClass({
  mixins: [Navigation, Validation],

  create: function(event) {
    event.preventDefault();
    var z = this;
    $.ajax({
      type: 'POST',
      url: '/contacts',
      data: {
        contact: {
          first_name: this.state.first_name,
          last_name: this.state.last_name
        }
      },
      success: function(){
        z.setState({errors: {}});
        z.transitionTo('list-contacts');
      },
      error: function(xhr){
        z.setState({errors: xhr.responseJSON.errors});
      }
    });
  },

  getInitialState: function(){
    return {}
  },

  firstNameChange: function(e){
    this.setState({first_name: e.target.value})
  },

  lastNameChange: function(e){
    this.setState({last_name: e.target.value})
  },

  render: function () {
    return (
      <div className="row-fluid">
        <div className="col-sm-6 col-sm-offset-3">
          <form className="form-horizontal" onSubmit={this.create}>
            <InputField
              label="First Name"
              value={this.state.first_name}
              message={this.validationMessage('first_name')}
              state={this.validationState('first_name')}
              onChange={this.firstNameChange} />
            <InputField
              label="Last Name"
              value={this.state.last_name}
              message={this.validationMessage('last_name')}
              state={this.validationState('last_name')}
              onChange={this.lastNameChange} />
            <ReactBootstrap.ButtonInput type='submit' value='Create Contact' />
          </form>
        </div>
      </div>
    )
  }
});