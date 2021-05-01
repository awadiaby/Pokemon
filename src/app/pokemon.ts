export class Pokemon {
  id: number;
  name: string;
  url: string;
  base_experience: number = 0;
  height: number = 0;
  location_area_encounters: string = '';
  order: number = 0;
  weight: number = 0;
  stats: Stat[] = [];

  constructor(id: number = 0, name: string = "", url: string = "") {
    this.id = id;
    this.name = name;
    this.url = url;
  }
}

interface Stat {
  base_stat: number;
}
