import React from 'react';
import { useForm } from 'react-hook-form';

export default function NuevoPostForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm();

  const onSubmit = (data) => {
    console.log('Formulario enviado:', data);
    alert('¡Publicación creada con éxito!');
    reset();
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Crear Nuevo Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded bg-light">
        {/* Título */}
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título</label>
          <input
            id="titulo"
            type="text"
            className={`form-control ${errors.titulo ? 'is-invalid' : ''}`}
            {...register("titulo", { required: true, minLength: 5 })}
          />
          {errors.titulo && (
            <div className="invalid-feedback">
              {errors.titulo.type === 'required'
                ? 'El título es obligatorio.'
                : 'Debe tener al menos 5 caracteres.'}
            </div>
          )}
        </div>

        {/* Contenido */}
        <div className="mb-3">
          <label htmlFor="contenido" className="form-label">Contenido</label>
          <textarea
            id="contenido"
            className={`form-control ${errors.contenido ? 'is-invalid' : ''}`}
            rows="4"
            {...register("contenido", { required: true, minLength: 20 })}
          />
          {errors.contenido && (
            <div className="invalid-feedback">
              {errors.contenido.type === 'required'
                ? 'El contenido es obligatorio.'
                : 'Debe tener al menos 20 caracteres.'}
            </div>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico (opcional)</label>
          <input
            id="email"
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Formato de correo inválido',
              },
            })}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        {/* Categoría */}
        <div className="mb-3">
          <label htmlFor="categoria" className="form-label">Categoría</label>
          <select
            id="categoria"
            className={`form-select ${errors.categoria ? 'is-invalid' : ''}`}
            defaultValue=""
            {...register("categoria", { required: true })}
          >
            <option value="" disabled>Selecciona una categoría</option>
            <option value="Tecnología">Tecnología</option>
            <option value="Vida">Vida</option>
            <option value="Noticias">Noticias</option>
          </select>
          {errors.categoria && (
            <div className="invalid-feedback">Selecciona una categoría.</div>
          )}
        </div>

        {/* Checkbox de términos */}
        <div className="mb-3 form-check">
          <input
            id="terminos"
            type="checkbox"
            className={`form-check-input ${errors.terminos ? 'is-invalid' : ''}`}
            {...register("terminos", { required: true })}
          />
          <label htmlFor="terminos" className="form-check-label">
            Acepto los términos y condiciones
          </label>
          {errors.terminos && (
            <div className="invalid-feedback d-block">
              Debes aceptar los términos para continuar.
            </div>
          )}
        </div>

        {/* Botón */}
        <button type="submit" className="btn btn-primary">Publicar</button>

        {/* Éxito */}
        {isSubmitSuccessful && (
          <div className="alert alert-success mt-3">
            ¡Post creado correctamente!
          </div>
        )}
      </form>
    </div>
  );
}
