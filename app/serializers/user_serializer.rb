class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :closet_items
  has_many :item_categories, through: :closet_items
  has_many :outfits
  has_many :outfit_categories, through: :outfits
end
