export function getFormationsFromStorage() {
  const stored = localStorage.getItem("formations");
  return stored ? JSON.parse(stored) : [];
}
