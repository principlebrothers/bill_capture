require "application_system_test_case"

class CompaniesTest < ApplicationSystemTestCase
  setup do
    @company = companies(:teslamotors)
  end

  test "visiting the index" do
    visit companies_url
    assert_selector "h1", text: "Companies"
  end

  test "should create company" do
    visit companies_url
    click_on "Add Company"

    fill_in "name", with: @company.name
    click_on "Save Company"

    assert_text "Company was successfully created"
    find("a[href='/companies']").click

    assert_current_path companies_path
  end

  test "should update Company" do
    visit companies_url
    find("a[href='/companies/#{@company.id}/edit']").click
    assert_current_path edit_company_path(@company)
    assert_selector "h1", text: "Editing company"
    fill_in "name", with: @company.name
    click_on "Update Company"
    assert_text "Company was successfully updated"
    find("a[href='/companies']").click

    assert_current_path companies_path
  end
end
