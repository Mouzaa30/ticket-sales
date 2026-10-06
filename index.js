const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRoute = require("./routes/user.route");
const diskonRoute = require("./routes/diskon.route");
const eventRoute = require(`./routes/event.route`)
const seatRoute = require("./routes/seat.route");
const ticketRoute = require("./routes/ticket.route");
const auth = require(`./routes/auth.route`);
const subdistrictRoute = require("./routes/subdistrict.route");


app.use("/user", userRoute);
app.use("/diskon", diskonRoute);
app.use(`/event`, eventRoute);  
app.use("/auth", auth);
app.use("/seat", seatRoute);
app.use("/ticket", ticketRoute);
app.use("/api/subdistricts", subdistrictRoute);
app.use("/subdistricts", subdistrictRoute);

/** route to access uploaded file */
app.use(express.static(__dirname))

// Error handling middleware (handle invalid JSON body)
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({
            success: false,
            message: "Format JSON pada Request Body tidak valid!"
        });
    }
    next();
});

// Run server
app.listen(PORT, () => {
    console.log(`Server of Ticket Sales runs on port ${PORT}`);
});