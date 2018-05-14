class Place < ApplicationRecord
  validates :name, presence: true
  validates :address, presence: true
  validates :state, presence: true
  validates :country, presence: true
  validates :description, presence: true

  has_many :reviews
end
