class OutfitDetailSerializer < ActiveModel::Serializer
  attributes :id
  has_one :outfit
  has_one :closet_item
end
