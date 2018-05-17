class AddPlaceToFavorites < ActiveRecord::Migration[5.2]
  def change
    add_column :favorites, :name, :string
    add_column :favorites, :address, :string
    add_column :favorites, :city, :string
    add_column :favorites, :state, :string
    
  end
end
