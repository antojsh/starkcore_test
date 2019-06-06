import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable()
export class TravelsService {
  db
  constructor() {
    this.db = new TravelDatabase();
  }

  async init() {
    const countTravels = await this.count()
    if (!countTravels) {
      FAKE_DATA.forEach(item => {
        this.db.travels.add({ ...item, date: new Date() })
      })
    }
  }

  async add(travel: Itravel): Promise<any> {
    return this.db.travels.add(travel)
  }

  async all(): Promise<Itravel> {
    return this.db.travels.toArray()
  }

  async count() {
    return this.db.travels.count()
  }

}

class TravelDatabase extends Dexie {

  friends: Dexie.Table<Itravel, number>;

  constructor() {
    super("TravelDatabase");
    this.version(1).stores({
      travels: "++id,date,origin, destination, price"
    });
  }
}



export interface Itravel {
  date: Date;
  origin: string;
  destination: string;
  price: number;
}


const FAKE_DATA = [{
  "origin": "Barranquilla",
  "destination": "Bogota",
  "price": "154689"
},
{
  "origin": "Medellin",
  "destination": "Cucuta",
  "price": "45000"
},
{
  "origin": "Barranquilla",
  "destination": "Medellin",
  "price": "180000"
},
{
  "origin": "Cartagena",
  "destination": "Santa Marta",
  "price": "30000"
},
{
  "origin": "Sincelejo",
  "destination": "Monteria",
  "price": "20000"
}
]


