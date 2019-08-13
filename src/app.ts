import express, {Application, Request, Response, NextFunction} from 'express';

const app: Application = express();

app.get('/hello',(req: Request, res: Response, next: NextFunction) => {
    res.send("Hello")
});

app.listen(3000, ()=>{console.log('Server running')});