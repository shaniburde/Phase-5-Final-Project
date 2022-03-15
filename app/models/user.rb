class User < ApplicationRecord
    has_many :closet_items
    has_many :item_categories, through: :closet_items
    has_many :outfits
    has_many :outfit_categories, through: :outfits

    validates :username, uniqueness: true, presence: true
    validates :password, length: { minimum: 5 }, presence: true
    validates :email, presence: true
end
