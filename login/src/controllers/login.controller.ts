// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

import { Request, Response, RestBindings, get, post, ResponseObject, requestBody } from '@loopback/rest';
import { inject } from '@loopback/context';
import { User } from '../models/user.model';

const LOGIN_RESPONSE: ResponseObject = {
  description: 'login succeess Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string' }
        },
      },
    },
  },
};
export class LoginController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request, @inject(RestBindings.Http.RESPONSE) private res: Response) { }

  @post('/login', {
    responses: {
      '200': LOGIN_RESPONSE,
    },
  })
  login(@requestBody({ description: 'username and password' }) user: User): object {

    if (user.username === 'xyz' && user.password === 'xyz') {
      return {
        message: 'login sucessfull'
      };
    } else {
      this.res.sendStatus(401);
      return { message: 'login failed' }
    }
  }
}
