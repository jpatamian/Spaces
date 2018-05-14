class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :review, null: false
      t.belongs_to :user
      t.belongs_to :place

      t.timestamps
    end
  end
end
