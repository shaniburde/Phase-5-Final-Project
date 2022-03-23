class Outfit < ApplicationRecord
  belongs_to :user
  belongs_to :outfit_category
  has_many :outfit_details, dependent: :destroy
  has_many :closet_items, through: :outfit_details 

  validates :nickname, presence: true, uniqueness: true, length: { in: 0..40 }
  validates :outfit_category, presence: true
end
