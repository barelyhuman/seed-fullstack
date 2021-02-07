import { Posts } from 'db/models';

export default (req, res) => {
  switch (req.method.toLowerCase()) {
    case 'get': {
      return Posts.findById(req, res);
    }
    default: {
      res.statusCode = 404;
      res.json({ error: 'Not Found' });
    }
  }
};
