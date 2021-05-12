import { dbContext } from "../db/DbContext";

class CarsService {
  async getAll() {
    return await dbContext.Cars.find();
  }

  async getById(id) {
    return await dbContext.Cars.findById(id);
  }

  async create(body) {
    return await dbContext.Cars.create(body);
  }

  async edit(id, body) {
    const found = await dbContext.Cars.findById(id);
    if (!found) return `no car by id ${id}`;
    return await dbContext.Cars.findByIdAndUpdate(id, body, { new: true });
  }

  async delete(id) {
    const found = await dbContext.Cars.findById(id);
    if (!found) return `no car by id ${id}`;
    return await dbContext.Cars.findByIdAndDelete(id);
  }
}

export const carsService = new CarsService();
