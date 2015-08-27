class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.references :user, index: true, foreign_key: true
      t.references :contact, index: true, foreign_key: true
      t.string :description

      t.timestamps null: false
    end
  end
end
