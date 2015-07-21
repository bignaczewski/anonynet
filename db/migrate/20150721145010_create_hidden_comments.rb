class CreateHiddenComments < ActiveRecord::Migration
  def change
    create_table :hidden_comments do |t|
      t.integer :user_id
      t.integer :comment_id
    end
  end
end
