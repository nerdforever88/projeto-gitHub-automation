# GitHub Cypress Tests

This project contains automated tests for GitHub's authentication and repository functionality using Cypress and Jest.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- A GitHub account

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure your GitHub credentials:
   - Create a `.env` file in the project root
   - Copy the contents from `.env.example` (if available) or use this template:
     ```
     GITHUB_USERNAME=your_github_username
     GITHUB_PASSWORD=your_github_password
     GITHUB_EXPECTED_USERNAME=your_github_username
     ```
   - Replace the placeholder values with your actual GitHub credentials

## Running Tests

1. Open Cypress Test Runner:
   ```bash
   npx cypress open
   ```
   - Click on the test file you want to run

2. Run tests in headless mode:
   ```bash
   npx cypress run
   ```

## Test Cases

1. **Authentication and Navigation**
   - Verifies successful login
   - Validates user redirection
   - Checks username display

2. **Repository Interaction**
   - Navigates to repositories
   - Accesses a random repository
   - Creates a new repository
   - Takes screenshots

3. **Logout**
   - Tests successful logout
   - Verifies redirection to home page

## Folder Structure

```
├── cypress/
│   ├── e2e/                # Test files
│   ├── fixtures/           # Test data
│   ├── screenshots/        # Screenshots on failure
│   ├── support/            # Custom commands and utilities
│   └── videos/             # Video recordings of test runs
├── img/                    # Custom screenshot directory
├── cypress.config.js       # Cypress configuration
└── package.json           # Project dependencies
```

## Notes

- The test will create a new repository with a random name
- Screenshots are saved in the `cypress/screenshots` directory
- Videos of test runs are saved in the `cypress/videos` directory
- Never commit your actual GitHub credentials to version control
