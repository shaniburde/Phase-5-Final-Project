class Outfit < ApplicationRecord
  belongs_to :user
  belongs_to :outfit_category
end
