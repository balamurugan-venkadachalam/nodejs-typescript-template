import express, {Application, Request, Response, NextFunction} from 'express';
import * as bookController from './controllers/bookController';
import * as bodyParser from 'body-parser';

const app: Application = express();
app.set("port",8000);
app.use(express.json());
//app.use(bodyParser.json);

app.get('/hello',(req: Request, res: Response, next: NextFunction) => {
    res.send("Hello")
});

// API Endpoints
app.get("/books", bookController.allBooks);
app.get("/book/:id", bookController.getBook);
app.post("/book", bookController.addBook);
app.put("/book/:id", bookController.updateBook);
app.delete("/book/:id", bookController.deleteBook);



const server = app.listen(app.get("port"), () => {
    console.log("App is running on http://localhost:%d", app.get("port"));
  });

// export our app
export default app;