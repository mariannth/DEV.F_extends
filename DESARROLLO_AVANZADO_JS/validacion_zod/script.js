// Importamos Zod
const { z } = window.Zod;

// Definimos el esquema de validación
const registerSchema = z
  .object({
    name: z.string().min(1, { message: "El nombre no puede estar vacío" }),
    email: z
      .string()
      .email({ message: "El correo no tiene un formato válido" }),
    password: z
      .string()
      .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
    confirmPassword: z.string().min(6, { message: "Confirma tu contraseña" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"], // Error apuntará a este campo
  });

// Evento de validación al enviar el formulario
document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtenemos los datos del formulario
  const formData = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value,
    confirmPassword: document.getElementById("confirmPassword").value,
  };

  try {
    // Validamos con Zod
    registerSchema.parse(formData);

    // Limpiamos errores anteriores
    document.getElementById("errors").textContent = "";

    // Éxito
    alert("¡Registro exitoso!");
    // Aquí podrías enviar los datos a un servidor real usando fetch()
  } catch (error) {
    // Mostrar errores
    const mensajes = error.errors.map((e) => e.message);
    document.getElementById("errors").textContent = mensajes.join(" | ");
  }
});
