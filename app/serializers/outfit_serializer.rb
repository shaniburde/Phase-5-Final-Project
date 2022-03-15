class OutfitSerializer < ActiveModel::Serializer
  attributes :id, :nickname
  has_one :user
  has_one :outfit_category
end
