import User from "../Model/userData.js";

export const getUser = async(req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const postUser = async(req, res)=>{
    try {
        const { Name, Email, Password } = req.body;
        const createdUser = new User({
            Name: Name,
            Email: Email,
            Password: Password
        });
        await createdUser.save();
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: createdUser._id,
                Name: createdUser.Name,
                Email: createdUser.Email,
            },
        });

    } catch(error){
        console.log("Error: In POST DATA", error);
        res.status(500).json(error);
    }
};