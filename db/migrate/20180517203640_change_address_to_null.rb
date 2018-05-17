class ChangeAddressToNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :places, :address, true 
  end
end
