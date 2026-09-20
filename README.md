# ✨ Lumina Vision — Interactive Image Gallery

**Lumina Vision** is a modern, responsive, and interactive image gallery web application developed as part of my **Frontend Development Internship at CodeAlpha**.

The project focuses on creating a visually appealing gallery experience with modern UI design, smooth animations, interactive filtering, image search, favorites, and an advanced lightbox viewer.

---

## 🌟 Features

### 🖼️ Interactive Image Gallery

* Responsive image gallery layout
* Modern card-based design
* Hover effects and smooth animations
* Lazy loading for gallery images
* Grid and List view options

### 🔎 Search

Users can search images by:

* Image title
* Category
* Photographer
* Tags

The search results update dynamically as the user searches.

### 🏷️ Category Filtering

Images can be filtered by different categories:

* 🌲 Nature
* 🏛️ Architecture
* 🌃 Cyberpunk
* 🎭 Portrait
* 🎨 Abstract
* 🦅 Wildlife
* ✨ All Photos

Each category also displays the number of available images.

### ❤️ Favorites

Users can add images to their favorites.

* Add/remove images from favorites
* Favorites counter
* Dedicated Favorites filter
* Favorites are stored using browser `localStorage`

This allows favorite selections to remain available after refreshing the page.

### 📊 Sorting

Images can be sorted using:

* Featured
* Most Popular (Likes)
* Title (A-Z)
* Newest First

### 🔍 Advanced Lightbox

Clicking an image opens an immersive lightbox viewer with:

* Previous/Next navigation
* Image counter
* Image title
* Image description
* Photographer information
* Camera information
* Lens information
* ISO
* Shutter speed
* Thumbnail navigation

### ▶️ Slideshow

The lightbox includes an automatic slideshow mode that allows users to browse through the gallery automatically.

### 🔎 Image Zoom

Users can zoom into images while viewing them in the lightbox.

### ⛶ Fullscreen Mode

The image viewer supports fullscreen mode for a more immersive viewing experience.

### 🎨 Modern UI

The interface uses a modern dark glassmorphism-inspired design featuring:

* Glass effects
* Gradient accents
* Ambient background effects
* Smooth transitions
* Hover animations
* Responsive layouts
* Modern typography

The stylesheet defines a dark visual system with gradients, glass effects, shadows, animations, and responsive gallery layouts.

---

## 🛠️ Technologies Used

### Frontend

* **HTML5**
* **CSS3**
* **Vanilla JavaScript**

### Backend / Local Server

* **Node.js**
* Native Node.js `http` module

No frontend framework such as React, Vue, or Angular is used.

## The HTML structure connects the stylesheet and JavaScript entry point, while the JavaScript manages the gallery data, application state, filtering, rendering, and lightbox functionality.

## 📁 Project Structure

```text
lumina-vision/
│
├── index.html
├── styles.css
├── script.js
├── server.js
│
├── images/
│   ├── cyberpunk_city.png
│   ├── nature_mountain.png
│   └── abstract_art.png
│
└── README.md
```

> Make sure the `images` folder and its required image files are included in the GitHub repository.

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Folder

```bash
cd lumina-vision
```

### 3. Start the Node.js Server

```bash
node server.js
```

The project uses port `8080` by default.

### 4. Open in Browser

Visit:

```text
http://localhost:8080
```

The server serves `index.html`, CSS, JavaScript, images, and other supported static files.

---

## 💡 How the Application Works

The gallery images are stored as JavaScript objects containing information such as:

```text
ID
Title
Category
Image
Description
Photographer
Likes
Date
Camera
Lens
ISO
Shutter Speed
Tags
```

The application maintains its current state for:

```text
Category
Search Query
Sort Order
View Mode
Favorites
Lightbox
Slideshow
Zoom
```

The gallery is then dynamically filtered, sorted, and rendered according to the user's actions.

---

## 🎯 Internship Project

This project was developed as part of my **Frontend Development Internship at CodeAlpha**.

### Internship Role

**Frontend Development Intern**

### Project Focus

The main focus of this project was to practice and demonstrate:

* HTML structure
* CSS styling
* Responsive web design
* JavaScript DOM manipulation
* Event handling
* Dynamic rendering
* Filtering and searching
* Browser localStorage
* Interactive UI components
* Lightbox implementation
* Frontend project organization

---

## 📸 Gallery Categories

The application currently includes:

| Category         | Description                             |
| ---------------- | --------------------------------------- |
| 🌲 Nature        | Mountains, forests and landscapes       |
| 🏛️ Architecture | Modern architectural photography        |
| 🌃 Cyberpunk     | Neon cities and futuristic environments |
| 🎭 Portrait      | Portrait photography                    |
| 🎨 Abstract      | Abstract and digital artwork            |
| 🦅 Wildlife      | Wildlife and animal photography         |

---

## 🔧 Key JavaScript Functionality

Some of the major functionality implemented in JavaScript includes:

```javascript
filterAndRenderGallery()
```

Handles filtering, searching, sorting, and rendering the gallery.

```javascript
toggleFavorite()
```

Adds or removes images from favorites and stores them in `localStorage`.

```javascript
openLightboxByIndex()
```

Opens the selected image inside the lightbox.

```javascript
showNextImage()
showPrevImage()
```

Handles image navigation inside the lightbox.

```javascript
renderLightboxThumbnails()
```

Creates the thumbnail navigation inside the lightbox.

---

## 🎨 Design

The project uses a **dark glassmorphism-inspired visual style** with:

* Dark backgrounds
* Gradient colors
* Glass-like cards
* Blur effects
* Rounded components
* Animated background elements
* Smooth transitions
* Interactive hover states

The gallery uses a responsive CSS grid that automatically adjusts the number of columns based on the available screen width.

---

## 📱 Responsive Design

The interface is designed to work across different screen sizes, including:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

The gallery layout automatically adapts using CSS Grid and responsive sizing.

---

## 🔮 Future Improvements

Possible future improvements include:

* User authentication
* Cloud image storage
* Image upload functionality
* Backend database
* User profiles
* Real photographer accounts
* Persistent favorites using a database
* Image sharing
* Download functionality
* Advanced image metadata
* API-based image loading
* Pagination
* Accessibility improvements

---

## 👨‍💻 Author

**Frontend Development Intern**

Developed as part of the **CodeAlpha Frontend Development Internship**.

---

## 📄 License

This project was created for educational and internship purposes.

---

## ⭐ Acknowledgements

* **CodeAlpha** — Internship opportunity
* **Unsplash** — Image resources used in the gallery
* **Google Fonts** — Typography resources

---

### ⭐ If you like this project

Feel free to ⭐ star the repository and explore the source code!
