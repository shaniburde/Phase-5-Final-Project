# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding user seeds..."

user1 = User.create(password: '123', username: 'mini')
user2 = User.create(password: '123', username: 'mom')
user3 = User.create(password: '123', username: 'rhianna')
user4 = User.create(password: '123', username: 'doja')
user5 = User.create(password: '123', username: 'jack')

puts "Seeding item category seeds..."

item_category1 = ItemCategory.create(item_type: "Tops")
item_category2 = ItemCategory.create(item_type: "Pants")
item_category3 = ItemCategory.create(item_type: "Skirts")
item_category4 = ItemCategory.create(item_type: "Accessories")
item_category5 = ItemCategory.create(item_type: "Outerwear")
item_category6 = ItemCategory.create(item_type: "Shoes")
item_category7 = ItemCategory.create(item_type: "Dresses")

puts "Seeding closet item seeds..."

closet_item1 = ClosetItem.create(user_id: 1, item_category_id: item_category1.id, image: "https://lp.stories.com/app005prod?set=source[/27/f8/27f80c2804a9129a45526ac52d75f6c045874414.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]", color: "white", description: "Long sleeve white top with tied detailing.", brand: "& Other Stories", date_purchased: "10-05-2021", purchase_price: 49)

closet_item2 = ClosetItem.create(user_id: user1.id, item_category_id: item_category7.id, image: "https://lp.stories.com/app005prod?set=source[/ae/da/aeda9f7103ed19767566d075883748c44373a9e9.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]&zoom=zoom", color: "green & off-white", description: "Long sleeve midi dress with collar and a-line fit.", brand: "& Other Stories", date_purchased: "10-28-2021", purchase_price: 99)

closet_item3 = ClosetItem.create(user_id: user1.id, item_category_id: item_category2.id, image: "https://lp.stories.com/app005prod?set=source[/15/8d/158de922c0d2b6e3e5486a249130b848a8385e3f.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[2]&call=url[file:/product/main]&zoom=zoom", color: "blue", description: "Favourite cut jeans.", brand: "& Other Stories", date_purchased: "10-28-2021", purchase_price: 89)

closet_item4 = ClosetItem.create(user_id: user1.id, item_category_id: item_category6.id, image: "https://lp.stories.com/app005prod?set=source[/e1/52/e152af1abf126e2d4f31c6fbe5d8b8b0eaebe1ac.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[2]&call=url[file:/product/main]", color: "white", description: "Veja 'Campo' lace-up sneakers in chrome-free tanned leather. Featuring contrasting colour-blocked accents, a rubber sole and classic side 'V' branding.", brand: "& Other Stories", date_purchased: "10-28-2021", purchase_price: 139)

closet_item5 = ClosetItem.create(user_id: user1.id, item_category_id: item_category4.id, image: "https://lp.stories.com/app005prod?set=source[/51/23/51234bc2dad65024afd830fbe60c1c71be4b774a.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]", color: "brown", description: "Croc embossed leather bag with gold-toned hardware, a buckled crossbody strap and two main compartments.", brand: "& Other Stories", date_purchased: "10-28-2021", purchase_price: 189)

closet_item6 = ClosetItem.create(user_id: user1.id, item_category_id: item_category5.id, image: "https://static.zara.net/photos///2022/V/0/1/p/1255/702/700/2/w/1126/1255702700_6_1_1.jpg?ts=1642498906785", color: "brown", description: "Trench coat with V-neck lapel collar. Front welt pockets. Back vent. Front button closure.", brand: "Zara", date_purchased: "5-15-2021", purchase_price: 129)

puts "Seeding outfit category seeds..."

outfit_category1 = OutfitCategory.create(outfit_type: "Casual")
outfit_category2 = OutfitCategory.create(outfit_type: "Night-Out")
outfit_category3 = OutfitCategory.create(outfit_type: "Business Casual")
outfit_category4 = OutfitCategory.create(outfit_type: "Black Tie")
outfit_category5 = OutfitCategory.create(outfit_type: "Sporty")

puts "Seeding outfit seeds..."

outfit1 = Outfit.create(user_id: user1.id, outfit_category_id: outfit_category1.id, nickname: "Grocery store run go-to")

puts "Seeding outfit-details seeds..."

outfit_details1 = OutfitDetail.create(outfit_id: outfit1.id, closet_item_id: closet_item1.id  )
outfit_details2 = OutfitDetail.create(outfit_id: outfit1.id, closet_item_id: closet_item3.id  )
outfit_details3 = OutfitDetail.create(outfit_id: outfit1.id, closet_item_id: closet_item4.id  )
outfit_details4 = OutfitDetail.create(outfit_id: outfit1.id, closet_item_id: closet_item5.id  )
outfit_details5 = OutfitDetail.create(outfit_id: outfit1.id, closet_item_id: closet_item6.id  )


puts "Seeds seeded!"