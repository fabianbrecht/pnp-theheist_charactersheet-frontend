import { Injectable } from '@angular/core';
import { ApiResponse } from '../connections/apiResponse';
import { IChar } from '../interfaces/IChar';
import { API } from '../connections/api';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor() {}

  public async getAll(): Promise<ApiResponse<IChar[]>> {
    const url = `${API.BASE_URL}/characters`;

    const response = await API.get<IChar | IChar[]>(url);

    if (!response.hasError) {
      if (response.data === undefined) {
        return { ...response, data: [] };
      } else if (Array.isArray(response.data)) {
        return { ...response, data: response.data };
      } else {
        return { ...response, data: [response.data] };
      }
    } else {
      return { ...response, data: [] };
    }
  }

  public async get(id: string): Promise<ApiResponse<IChar>> {
    const url = `${API.BASE_URL}/characters/${id}`;

    return await API.get<IChar>(url);
  }

  public async save(char: IChar): Promise<ApiResponse<IChar>> {
    const url = `${API.BASE_URL}/characters/`;
    return await API.post<IChar>(url, char);
  }

  public async update(id: string, char: IChar): Promise<ApiResponse<IChar>> {
    const url = `${API.BASE_URL}/characters/${id}`;
    return await API.put<IChar>(url, char);
  }
}
