class ClosetItem < ApplicationRecord
  belongs_to :user
  belongs_to :item_category
end
