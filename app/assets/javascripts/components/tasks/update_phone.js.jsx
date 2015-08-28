var Navigation = ReactRouter.Navigation;

var UpdatePhone = React.createClass({
  mixins: [Navigation, State],

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
        z.transitionTo('list-tasks');
      }
    });
  },

  phoneChange: function(e){
    this.setState({phone: e.target.value})
  },

  componentDidMount: function() {
    var z = this;
    var id = this.props.params.id;
    $.ajax({
      type: 'GET',
      dataType: "json",
      url: '/contacts/' + id,
      success: function(data){
        z.setState({contact: data});
      }
    });
  },

  getInitialState: function(){
    return {
      contact: {}
    }
  },

  render: function () {
    return (
      <div className="row-fluid">
        <div className="col-sm-6 col-sm-offset-3">
          <h2>{this.state.contact.first_name + ' ' + this.state.contact.last_name}</h2>
          <form className="form-horizontal" onSubmit={this.update}>
            <InputField
              label="Phone"
              value={this.state.phone}
              onChange={this.phoneChange} />
            <ReactBootstrap.ButtonInput type='submit' />
          </form>
        </div>
      </div>
    )
  }
});