class CreateCheckInvoices < ActiveRecord::Migration[8.0]
  def change
    create_table :check_invoices do |t|
      t.references :check, null: false, foreign_key: true
      t.references :invoice, null: false, foreign_key: true

      t.timestamps
    end

    add_index :check_invoices, [ :check_id, :invoice_id ], unique: true
  end
end
