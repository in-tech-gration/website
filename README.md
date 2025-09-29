# Installation

  - `git clone git@github.com:in-tech-gration/website.git`
  - `cd website`
  - `npm install`
  - `npm run dev`

# Development: `npm run dev`

## HOW TO

- How to update the top menu?
> Data: Update config.yaml
> UI: Edit => components/ui/header.tsx

- How to update the top-most section on the Homepage?
> Edit: /components/join.tsx

- How to update/change/disable the Apply links?
> Update config.yaml (this also updates hero.tsx button and affects /app/(default)/faq/FaqClientComponent.tsx as well)

- Why are dynamically-applied Tailwind class names are not applied?
> Update 'safelist' in tailwind.config.js

- How to update the FAQ page?
> Edit `config.yaml`, and specifically the `faqs` section