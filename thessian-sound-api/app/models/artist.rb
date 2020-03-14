class Artist < ApplicationRecord
    has_many :songs
    #has_many :genres, through: :songs
    belongs_to :user

    
    
    accepts_nested_attributes_for :songs
    
    validates_presence_of :artist_name
    
    def self.alphabetical_order
      order(:artist_name)
    end

    def self.album_ready(artist)
      @artists = Artist.all 
      @artists.each_with_index do |artist_s, i|
        if artist_s.songs.length[i] > 5
          return true
        else 
          return artist_s
        end 
      end
    end

end