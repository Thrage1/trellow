class Board < ApplicationRecord
  validates :creator, :title, presence: true

  belongs_to :creator,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: :User
end
