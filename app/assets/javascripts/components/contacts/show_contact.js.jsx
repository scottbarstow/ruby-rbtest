var State = ReactRouter.State;

var ShowContact = React.createClass({
  mixins: [State],

  getInitialState: function() {
    return {
      contact: {}
    };
  },

  componentDidMount: function() {
    var z = this;
    var id = this.props.params.id;
    axios.get('/contacts/' + id, {headers: headers})
      .then(function(res){
        z.setState({contact: res.data});
      });
  },

  render: function () {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h2>{this.state.contact.first_name + ' ' + this.state.contact.last_name}</h2>
          <div className="row">
            <div className="col-sm-2">
              <label className="pull-right">Email</label>
            </div>
            <div className="col-sm-10">
              <p>{this.state.contact.email}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <label className="pull-right">Phone</label>
            </div>
            <div className="col-sm-10">
              <p>{this.state.contact.phone}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
});