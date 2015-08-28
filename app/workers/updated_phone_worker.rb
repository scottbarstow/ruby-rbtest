class UpdatedPhoneWorker
  include Sidekiq::Worker

  def perform(contact_id, phone)
    Contact.update(contact_id, phone: phone)
  end
end