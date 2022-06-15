import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Nathan',
      email: 'admin@example.com',
      password: bcrypt.hashSync('12345', 8),
      isAdmin: true,
    
    },
    {
      name: 'Core',
      email: 'core@gmail.com',
      password: bcrypt.hashSync('12345', 8),
      isAdmin: false,
 
    }    
  ],
  
};
export default data;
