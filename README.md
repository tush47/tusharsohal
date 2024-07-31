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

  The website should now be running on http://localhost:3000.
  
6.  ## Deployment
  The site is deployed on Vercel. Follow these steps to deploy:
  
  Connect to Vercel
  
##  Sign up on Vercel.
  Connect your GitHub repository to Vercel.
##  Deploy
  
  Vercel will automatically build and deploy your project.
  Configure your environment variables on Vercel similar to your .env file.
  Project Structure
  src/components: Contains reusable React components.
  src/pages: Contains the main pages of the website.
  src/styles: Contains the CSS and styling files.
  src/utils: Contains utility functions and helpers.
  Contributing
  Contributions are welcome! Please fork the repository and submit a pull request for review.

##  License
  This project is licensed under the MIT License - see the LICENSE file for details.
  
##  Contact
  For any questions or issues, please contact me at tusharsohal@example.com.
  
  Thank you for visiting my portfolio!
