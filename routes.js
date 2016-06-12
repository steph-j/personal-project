
module.exports =  {
  index: index,
  destination: destination,
  info: info,
  expenses: expenses
  };

function index (req, res) {
  res.render('home')
}

function destination (req, res) {
  res.render('dest')
}

function info (req, res) {
  res.render('info')
}

function expenses(req, res) {
  res.render('expenses')
}
