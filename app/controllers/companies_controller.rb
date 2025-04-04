class CompaniesController < ApplicationController
  before_action :set_company, only: %i[ edit update destroy ]

  inertia_share flash: -> { flash.to_hash }

  def index
    @companies = Company.all
    render inertia: "Company/Index", props: {
      companies: @companies.map do |company|
        serialize_company(company)
      end
    }
  end

  def new
    @company = Company.new
    render inertia: "Company/New", props: {
      company: serialize_company(@company)
    }
  end

  def edit
    render inertia: "Company/Edit", props: {
      company: serialize_company(@company)
    }
  end

  def create
    @company = Company.new(company_params)

    if @company.save
      redirect_to companies_url, notice: "Company was successfully created."
    else
      redirect_to new_company_url, inertia: { errors: @company.errors }
    end
  end

  def update
    if @company.update(company_params)
      redirect_to companies_url, notice: "Company was successfully updated."
    else
      redirect_to edit_company_url(@company), inertia: { errors: @company.errors }
    end
  end

  def destroy
    begin
      @company.destroy!
      redirect_to companies_url, notice: "Company was successfully destroyed."
    rescue ActiveRecord::RecordNotDestroyed => e
      flash[:alert] = @company.errors.full_messages[0]
      redirect_to companies_url, inertia: { notice: @company.errors }
    end
  end

  private

    def set_company
      @company = Company.find(params[:id])
    end

    def company_params
      params.require(:company).permit(:name)
    end

    def serialize_company(company)
      company.as_json(only: [
        :id, :name
      ])
    end
end
