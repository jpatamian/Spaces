class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.boolean :favorite, default: false
      t.belongs_to :user, null: false
      t.belongs_to :place, null: false

      t.timestamps
    end
  end
end
