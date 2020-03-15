class ArtistsController < ApplicationController

    before_action :authenticate_user!

      def index
       # @artist = Artist.find_by_id(params[:id])
         #   if user_signed_in?
            #    @artists = current_user.artists.alphabetical_order
           # end 
        artists = Artist.all 
        render json: ArtistSerializer.new(artists)
       end
   
       def create
          newArtist = Artist.create(name: params['name'])
          render json: ArtistSerializer.new(newArtist)
       end

       def show
           artist = Artist.find_by(params[:id])
       end

       def destroy
           artist = Artist.find_by(id: params[:id])
           artist.destroy
       end
   
       private
   
       def artist_params
           params.require(:artist).permit(:artist_name, :song_id, song_attributes: [:title])
       end
   end