import { carsService } from "../services/CarsService";
import BaseController from "../utils/BaseController";

export class CarsController extends BaseController {
  constructor() {
    super("api/cars");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      const data = await carsService.getAll();
      res.send(data);
    } catch (e) {
      next(e);
    }
  }

  async getById(req, res, next) {
    try {
      const data = await carsService.getById(req.params.id);
      res.send(data);
    } catch (e) {
      next(e);
    }
  }

  async create(req, res, next) {
    try {
      const data = await carsService.create(req.body);
      res.send(data);
    } catch (e) {
      next(e);
    }
  }

  async edit(req, res, next) {
    try {
      const data = await carsService.edit(req.params.id, req.body);
      res.send(data);
    } catch (e) {
      next(e);
    }
  }

  async delete(req, res, next) {
    try {
      const data = await carsService.delete(req.params.id);
      res.send(data);
    } catch (e) {
      next(e);
    }
  }
}
