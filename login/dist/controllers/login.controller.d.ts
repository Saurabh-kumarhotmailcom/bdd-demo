/// <reference types="express" />
import { Request, Response } from '@loopback/rest';
import { User } from '../models/user.model';
export declare class LoginController {
    private req;
    private res;
    constructor(req: Request, res: Response);
    login(user: User): object;
}
