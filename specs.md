# Book listing & mangement app

# Description: 
- create a Book listing and management app. the application loads its initial data from a JSON URL and displays a listing of all books on the homepage.
- Every book belongs to a single author and a single category.
- the JSON structure contains 3 arrays for Books, Authors and Categories.
- the author object have the following properties:
    - ID (unique identifier).
    - Name.
    - Job title.
    - Bio.
- the category object have the following properties:
    - ID.
    - Name.
- the book object have the following properties:
    - ID.
    - Name.
    - Description.
    - Author ID.
    - Category ID.
    - ISBN ([International Standard Book Number](https://en.wikipedia.org/wiki/International_Standard_Book_Number)).
    - Year published.
    - Number of pages.
    - Cover image URL.

- The header contains the following:
    - A link to the home screen (represented in the logo).
    - Three links for adding new item for book, author, and category.

- A sidebar contains a list of all authors and categories containing links to single author/category views respectively. the sidebar exists on all screens/views of the application.

## Attachments
- `books.json` contains the structured data for books, authors and categories.

## Application screens with routes specs:
### Display routes
- `/` home screen. shows a listing of all books. mockup #1
- `/book/:bookId` - Single book details screen.
- `/author/:authorId` - Single author view, shows info for the author and a listing of his/her books. e.g. `/author/50687497-5845-4f93-b1e8-0648eb1fc012`
- `/category/:categoryId` - Single category view, shows listing of books for that specific category. e.g. `/category/50687497-5845-4f93-b1e8-0648eb1fc012`

### Creation routes
- `/book/new` - add new book form
- `/author/new` - add new author form. only accessible if edit mode is active.
- `/category/new` - add new category form. only accessible if edit mode is active.

### Edit routes (optional)
- `/book/:bookId/edit` - edit book screen. only accessible if edit mode is active.
- `/author/:authorId/edit` - Edit author view. only accessible if edit mode is active. (Wireframe #13)
- `/category/:categoryId/edit` - Edit category view. only accessible if edit mode is active. (Wireframe #14)

<br />

# Requirements
Implement a SPA (Single Page Application) which fetches the JSON data on load, and contains at least the following screens:
- the Home screen.
- Either the single author screen or the single category screen.
- One of the creation screens (Add new book, author, category).

# Optional preferables
- Complete implementation of the wireframes. completing the task is not required. we just need to see enough to get an indicator of your thought process and how you organize things.
- Sorting: implement sorting for book listings by name and/or year published.
- Pagination. All book listings can be paginated with a specific number of items per page. e.g. 5
- Testing (either unit or functional).
- Edit mode: Enabling edit mode (through the button in the header) will activate the following changes throughout the whole application:
  - the 'Edit mode' button changes to 'Exit edit mode'.
  - the header changes in color, and an indicator label is added next to the logo (according to the wireframes).
  - Every single screen (Book, Author, Category) should contain an edit button besides the title (according to wireframes #9, #10, #11). the button links to the edit screen for this item.
  - Any book listing should contain an edit button for every book (as shown in wireframe #8, #10, #11)
- Search feature: Adding the ability to search for books by name, author, or ISBN.

# Notes
- You are free to use any library/framework. however React is highly preferred.
- The provided mock-ups are low fidelity wireframes. Good visual look and appearance is a nice to have. but has no weight in the judgement criteria. you are free to use any UI library or rollout you own styling.
- You can use the [UUID](https://www.npmjs.com/package/uuid) package to generate unique IDs when adding new book, author or category.

