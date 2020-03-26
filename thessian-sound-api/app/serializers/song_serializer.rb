class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :album, :release_year
  belongs_to :artist
end
