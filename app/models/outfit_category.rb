class OutfitCategory < ApplicationRecord
    has_many :outfits, dependent: :destroy

    validates :outfit_type, presence: true, uniqueness: true, length: { in: 0..20 }
end
