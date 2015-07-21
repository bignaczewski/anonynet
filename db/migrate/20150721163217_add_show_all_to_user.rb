class AddShowAllToUser < ActiveRecord::Migration
  def change
    add_column :users, :show_all, :boolean, default: true
  end
end
