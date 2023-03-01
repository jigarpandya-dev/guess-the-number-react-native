const API_KEY = 'AIzaSyCA57f3ALAYxk5pmjgBgOtWkBbU454p-CU';

export async function signinUser(email, password) {
  try {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
        API_KEY,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      },
    );
    const json = response.json();
    return json;
  } catch (error) {
    console.error('error ' + error);
  }
}

export async function createUser(email, password) {
  const response = await fetch(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    },
  );

  const json = await response.json();

  return json;
}
