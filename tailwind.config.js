import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            backgroundImage: {
                'inscription-form': "url('images/students2.0.jpg')",
                'contact-form': "url('images/student.jpg')",
                'main': "url('images/abc.jpg')",
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                classic: {
                    primary: '#ffffff',
                    secondary: '#f5f5f5',
                    text: '#212529',
                    accent: '#4caf50',
                    active: '#d4d4d4', // Un tono más claro para el estado activo
                },
                // Tema 2: Estilo Oscuro
                dark: {
                    primary: '#121212',
                    secondary: '#212121',
                    text: '#ffffff',
                    accent: '#4caf50',
                    active: '#333333', // Un tono más oscuro para el estado activo
                },
                // Tema 3: Diseño Monocromático
                monochrome: {
                    primary: '#dddddd',
                    secondary: '#cccccc',
                    text: '#333333',
                    accent: '#4caf50',
                    active: '#bbbbbb', // Un tono más neutro para el estado activo
                },
                // Tema 4: Estilo Vintage
                vintage: {
                    primary: '#e0d6ae',
                    secondary: '#c5b39e',
                    text: '#423f3f',
                    accent: '#4caf50',
                    active: '#bab393', // Un tono más vintage para el estado activo
                },
                // Tema 5: Minimalismo con Toques de Color
                minimalist: {
                    primary: '#f0f0f0',
                    secondary: '#d8d8d8',
                    text: '#333333',
                    accent: '#ff6f61',
                    active: '#e2e2e2', // Un tono más claro para el estado activo
                },
                // Tema 6: Estilo Material Design
                material: {
                    primary: '#03a9f4',
                    secondary: '#0288d1',
                    text: '#ffffff',
                    accent: '#4caf50',
                    active: '#0277bd8f', // Un tono más material para el estado activo
                },
                // Tema 7: Paleta de Joyas
                jewel: {
                    primary: '#2d3142',
                    secondary: '#4f5d75',
                    text: '#e8e8e8',
                    accent: '#ffd803',
                    active: '#6d7484', // Un tono más joya para el estado activo
                },
                // Tema 8: Diseño Geométrico
                geometric: {
                    primary: '#ff8484',
                    secondary: '#ffe184',
                    text: '#333333',
                    accent: '#3333ff',
                    active: '#ff7a7a', // Un tono más geométrico para el estado activo
                },
                // Tema 9: Estilo Art Deco
                artDeco: {
                    primary: '#f6f1d1',
                    secondary: '#ede0c8',
                    text: '#2b2b2b',
                    accent: '#c70039',
                    active: '#ddd0b4', // Un tono más art deco para el estado activo
                },
                // Tema 10: Temática Natural
                natural: {
                    primary: '#b2c9ab',
                    secondary: '#849b87',
                    text: '#3d3d3d',
                    accent: '#ffd803',
                    active: '#a1b198', // Un tono más natural para el estado activo
                },
            },
        },
    },
    safelist: [
        { pattern: /bg-(classic|dark|monochrome|vintage|minimalist|material|jewel|geometric|artDeco|natural)-(primary|secondary|accent|active)/ },
        { pattern: /text-(classic|dark|monochrome|vintage|minimalist|material|jewel|geometric|artDeco|natural)-(text|accent|active)/ },
        { pattern: /border-(classic|dark|monochrome|vintage|minimalist|material|jewel|geometric|artDeco|natural)-(primary|secondary|accent|active)/ },
        { pattern: /bg-(red|green|blue|yellow|orange|purple|indigo)-500/ },


    ],
    plugins: [forms],
};
