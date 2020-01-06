# General notes on progress made

## ToDo's

- Add Month selector to budget header

- Add functionality to category component
  - When clicked, edit menu appears

- Accounts View
  - Networth (sum of balance)
  - Array of accounts
    - id, name, balance
- Add functionality to add account dialog

- Update add-transaction component to fetch real values for other fields
- Add save transaction button

- Add watermark date to app when rebuilding with cordova

## December 3rd
- Added category and categoryGroup models and dummy data
- Added routing for budget view
- Added basic html and scss for category, categoryGroup and budget
- Decided budget has `Array<CategoryGroups>`, and each CategoryGroup has `Array<Category>`
- Basic category, categoryGroup and budget view working

## December 4th
- Added routing for remaining nav bar buttons
  - Click now takes you to that page
- Add basic accounts view and test data
- Add account dialog with three fields (type, name, balance).
- Add account button on accounts view opens add account dialog

## December 5th
- Added add-transaction component
- Added number pad component and basic layout for numbers including function for button click
- Added clear and confirm buttons to number pad along with eventemitter functionality
- Linked numbers from number pad up to amount variable
- Added placeholder text for rest of add transaction

## December 22nd
- Added cordova files to package.json
- Not yet working. Continue to debug

## December 28th
- Created generic cordova-wrapper script

## December 29th
- Set up local storage for accounts
- Add functionality for adding new account (this updates local storage)

## December 30th
- Fix accounts total
- Fix bug with cordova-wrapper not copying build files

## January 3rd
- Added rebuild and rename args to cordova-wrapper
- Phone app now has user friendly name
- Add basic color formatting for positive and negative transactions
- Added generic local storage service
- Add service for transactions along with initial transaction interface

## January 4th
- Add header component
- Add category group service
- Add update function to local-storage service
- Add edit-categories view and basic open/close functionality
  - And placeholders for footer to delete and add new group
- Create ButtonOptionInterface and made url optional

## January 5th
- Add category groups and categorys to edit categories view
- Update test data for category groups
- Add editMode to categoryGroups and category components
- Began modifying html for categorygroup to show check box and move button. Additional functionality required

TODO:
- Use save category groups service in budget view
- Add category group

