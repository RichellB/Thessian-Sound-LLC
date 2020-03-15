class SongsController < ApplicationController

    def index
       # @song = Song.find_by_id(params[:id])
       #   if @artist = Artist.find_by_id(params[:artist_id])
          #    @songs = @artist.songs.all
         # else
         #     @songs = Song.all
         # end 
         songs = Song.all
         render json: SongSerializer.new(songs)  
  
      end
  
      def create
        newSong = Song.create(title: params['title'], artist: params['artist'])
        render json: SongSerializer.new(newSong)
      end

      def edit 
        song = Song.find_by_id(params[:id])
      end
  
      def show
          song = Song.find_by_id(params[:id])
          render json: SongSerializer.new(song)
      end

      def destroy 
        song = Song.find_by_id(params[:id])
        song.destroy
      end 
  
      private
      
      def song_params
          params.require(:song).permit(:title, :album_name, :artist_id, :release_year)
      end
  end