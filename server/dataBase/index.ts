import mongoose from 'mongoose';

const URL: any = process.env.DATABASE;

export default mongoose
  .connect(URL)
  .then((): void => {
    console.log('DataBase Connected');
  
  })
  .catch((e) => {
    // console.log(e);
  });
