class ItemCategory < ApplicationRecord
    has_many :closet_items, dependent: :destroy
    
    validates :item_type, presence: true, uniqueness: true, length: { in: 0..20 }
end
