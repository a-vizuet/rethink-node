const rethink = require('rethinkdb');

async function getTest(req, res) {
  const idTest = req.params.testId;

  try {
    const savedTest = await rethink.db('test').table('test').get(idTest).run(require('../../index')());
    res.status(200).send({savedTest});
  } catch (error) {
    res.status(500).send({error});
  }
}

async function getTests(req, res) {
  try {
    const tests = await rethink.db('test').table('test').run(require('../../index')());    
    const savedTests = await tests.toArray();

    res.status(200).send({ savedTests })
  } catch (error) {
    res.status(500).send({error});
  }
}

async function addTest(req, res) {
  const testBody = {
    test: req.body.test
  };

  try {
    const createdTest = await rethink.db('test').table('test').insert(testBody).run(require('../../index')());
    res.status(201).send({createdTest});
  } catch (error) {
    res.status(500).send({error});
  }

}

async function updateTest(req, res) {
  const testId = req.params.testId;
  const testBody = {
    test: req.body.test
  };

  try {
    const updatedTest = await rethink.db('test').table('test').get(testId).update(testBody).run(require('../../index')());
    res.status(200).send({ updatedTest });
  } catch (error) {
    res.status(500).send({error});
  }
}

async function removeTest(req, res) {
  const testId = req.params.testId;

  try {
    const removedTest = await rethink.db('test').table('test').get(testId).delete().run(require('../../index')());
    res.status(200).send({removedTest});
  } catch (error) {
    res.status(500).send({error});
  }
}

module.exports = {
  getTest,
  getTests,
  addTest,
  updateTest,
  removeTest
}