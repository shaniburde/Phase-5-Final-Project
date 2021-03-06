# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding user seeds..."

user1 = User.create(password: '12345', username: 'shani')
user2 = User.create(password: '12345', username: 'mom')
user3 = User.create(password: '12345', username: 'rhianna')
user4 = User.create(password: '12345', username: 'doja')
user5 = User.create(password: '12345', username: 'jack')

puts "Seeding item category seeds..."

item_category1 = ItemCategory.create(item_type: "Tops")
item_category2 = ItemCategory.create(item_type: "Pants")
item_category3 = ItemCategory.create(item_type: "Skirts")
item_category4 = ItemCategory.create(item_type: "Accessories")
item_category5 = ItemCategory.create(item_type: "Outerwear")
item_category6 = ItemCategory.create(item_type: "Shoes")
item_category7 = ItemCategory.create(item_type: "Dresses")

puts "Seeding closet item seeds..."

closet_item1 = ClosetItem.create(user_id: 1, item_category_id: item_category1.id, image: "https://lp.stories.com/app005prod?set=source[/27/f8/27f80c2804a9129a45526ac52d75f6c045874414.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]", color: "white", description: "Long sleeve white top with tied detailing.", brand: "& Other Stories", date_purchased: "2022-03-21", purchase_price: 49)

closet_item2 = ClosetItem.create(user_id: user1.id, item_category_id: item_category7.id, image: "https://lp.stories.com/app005prod?set=source[/ae/da/aeda9f7103ed19767566d075883748c44373a9e9.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]&zoom=zoom", color: "green & off-white", description: "Long sleeve midi dress with collar and a-line fit.", brand: "& Other Stories", date_purchased: "2022-03-21", purchase_price: 99)

closet_item3 = ClosetItem.create(user_id: user1.id, item_category_id: item_category2.id, image: "https://lp.stories.com/app005prod?set=source[/15/8d/158de922c0d2b6e3e5486a249130b848a8385e3f.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[2]&call=url[file:/product/main]&zoom=zoom", color: "blue", description: "Favourite cut jeans.", brand: "& Other Stories", date_purchased: "2022-03-21", purchase_price: 89)

closet_item4 = ClosetItem.create(user_id: user1.id, item_category_id: item_category6.id, image: "https://lp.stories.com/app005prod?set=source[/e1/52/e152af1abf126e2d4f31c6fbe5d8b8b0eaebe1ac.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[2]&call=url[file:/product/main]", color: "white", description: "Veja 'Campo' lace-up sneakers in chrome-free tanned leather. Featuring contrasting colour-blocked accents, a rubber sole and classic side 'V' branding.", brand: "& Other Stories", date_purchased: "2022-03-21", purchase_price: 139)

closet_item5 = ClosetItem.create(user_id: user1.id, item_category_id: item_category4.id, image: "https://lp.stories.com/app005prod?set=source[/51/23/51234bc2dad65024afd830fbe60c1c71be4b774a.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]", color: "brown", description: "Croc embossed leather bag with gold-toned hardware, a buckled crossbody strap and two main compartments.", brand: "& Other Stories", date_purchased: "2022-03-21", purchase_price: 189)

closet_item6 = ClosetItem.create(user_id: user1.id, item_category_id: item_category5.id, image: "https://static.zara.net/photos///2022/V/0/1/p/1255/702/700/2/w/1126/1255702700_6_1_1.jpg?ts=1642498906785", color: "brown", description: "Trench coat with V-neck lapel collar. Front welt pockets. Back vent. Front button closure.", brand: "Zara", date_purchased: "2022-03-21", purchase_price: 129)

closet_item7 = ClosetItem.create(user_id: user1.id, item_category_id: item_category4.id, image: "https://static.zara.net/photos///2022/V/1/1/p/6326/910/035/2/w/850/6326910035_6_1_1.jpg?ts=1643730649190", color: "Green", description: "Mini city bag. Interior divided into three compartments. Handle and removable crossbody strap.", brand: "Zara", date_purchased: "2022-03-21", purchase_price: 49.90)

closet_item8 = ClosetItem.create(user_id: user1.id, item_category_id: item_category7.id, image: "https://static.zara.net/photos///2022/V/0/1/p/9598/024/409/2/w/750/9598024409_6_1_1.jpg?ts=1642078795663", color: "Petrol Blue", description: "Dress with high collar and short sleeves. Ruching at waist.", brand: "Zara", date_purchased: "2022-03-21", purchase_price: 49.90)

