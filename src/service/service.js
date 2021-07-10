export function handleErrors(response) {
  if (response && response.status === 401) {
    return { unauthorized: true };
  }
  if (!response.ok) {
    return { error: response.status, isError: true };
  }
  return response.json();
}