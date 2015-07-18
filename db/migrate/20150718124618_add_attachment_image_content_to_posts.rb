class AddAttachmentImageContentToPosts < ActiveRecord::Migration
  def self.up
    change_table :posts do |t|
      t.attachment :image_content
    end
  end

  def self.down
    remove_attachment :posts, :image_content
  end
end
