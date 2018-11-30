Then('I should see {string}') do |content|
    expect(page).to have_content content
end

Then('I click {string}') do |rock|
    find('img#rock').click
end

Then('show me the page') do
    save_and_open_page
end

Then('computerChoice is {string}') do |string|
    computerChoice = string
end