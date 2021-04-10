/* ACTION TYPES */
export const TOKEN = 'TOKEN';

/* ACTION CREATORS */
export function tokenLogin(value) {
  return { type: TOKEN, token: value }
}
