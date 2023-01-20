import express, {Request, Response} from "express";


const app = express();
app
  .use(express.json())
  .use("/health", (req: Request, res:Response ) => {
    res.send("ok")
  })


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running in port ${port}`));
export default app;