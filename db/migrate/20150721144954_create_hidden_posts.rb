class CreateHiddenPosts < ActiveRecord::Migration
  def change
    create_table :hidden_posts do |t|
      t.integer :user_id
      t.integer :post_id
    end
  end
end
