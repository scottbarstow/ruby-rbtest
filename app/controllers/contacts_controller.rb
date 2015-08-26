class ContactsController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json do
        render json: Contact.all
      end
    end
  end
end
