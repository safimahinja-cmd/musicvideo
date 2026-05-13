# 🎵 Music Video Website

A dynamic ASP.NET Core MVC website featuring an embedded YouTube music video with custom CSS styling and JavaScript animations.

## 📋 Project Description

This website was created as a web development project to demonstrate:
- Embedding multimedia content (YouTube videos)
- Custom CSS styling and animations
- Interactive JavaScript functionality
- Modern web design with ASP.NET Core

## ✨ Features

- **Embedded YouTube Music Video**: Watch your favorite music video directly on the page
- **Custom CSS Styling**: 
  - Purple gradient background
  - Custom fonts and text shadows
  - Responsive video container
  - Animated floating music notes
- **JavaScript Animations**:
  - Interactive clickable box with spin and bounce animations
  - Hover effects with glowing shadows
  - Continuously animated music notes

## 🚀 Getting Started

### Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download)
- [Visual Studio 2026](https://visualstudio.microsoft.com/) or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/safimahinja-cmd/musicvideo.git
   ```

2. Navigate to the project directory:
   ```bash
   cd musicvideo
   ```

3. Open the solution in Visual Studio:
   ```bash
   start musicwebsite.sln
   ```
   Or simply double-click `musicwebsite.sln` in File Explorer

### Running the Application

1. Open the project in Visual Studio
2. Press **F5** or click the **Run** button to start debugging
3. Your default browser will open with the website

Alternatively, run from the command line:
```bash
cd musicwebsite
dotnet run
```

Then navigate to `https://localhost:5001` or `http://localhost:5000` in your browser.

## 🎨 Customization

### Changing the Music Video

To change the embedded YouTube video:

1. Open `musicwebsite\Views\Home\Index.cshtml`
2. Find the iframe with the YouTube embed URL
3. Replace the video ID in the `src` attribute:
   ```html
   src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
   ```
4. Get the video ID from any YouTube URL (e.g., `https://www.youtube.com/watch?v=YOUR_VIDEO_ID`)

### Modifying Styles

- **CSS**: Edit `musicwebsite\wwwroot\css\site.css`
- **JavaScript**: Edit `musicwebsite\wwwroot\js\site.js`
- **HTML Content**: Edit `musicwebsite\Views\Home\Index.cshtml`

## 📁 Project Structure

```
musicvideo/
├── musicwebsite/
│   ├── Controllers/
│   │   └── HomeController.cs
│   ├── Views/
│   │   ├── Home/
│   │   │   ├── Index.cshtml          # Main homepage
│   │   │   └── Privacy.cshtml
│   │   └── Shared/
│   │       └── _Layout.cshtml        # Site layout template
│   ├── wwwroot/
│   │   ├── css/
│   │   │   └── site.css              # Custom styles
│   │   ├── js/
│   │   │   └── site.js               # JavaScript animations
│   │   └── lib/                      # Bootstrap, jQuery, etc.
│   ├── Program.cs
│   └── appsettings.json
└── README.md
```

## 🛠️ Technologies Used

- **ASP.NET Core MVC** (.NET 10)
- **HTML5**
- **CSS3** (with animations and gradients)
- **JavaScript** (vanilla JS, no frameworks)
- **Bootstrap 5** (for layout utilities)
- **YouTube Embed API**

## 📝 Features Breakdown

### CSS Animations
- `fadeIn` - Smooth fade-in effect
- `fadeInDown` - Title slides down while fading in
- `zoomIn` - Video container zooms in on page load
- `float` - Music notes float up and down continuously
- `spin` - Box rotates 360 degrees
- `bounce` - Box bounces up and down

### JavaScript Interactivity
- Click event listener on animated box
- Hover effects with dynamic shadow changes
- Interval-based animation for music notes
- Scale transformations

## 🤝 Contributing

Feel free to fork this project and make your own modifications! If you have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

**Safi MAhinja**
- GitHub: [@safimahinja-cmd](https://github.com/safimahinja-cmd)

## 🙏 Acknowledgments

- YouTube for the embed functionality
- ASP.NET Core documentation
- Web development resources and tutorials

---

⭐ If you found this project helpful, please give it a star on GitHub!
