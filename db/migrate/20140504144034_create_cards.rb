class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.integer :list_id
      t.string :text

      t.timestamps
    end
    add_index :cards, :list_id
  end
end
