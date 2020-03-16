# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Artist.destroy_all
Song.destroy_all

artistA = Artist.create(name: "Tayte")
artistB = Artist.create(name: "Chrome")

Song.create(title: "Like That", album: "None", release_year: 2018, artist: artistA)
Song.create(title: "Do it Again", album: "Bartayte", release_year: 2019, artist: artistB)
Song.create(title: "Bartender", album: "Single", release_year: 2018, artist: artistA)
Song.create(title: "Summer Love", album: "Other", release_year: 2020, artist: artistB)