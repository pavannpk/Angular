import {IUser} from './IUser';

export interface UserResult {
  result: string;
  event?: string;
  user?: IUser;
}
