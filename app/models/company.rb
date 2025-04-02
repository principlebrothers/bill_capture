class Company < ApplicationRecord
  has_many :invoices, dependent: :restrict_with_error
  has_many :checks, dependent: :restrict_with_error

  validates :name, presence: true
end
