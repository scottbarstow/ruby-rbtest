var CreateContact = React.createClass({
  create: function(event) {
    event.preventDefault();
    axios.post('/contacts', {
      contact: {
        first_name: this.state.first_name
      }
    });
  },

  getInitialState: function(){
    return {
      first_name: ''
    }
  },

  render: function () {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <h2>Add Contact</h2>
          <form className="form-horizontal" onSubmit={this.create}>
            <div className="form-group">
              <label for="first_name" className="col-sm-2 control-label">First Name</label>
              <div className="col-sm-10">
                <input type="text"
                  id="first_name"
                  name="first_name"
                  value={ this.props.first_name}
                  className="form-control"
                  placeholder="First Name" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default">Add</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
});