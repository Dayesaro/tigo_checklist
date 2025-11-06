// Archivo: script.js
import { supabase } from './supabase.js';

// Login form
const form = document.getElementById('loginForm');
const message = document.getElementById('loginMessage');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email.endsWith('@experiencia.emtelco.com.co')) {
    message.textContent = '❌ Solo se permiten correos corporativos @experiencia.emtelco.com.co';
    message.style.color = 'red';
    return;
  }

  // Intentar autenticación
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    message.textContent = '❌ Error en la autenticación o usuario no registrado.';
    message.style.color = 'red';
    return;
  }

  // Éxito → Redirigir al dashboard
  message.textContent = '✅ Iniciando sesión...';
  message.style.color = 'lightgreen';
  setTimeout(() => {
    window.location.href = `dashboard.html?email=${encodeURIComponent(email)}`;
  }, 1000);
});