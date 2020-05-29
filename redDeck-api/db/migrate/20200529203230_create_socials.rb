class CreateSocials < ActiveRecord::Migration[6.0]
  def change
    create_table :socials do |t|
      t.string :twitter
      t.string :reddit
      t.string :instagram
      t.string :github
      t.string :facebook

      t.timestamps
    end
  end
end
