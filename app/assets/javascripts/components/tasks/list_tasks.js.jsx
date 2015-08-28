var Link = ReactRouter.Link;

var ListTasks = React.createClass({
  getInitialState: function() {
    return {
      tasks: []
    };
  },

  componentDidMount: function() {
    var z = this;
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: '/tasks',
      success: function(data){
        z.setState({tasks: data});
      }
    });
  },

  render: function () {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <h2>Tasks</h2>
          <table className="table table-hover table-striped">
            <thead>
            <tr>
              <th>Description</th>
              <th />
            </tr>
            </thead>
            <tbody>
            {this.state.tasks
              .map(function(task, i){
                return (
                  <tr key={i}>
                    <td>{task.description}</td>
                    <td>
                      <Link to="update-phone" params={{id: task.contact_id}}>View</Link>
                    </td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
});