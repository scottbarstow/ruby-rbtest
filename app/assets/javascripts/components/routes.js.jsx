var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;

this.Router = (
  <Route handler={App}>
    <DefaultRoute name='list-contacts' handler={ListContacts} />
    <Route name='create-contact' handler={CreateContact} path='/contact/new' />
    <Route name='show-contact' handler={ShowContact} path='/contact/:id' />
    <Route name='update-phone' handler={UpdatePhone} path='/contact/:id/phone' />
    <Route name='list-tasks' handler={ListTasks} path='/tasks' />
  </Route>
);