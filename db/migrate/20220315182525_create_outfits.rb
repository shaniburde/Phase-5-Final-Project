class CreateOutfits < ActiveRecord::Migration[6.1]
  def change
    create_table :outfits do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :outfit_category, null: false, foreign_key: true
      t.string :nickname

      t.timestamps
    end
  end
end
