import express, { json } from 'express';
import { connect, Schema, model } from 'mongoose';
import { hash, compare } from 'bcrypt';
import { verify, sign } from 'jsonwebtoken';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Token is required');

  try {
    const decoded = verify(token, 'your_jwt_secret');
    req.user = decoded;
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }
  return next();
};

app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

const User = model('User', UserSchema);

app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
  res.json({ message: 'User registered successfully' });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && compare(password, user.password)) {
    const token = sign({ userId: user._id }, 'your_jwt_secret');
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});