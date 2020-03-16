class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :release_year
      t.string :album
      t.belongs_to :artist
      #t.belongs_to :user

    end
  end
end
