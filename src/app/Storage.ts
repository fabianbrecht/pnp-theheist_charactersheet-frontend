export class Storage {
  static setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem<T>(key: string): T | undefined {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : undefined;
  }

  static hasEntry(key: string): boolean {
    const item = localStorage.getItem(key);
    return item !== undefined;
  }
}
