class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  attr_writer :login


  before_create :create_login

  def create_login
    email = self.email.split(/@/)
    login_taken = User.where(login: email[0]).first
    self.login = if login_taken
                   self.email
                 else
                   email[0]
                 end
  end

def self.find_for_database_authentication conditions
  where(login: conditions[:email]).first || where(email: conditions[:email]).first
end

 has_many :reviews
 validates :username, presence: :true, uniqueness: { case_sensitive: false }
 validate :validate_username

  def validate_username
    if User.where(email: username).exists?
      errors.add(:username, :invalid)
    end
  end


 def login
   @login || self.username || self.email
 end

 def self.find_first_by_auth_conditions(warden_conditions)
   conditions = warden_conditions.dup
   if login = conditions.delete(:login)
     where(conditions).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
   else
     if conditions[:username].nil?
       where(conditions).first
     else
       where(username: conditions[:username]).first
     end
   end
 end

 def self.send_reset_password_instructions attributes = {}
  recoverable = find_recoverable_or_initialize_with_errors(reset_password_keys, attributes, :not_found)
  recoverable.send_reset_password_instructions if recoverable.persisted?
  recoverable
end

  def self.find_recoverable_or_initialize_with_errors required_attributes, attributes, error = :invalid
    (case_insensitive_keys || []).each {|k| attributes[k].try(:downcase!)}

    attributes = attributes.slice(*required_attributes)
    attributes.delete_if {|_key, value| value.blank?}

    if attributes.size == required_attributes.size
      if attributes.key?(:login)
        login = attributes.delete(:login)
        record = find_record(login)
      else
        record = where(attributes).first
      end
    end

    unless record
      record = new

      required_attributes.each do |key|
        value = attributes[key]
        record.send("#{key}=", value)
        record.errors.add(key, value.present? ? error : :blank)
      end
    end
    record
  end

  def self.find_record login
    where(["username = :value OR email = :value", {value: login}]).first
  end

end
