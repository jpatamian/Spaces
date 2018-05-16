class AddBooleanToFavorites < ActiveRecord::Migration[5.2]
  def change
    add_column :favorites, :favorited, :boolean 

  end
end
