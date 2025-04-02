class ChecksController < ApplicationController
  before_action :set_company, only: %i[new create]

  inertia_share flash: -> { flash.to_hash }

  def index
    @checks = Check.retrieve_checks
    render inertia: "Checks/Index", props: {
      checks: @checks.map do |check|
        {
          id: check.id,
          number: check.number,
          company_name: check.company_name,
          invoice_numbers: check.invoice_numbers,
          check_number: check.number,
          image: check.image_url,
          created_at: check.created_at.strftime("%Y-%m-%d %H:%M:%S")
      }.as_json
      end
    }
  end

  def new
    @check = Check.new
    render inertia: "Checks/New", props: {
      company: @company.as_json,
      check: serialize_check(@check),
      errors: {}
    }
  end

  def edit; end

  def create
    @check = @company.checks.build(check_params.except(:invoice_numbers))

    invoice_numbers = check_params[:invoice_numbers].split(",").map(&:strip)
    invoices = @company.invoices.where(number: invoice_numbers)

    if invoices.count != invoice_numbers.count
      missing = invoice_numbers - invoices.pluck(:number)
      return render inertia: "Checks/New", props: {
        company: @company.as_json,
        check: @check.as_json,
        errors: { invoice_numbers: "Could not find invoices: #{missing.join(', ')}" }
      }, status: :unprocessable_entity
    end

    if @check.save
      @check.invoices = invoices
      redirect_to companies_url, notice: "Check created successfully"
    else
      render inertia: "Checks/New", props: {
        company: @company.as_json,
        check: serialize_check(@check),
        errors: @check.errors.as_json
      }, status: :unprocessable_entity
    end
  end

  def update
    if @check.update(check_params)
      redirect_to @check, notice: "Check was successfully updated."
    else
      render :edit
    end
  end

  def destroy
    @check.destroy
    redirect_to checks_url, notice: "Check was successfully destroyed."
  end

  private

  def set_company
    @company = Company.find_by(id: params[:company_id])
  end

  def check_params
    params.require(:check).permit(:number, :image, :invoice_numbers)
  end

  def serialize_check(check)
    check.as_json(only: [ :id, :number, :image, :company_id ], include: {
      invoices: {
        only: [ :id, :number ]
      }
    })
  end
end
