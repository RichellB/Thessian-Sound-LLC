class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :album
      t.string :release_year
      t.string :artist_id
      #t.belongs_to :user

      t.timestamps

    end
  end
end
