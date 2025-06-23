import { Injectable } from '@angular/core';
import { ApiResponse } from '../connections/apiResponse';
import { IGun } from '../interfaces/IGun';
import { API } from '../connections/api';
import { IWeapon } from '../interfaces/IWeapon';

@Injectable({
  providedIn: 'root',
})
export class GunService {
  constructor() {}

  public async getAll(): Promise<ApiResponse<IGun[]>> {
    const url = `${API.BASE_URL}/guns`;

    const response = await API.get<IGun | IGun[]>(url);

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

  public async save(weapon: IGun): Promise<ApiResponse<IGun>> {
    const url = `${API.BASE_URL}/guns/`;
    return await API.post<IGun>(url, weapon);
  }
}
