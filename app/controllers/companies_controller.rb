class CompaniesController < ApplicationController
  before_action :set_company, only: %i[ show edit update destroy ]

  inertia_share flash: -> { flash.to_hash }

  # GET /companies
  def index
    @companies = Company.all
    render inertia: "Company/Index", props: {
      companies: @companies.map do |company|
        serialize_company(company)
      end
    }
  end

  # GET /companies/1
  def show
    render inertia: "Company/Show", props: {
      company: serialize_company(@company)
    }
  end

  # GET /companies/new
  def new
    @company = Company.new
    render inertia: "Company/New", props: {
      company: serialize_company(@company)
    }
  end

  # GET /companies/1/edit
  def edit
    render inertia: "Company/Edit", props: {
      company: serialize_company(@company)
    }
  end

  # POST /companies
  def create
    @company = Company.new(company_params)

    if @company.save
      redirect_to companies_url, notice: "Company was successfully created."
    else
      redirect_to new_company_url, inertia: { errors: @company.errors }
    end
  end

  # PATCH/PUT /companies/1
  def update
    if @company.update(company_params)
      redirect_to @company, notice: "Company was successfully updated."
    else
      redirect_to edit_company_url(@company), inertia: { errors: @company.errors }
    end
  end

  # DELETE /companies/1
  def destroy
    @company.destroy!
    redirect_to companies_url, notice: "Company was successfully destroyed."
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_company
      @company = Company.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def company_params
      params.require(:company).permit(:name)
    end

    def serialize_company(company)
      company.as_json(only: [
        :id, :name
      ])
    end
end
