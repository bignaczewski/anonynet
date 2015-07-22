# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

200.times { Post.create(content: BetterLorem.p(1, true, true), user_id: Random.rand(1..5)) }
500.times { Comment.create(content: BetterLorem.p(1, true, true), post_id: Random.rand(1..200), user_id: Random.rand(1..5)) }
(1..5).each { |i| User.create(nickname: 'ignasignas' + i.to_s, password: 'ignasignas' + i.to_s) }

User.create(nickname: 'admin', password: 'adminadmin', admin: true)