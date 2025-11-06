// ===============================
// 🔗 Conexión Supabase TIGO–Emtelco
// ===============================

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// 🔧 Configuración de tu proyecto (no modificar)
export const SUPABASE_URL = 'https://pximhdonxjekxhchyzca.supabase.co'
export const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4aW1oZG9ueGpla3hoY2h5emNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyOTg1MjUsImV4cCI6MjA3Nzg3NDUyNX0.XvA5rIyoEm6gOgPhNc03hdk9CorKfI4j4r190o7rEhM'

// ✅ Cliente global para uso en toda la app
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// ===============================
// 🧩 Funciones comunes
// ===============================

/**
 * Obtener el correo del usuario logueado (desde localStorage)
 */
export function obtenerCorreoActivo() {
  return localStorage.getItem('usuarioActivo') || null
}

/**
 * Cerrar sesión
 */
export function cerrarSesion() {
  localStorage.removeItem('usuarioActivo')
  window.location.href = 'index.html'
}

/**
 * Guardar checklist en Supabase
 */
export async function guardarChecklist(correo, tipo, notas) {
  const fecha = new Date().toISOString()
  const { error } = await supabase.from('checklists').insert([
    {
      correo,
      tipo_instalacion: tipo,
      notas,
      fecha,
    },
  ])
  return error
}