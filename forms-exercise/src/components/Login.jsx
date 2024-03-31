import { useState } from "react";

export function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    rememberCheckbox: false,
  });

  function handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted:", form);
  }

//reset form after being submitted
  function handleReset () {
    setForm({
      username: "",
      password: "",
      rememberCheckbox: false,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Do you want to be remembered:</label>
        <input
          type="checkbox"
          name="rememberCheckbox"
          checked={form.rememberCheckbox}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit" disabled={!form.username || !form.password}>Login</button>
        <br />
        <button type='reset' onClick={handleReset}>Reset</button>
      </form>
      
    
    </>
  );
}

