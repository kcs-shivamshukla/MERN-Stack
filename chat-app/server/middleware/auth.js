const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        if (typeof req.headers.authorization === 'string') {
            const token = req.headers.authorization.split(" ")[1];
            let decodedData;
            if (token) {
                decodedData = jwt.verify(token, process.env.SECRET)
                req.userId = decodedData?.id;
            }

            next();
        }

        else {
            res.status(401).json({ message: "Unauthorized Access." })
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Invalid Token' })
    }
}

module.exports = { auth };