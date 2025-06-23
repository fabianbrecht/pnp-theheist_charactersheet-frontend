import { Injectable } from '@angular/core';
import { ApiResponse } from '../connections/apiResponse';
import { API } from '../connections/api';
import { IMelee } from '../interfaces/IMelee';

@Injectable({
  providedIn: 'root',
})
export class MeleeService {
  constructor() {}

  public async getAll(): Promise<ApiResponse<IMelee[]>> {
    const url = `${API.BASE_URL}/melees`;

    const response = await API.get<IMelee | IMelee[]>(url);

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

  public async save(weapon: IMelee): Promise<ApiResponse<IMelee>> {
    const url = `${API.BASE_URL}/melee/`;
    return await API.post<IMelee>(url, weapon);
  }
}
