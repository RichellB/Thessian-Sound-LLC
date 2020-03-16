class Artist < ApplicationRecord
    has_many :songs
    #has_many :genres, through: :songs
    #belongs_to :user

    
    
    accepts_nested_attributes_for :songs
    
    validates_presence_of :name

end