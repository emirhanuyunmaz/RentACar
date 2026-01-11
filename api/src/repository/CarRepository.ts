import { Car } from '../entities/Car';
import { CarImages } from '../entities/CarImages';
import { ICarRepository } from '../interfaces/ICarRepositoy';
import db from '../../dbConnection';
import { injectable } from 'inversify';
import { CarEquipment } from '../entities/CarEquipment';

@injectable()
export class CarRepository implements ICarRepository {
  async createCar(
    car: Car,
    images: CarImages[],
    car_equipment: String[]
  ): Promise<Boolean> {
    try {
      await db.transaction(async (trx) => {
        const carId = await trx('cars').insert({
          title: car.title,
          price: car.price,
          gearBox: car.gearBox,
          fuer: car.fuer,
          doors: car.doors,
          seats: car.seats,
          distance: car.distance,
        });
        
        const insertedCarId = carId[0];
        
        if (images && images.length > 0) {
          const imageData = images.map((img) => ({
            car_id: insertedCarId,
            link: img.link,
            name: img.name,
          }));
          await trx('car_images').insert(imageData);
        }
        if (car_equipment && car_equipment.length > 0) {
          const car_equipmentData = car_equipment.map((equipment) => {
            const data = JSON.parse(equipment as string);
            return {
              car_id: insertedCarId,
              equipment_id: data.id,
            };
          });
          await trx('car_equipment').insert(car_equipmentData);
        }
      });
      return true;
    } catch (err) {
      // return false
      throw new Error(('Car create error :' + err) as string);
    }
  }
  async getCar(id: string): Promise<Car | undefined> {
    // IMAGES alt sorgu
    const imgsAgg = db('car_images as ci')
    .select('ci.car_id')
    .select(
      db.raw(`
        JSON_ARRAYAGG(
          JSON_OBJECT('id', ci.id, 'name', ci.name, 'link', ci.link)
          ) AS images
          `)
      )
      .groupBy('ci.car_id')
      .as('imgs');
      
      // EQUIPMENT alt sorgu
      const eqsAgg = db('car_equipment as ce')
      .join('equipment as e', 'e.id', 'ce.equipment_id')
      .select('ce.car_id')
      .select(
        db.raw(`
          JSON_ARRAYAGG(
            JSON_OBJECT('id', e.id, 'value', e.value)
            ) AS equipment
            `)
          )
          .groupBy('ce.car_id')
          .as('eqs');
          
          // ANA SORGU
          const rows = await db('cars as c')
          .where('id', id)
          .leftJoin(imgsAgg, 'imgs.car_id', 'c.id')
          .leftJoin(eqsAgg, 'eqs.car_id', 'c.id')
          .select('c.*')
          .select(db.raw('COALESCE(imgs.images, JSON_ARRAY())   AS images'))
          .select(db.raw('COALESCE(eqs.equipment, JSON_ARRAY()) AS equipment'))
          .first();
          return rows;
        }
        deleteCar(id: string): Promise<Boolean> {
          throw new Error('Method not implemented.');
  }
  async updateCar(id: number, car: Car,carEquipment:CarEquipment[],images:CarImages[],): Promise<Car> {
    await db('cars').where({ id: id }).update({
      title: car.title,
      price: car.price,
      gearBox: car.gearBox,
      airConditioner: car.airConditioner,
      fuer: car.fuer,
      doors: car.doors,
      seats: car.seats,
      distance: car.distance,
      updated_at: db.fn.now(),
    });
    
    if(carEquipment.length > 0){
      await db('car_equipment').where({ car_id: id }).del();      
      const equipment_ToInsert = carEquipment.map((carEq: CarEquipment) => ({
        car_id: id,
        equipment_id: carEq.id,
      }));
      await db('car_equipment').insert(equipment_ToInsert);
    }
    
    if(images.length > 0){
      const imageData = images.map((img) => ({
        car_id: id,
        link: img.link,
        name: img.name,
      }));
      await db('car_images').insert(imageData);
    }
    
    return car;
  }
  async listCar(): Promise<Car[] | [] | any> {
    // IMAGES alt sorgu
    const imgsAgg = db('car_images as ci')
    .select('ci.car_id')
    .select(
        db.raw(`
          JSON_ARRAYAGG(
            JSON_OBJECT('id', ci.id, 'name', ci.name, 'link', ci.link)
            ) AS images
            `)
          )
          .groupBy('ci.car_id')
          .as('imgs');
          
          // EQUIPMENT alt sorgu
          const eqsAgg = db('car_equipment as ce')
          .join('equipment as e', 'e.id', 'ce.equipment_id')
          .select('ce.car_id')
          .select(
            db.raw(`
              JSON_ARRAYAGG(
                JSON_OBJECT('id', e.id, 'value', e.value)
                ) AS equipment
                `)
              )
              .groupBy('ce.car_id')
              .as('eqs');
              
              // ANA SORGU
              const rows = await db('cars as c')
              .leftJoin(imgsAgg, 'imgs.car_id', 'c.id')
              .leftJoin(eqsAgg, 'eqs.car_id', 'c.id')
              .select('c.*')
              .select(db.raw('COALESCE(imgs.images, JSON_ARRAY())   AS images'))
              .select(db.raw('COALESCE(eqs.equipment, JSON_ARRAY()) AS equipment'));
              return rows;
            }
            
            async getEquipmentList(): Promise<CarEquipment[]> {
              const data = await db('equipment').select('*');
              return data;
  }
  
  async getAllCars(page: number): Promise<Car[]> {
    const limit = 5;
    if (page) {
      const data = await db('cars')
      .orderBy('created_at')
      .offset((page - 1) * limit)
      .limit(limit);
      return data;
    } else {
      const data = await db('cars')
      .orderBy('created_at')
      .offset(0 * limit)
      .limit(limit);
      return data;
    }
  }
  
  async carCount(): Promise<Number> {
    const count =
    await db('cars').count<Record<string, { total: number }>>('id as total');
    return count[0].total;
  }

  async deleteCarImage(imageName: String): Promise<Boolean> {
    const image = await db("car_images").where("name",imageName)
    if(image){
      console.log("RESİM :",image);
      await db("car_images").where("name",imageName).del()
      return true
    }else{
      return false
    }
  }

}
