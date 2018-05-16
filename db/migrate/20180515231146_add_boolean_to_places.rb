class AddBooleanToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_column :places, :favorited, :boolean

  end
end
