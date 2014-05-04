class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.integer :board_id
      t.string :title

      t.timestamps
    end
    add_index :lists, :board_id
  end
end
