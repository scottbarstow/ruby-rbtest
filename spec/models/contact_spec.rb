require 'rails_helper'

RSpec.describe Contact, type: :model do
  it 'should require First Name' do
    contact = FactoryGirl.build(:contacts, first_name: '')
    expect(contact).to_not be_valid
  end

  it 'should require Last Name' do
    contact = FactoryGirl.build(:contacts, last_name: '')
    expect(contact).to_not be_valid
  end

  it 'should require Email' do
    contact = FactoryGirl.build(:contacts, email: '')
    expect(contact).to_not be_valid
  end

  it 'should require Phone' do
    contact = FactoryGirl.build(:contacts, phone: '')
    expect(contact).to_not be_valid
  end
end
