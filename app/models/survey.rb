class Survey < ApplicationRecord
  validates :overwhelmed, inclusion: { in: %w[never rarely sometimes often always] }
  validates :supported, inclusion: { in: "1".."10" }
  validates :activities, presence: true

  encrypts :overwhelmed, :supported, :activities
end
