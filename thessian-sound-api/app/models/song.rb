class Song < ApplicationRecord
    belongs_to :artist
    
    validates :title, presence: true
  
    #accepts_nested_attributes_for :genre
  
    def artist_name=(name)
      artist = Artist.find_or_create_by(artist_name: name)
      self.artist = artist
    end
    
    def artist_name
      self.try(:artist).try(:name)
    end
    
  end