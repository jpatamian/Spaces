
class PlaceShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :city, :state, :user_reviews
  has_many :reviews


  def user_reviews
    object.reviews.where(user: scope)
  end

end
