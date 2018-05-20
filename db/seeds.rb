# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user2 = User.create!(email: "testyyyyy@testy.com", password: "guest123456", id: 19)

place1 = Place.create!(name: "Club Cafe", address: "209 Columbus Ave", city: "Boston", state: "MA", country: "US", zipcode: '02116', description: "Happening gay-friendly cabaret, piano bar, dance club & classy New American bistro.")

place2 = Place.create!(name: "Boston Harbor Hotel at Rowes Wharf", address: "70 Rowes Wharf", city: "Boston", state: "MA", country: "US", zipcode: '02110', description: "Located on the historic Rowes Wharf Harbor, the Boston Harbor Hotel’s inviting ambiance and unparalleled service provide the ideal home away from home for all travelers. Luxurious accommodations with sweeping views of Boston’s cityscape or breathtaking waterfront, a contemporary spa and fitness center, world-class dining and a 34-slip marina make the Boston Harbor Hotel a destination Beyond Compare.")

place3 = Place.create!(name: "Monarch Beach Resort", address: "1 Monarch Beach Resort N", city: "Dana Point", state: "CA", country: "US", zipcode: '92629', description: "Perched on a golden hillside overlooking the azure waters of the Pacific, Monarch Beach Resort is Orange County’s most luxurious coastal playground. The AAA Five-Diamond sanctuary offers LGBT guests an array of exclusive activities and inspiring experiences that embody Southern California’s serene coastal lifestyle. From championship golf links and restorative spa services to water sports and celebrated dining, discover the allure of Orange County’s premier luxury resort.")

place4 = Place.create!(name: "Oak Lawn Neighborhood", address: "Turtle Creek Boulevard", city: "Dallas", state: "Texas", country: "US", zipcode: '75201', description: "Oak Lawn For nearly 30 years, Oak Lawn has been the epicenter of all the LGBT action in Dallas. The Cedar Springs strip is filled with a variety of restaurants, cafes, specialty stores, and a blend of LGBT bars and night clubs, all within a two block walking distance. Throughout the Oak Lawn neighborhood you will encounter many different gay-owned and gay-friendly businesses.")

place5 = Place.create!(name: "Bishop Arts District", address: "Bishop Street", city: "Oak Cliff, Dallas", state: "Texas", country: "US", zipcode: '75208', description: "The Bishop Arts District is another popular gayborhoods where arts and dining seamlessly blend together, creating a charming and evolving area. Here you will find an array of art galleries, restaurants and shops situated along a city block. If you're looking to move to Dallas, the Bishop Arts District is a cozy community nestled just southwest of downtown.")

place6 = Place.create!(name: "MARY’S", address: "1287 Glenwood Ave", city: "Atlanta", state: "Georgia", country: "US", description: "Theme nights range from outrageous to downright unsavory: Hanky Code Party, No Pants Dance, and MondoHomo, to name a few. Attention-whore hipsters compete with rowdy lesbians and off-duty DJs for space on the miniature dance floor. On karaoke night the pocket-size emcee channels Motown divas. Go ahead'try to leave before last call.")
