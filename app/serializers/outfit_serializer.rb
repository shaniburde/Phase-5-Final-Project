class OutfitSerializer < ActiveModel::Serializer
  attributes :id, :nickname, :closet_items
  has_one :user
  has_one :outfit_category

  has_many :outfit_details
  has_many :closet_items, through: :outfit_details

end
