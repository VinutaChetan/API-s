class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :user_id
      t.string :title
      t.boolean :is_completed, default: false

      t.timestamps null: false
    end
  end
end
