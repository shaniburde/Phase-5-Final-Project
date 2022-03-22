class ClosetItemsBelongingToAnOutfitSerializer < ActiveModel::Serializer
  attributes :id, :outfit_details, :closet_items

  has_many :outfit_details
  has_many :closet_items, through: :outfit_details

end
