import { ApiResponse } from './apiResponse';

export class API {
  /* The base url to the backend server */
  public static readonly BASE_URL = 'http://localhost:3000';

  /**
   * A generic get method that tries to make a fetch get call to a specified backend endpoint.
   * In case of an error the error is shown as a toast and returned as part of the api response.
   * The keycloak bearer token is automatically appended by this method.
   * @param url The complete url. Please use API.BASE_URL to comnstruct the url and hardcode as little as possible.
   * @returns An ApiResponse object of the type T
   */
  public static async get<T>(url: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(url, {});

      if (!response.ok) {
        this.throwError('Error ' + response.status, response.statusText);
        return {
          data: undefined,
          error: {
            status: response.status + '',
            statusText: response.statusText,
            errorText: '',
          },
          hasError: true,
        };
      }

      const data = await response.json();
      return { data: data, error: undefined, hasError: false };
    } catch (e: any) {
      this.throwError('Error', e.message);
      return {
        data: undefined,
        error: {
          status: '000',
          statusText: 'An unknown error occured',
          errorText: e.message,
        },
        hasError: true,
      };
    }
  }

  /**
   * A generic post method that tries to make a fetch post call to a specified backend endpoint.
   * In case of an error the error is shown as a toast and returned as part of the api response.
   * The keycloak bearer token is automatically appended by this method.
   * @param url The complete url. Please use API.BASE_URL to construct the url and hardcode as little as possible.
   * @returns An ApiResponse object of the type T
   */
  public static async post<T>(url: string, body = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        this.throwError('Error ' + response.status, response.statusText);
        return {
          data: undefined,
          error: {
            status: response.status + '',
            statusText: response.statusText,
            errorText: '',
          },
          hasError: true,
        };
      }

      const data = await response.json();
      return { data: data, error: undefined, hasError: false };
    } catch (e: any) {
      this.throwError('Error', e.message);
      return {
        data: undefined,
        error: {
          status: '000',
          statusText: 'An unknown error occured',
          errorText: e.message,
        },
        hasError: true,
      };
    }
  }

  /**
   * A generic put method that tries to make a fetch post call to a specified backend endpoint.
   * In case of an error the error is shown as a toast and returned as part of the api response.
   * The keycloak bearer token is automatically appended by this method.
   * @param url The complete url. Please use API.BASE_URL to construct the url and hardcode as little as possible.
   * @returns An ApiResponse object of the type T
   */
  public static async put<T>(url: string, body = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        this.throwError('Error ' + response.status, response.statusText);
        return {
          data: undefined,
          error: {
            status: response.status + '',
            statusText: response.statusText,
            errorText: '',
          },
          hasError: true,
        };
      }

      const data = await response.json();
      return { data: data, error: undefined, hasError: false };
    } catch (e: any) {
      this.throwError('Error', e.message);
      return {
        data: undefined,
        error: {
          status: '000',
          statusText: 'An unknown error occured',
          errorText: e.message,
        },
        hasError: true,
      };
    }
  }

  /**
   * Writes an error message inside the console log and displays it to the user in a toast
   * @param title The Toast Title
   * @param text The Toast Text
   */
  private static throwError(title: string, text: string) {
    console.error(text);
  }
}
