import { dbContext } from "../db/DbContext";

class HousesService {
  async getAll() {
    return await dbContext.Houses.find();
  }

  async getById(id) {
    return await dbContext.Houses.findById(id);
  }

  async create(body) {
    return await dbContext.Houses.create(body);
  }

  async edit(id, body) {
    const found = await dbContext.Houses.findById(id);
    if (!found) return `no house by id ${id}`;
    return await dbContext.Houses.findByIdAndUpdate(id, body, { new: true });
  }

  async delete(id) {
    const found = await dbContext.Houses.findById(id);
    if (!found) return `no house by id ${id}`;
    return await dbContext.Houses.findByIdAndDelete(id);
  }
}

export const housesService = new HousesService();