closet_item9 = ClosetItem.create(user_id: user1.id, item_category_id: item_category5.id, image: "https://static.zara.net/photos///2021/I/0/1/p/4432/710/800/2/w/1126/4432710800_6_1_1.jpg?ts=1632211181658", color: "Black", description: "Blazer with lapel collar and long sleeves with shoulder pads. Front welt pockets with flaps. Back vent. Front button closure.", brand: "Zara", date_purchased: "2022-03-21", purchase_price: 89.90)

closet_item10 = ClosetItem.create(user_id: user1.id, item_category_id: item_category6.id, image: "https://static.zara.net/photos///2021/I/1/1/p/2051/810/040/2/w/750/2051810040_6_2_1.jpg?ts=1631548471497", color: "Black", description: "Long, flat knee high boots with stretch shaft and back pull tab detail. Treaded soles. Inner side zip closure.", brand: "Zara", date_purchased: "2022-03-21", purchase_price: 89.90)

closet_item11 = ClosetItem.create(user_id: user1.id, item_category_id: item_category5.id, image: "https://static.zara.net/photos///2022/V/0/1/p/2387/510/069/2/w/850/2387510069_6_1_1.jpg?ts=1644510134500", color: "Green", description: "Blazer with lapel collar and long sleeves with shoulder pads. Front flap pockets. Front closure with embossed gold buttons.", brand: "Zara", date_purchased: "2022-03-21", purchase_price: 119.90)

closet_item12 = ClosetItem.create(user_id: user1.id, item_category_id: item_category3.id, image: "https://static.zara.net/photos///2022/V/0/1/p/1971/078/069/2/w/850/1971078069_6_1_1.jpg?ts=1644505319119", color: "Green", description: "High-waisted skirt with tonal belt. A-line silhouette. Back hidden in-seam zip closure.", brand: "Zara", date_purchased: "2022-03-21", purchase_price: 49.90)

closet_item13 = ClosetItem.create(user_id: user1.id, item_category_id: item_category4.id, image: "https://lp.stories.com/app005prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B250%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B/7c/da/7cda3b0caa9b46a5b6db98b0abb0ba145e3d22e7.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile:/product/dynamic.chain%5D", color: "Tortoise", description: "Cat eye sunglasses with thick temples.", brand: "& Other Stories ", date_purchased: "2022-03-21", purchase_price: 39)

closet_item14 = ClosetItem.create(user_id: user1.id, item_category_id: item_category6.id, image: "https://lp.stories.com/app005prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B/1a/e4/1ae4ec21048c7ab9a44332e6101237b64403fe37.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile:/product/dynamic.chain%5D", color: "Black", description: "Almond-shaped leather loafers adorned with metallic tonal buckles. Accented with chunky rubber soles and structural topstitching.", brand: "& Other Stories", date_purchased: "2022-03-21", purchase_price: 129)

closet_item15 = ClosetItem.create(user_id: user1.id, item_category_id: item_category2.id, image: "https://aritzia.scene7.com/is/image/Aritzia/large/f21_01_a06_95902_1274_off_a.jpg", color: "Black", description: "These are mid-rise trousers with a tapered leg. They're made with Vegan Leather.", brand: "Aritzia", date_purchased: "2022-03-21", purchase_price: 148)

closet_item16 = ClosetItem.create(user_id: user1.id, item_category_id: item_category7.id, image: "https://static.zara.net/photos///2022/V/0/1/p/4174/311/615/2/w/1024/4174311615_6_1_1.jpg?ts=1644512034946", color: "Orange", description: "Short sleeveless dress with round neckline.", brand: "Zara", date_purchased: "2022-03-21", purchase_price: 25.90)

closet_item17 = ClosetItem.create(user_id: user1.id, item_category_id: item_category5.id, image: "https://static.zara.net/photos///2021/I/0/1/p/4048/240/400/2/w/1024/4048240400_6_1_1.jpg?ts=1631177717874", color: "Blue", description: "Cropped jacket with lapel collar and long cuffed sleeves. Front flap pockets with buttons. Washed effect. Unfinished hem. Front metal button closure.", brand: "Zara", date_purchased: "2022-03-21", purchase_price: 49.90)

closet_item18 = ClosetItem.create(user_id: user1.id, item_category_id: item_category7.id, image: "https://static.zara.net/photos///2022/V/0/1/p/2533/766/020/2/w/850/2533766020_6_1_1.jpg?ts=1647356628450", color: "Printed", description: "Long round neck dress with short sleeves. Ruffle and contrasting lace trim detail. Back closure with self lined buttons.", brand: "Zara", date_purchased: "2022-01-21", purchase_price: 229.00)

