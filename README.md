# Astro Starter Medusa

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #8a6d3b;; background-color: #fcf8e3; border-color: #faebcc;">
  <p><strong>Note</strong>: This repository is currently not part of Medusa nor Astro.</p>
  <p><strong>Note</strong>: The project it is currently in a very early stage and it is not usable at all. If you want to contribute you are more than welcome but if you came looking for something that will work out of the box it is not the case.</p>
</div>

## Features

- SSG. the access to the product db and CMS happens only during build time.
- Authentication. It works at least with Medusa's auth. But maybe consider Auth0, Supabase, and Nhost.
- Feedback system. Toast or alerts flow already implemented
- Emails integration. It is done by Medusa but it offers the handles.
- I18n.
- Assets management.
- SEO.

Status color code:

| Color | Meaning     |
| ----- | ----------- |
| 🔴    | Not started |
| 🟡    | In progress |
| 🟢    | Ready       |

| Feature  | Status |
| :------- | :----- |
| SSG      | 🟡     |
| Auth     | 🔴     |
| Feedback | 🔴     |
| Email    | 🔴     |
| I18n     | 🔴     |
| Assets   | 🔴     |
| SEO      | 🔴     |

### Routes

There is an overview diagram in this [Penpot](https://design.penpot.app/#/view/68ed4b09-2f3c-800a-8002-1cf56a67fac6?page-id=68ed4b09-2f3c-800a-8002-1cf56a67fac7&section=interactions&index=0&share-id=3aa36115-a896-8122-8002-21266e2c4ba3).

| Route             | Path                 | Functionality Status | Design status |
| :---------------- | :------------------- | :------------------- | :------------ |
| Index             | `/`                  | 🟡                   | 🔴            |
| Sign Up           | `/sign-up`           | 🟡                   | 🔴            |
| Log In            | `/log-in`            | 🟡                   | 🔴            |
| Log Out           | `/log-out`           | 🔴                   | 🔴            |
| Account index     | `/account`           | 🔴                   | 🔴            |
| Account addresses | `/account/addresses` | 🔴                   | 🔴            |
| Account profile   | `/account/profile`   | 🔴                   | 🔴            |
| Orders            | `/orders`            | 🔴                   | 🔴            |
| Order details     | `/orders/:id`        | 🔴                   | 🔴            |
| Products details  | `/products/:handle`  | 🟡                   | 🔴            |
| Cart              | `/cart`              | 🔴                   | 🔴            |
| Checkout          | `/checkout`          | 🔴                   | 🔴            |
| Privacy           | `/privacy`           | 🟡                   | 🔴            |
| Terms of service  | `/toc`               | 🔴                   | 🔴            |

## Getting started

This project was created using Astro minimal starter.

```
npm create astro@latest -- --template minimal
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name. There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components. Any static assets, like images, can be placed in the `public/` directory.

Available commands:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `pnpm i`            | Installs dependencies                            |
| `pnpm dev`          | Starts local dev server at `localhost:3000`      |
| `pnpm build`        | Build your production site to `./dist/`          |
| `pnpm preview`      | Preview your build locally, before deploying     |
| `pnpm astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro --help` | Get help using the Astro CLI                     |
