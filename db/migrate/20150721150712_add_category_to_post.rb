class AddCategoryToPost < ActiveRecord::Migration
  def change
    add_column :posts, :category, :integer
  end
end
