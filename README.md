# Auto Scroll Komik Web App

## Persyaratan
- Node.js 18+ 
- npm atau yarn

## Struktur Direktori Proyek
```
automated-web-scroll/
│
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── slider.tsx
│       └── ...
│
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
│
├── public/
│   └── images/
│       └── placeholder-comic.jpg
│
├── styles/
│   └── globals.css
│
├── features/
│   └── auto-scroll/
│       └── AutoScroll.tsx
│
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Isi File

### `package.json`
```json
{
  "name": "comic-auto-scroll",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@radix-ui/react-slider": "^1.1.2",
    "lucide-react": "^0.321.0",
    "tailwindcss": "^3.4.1",
    "shadcn-ui": "^0.8.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.20",
    "@types/react": "^18.2.57",
    "typescript": "^5.3.3",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.1.0"
  }
}
```

### `features/auto-scroll/AutoScroll.tsx`
```typescript
import React, { useState, useEffect, useRef } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Pause, Play, ArrowUp, ArrowDown } from 'lucide-react';

const AutoScroll: React.FC = () => {
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isControlVisible, setIsControlVisible] = useState(true);
  const scrollContainerRef = useRef(null);

  // ... (implementasi fungsi sama seperti komponen sebelumnya)
};

export default AutoScroll;
```

### `pages/index.tsx`
```typescript
import React from 'react';
import Head from 'next/head';
import AutoScroll from '@/features/auto-scroll/AutoScroll';

const HomePage: React.FC = () => {
  return (
    
      
        Auto Scroll Komik
        
        
      
      
        
      
    
  );
};

export default HomePage;
```

### `.gitignore`
```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env.local
.env.development.local
.env.test.local
.env.production.local

# vercel
.vercel
```

### `README.md`
```markdown
# Auto Scroll Komik Web App

## Deskripsi
Aplikasi web untuk membaca komik dengan fitur scroll otomatis yang dapat disesuaikan.

## Fitur
- Scroll otomatis dengan kontrol kecepatan
- Kontrol mengambang yang dapat disembunyikan
- Desain responsif

## Instalasi

1. Clone repository
```bash
git clone https://github.com/username/comic-auto-scroll.git
cd comic-auto-scroll
```

2. Install dependencies
```bash
npm install
# atau
yarn install
```

3. Jalankan server pengembangan
```bash
npm run dev
# atau
yarn dev
```

## Deployment
Proyek siap di-deploy ke Vercel. Cukup hubungkan repository GitHub Anda ke Vercel.

## Teknologi
- Next.js
- React
- Tailwind CSS
- shadcn/ui
- Lucide Icons
```

### Langkah Deployment ke Vercel

1. Buat repository baru di GitHub
2. Push kode ke repository
3. Kunjungi vercel.com
4. Import repository GitHub
5. Konfigurasi default untuk proyek Next.js

## Konfigurasi Tambahan

### `next.config.js`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
```

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```