class CreateOutfitDetails < ActiveRecord::Migration[6.1]
  def change
    create_table :outfit_details do |t|
      t.belongs_to :outfit, null: false, foreign_key: true
      t.belongs_to :closet_item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
