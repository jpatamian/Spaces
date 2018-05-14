class CreateYelps < ActiveRecord::Migration[5.2]
  def change
    create_table :yelps do |t|
      t.string "name"
      t.string "term"
      t.string "location", null: false
      t.string "radius"
      t.string "categories"

      t.timestamps
    end
  end
end
