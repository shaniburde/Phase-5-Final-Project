class CreateClosetItems < ActiveRecord::Migration[6.1]
  def change
    create_table :closet_items do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :item_category, null: false, foreign_key: true
      t.string :image
      t.string :color
      t.string :description
      t.string :brand
      t.string :date_purchased
      t.float :purchase_price

      t.timestamps
    end
  end
end
