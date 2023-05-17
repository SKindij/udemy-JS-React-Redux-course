import { useState, useCallback } from "react";

// можемо одразу експортувати нашу хук-функцію
export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback( async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
    // одразу вмикаємо покажчик завантаження
    setLoading(true);

    try {
      const response = await fetch( url, {method, body, headers} );

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();
      // завантаження завершилось
      setLoading(false);
        return data;
    } catch(e) {
        setLoading(false);
        setError(e.message);
        throw e;
    }
  }, [] );
  // очищуємо паамять про помилку, щоб можна було працювати длі
  const clearError = useCallback( () => setError(null), [] );

  return { loading, request, error, clearError }
}
