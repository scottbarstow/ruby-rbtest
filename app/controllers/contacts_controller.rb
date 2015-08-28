class ContactsController < ApplicationController
  before_action :authenticate_user!

  def index
    render :status => :ok, json: Contact.all
  end

  def create
    contact_params = params.require(:contact).permit(:first_name, :last_name)
    contact = Contact.new(contact_params)
    if contact.save
      NewContactWorker.perform_async 'Enter Phone Number', contact.id, current_user.id
      NewContactWorker.perform_async 'Enter Email', contact.id, current_user.id
      render :status => :created, json: contact
    else
      render :status => :unprocessable_entity, json: {errors: contact.errors.as_json}
    end
  end


  def update
    contact_params = params.require(:contact).permit(:phone, :email)
    if contact_params[:phone].present?
      UpdatedPhoneWorker.perform_async(params[:id], contact_params[:phone]);
      render :status => :ok, json: {}
    else
      render :status => :unprocessable_entity, json: {}
    end
  end


  def show
    contact = Contact.find(params[:id])
    if contact
      render :status => :ok, json: contact
    else
      render :status => :not_found
    end
  end
end
