class AddCategoryToPost < ActiveRecord::Migration
  def self.up
    add_column :posts, :category_cd, :integer, default: 0
  end

  def self.down
    remove_column :posts, :category_cd
  end
end
