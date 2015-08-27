class CheckContactWorker
  include Sidekiq::Worker

  def perform(contact, user)
    puts 'PERFORM'
    if contact.email.nil?
      Task.create(user: user, contact: contact, description: 'Enter Email')
    end
    if contact.phone.nil?
      Task.create(user: user, contact: contact, description: 'Enter Phone Number')
    end
  end
end