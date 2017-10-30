class CreateRtos < ActiveRecord::Migration
  def change
    create_table :rtos do |t|
    	t.string :code
    	t.integer :vehicle_number
    	t.text :registration_office
    	 t.text :address
    	 t.integer :phone_number
    	 t.integer :state_id
    	 t.integer :district_id 

      t.timestamps null: false
    end
  end
end
