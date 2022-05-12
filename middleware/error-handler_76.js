const errorHandlerMiddleware_76 = (err, req, res, next) => {
    console.log("error", err);
    res.status(500).json({ msg: "There wss an error" });
};

export default errorHandlerMiddleware_76;
