# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_15_182922) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "closet_items", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "item_category_id", null: false
    t.string "image"
    t.string "color"
    t.string "description"
    t.string "brand"
    t.string "date_purchased"
    t.float "purchase_price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["item_category_id"], name: "index_closet_items_on_item_category_id"
    t.index ["user_id"], name: "index_closet_items_on_user_id"
  end

  create_table "item_categories", force: :cascade do |t|
    t.string "item_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "outfit_categories", force: :cascade do |t|
    t.string "outfit_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "outfit_details", force: :cascade do |t|
    t.bigint "outfit_id", null: false
    t.bigint "closet_item_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["closet_item_id"], name: "index_outfit_details_on_closet_item_id"
    t.index ["outfit_id"], name: "index_outfit_details_on_outfit_id"
  end

  create_table "outfits", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "outfit_category_id", null: false
    t.string "nickname"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["outfit_category_id"], name: "index_outfits_on_outfit_category_id"
    t.index ["user_id"], name: "index_outfits_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password"
    t.string "username"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "closet_items", "item_categories"
  add_foreign_key "closet_items", "users"
  add_foreign_key "outfit_details", "closet_items"
  add_foreign_key "outfit_details", "outfits"
  add_foreign_key "outfits", "outfit_categories"
  add_foreign_key "outfits", "users"
end
