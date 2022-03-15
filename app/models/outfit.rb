class Outfit < ApplicationRecord
  belongs_to :user
  belongs_to :outfit_category
  has_many :outfit_details
  has_many :closet_items, through: :outfit_details

  validates :nickname, presence: true, uniqueness: true, length: { in: 0..25 }
end
