class ContactsController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json do
        render json: Contact.all
      end
    end
  end

  def create
    contact = Contact.create(params[:contact])
    render status: 201, json: contact
  end
end
