const cors =require("cors");
const express=require("express");
const bodyParser=require("body-parser");
const jwt=require("jsonwebtoken");
const mongoose=require("mongoose");
const app=express();
const port=4040;
app.use (bodyParser.json());
const secret="laksh1234";
app.use (cors());
mongoose.connect("mongodb+srv://lakshitasikarwardev:lakshita1234@cluster0.ati4k3n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

let verify = (req,res,next)=>
{
    try
    {
    const auth = req.headers.authorization;
    if(!auth)
    {
        return res.json({message: 'Unauthorizaed operation not allowed'})
    }
    const token = auth.replace('Bearer ','');
    const json = jwt.verify(token,secret);
    req.user = json;
    next();
    }catch(error)
    {
        return res.json({message: 'Authorization Failed',error: error.message});
    }
}


const userSchema = new mongoose.Schema({
    userID: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    groupID: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' }
  });
  
  const productSchema = new mongoose.Schema({
    productID: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true }
  });
  
  const groupSchema = new mongoose.Schema({
    groupID: { type: String, unique: true, required: true },
    productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    discountedPrice: { type: Number, required: true },
    maxMembers: { type: Number, default: 5 }
  });
  
  const User = mongoose.model('User', userSchema);
  const Product = mongoose.model('Product', productSchema);
  const Group = mongoose.model('Group', groupSchema);
  
  // Routes
  
  // Create User
  app.post('/api/users', async (req, res) => {
    const { name, email } = req.body;
    const user = new User({ userID: mongoose.Types.ObjectId().toString(), name, email });
    try {
      await user.save();
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Add to Cart
  app.post('/api/users/:userID/cart', async (req, res) => {
    const { productID } = req.body;
    try {
      const user = await User.findById(req.params.userID);
      user.cart.push(productID);
      await user.save();
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Create Product
  app.post('/api/products', async (req, res) => {
    const { productID, name, price } = req.body;
    const product = new Product({ productID, name, price });
    try {
      await product.save();
      res.status(201).send(product);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Create Group
  app.post('/api/groups', async (req, res) => {
    const { userID, productID } = req.body;
    try {
      const product = await Product.findById(productID);
      if (!product) return res.status(404).send('Product not found');
  
      const group = new Group({
        groupID: mongoose.Types.ObjectId().toString(),
        productID,
        members: [userID],
        discountedPrice: product.price - 100 // Initial discount for the first user
      });
  
      await group.save();
      await User.findByIdAndUpdate(userID, { groupID: group.groupID });
  
      res.status(201).send(group);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Join Group
  app.post('/api/groups/:groupID/join', async (req, res) => {
    const { userID } = req.body;
    try {
      const group = await Group.findById(req.params.groupID);
      if (!group) return res.status(404).send('Group not found');
      if (group.members.length >= group.maxMembers) return res.status(400).send('Group is full');
  
      group.members.push(userID);
      group.discountedPrice -= 100; // Apply further discount
  
      await group.save();
      await User.findByIdAndUpdate(userID, { groupID: group.groupID });
  
      res.status(200).send(group);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Get Group Details
  app.get('/api/groups/:groupID', async (req, res) => {
    try {
      const group = await Group.findById(req.params.groupID).populate('members');
      if (!group) return res.status(404).send('Group not found');
      res.status(200).send(group);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Checkout
  app.post('/api/checkout', async (req, res) => {
    const { userID, groupID } = req.body;
    try {
      const user = await User.findById(userID);
      const group = await Group.findById(groupID).populate('productID');
      if (!user || !group) return res.status(404).send('User or Group not found');
  
      const finalPrice = group.discountedPrice;
      // Assuming further checkout logic goes here, like processing payment.
  
      res.status(200).send({ user, group, finalPrice });
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Start Server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });