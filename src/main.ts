import app from "app";
import mongoose from "mongoose"

const port = 4040;
const dbUrl = "mongodb://localhost:27017/dev_blog"

mongoose.connect(dbUrl, { useNewUrlParser: true })
app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});