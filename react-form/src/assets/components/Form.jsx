/*import { useState } from "react";

const UserForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    username: "",
  });

  const handleNameChange = (event) => {
    const value = event.target.value;
    // Permette lettere, spazi e caratteri accentati (es. "è", "ñ")
    const cleanValue = value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
    setName(cleanValue);

    // Validazione
    if (cleanValue.length < 8) {
      setErrors({ ...errors, name: "Il nome deve avere almeno 8 caratteri" });
    } else {
      setErrors({ ...errors, name: "" });
    }
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    // Solo lettere e numeri (no spazi/simboli)
    const cleanValue = value.replace(/[^a-zA-Z0-9]/g, "");
    setUsername(cleanValue);

    // Validazione
    if (cleanValue.length < 8) {
      setErrors({
        ...errors,
        username: "L'username deve avere almeno 8 caratteri",
      });
    } else {
      setErrors({ ...errors, username: "" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errors.name && !errors.username && name && username) {
      alert(`Form inviato!\nNome: ${name}\nUsername: ${username}`);
    } else {
      alert("Compila correttamente tutti i campi!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div>
        <label>Nome completo:</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Inserisci il tuo nome"
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="inserisci il tuo username"
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>

      <button type="submit">Registrati</button>
    </form>
  );
};

export default UserForm;
*/
