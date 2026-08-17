# 🦷 Mathews Dental Care

A modern, professional website for Mathews Dental Care clinic. This platform provides patients with easy access to dental services, appointment booking, staff information, and comprehensive oral health resources.

## ✨ Features

### 🏥 Services Showcase
- Display comprehensive dental services (general dentistry, cosmetic, orthodontics, etc.)
- Service descriptions and pricing information
- Treatment benefits and procedures explained
- Before & after galleries

### 📅 Appointment Booking
- User-friendly appointment scheduling system
- Real-time availability checking
- Multiple dentist profiles to choose from
- Appointment confirmation and reminders
- Cancellation and rescheduling options

### 👨‍⚕️ Team Profiles
- Meet the dental professionals
- Doctor credentials and specializations
- Experience and educational background
- Patient testimonials and reviews

### 📞 Contact & Location
- Multiple contact methods (phone, email, contact form)
- Google Maps integration for clinic location
- Business hours and availability
- Quick response contact forms

### 📚 Dental Health Resources
- Blog with oral health tips
- FAQ section addressing common concerns
- Preventive care guides
- Emergency dental procedures guide

### 👤 Patient Portal
- Patient account management
- Appointment history
- Digital prescription access
- Insurance information management
- Treatment plans and follow-ups

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS
- **Build Tool**: Vite
- **Package Manager**: Bun
- **Deployment**: Vercel
- **Components**: Shadcn/ui for accessible UI components

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+) or Bun runtime
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/decodedtanmay/mathews-dental-care.git
cd mathews-dental-care

# Install dependencies
bun install
# or
npm install
```

### Development

```bash
# Start development server
bun dev
# or
npm run dev

# Application will be available at http://localhost:5173
```

### Build

```bash
# Build for production
bun run build
# or
npm run build

# Preview production build
bun run preview
```

## 📁 Project Structure

```
mathews-dental-care/
├── src/
│   ├── components/           # Reusable components
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── AppointmentForm.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── TeamMember.tsx
│   │   ├── Testimonial.tsx
│   │   └── Footer.tsx
│   ├── pages/               # Page components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Team.tsx
│   │   ├── Appointments.tsx
│   │   ├── Contact.tsx
│   │   ├── Blog.tsx
│   │   └── FAQ.tsx
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API services
│   │   ├── appointmentService.ts
│   │   ├── contactService.ts
│   │   └── patientService.ts
│   ├── types/               # TypeScript definitions
│   ├── styles/              # Global styles
│   └── App.tsx
├── public/                  # Static assets
│   ├── clinic-images/
│   ├── doctor-photos/
│   └── icons/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.ts
```

## 🎨 Pages Overview

### Home Page
- Hero section with clinic overview
- Featured services
- Doctor highlights
- Patient testimonials
- Call-to-action for appointment booking

### Services Page
- Complete service catalog
- Detailed descriptions for each service
- Pricing information
- Treatment process explanations
- FAQ for each service

### Team Page
- Doctor profiles with photos
- Credentials and specializations
- Years of experience
- Patient reviews and ratings

### Appointment Page
- Interactive booking form
- Calendar with available slots
- Service selection
- Doctor preference
- Confirmation page

### Contact Page
- Contact form
- Multiple contact methods
- Clinic location map
- Business hours
- Emergency contact information

## 🔑 Environment Variables

Create a `.env.local` file:

```env
VITE_API_URL=https://api.example.com
VITE_CLINIC_NAME=Mathews Dental Care
VITE_CLINIC_PHONE=+1-XXX-XXX-XXXX
VITE_CLINIC_EMAIL=contact@mathewsdentalcare.com
```

## 📱 Key Features In Detail

### Responsive Design
- Mobile-optimized interface
- Tablet and desktop layouts
- Touch-friendly buttons and forms
- Fast loading performance

### Accessibility
- WCAG 2.1 AA compliance
- Semantic HTML
- ARIA labels
- Keyboard navigation support

### SEO Optimization
- Meta tags and descriptions
- Structured data markup
- sitemap.xml
- robots.txt
- Open Graph tags

### Performance
- Image optimization
- Code splitting
- Lazy loading
- Caching strategies

## 🚀 Deployment

Currently deployed on Vercel:
- **Live URL**: https://mathews-dental-care.vercel.app

### Deploy Your Own

```bash
# Using Vercel CLI
vercel

# Or connect GitHub repository to Vercel dashboard
```

## 🔐 Security

- HTTPS encryption
- Secure form submissions
- CAPTCHA for contact forms
- Patient data privacy compliance
- HIPAA considerations for health data

## 📊 Analytics

- Google Analytics integration
- Patient conversion tracking
- Appointment metrics
- Website performance monitoring

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Tanmay** - [GitHub Profile](https://github.com/decodedtanmay)

## 🙏 Acknowledgments

- React and TypeScript communities
- Shadcn/ui for component library
- TailwindCSS for styling
- Vercel for hosting

## 📞 Support & Feedback

For issues, suggestions, or questions:
- Open an [Issue](https://github.com/decodedtanmay/mathews-dental-care/issues)
- Check the documentation
- Contact via GitHub

---

**⭐ If this project helps you, please give it a star!**

Developed with care for modern dental practices