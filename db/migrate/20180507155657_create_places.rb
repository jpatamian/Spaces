class CreatePlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|

      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :country, null: false
      t.string :zipcode, null: false
      t.string :description, null: false

      t.timestamps

    end
  end
end
  
