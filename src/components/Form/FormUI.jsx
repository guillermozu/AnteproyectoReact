
import "./Form.css";

export const FormUI = ({
  onChange,
  onSubmit,
  errors,
  formData,
}) => {
  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Contactanos</h2>

        <p className="form-description">
          Completá el formulario y nos pondremos
          en contacto con vos.
        </p>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
            />
            {errors.name && (
              <span className="form-error">
                {errors.name}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Apellido</label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={onChange}
            />
            {errors.lastname && (
              <span className="form-error">
                {errors.lastname}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
            />
            {errors.email && (
              <span className="form-error">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={onChange}
            />
            {errors.message && (
              <span className="form-error">
                {errors.message}
              </span>
            )}
          </div>

          <button className="form-button" type="submit">
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
};
