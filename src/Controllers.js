const models = require("./Models");

// set up multer
// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads/')
//     },
//     filename: function (req, file, cb) {
//         const name = Date.now().toString() + '-' + file.originalname
//         cb(null, name)
//     }
// })

// exports.uploadPhotoProfile = multer({ storage: storage }).single('photoProfile')

// exports.buatPhotoProfile = (req, res) => {
//     // update user photo profile
//     console.log(req.file.path);
//     res.send(req.file.path).status(200)
// }

// create user
exports.buatUser = async (req, res) => {
  const user = new models.user({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    bio: req.body.bio,
    photoProfile: "-",
  });

  try {
    const saveUser = await user.save();
    res.send(saveUser);
  } catch {
    res.status(400).send(err);
  }
};

// login user
exports.loginUser = async (req, res) => {
  // cek apakah akun ada berdasar email dan password benar
  const akunAda = await models.user.findOne({ username: req.query.username });
  if (akunAda) {
    const passwordBenar = req.query.password === akunAda.password;
    if (passwordBenar) {
      res.send(akunAda);
    } else {
      res.status(400).send({ msg: "username or password wrong" });
    }
  } else {
    res.status(400).send({ msg: "username or password wrong" });
  }
};

// get user
exports.getUser = async (req, res) => {
  const user = await models.user.findOne({ _id: req.query._id });
  res.status(400).send(user.username);
};

// create room
exports.createRoom = async (req, res) => {
  const time = new Date().toString();
  const room = new models.room({
    name: req.body.name,
    topic: req.body.topic,
    description: req.body.description,
    date: time.substring(4, 24),
    users: [req.body.user],
  });

  const topic = await models.topic.findOne({ name: req.body.topic });
  if (topic) {
    await models.topic.findOneAndUpdate(
      { name: req.body.topic },
      { count: topic.count + 1 },
      { new: true }
    );
  } else {
    const topic = new models.topic({
      name: req.body.topic,
      count: 1,
    });
    await topic.save();
  }

  try {
    const saveRoom = await room.save();
    res.status(200).send(saveRoom);
  } catch {
    res.status(400).send(err);
  }
};

// update room
exports.updateRoom = async (req, res) => {
  const room = await models.room.findOneAndUpdate(
    { _id: req.body._id },
    { users: req.body.users },
    { new: true }
  );
  res.status(200).send(room);
};

// get room
exports.getRoom = async (req, res) => {
  const room = await models.room.find();
  res.status(200).send(room);
};

// get room name
exports.getRoomName = async (req, res) => {
  const room = await models.room.findOne({ _id: req.query._id });
  res.status(200).send(room.name);
};

// get topics
exports.getTopics = async (req, res) => {
  const topics = await models.topic.find();
  res.status(200).send(topics);
};

// create pesan
exports.createPesan = async (req, res) => {
  const time = new Date().toString();
  const pesan = new models.pesan({
    pesan: req.body.pesan,
    date: time.substring(4, 24),
    sender: req.body.sender,
    roomId: req.body.roomId,
  });

  try {
    const savePesan = await pesan.save();
    res.status(200).send(savePesan);
  } catch {
    res.status(400).send(err);
  }
};

// get pesan
exports.getPesan = async (req, res) => {
  const pesan = await models.pesan.find({ roomId: req.query.room });
  res.status(200).send(pesan);
};

// get last pesan
exports.getLastPesan = async (req, res) => {
  const pesan = await models.pesan.find();
  res.send(pesan.slice(-3));
};
