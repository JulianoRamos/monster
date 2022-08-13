import { v4 as uuidV4 } from 'uuid';

class User {
  id: string;

  name: string;

  email: string;

  password: string;

  admin: string;

  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
