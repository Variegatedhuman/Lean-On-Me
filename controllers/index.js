const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const searchRoutes = require('./api/search-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/api', searchRoutes);

router.use((req,res) => {
    res.status(404).end();
});

module.exports = router;