closet_item19 = ClosetItem.create(user_id: user1.id, item_category_id: item_category4.id, image: "https://static.zara.net/photos///2022/V/0/1/p/1856/714/808/2/w/850/1856714808_6_1_1.jpg?ts=1647357398897", color: "Silver", description: "Earrings shaped like a chime with embossed flowers. Interior charms with cultivated freshwater pearls.", brand: "Zara", date_purchased: "2022-03-05", purchase_price: 29.90)

closet_item20 = ClosetItem.create(user_id: user1.id, item_category_id: item_category6.id, image: "https://static.zara.net/photos///2022/V/1/1/p/4300/910/040/2/w/850/4300910040_6_1_1.jpg?ts=1647358974074", color: "Black", description: "Heeled sandal booties made of leather with studs and openings at sides. Back zip closure and laces at front.", brand: "Zara", date_purchased: "2022-03-05", purchase_price: 379.00)

closet_item21 = ClosetItem.create(user_id: user1.id, item_category_id: item_category4.id, image: "https://static.zara.net/photos///2022/V/0/1/p/1856/700/808/2/w/850/1856700808_6_1_1.jpg?ts=1647357401131", color: "Silver", description: "Long necklace with multiple fine chains and key shaped charm. Metal hook closure.", brand: "Zara", date_purchased: "2022-03-21", purchase_price: 35.90)

closet_item22 = ClosetItem.create(user_id: user1.id, item_category_id: item_category5.id, image: "https://static.zara.net/photos///2022/V/0/1/p/0049/204/707/2/w/1126/0049204707_6_1_1.jpg?ts=1647271687267", color: "Natural", description: "Raffia hat with contrasting band.", brand: "Zara", date_purchased: "2022-03-10", purchase_price: 45.90)

closet_item23 = ClosetItem.create(user_id: user1.id, item_category_id: item_category7.id, image: "https://static.zara.net/photos///2022/V/0/1/p/7385/363/712/2/w/1024/7385363712_6_1_1.jpg?ts=1648109127781", color: "White", description: "Dress made of stretch linen blend fabric. V-neck lapel collar with short turned-up sleeves. Side ruching and front openings with laces. Hidden in-seam side zip closure.", brand: "Zara", date_purchased: "2022-03-21", purchase_price: 59.90)

closet_item24 = ClosetItem.create(user_id: user1.id, item_category_id: item_category6.id, image: "https://static.zara.net/photos///2021/I/1/1/p/2822/810/002/2/w/1024/2822810002_6_3_1.jpg?ts=1622727944433", color: "White", description: "Low-heeled leather sandals. Wide front leather strap with raised details. Squared toe.", brand: "Zara", date_purchased: "2022-03-21", purchase_price: 49.90)

closet_item25 = ClosetItem.create(user_id: user1.id, item_category_id: item_category7.id, image: "https://aritzia.scene7.com/is/image/Aritzia/large/f21_04_a08_90703_21342_off_c.jpg", color: "Walnut", description: "Wilfred Sleeveless turtleneck sweater dress.", brand: "Aritzia", date_purchased: "2022-03-11", purchase_price: 70)

closet_item26 = ClosetItem.create(user_id: user1.id, item_category_id: item_category6.id, image: "https://static.zara.net/photos///2022/V/1/1/p/5105/910/102/2/w/1024/5105910102_6_2_1.jpg?ts=1645117113262", color: "Beige", description: "Contrast colored running shoes in a combination of materials. Front and back pull tabs. Thick soles. Lace closure.", brand: "Zara", date_purchased: "2022-03-11", purchase_price: 99)

closet_item27 = ClosetItem.create(user_id: user1.id, item_category_id: item_category5.id, image: "https://lp.stories.com/app005prod?set=source[/55/71/5571519005aa195daeaf240a71da2a72b85d2e52.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]&zoom=zoom", color: "Beige Checks", description: "Single breasted checkered blazer with shoulder pads and a fitted silhouette.", brand: "& Other Stories", date_purchased: "2021-08-15", purchase_price: 179)

closet_item28 = ClosetItem.create(user_id: user1.id, item_category_id: item_category4.id, image: "https://lp.stories.com/app005prod?set=source[/1e/50/1e50fc46149deaa70feefd8c11c0b3f444c6293e.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]", color: "Tortoise", description: "Cat eye sunglasses with thick temples.", brand: "& Other Stories ", date_purchased: "2022-03-21", purchase_price: 39)

puts "Seeding outfit category seeds..."

outfit_category1 = OutfitCategory.create(outfit_type: "Casual")
outfit_category2 = OutfitCategory.create(outfit_type: "Business Casual")
outfit_category3 = OutfitCategory.create(outfit_type: "Eveningwear")


