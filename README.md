
# Frontend Testing (JavaScript + Playwright)

This repo contains:
- **Playwright E2E** test: log in to the demo, view the **Leads** list, open a lead’s details.
- **Jest + React Testing Library** unit test for a tiny React component (`Hello.jsx`).

## Why Playwright? (short and honest)
- **Web‑first, batteries included**: cross‑browser (Chromium/WebKit/Firefox), auto‑waits for UI to be ready, handy trace viewer.
- **Fast & CI‑friendly**: one command installs browsers and runs headless on GitHub Actions.
- **Great selectors**: `getByRole`/`getByText` for readable, resilient tests.

## Project Structure

```
espocrm-frontend-testing/
├─ src/
│  └─ Hello.jsx                   # Simple demo component; exports `Hello` and defaults to it
├─ unit/
│  └─ Hello.test.jsx              # Unit test with React Testing Library
├─ e2e/ 
│  └─ tests/
│     └─ leads.spec.js            # E2E: login → Leads list → open a lead
├─ .github/workflows/tests.yml    # CI for unit + e2e
├─ package.json
├─ jest.config.js
├─ jest.setup.js
├─ babel.config.js
├─ playwright.config.js
└─ README.md
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

- Default E2E base URL: `https://demo.us.espocrm.com/`.
- Override with env var if needed:
  ```bash
  BASE_URL=https://demo.us.espocrm.com/ npm run test:e2e
  ```

## E2E test flow (kept short)
1. Navigate to `#Lead/list` (EspoCRM uses hash routing for entity lists).
2. If a login form appears on the **US demo**, it lets you proceed **without credentials**—the test clicks the submit button if present.
3. Assert the **Leads** list is visible.
4. Click the first lead link (URLs look like `#Lead/view/{id}`) and assert the detail view loads.

> Note: The public demo occasionally changes. The test uses robust selectors (`getByRole`) and waits, but if the Leads list is temporarily empty the “open a lead” step may not find an item.

## Unit test
The unit test verifies the `LeadDetails` component shows core fields and that email/phone/website are rendered as proper links. The component ships with an exported `lead` object and defaults to it so the test has zero setup.

## CI/CD
GitHub Actions workflow:
- Installs Node dependencies.
- Installs Playwright browsers.
- Runs Jest (unit) then Playwright (e2e).
- Uploads Playwright HTML report if E2E fails.

## Tweaks you might want
- Add `projects` in `playwright.config.js` to run Chromium/Firefox/WebKit matrix.
- Record traces/videos for all tests by setting `trace: 'on'`.
- Stabilize the E2E by seeding data (if you control the backend) or by adding a fallback that creates a lead via UI/API when the list is empty.

---

### Credits / Notes
- The US demo currently allows logging in without credentials.
- EspoCRM uses hash‑based routes; the Leads list and record view routes follow patterns like `#Lead/list` and `#Lead/view/{id}`.

