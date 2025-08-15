
# Frontend Testing (JavaScript + Playwright)

This repo contains:
- **Playwright E2E** test: log in to the demo, view the **Leads** list, open a lead’s details.
- **Jest + React Testing Library** unit test for a tiny React component (`Hello.jsx`).

## Why Playwright? (short and honest)
- **Web‑first, batteries included**: cross‑browser (Chromium/WebKit/Firefox), auto‑waits for UI to be ready, handy trace viewer.
- **Fast & CI‑friendly**: one command installs browsers and runs headless on GitHub Actions.
- **Great selectors**: `getByRole`/`getByText`/`getByTitle`/`locator` for readable, resilient tests.

## Project Structure

```
├─ src/
│  └─ Hello.jsx                    # Simple demo component; exports `Hello` and defaults to it
├─ unit/
│  └─ Hello.test.jsx               # Unit test with React Testing Library
├─ e2e/
│  ├─ pages/                       # POM: locators only (no logic)
│  │  ├─ HomePage.js               # e.g., loginButton, etc.
│  │  ├─ NavBar.js                 # e.g., leadsLink, menu items
│  │  └─ LeadsPage.js              # e.g., refreshHeader, firstLeadLink
│  └─ tests/                       # Actions + assertions
│     └─ leads.spec.js             # E2E: login → Leads list → open a lead
├─ .github/workflows/tests.yml     # CI for unit + e2e
├─ package.json
├─ jest.config.js
├─ jest.setup.js
├─ babel.config.js
├─ playwright.config.js
└─ README.md
└─ .gitignore
```

### Naming conventions
- **E2E**: `*.spec.js` under `e2e/tests/`.
- **Unit**: `*.test.jsx` under `unit/`.
- **React components**: `PascalCase.jsx` (e.g., `Hello.jsx`).

## Running locally

Requirements: Node 18+

```bash
npm install
# Install Playwright browsers (first run only)
npm run pw:install

# Run unit tests
npm run test:unit

# Run e2e tests
npm run test:e2e
```

- Default E2E base URL: `https://demo.us.espocrm.com/`
- Override with env var if needed:
  ```bash
  BASE_URL=https://demo.us.espocrm.com/ npm run test:e2e
  ```

## E2E test flow (kept short)
1. Go to base URL.
2. If a login form appears on the **US demo**, it lets you proceed **without credentials**—the test clicks the submit button if present.
3. Navigate to `#Lead/list` (EspoCRM uses hash routing for entity lists).
4. Assert the **Leads** list is visible.
5. Click the first lead link (URLs look like `#Lead/view/{id}`) and assert the detail view loads.


## Unit test
The tests confirm the Hello component renders “Hello, {name}!” when a name is provided and falls back to “world” when it isn’t. An aria-labeled paragraph makes querying trivial, so the tests are zero-setup.

## CI/CD
GitHub Actions workflow:
- Installs Node dependencies.
- Installs Playwright browsers.
- Runs Jest (unit) then Playwright (e2e).
- Uploads Playwright HTML report if E2E fails.

---

### Credits / Notes
- The US demo currently allows logging in without credentials.
- EspoCRM uses hash‑based routes; the Leads list and record view routes follow patterns like `#Lead/list` and `#Lead/view/{id}`.

