class InvoicesController < ApplicationController
  before_action :set_invoice, only: %i[ show edit update destroy ]

  inertia_share flash: -> { flash.to_hash }

  def index
    @invoices = Invoice.retrieve_invoices
    render inertia: "Invoice/Index", props: {
      invoices: @invoices.map do |invoice|
        serialize_index_invoice(invoice)
      end
    }
  end

  def show
    render inertia: "Invoice/Show", props: {
      invoice: serialize_invoice(@invoice)
    }
  end

  def new
    @invoice = Invoice.new
    render inertia: "Invoice/New", props: {
      invoice: serialize_invoice(@invoice),
      companies: Company.all.map do |company|
        {
          id: company.id,
          company_name: company.name
      }.as_json
      end

    }
  end

  def edit
    render inertia: "Invoice/Edit", props: {
      invoice: serialize_invoice(@invoice)
    }
  end

  def create
    @invoice = Invoice.new(invoice_params)

    if @invoice.save
      redirect_to invoices_url, notice: "Invoice was successfully created."
    else
      redirect_to new_invoice_url, inertia: { errors: @invoice.errors }
    end
  end

  def update
    if @invoice.update(invoice_params)
      redirect_to @invoice, notice: "Invoice was successfully updated."
    else
      redirect_to edit_invoice_url(@invoice), inertia: { errors: @invoice.errors }
    end
  end

  def destroy
    @invoice.destroy!
    redirect_to invoices_url, notice: "Invoice was successfully destroyed."
  end

  private

    def set_invoice
      @invoice = Invoice.find(params[:id])
    end

    def invoice_params
      params.require(:invoice).permit(:number, :company_id)
    end

    def serialize_invoice(invoice)
      invoice.as_json(only: [
        :id, :number, :company_id
      ])
    end

    def serialize_index_invoice(invoice)
      invoice.as_json(only: [ :id, :number, :company_name, :check_number ])
    end
end
