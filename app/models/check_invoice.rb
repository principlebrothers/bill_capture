class CheckInvoice < ApplicationRecord
  belongs_to :check
  belongs_to :invoice

  validates :check_id, uniqueness: { scope: :invoice_id, message: "Check and Invoice combination must be unique" }
end
