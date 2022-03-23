class OutfitDetailSerializer < ActiveModel::Serializer
  attributes :id, :outfit, :closet_item
  has_one :outfit
  has_one :closet_item
end
