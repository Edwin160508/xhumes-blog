const express = require('express');
const router = express.Router();

router.get('/comentarios/:postid', (req, res) => {
    res.json([{        
        conteudo: 'Era uma vez, um comentário ',
        autor: 'Edwin Lima' 
    },
    {        
        conteudo: 'Era uma vez, um comentário novamente',
        autor: 'Edwin Lima' 
    }]);
});

module.exports = router;