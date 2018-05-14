class Review < ApplicationRecord
  validates :review, presence: true 
  belongs_to :user
  belongs_to :place
end
