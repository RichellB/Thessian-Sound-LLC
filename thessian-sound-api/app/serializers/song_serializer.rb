class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :artist_name
end
