class AddImageContentToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :image_content_id, :string
    add_column :posts, :image_content_filename, :string
    add_column :posts, :image_content_size, :integer
    add_column :posts, :image_content_content_type, :string
  end
end
