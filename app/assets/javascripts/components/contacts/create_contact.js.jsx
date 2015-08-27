var Navigation = ReactRouter.Navigation;

var CreateContact = React.createClass({
  mixins: [Navigation],

  create: function(event) {
    event.preventDefault();
    var z = this;
    axios.post('/contacts', {
      contact: {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        phone: this.state.phone
      }
    }).then(function(){
        z.setState({errors: {}});
        z.transitionTo('list-contacts');
      })
      .catch(function(res){
        z.setState({errors: res.data.errors});
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

  emailChange: function(e){
    this.setState({email: e.target.value})
  },

  phoneChange: function(e){
    this.setState({phone: e.target.value})
  },

  validationState: function(field) {
    if (this.state.errors === undefined || Object.keys(this.state.errors).length === 0) {
      return '';
    }
    return field in this.state.errors ? 'error' : 'success'
  },

  validationMessage: function(field) {
    if (this.state.errors && this.state.errors.hasOwnProperty(field)){
      return this.state.errors[field];
    } else {
      return '';
    }
  },

  render: function () {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h2>Add Contact</h2>
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
            <InputField
              label="Email Address"
              value={this.state.email}
              message={this.validationMessage('email')}
              state={this.validationState('email')}
              onChange={this.emailChange} />
            <InputField
              label="Phone"
              value={this.state.phone}
              message={this.validationMessage('phone')}
              state={this.validationState('phone')}
              onChange={this.phoneChange} />
            <ReactBootstrap.ButtonInput type='submit' value='Add' />
          </form>
        </div>
      </div>
    )
  }
});