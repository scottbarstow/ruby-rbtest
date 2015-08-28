var Validation = {
  validationState: function(field) {
    if (this.state.errors === undefined || Object.keys(this.state.errors).length === 0) {
      return '';
    }
    return field in this.state.errors ? 'error' : 'success'
  },

  validationMessage: function(field) {
    if (this.state.errors && this.state.errors.hasOwnProperty(field)){
      return this.state.errors[field];
    } else {
      return '';
    }
  }
};
