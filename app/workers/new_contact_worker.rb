class NewContactWorker
  include Sidekiq::Worker

  def perform(description, contact_id, user_id)
    Task.create(user_id: user_id, contact_id: contact_id, description: description)
  end
end