puts "Seeding outfit seeds..."

outfit1 = Outfit.create(user_id: user1.id, outfit_category_id: outfit_category1.id, nickname: "Grocery Store Chic")
outfit2 = Outfit.create(user_id: user1.id, outfit_category_id: outfit_category2.id, nickname: "Leather Goddess")
outfit3 = Outfit.create(user_id: user1.id, outfit_category_id: outfit_category2.id, nickname: "St. Patty's Day - but make it fashion")
outfit4 = Outfit.create(user_id: user1.id, outfit_category_id: outfit_category1.id, nickname: "Traffic Cone - but make it fashion")
outfit5 = Outfit.create(user_id: user1.id, outfit_category_id: outfit_category3.id, nickname: "Cousin's Wedding - Chic")
outfit6 = Outfit.create(user_id: user1.id, outfit_category_id: outfit_category1.id, nickname: "Beach Day Vibes")
outfit7 = Outfit.create(user_id: user1.id, outfit_category_id: outfit_category2.id, nickname: "Sporty Spice")

puts "Seeding outfit-details seeds..."

outfit_details1 = OutfitDetail.create(outfit_id: outfit1.id, closet_item_id: closet_item1.id  )
outfit_details2 = OutfitDetail.create(outfit_id: outfit1.id, closet_item_id: closet_item3.id  )
outfit_details3 = OutfitDetail.create(outfit_id: outfit1.id, closet_item_id: closet_item4.id  )
outfit_details4 = OutfitDetail.create(outfit_id: outfit1.id, closet_item_id: closet_item5.id  )
outfit_details5 = OutfitDetail.create(outfit_id: outfit1.id, closet_item_id: closet_item6.id  )

outfit_details6 = OutfitDetail.create(outfit_id: outfit2.id, closet_item_id: closet_item7.id  )
outfit_details7 = OutfitDetail.create(outfit_id: outfit2.id, closet_item_id: closet_item8.id  )
outfit_details8 = OutfitDetail.create(outfit_id: outfit2.id, closet_item_id: closet_item9.id  )
outfit_details9 = OutfitDetail.create(outfit_id: outfit2.id, closet_item_id: closet_item10.id  )

outfit_details10 = OutfitDetail.create(outfit_id: outfit3.id, closet_item_id: closet_item11.id  )
outfit_details11 = OutfitDetail.create(outfit_id: outfit3.id, closet_item_id: closet_item12.id  )
outfit_details12 = OutfitDetail.create(outfit_id: outfit3.id, closet_item_id: closet_item13.id  )
outfit_detail13 = OutfitDetail.create(outfit_id: outfit3.id, closet_item_id: closet_item14.id  )

outfit_details14 = OutfitDetail.create(outfit_id: outfit4.id, closet_item_id: closet_item16.id  )
outfit_details15 = OutfitDetail.create(outfit_id: outfit4.id, closet_item_id: closet_item4.id  )
outfit_details16 = OutfitDetail.create(outfit_id: outfit4.id, closet_item_id: closet_item13.id  )
outfit_detail17 = OutfitDetail.create(outfit_id: outfit4.id, closet_item_id: closet_item17.id  )

outfit_details18 = OutfitDetail.create(outfit_id: outfit5.id, closet_item_id: closet_item18.id  )
outfit_details19 = OutfitDetail.create(outfit_id: outfit5.id, closet_item_id: closet_item19.id  )
outfit_details20 = OutfitDetail.create(outfit_id: outfit5.id, closet_item_id: closet_item20.id  )
outfit_detail21 = OutfitDetail.create(outfit_id: outfit5.id, closet_item_id: closet_item21.id  )

outfit_details22 = OutfitDetail.create(outfit_id: outfit6.id, closet_item_id: closet_item22.id  )
outfit_details23 = OutfitDetail.create(outfit_id: outfit6.id, closet_item_id: closet_item23.id  )
outfit_detail24 = OutfitDetail.create(outfit_id: outfit6.id, closet_item_id: closet_item24.id  )
outfit_detail25 = OutfitDetail.create(outfit_id: outfit6.id, closet_item_id: closet_item13.id  )

outfit_details26 = OutfitDetail.create(outfit_id: outfit7.id, closet_item_id: closet_item25.id  )
outfit_details27 = OutfitDetail.create(outfit_id: outfit7.id, closet_item_id: closet_item26.id  )
outfit_detail28 = OutfitDetail.create(outfit_id: outfit7.id, closet_item_id: closet_item27.id  )
outfit_detail29 = OutfitDetail.create(outfit_id: outfit7.id, closet_item_id: closet_item28.id  )

puts "Seeds seeded!"