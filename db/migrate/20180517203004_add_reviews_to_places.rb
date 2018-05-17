class AddReviewsToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_column :places, :review, :string
  end
end
