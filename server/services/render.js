const axios = require('axios');
const userController = require('../controller/controller');
exports.homeRoutes = (req, res) => {
  console.log('Home Routes=>', req.session);
  // Make a get request to /api/users
  axios
    .get('http://localhost:3000/api/users')
    .then(function (response) {
      // console.log('session time=>', request.session.cookie.maxAge);
      console.log('user api=>', response.data);
      res.render('index', { users: response.data });
    })
    .catch(err => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render('add_user');
};

exports.update_user = (req, res) => {
  axios
    .get('http://localhost:3000/api/users', { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render('update_user', { user: userdata.data });
    })
    .catch(err => {
      res.send(err);
    });
};

// render for task
exports.taskRoutes = (req, res) => {
  // Make a get request to /api/tasks
  axios
    .get('http://localhost:3000/api/tasks')
    .then(function (response) {
      // console.log('session time=>', request.session.cookie.maxAge);
      res.render('tasks', { tasks: response.data });
    })
    .catch(err => {
      res.send(err);
    });
};

exports.add_task = (req, res) => {
  axios
    .get('http://localhost:3000/api/users')
    .then(function (response) {
      console.log(response.data);
      console.log('req.query.playerid=>', req.query.playerid);
      res.render('add_task', {
        users: response.data,
        params: { playerid: req.query.playerid },
      });
    })
    .catch(err => {
      res.send(err);
    });
  //    res.render('add_task');
};

exports.update_task = (req, res) => {
  axios
    .get('http://localhost:3000/api/tasks', { params: { id: req.query.id } })
    .then(function (taskdata) {
      res.render('update_task', { task: taskdata.data });
    })
    .catch(err => {
      res.send(err);
    });
};
