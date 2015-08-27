var Link = ReactRouter.Link;

var ListContacts = React.createClass({

  getInitialState: function() {
    return {
      contacts: []
    };
  },

  componentDidMount: function() {
    var z = this;
    $.ajax({
      type: 'GET',
      dataType: "json",
      url: '/contacts',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
      },
      success: function(data){
        z.setState({contacts: data});
      }
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
                      <td>
                        <Link to="show-contact" params={{id: contact.id}}>View</Link>
                      </td>
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