import { HtmlError } from './htmlError';

export interface ApiResponse<T> {
  data: T | undefined;
  error: HtmlError | undefined;
  hasError: boolean;
}
