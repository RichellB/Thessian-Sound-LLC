class SongsController < ApplicationController

    def index
        @song = Song.find_by_id(params[:id])
          if @artist = Artist.find_by_id(params[:artist_id])
              @songs = @artist.songs.all
          else
              @songs = Song.all
          end   
  
      end
  
      def new
          if @artist = Artist.find_by_id(params[:artist_id])
            @artist.songs = params[:song]  #Is this needed?
            @song = @artist.songs.build
              
          else
              @song = Song.new
          end    
      end
  
      def create
        @song = Song.new(song_params)
        if @song.save
            redirect_to songs_path
        else
              render :new
          end
      end

      def edit 
        @song = Song.find_by_id(params[:id])
      end

      def update 
        @song = Song.find_by_id(params[:id])
        @song.update(title: params[:song][:title])
        redirect_to song_path(@song)
      end 
  
      def show
          @song = Song.find_by_id(params[:id])
      end

      def destroy 
        @song = Song.find_by_id(params[:id])
        @song.destroy
        redirect_to songs_path
      end 
  
      private
      
      def song_params
          params.require(:song).permit(:title, :album_name, :artist_id, :release_year)
      end
  end