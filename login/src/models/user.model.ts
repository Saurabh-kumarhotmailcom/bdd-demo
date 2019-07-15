import { model, property } from "@loopback/repository";

@model()
export class User {

  @property({
    required: true,
    description: 'username of user',
    name: 'username',
    type: 'string'
  })
  username: string;
  @property({
    required: true,
    description: 'password of user',
    name: 'password',
    type: 'string'
  })
  password: string;

}
