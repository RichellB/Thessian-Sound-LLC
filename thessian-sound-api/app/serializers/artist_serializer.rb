class ArtistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email
end
