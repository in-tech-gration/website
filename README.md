This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<details>
  <summary><h2>Getting Started / Installation</h2></summary>

  Make sure you have all the dependencies installed after you've cloned the repo:

  ```bash
  npm install 
  ```

  First, run the development server:

  ```bash
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  ```

  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

  You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

  [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

  The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

  This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

  You might want to create a `.gitignore` file and include `.next/` folder which is used for caching so that it is not uploaded on GitHub. Make sure to include `.gitignore` inside the `.gitignore` file so that it is kept locally.

  <h3>Firebase Setup</h3>

  Rename the `.env.local.sample` file (found in the root directory) to `env.local` and update the environmental variable values with the ones you got from Firebase.

  *Be careful never to upload the .env.local file. You want the file added in your .gitignore*

  ```Dotenv
  NEXT_PUBLIC_FIREBASE_API_KEY=api-key
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=auth-domain
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=project-id
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=storage-bucket
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=sender-id
  NEXT_PUBLIC_FIREBASE_APP_ID=app-id
  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=analytic-id
  FIREBASE_SECRET_KEY=firebase-admin-sdk-json-file
  ```
  
  

</details>

<details>
  <summary><h2>Learn More about Next.js</h2></summary>

  To learn more about Next.js, take a look at the following resources:

  - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
  - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

  You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

</details>


<details>
  <summary><h2>Deployment</h2></summary>

  ### Deploy on Vercel

  The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

  Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

</details>


