import { Request, Response, response } from 'express';
import { getRepository } from 'typeorm';
import Orphanages from '../models/Orphanages';

export default {
    async index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanages);

        const orphanages = await orphanagesRepository.find();

        return response.json(orphanages);
    },

    async show(request: Request, response: Response) {
        const { id } = request.params; 

        const orphanagesRepository = getRepository(Orphanages);

        const orphanages = await orphanagesRepository.findOneOrFail(id);

        return response.json(orphanages);
    },

    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body;
    
        const orphanagesRepository = getRepository(Orphanages);
    
        const orphanages = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        });
    
        await orphanagesRepository.save(orphanages);
    
        return response.status(201).json(orphanages);
    }
}