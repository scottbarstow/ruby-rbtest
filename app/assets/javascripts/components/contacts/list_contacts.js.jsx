var headers = {
  'Content-type': 'application/json',
  'Accept': 'application/json'
};

var ListContacts = React.createClass({

  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {
    var z = this;
    axios.get('/contacts', {headers: headers})
      .then(function(res){
        z.setState({contacts: res.data})
      });
  },

  render: function () {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <h2>Contacts</h2>
          <Reactable.Table
            className="table table-hover table-striped"
            columns={[
              {key: 'first_name', label: 'First Name'},
              {key: 'last_name', label: 'Last Name'},
              {key: 'email', label: 'Email'},
              {key: 'phone', label: 'Phone'}
            ]}
            data={this.state.contacts}
          />
        </div>
      </div>
    )
  }
});