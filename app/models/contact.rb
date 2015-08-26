class Contact < ActiveRecord::Base
  validates_presence_of :first_name, :last_name, :email, :phone

  def full_name
    "#{first_name} #{last_name}"
  end
end
