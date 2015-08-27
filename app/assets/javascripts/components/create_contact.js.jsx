var CreateContact = React.createClass({
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
      })
      .catch(function(res){
        z.setState({errors: res.data.errors});
      });
  },

  getInitialState: function(){
    return {
      first_name: '',
      errors: {}
    }
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
    if (Object.keys(this.state.errors).length === 0) {
      return '';
    }
    return field in this.state.errors ? 'error' : 'success'
  },

  validationMessage: function(field) {
    if (this.state.errors.hasOwnProperty(field)){
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
            <ReactBootstrap.Input
              type="text"
              label="First Name"
              name="first_name"
              value={this.state.first_name}
              help={this.validationMessage('first_name')}
              hasFeedback
              bsStyle={this.validationState('first_name')}
              ref="input"
              onChange={this.firstNameChange} />
            <ReactBootstrap.Input
              type="text"
              label="Last Name"
              value={this.state.last_name}
              help={this.validationMessage('last_name')}
              hasFeedback
              bsStyle={this.validationState('last_name')}
              ref="input"
              onChange={this.lastNameChange} />
            <ReactBootstrap.Input
              type="text"
              label="Email Address"
              value={this.state.email}
              help={this.validationMessage('email')}
              hasFeedback
              bsStyle={this.validationState('email')}
              ref="input"
              onChange={this.emailChange} />
            <ReactBootstrap.Input
              type="text"
              label="Phone"
              value={this.state.phone}
              help={this.validationMessage('phone')}
              hasFeedback
              bsStyle={this.validationState('phone')}
              ref="input"
              onChange={this.phoneChange} />
            <ReactBootstrap.ButtonInput type='submit' value='Add' />
          </form>
        </div>
      </div>
    )
  }
});