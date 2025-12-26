# AngularMesh

A modern Angular school project demonstrating API integration with DummyJSON for managing Users, Posts, and Products.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://angular-mesh.vercel.app)
[![Angular](https://img.shields.io/badge/Angular-18.2.21-red)](https://angular.io/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-blue)](https://tailwindcss.com/)

## 🎯 Project Overview

AngularMesh is an educational project built with Angular that demonstrates practical API consumption patterns using the DummyJSON REST API. The application showcases real-world development practices including data fetching, state management, and responsive UI design.

## ✨ Features

- **User Management**: Browse and view user profiles from DummyJSON API
- **Post Feed**: Display and interact with social media posts
- **Product Catalog**: Explore product listings with detailed information
- **Responsive Design**: Mobile-first design using TailwindCSS
- **Modern Angular**: Built with Angular 18 using latest best practices

## 🚀 Live Demo

Check out the live application: [angular-mesh.vercel.app](https://angular-mesh.vercel.app)

## 🛠️ Tech Stack

- **Framework**: Angular 18.2.21
- **Styling**: TailwindCSS
- **API**: [DummyJSON](https://dummyjson.com/) - Free REST API for placeholder data
- **Language**: TypeScript
- **Build Tool**: Angular CLI
- **Deployment**: Vercel

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v16 or higher)
- npm (v8 or higher)
- Angular CLI (v18 or higher)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/TheKings294/AngularMesh.git
cd AngularMesh
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to:
```
http://localhost:4200/
```

The application will automatically reload when you make changes to the source files.

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `ng serve` | Start development server at `http://localhost:4200/` |
| `ng build` | Build the project for production |
| `ng test` | Run unit tests via Karma |
| `ng e2e` | Run end-to-end tests |
| `ng generate component <name>` | Generate a new component |
| `ng help` | Display available Angular CLI commands |

## 🏗️ Project Structure

```
AngularMesh/
├── src/
│   ├── app/              # Application components and modules
│   ├── assets/           # Static assets
│   ├── environments/     # Environment configurations
│   └── styles/           # Global styles and Tailwind config
├── public/               # Public assets
├── angular.json          # Angular workspace configuration
├── tailwind.config.js    # TailwindCSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## 🌐 API Integration

This project uses the [DummyJSON API](https://dummyjson.com/) which provides:

- **Users**: User profiles with details like name, email, and address
- **Posts**: Social media posts with content and metadata
- **Products**: Product catalog with prices, descriptions, and images

Example API endpoints used:
```typescript
https://dummyjson.com/users
https://dummyjson.com/posts
https://dummyjson.com/products
```

## 🎨 Styling

The project uses TailwindCSS for styling, providing:

- Utility-first CSS framework
- Responsive design out of the box
- Customizable design system
- Dark mode support (if implemented)

## 🧪 Testing

Run unit tests:
```bash
ng test
```

Run end-to-end tests:
```bash
ng e2e
```

Note: You may need to install an e2e testing package first.

## 📚 Learning Objectives

This project demonstrates:

- Angular component architecture and lifecycle
- HTTP client and API integration
- TypeScript interfaces and type safety
- Reactive programming with RxJS
- Routing and navigation
- Responsive UI design with TailwindCSS
- Modern development workflows

## 🤝 Contributing

This is a school project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is created for educational purposes.

## 👨‍💻 Author

**TheKings294**
- GitHub: [@TheKings294](https://github.com/TheKings294)

**Mourad**
- GitHub: [@Mourad9101](https://github.com/Mourad9101)
## 🙏 Acknowledgments

- [Angular Team](https://angular.io/) for the amazing framework
- [DummyJSON](https://dummyjson.com/) for providing the free API
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com/) for hosting

## 📖 Additional Resources

- [Angular Documentation](https://angular.dev/)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [DummyJSON API Docs](https://dummyjson.com/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

---

⭐ If you find this project helpful, please consider giving it a star on GitHub!
