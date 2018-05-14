
class PlaceShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :address, :city, :state, :country, :zipcode, :user_reviews
  has_many :reviews


  def user_reviews
    object.reviews.where(user: scope)
  end

end
