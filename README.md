# Magen Or – One-Page Website

This project contains a one-page website for **Magen Or**, a free web content filtering software. The site is built with React and modern HTML/CSS, focusing on credibility, safety, and warmth in its design and content.

## Sections and Features

- **Hero:** Presents the product name and tagline with a call-to-action.
- **Main Features:** Highlights key benefits of Magen Or with brief descriptions.
- **How It Works:** Explains in simple steps how Magen Or functions.
- **Screenshot Gallery:** Displays screenshots of the software interface.
- **Download:** Provides download links for Windows, macOS, and Linux (placeholders).
- **Donate:** Offers ways to support the project via PayBox and Bit.
- **Testimonials:** Shares quotes from users who benefited from Magen Or.
- **FAQ:** Answers common questions about the software.
- **Blog/News:** Shows recent news or updates about Magen Or.
- **Contact:** Provides a contact form and newsletter sign-up for user engagement.
- **Footer:** Contains navigation links, social/link icons (if any), and copyright info.

The design uses a **blue color scheme** inspired by the Magen Or logo (a shield icon) to convey trust and security, complemented by a warm accent color for interactive elements (e.g., buttons). A clean sans-serif font is used throughout for readability.

The site is fully **responsive** and mobile-friendly. On smaller screens, the navigation menu collapses into a hamburger menu for easy access. Images are set to lazy-load to improve performance, and subtle animations (CSS transitions and scroll reveal effects) enhance the user experience without distracting from content.

Accessibility (ARIA) is incorporated: the HTML structure uses semantic elements and labels (e.g., `nav` with `aria-label`, form fields with `aria-label`) to ensure screen readers can navigate effectively. All interactive elements are accessible via keyboard.

SEO considerations include meaningful section headings (H1, H2, etc.), meta description and keywords in the HTML, and descriptive alt text for images. The project can be further optimized with Open Graph tags for social sharing if needed.

## How to Run Locally

1. **Install Dependencies:** Ensure you have Node.js installed. Run `npm install` to install required packages (React, etc.).
2. **Start the Development Server:** Run `npm start`. This will launch the app at `http://localhost:3000` (if using Create React App or a similar setup).
3. **Build for Production:** Run `npm run build` to generate static files for deployment. The output will be in the `build/` directory, ready to be served by a web server or hosting service.

If you prefer a simple static setup, you can also use the contents of `public/index.html` along with the linked CSS/JS after building the project.

## Customization

- **Content:** All textual content is in English and can be updated in the respective component files under `src/components/`.
- **Colors & Branding:** Update color variables or classes in `src/App.css` to adjust the color scheme. The provided logo (`public/assets/images/logo.png`) can be replaced with your own branding as needed.
- **Sections:** To add or remove sections, edit `src/App.js` to include or exclude components, and create/remove component files accordingly. Navigation links in `src/components/NavBar.js` should also be updated to match any changes.
- **Newsletter Integration:** The newsletter sign-up form is currently a frontend placeholder. To integrate with a real email service, attach an onSubmit handler in `Contact.js` or use a library to connect to a service (e.g., Mailchimp API or backend endpoint).
- **Donation Links:** Replace the placeholder `href="#"` in Donate section with actual PayBox/Bit link or instructions as needed.

## Folder Structure

- `public/index.html` – The HTML template with meta tags (no need to edit often).
- `src/App.js` – Main component composing the page.
- `src/components/` – All section components (Hero, Features, etc.).
- `src/App.css` – Global styles for layout, typography, colors, and responsive design.
- `src/index.js` – React entry point rendering the App.
- `public/assets/images/` – Folder for images (logo and screenshots).

Feel free to modify the structure if using a different setup (e.g., integrating into an existing site or a different build tool).

## Deployment

The site can be deployed on any static site hosting or integrated into a larger project:
- For static hosting (GitHub Pages, Netlify, Vercel, etc.), use the production build.
- Ensure the `public/assets/images` folder is uploaded with the images.
- Set appropriate meta tags or environment variables if deploying to a specific domain (for example, update `<title>` and meta tags in `index.html` for SEO with the actual domain or name if needed).

---

Enjoy your safe browsing experience with **Magen Or**! If you have any questions or issues, please refer to the Contact section on the page to get in touch.

