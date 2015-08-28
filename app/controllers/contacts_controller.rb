class ContactsController < ApplicationController
  before_action :authenticate_user!

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
      CheckContactWorker.perform_async 'Enter Phone Number', contact.id, current_user.id
      CheckContactWorker.perform_async 'Enter Email', contact.id, current_user.id
      render :status => :created, json: contact
    else
      render :status => :unprocessable_entity, json: {errors: contact.errors.as_json}
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

  private

  def contact_params
    params.require(:contact).permit(:first_name, :last_name)
  end
end
