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
    contact = Contact.new(contact_params)
    if contact.save
      render :status => :created, json: contact
    else
      render :status => :unprocessable_entity, json: {errors: contact.errors.as_json}
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :phone, :email)
  end
end
