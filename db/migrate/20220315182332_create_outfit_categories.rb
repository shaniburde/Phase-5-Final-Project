class CreateOutfitCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :outfit_categories do |t|
      t.string :outfit_type

      t.timestamps
    end
  end
end
