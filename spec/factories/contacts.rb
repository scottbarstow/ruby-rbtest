FactoryGirl.define do
  factory :contacts do
    first_name Faker::Name.first_name
    last_name Faker::Name.last_name
    email Faker::Internet.email
    phone Faker::PhoneNumber.cell_phone
  end
end
