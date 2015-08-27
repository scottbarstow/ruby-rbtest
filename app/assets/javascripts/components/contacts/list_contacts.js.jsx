var Link = ReactRouter.Link;

var headers = {
  'Content-type': 'application/json',
  'Accept': 'application/json'
};

var ListContacts = React.createClass({

  getInitialState: function() {
    return {
      contacts: []
    };
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
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.contacts
                .map(function(contact, i){
                  return (
                    <tr key={i}>
                      <td>{contact.first_name}</td>
                      <td>{contact.last_name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.phone}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
          <Link to="create-contact">Add</Link>
        </div>
      </div>
    )
  }
});