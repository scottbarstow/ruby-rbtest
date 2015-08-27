var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;

this.Router = (
  <Route handler={App}>
    <DefaultRoute name='list-contacts' handler={ListContacts} />
    <Route name='create-contact' handler={CreateContact} />
  </Route>
);