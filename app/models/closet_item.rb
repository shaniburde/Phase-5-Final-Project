class ClosetItem < ApplicationRecord
  belongs_to :user
  belongs_to :item_category
  has_many :outfit_details
  has_many :outfits, through: :outfit_details

  validates :purchase_price, numericality: true
  validates :date_purchased, allow_blank: true
  validates :description, length: { in: 0..150 }
end
