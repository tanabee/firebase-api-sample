const users = [
  { id: '1', name: 'Paul' },
  { id: '2', name: 'Smith' },
]

module.exports.list = function list(req, res) {
  console.log('hello')
  res.json({ users })
}

module.exports.get = function get(req, res) {
  const user = users.find(x => x.id === req.params.id)

  if (!user) {
    return res.status(404).json({ message: 'Not Found' })
  }

  res.json(user)
}
