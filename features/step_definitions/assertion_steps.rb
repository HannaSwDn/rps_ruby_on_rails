Then('I should see {string}') do |content|
    expect(page).to have_content content
end

Then('I click {string}') do |rock|
    find('img#rock').click
end