import { Posts } from 'db/models';

export default (req, res) => {
  switch (req.method.toLowerCase()) {
    case 'post': {
      return Posts.create(req, res);
    }
    case 'get': {
      return Posts.find(req, res);
    }
    default: {
      res.statusCode = 404;
      res.json({ error: 'Not Found' });
    }
  }
};
