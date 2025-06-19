import { useState } from "react";
export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
    gender: "",
    interests: [],
  });
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username obbligatorio";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username deve essere almeno 3 caratteri";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email obbligatoria";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email non valida";
    }

    if (!formData.password) {
      newErrors.password = "Password obbligatoria";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password deve essere almeno 6 caratteri";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const updateField = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleSubimt = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };
  const handleInterestChange = (interest) => {
    setFormData((prevData) => ({
      ...prevData,
      interests: prevData.interests.includes(interest)
        ? prevData.interests.filter((i) => i !== interest)
        : [...prevData.interests, interest],
    }));
  };

  return (
    <form onSubmit={handleSubimt}>
      <div>
        <label>Username</label>

        <input
          type="text"
          value={formData.username}
          onChange={(e) => updateField("username", e.target.value)}
          style={{
            border: errors.username ? "2px solid red" : "1px solid gray",
          }}
        />
        {errors.username && <div>{errors.username}</div>}
      </div>
      <div>
        <label>Email</label>

        <input
          type="text"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
        />
        {errors.email && <div>{errors.email}</div>}
      </div>
      <div>
        <label>Password</label>

        <input
          type="text"
          value={formData.password}
          onChange={(e) => updateField("password", e.target.value)}
        />
        {errors.password && (
          <div style={{ color: "red", fontSize: "14px" }}>
            {errors.password}
          </div>
        )}
      </div>
      <div>
        <label>Paese:</label>
        <select
          value={formData.country}
          onChange={(e) => updateField("country", e.target.value)}
        >
          <option value="">Seleziona un paese</option>
          <option value="italy">Italia</option>
          <option value="france">Francia</option>
          <option value="germany">Germania</option>
          <option value="germany">Lussemburgo</option>
        </select>
      </div>
      <div>
        <label>Genere:</label>
        <label>
          <input
            type="radio"
            value="male"
            checked={formData.gender === "male"}
            onChange={(e) => updateField("gender", e.target.value)}
          />
          Maschio
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={formData.gender === "female"}
            onChange={(e) => updateField("gender", e.target.value)}
          />
          Femmina
        </label>
        <label>
          <input
            type="radio"
            value="nonDefined"
            checked={formData.gender === "nonDefined"}
            onChange={(e) => updateField("gender", e.target.value)}
          />
          Preferisco non specificarlo
        </label>
      </div>
      <div>
        <label>Interessi:</label>
        {["Sport", "Musica", "Viaggi", "Tecnologia"].map((interest) => (
          <label key={interest}>
            <input
              type="checkbox"
              checked={formData.interests.includes(interest)}
              onChange={() => handleInterestChange(interest)}
            />
            {interest}
          </label>
        ))}
      </div>
      <button type="submit">Registrati</button>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </form>
  );
}
