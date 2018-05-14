class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_email, :review, :user_id

  def user_email
    object.user.email
  end

  belongs_to :user
end
