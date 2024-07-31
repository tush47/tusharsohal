# Tushar Sohal's Portfolio Website

This is the repository for my personal portfolio website, showcasing my projects, skills, and professional journey. The website is built using React and TypeScript, with content management handled by Prismic.io, a serverless CMS. The site is deployed on Vercel for fast and reliable performance.

## Features

- **React + TypeScript**: Modern web development stack ensuring a scalable and maintainable codebase.
- **Prismic.io**: Serverless CMS for flexible and efficient content management.
- **GSAP Animations**: Smooth and interactive animations for a dynamic user experience.
- **Vercel Deployment**: Seamless and fast deployment with Vercel.

## Installation

### Prerequisites

- Node.js and npm installed
- Prismic.io account for content management
- Vercel account for deployment (optional for local development)

### Steps

1. **Clone the Repository**

    ```sh
    git clone https://github.com/tush47/tusharsohal.git
    cd tusharsohal
    ```

2. **Install Dependencies**

    Use npm to install the project dependencies:

    ```sh
    npm install
    ```

3. **Setup Prismic.io**

    - Sign up on [Prismic.io](https://prismic.io/).
    - Create a new repository.
    - Add the necessary content types and fill them with your data.
    - Get your Prismic API endpoint and add it to your environment variables.

4. **Configure Environment Variables**

    Create a `.env` file in the root directory and add the following:

    ```sh
    REACT_APP_PRISMIC_API_ENDPOINT="your_prismic_api_endpoint"
    ```

5.  ## Development
  
  To start the development server, run:
  
  ```sh
  npm run start
  ...
