import { dbContext } from "../db/DbContext";

class JobsService {
  async getAll() {
    return await dbContext.Jobs.find();
  }

  async getById(id) {
    return await dbContext.Jobs.findById(id);
  }

  async create(body) {
    return await dbContext.Jobs.create(body);
  }

  async edit(id, body) {
    const found = await dbContext.Jobs.findById(id);
    if (!found) return `no job by id ${id}`;
    return await dbContext.Jobs.findByIdAndUpdate(id, body, { new: true });
  }

  async delete(id) {
    const found = await dbContext.Jobs.findById(id);
    if (!found) return `no job by id ${id}`;
    return await dbContext.Jobs.findByIdAndDelete(id);
  }
}

export const jobsService = new JobsService();
