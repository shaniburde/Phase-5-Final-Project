class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password, :username
end
