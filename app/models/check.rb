class Check < ApplicationRecord
  has_one_attached :image
  belongs_to :company
  has_many :check_invoices, dependent: :destroy
  has_many :invoices, through: :check_invoices

  validates :number, presence: true
  validates :number, uniqueness: { scope: :company_id, message: "Check number must be unique for the company" }
  validates :image, presence: true

  def self.retrieve_checks
    joins(:company, check_invoices: :invoice)
      .select(
        "checks.id, checks.number, companies.name AS company_name, GROUP_CONCAT(invoices.number) AS invoice_numbers, checks.created_at"
      )
      .group("checks.number, checks.id, companies.name, checks.created_at")
      .order(created_at: :desc)
  end

  def image_url
    if image.attached?
      Rails.application.routes.url_helpers.rails_blob_url(image, only_path: true)
    else
      nil
    end
  end
end
