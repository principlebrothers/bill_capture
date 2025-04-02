class Invoice < ApplicationRecord
  belongs_to :company
  has_many :check_invoices, dependent: :destroy
  has_many :checks, through: :check_invoices

  validates :number, presence: true, uniqueness: { scope: :company_id }
  validates :company_id, presence: true


  def self.retrieve_invoices
    left_joins(:company, check_invoices: :check)
      .select("invoices.id, invoices.number, companies.name AS company_name, checks.number AS check_number")
  end
end
