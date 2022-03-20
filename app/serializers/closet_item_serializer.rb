class ClosetItemSerializer < ActiveModel::Serializer
  attributes :id, :image, :color, :description, :brand, :date_purchased, :purchase_price
  has_one :user
  has_one :item_category
end
 